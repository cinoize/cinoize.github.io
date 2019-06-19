/* © 2016-2019 FlowCrypt Limited (human@flowcrypt.com). All rights reserved. */

'use strict';

catcher.try(function () {

  var url_params = tool.env.url_params(['alias', 'placement']);
  var alias = window.location.pathname.indexOf('/me/') === 0 ? window.location.pathname.replace('/me/', '') : url_params.alias;
  var original_button_text = 'Send Encrypted Message';

  if (url_params.placement === 'iframe') {
    $('.hide_if_inside_iframe').hide();
    $('body, .profile-container-gray').css('background-color', 'transparent');
    $('#recipient textarea').css('background', 'url("/assets/imgs/svgs/lock-pattern-2.svg"), #ffffff');
    $('#profile, .col-md-12, .profile-container-gray, .row').css({ 'padding-left': 0, 'padding-right': 0, 'margin-left': 'auto', 'margin-right': 'auto' });
  }

  if (typeof HTMLDialogElement !== 'function') { // dialog is not supported on Safari/Edge and the UX will show unwanted contents of dialogs (buttons etc)
    $('body').append('<style>dialog { display: none; }</style>');
  }

  $('body').addClass(tool.env.browser().name);

  var S = tool.ui.build_jquery_selectors({
    send_btn: '#btn_send',
    input_email: '.email-input',
    input_text: '#input_text',
  });


  if (!alias) {
    replace_content_with_notification('Public FlowCrypt Profile allows anyone to send you encrypted messages.<br/><br/>Let me know at human@flowcrypt.com if you want a profile page as well.');
  } else {
    $('.alias').text(alias);
    tool.api.cryptup.link_me(alias, function (success, result) {
      if (success && result.profile) {
        render_profile(result.profile);
      } else if (success && result.profile === null) {
        replace_content_with_notification('Profile not found. Want to have your profile here? Write me at human@flowcrypt.com');
      } else {
        replace_content_with_notification('Not able to load the profile, please refresh the page.');
      }
    });
  }

  function replace_content_with_notification(html) {
    $('#loading, .hide_until_loaded').css('display', 'none');
    $('#notify').html(html).css('display', 'block');
  }

  function render_profile(profile) {
    $('#public-key').attr('href', '/pub/' + alias);
    $('title').text(profile.name + ' | FlowCrypt');
    $('#profile-name, #recipient-name').text(profile.name || profile.email);
    $('#headline-copy').html(tool.str.html_escape(profile.intro || '').replace(/\n/g, '<br>'));
    if (profile.phone) {
      $('#phone-number').text(profile.phone).parent().css('visibility', 'visible');
    }
    if (profile.web) {
      $('#website-address').text(profile.web.replace(/(^https?:\/\/(www\.)?)|(\/$)/g, '')).attr('href', profile.web).parent().css('visibility', 'visible');
    }
    if (profile.company) {
      $('#company-name').text(profile.company).parent().css('visibility', 'visible');
    }
    if (profile.photo) {
      $('.profile-image').attr('src', profile.photo);
      if (profile.photo_circle === false) {
        $('.profile-image').css('border-radius', '0');
      }
    }

    $('#loading').css('display', 'none');
    $('#profile, #senders-content').css('display', 'block');

    init(profile.email, profile.name, profile.subscription_active, { account: profile.email, token: profile.token });

  }

  function init(profile_email, profile_name, recipient_has_subscription, message_token) {
    profile_name = profile_name || profile_email;

    var attach = init_shared_attach_js(get_max_attachment_size_and_oversize_notice);
    attach.initialize_attach_dialog('fineuploader', 'fineuploader_button');

    S.cached('send_btn').click(tool.ui.event.prevent(tool.ui.event.double(), function () {
      collect_and_check_input(function (sender, plaintext) {
        load_pubkeys(function (armored_pubkeys) {
          collect_encrypt_and_upload_attachments_and_add_links_to_message(armored_pubkeys, plaintext, function (updated_plaintext) {
            encrypt_message(armored_pubkeys, updated_plaintext, function (encrypted) {
              send_message(sender, encrypted, render_success);
            });
          });
        });
      });
    }));

    function render_success() {
      $('#senders-content').css('display', 'none');
      $('#recipient').html('Encrypted message sent.');
    }

    function send_message(from, encrypted, success_callback) {
      S.cached('send_btn').html(tool.ui.spinner('white') + 'Sending');
      tool.api.cryptup.message_contact(from, encrypted, function (success, result) {
        if (success && result && result.sent === true) {
          success_callback();
        } else if (success === tool.api.cryptup.auth_error) {
          alert('Not able to send this message - account tokens seem invalid. Please write ' + profile_name + ' to update their account.');
          reset_send_btn();
        } else {
          var e = (result || {}).error;
          e = typeof e === 'object' ? e.public_msg || e.public : e;
          alert('There was trouble sending the message: ' + String(e) + '\n\nPlease try again. If this persists, contact me at human@flowcrypt.com to fix this.');
          reset_send_btn();
        }
      }, message_token);
    }

    function collect_encrypt_and_upload_attachments_and_add_links_to_message(armored_pubkeys, plaintext, callback) {
      attach.collect_and_encrypt_attachments(armored_pubkeys, null, function (attachments) {
        if (attachments.length) {
          upload_attachments_to_cryptup(attachments, function (all_good, upload_results, upload_error_message) {
            if (all_good === true) {
              plaintext = add_uploaded_file_links_to_message_body(plaintext, upload_results);
              callback(plaintext);
            } else if (all_good === tool.api.cryptup.auth_error) {
              if (confirm('Your FlowCrypt account information is outdated, please review your account settings.')) {
                tool.browser.message.send(url_params.parent_tab_id, 'subscribe_dialog', { source: 'auth_error' });
              }
              reset_send_btn(100);
            } else {
              alert('There was an error uploading attachments. Please try it again. Write me at human@flowcrypt.com if it happens repeatedly.\n\n' + upload_error_message);
              reset_send_btn(100);
            }
          });
        } else {
          callback(plaintext);
        }
      });
    }

    function add_uploaded_file_links_to_message_body(plaintext, attachments) {
      plaintext += '\n\n';
      $.each(attachments, function (i, attachment) {
        var size_mb = attachment.size / (1024 * 1024);
        var size_text = size_mb < 0.1 ? '' : ' ' + (Math.round(size_mb * 10) / 10) + 'MB';
        var link_text = 'Attachment: ' + attachment.name + ' (' + attachment.type + ')' + size_text;
        var cryptup_data = tool.str.html_attribute_encode({ size: attachment.size, type: attachment.type, name: attachment.name });
        plaintext += '<a href="' + attachment.url + '" class="cryptup_file" cryptup-data="' + cryptup_data + '">' + link_text + '</a>\n';
      });
      return plaintext;
    }

    function upload_attachments_to_cryptup(attachments, callback) {
      tool.api.cryptup.message_presign_files(attachments, function (pf_success, pf_result) {
        if (pf_success === true && pf_result && pf_result.approvals && pf_result.approvals.length === attachments.length) {
          var items = [];
          $.each(pf_result.approvals, function (i, approval) {
            items.push({ base_url: approval.base_url, fields: approval.fields, attachment: attachments[i] });
          });
          tool.api.aws.s3_upload(items, function (all_uploaded, s3_results) {
            if (all_uploaded) {
              tool.api.cryptup.message_confirm_files(items.map(function (item) { return item.fields.key; }), function (cf_success, cf_result) {
                if (cf_success && cf_result && cf_result.confirmed && cf_result.confirmed.length === items.length) {
                  $.each(attachments, function (i) {
                    attachments[i].url = pf_result.approvals[i].base_url + pf_result.approvals[i].fields.key;
                  });
                  callback(true, attachments);
                } else if (cf_success && cf_result && cf_result.confirmed) { // todo - retry confirming one more time, it may have been a timeout
                  callback(false, null, 'Could not verify that all files were uploaded properly, please try again.');
                } else {
                  callback(false, null, tool.api.cryptup.error_text(cf_result));
                }
              });
            } else { // todo - retry just the failed problematic files
              callback(false, null, 'Some files failed to upload, please try again');
            }
          }, render_upload_progress);
        } else if (pf_success === tool.api.cryptup.auth_error) {
          callback(tool.api.cryptup.auth_error);
        } else {
          callback(false, null, tool.api.cryptup.error_text(pf_result));
        }
      }, message_token);
    }

    function get_max_attachment_size_and_oversize_notice() {
      if (!recipient_has_subscription) {
        return {
          size_mb: 5,
          size: 5 * 1024 * 1024,
          count: 10,
          oversize: function (combined_size) {
            alert('Combined attachment size is limited to 5 MB on ' + profile_name + '\'s account. Let them know if you need to send a larger attachment.');
          },
        };
      } else {
        return {
          size_mb: 25,
          size: 25 * 1024 * 1024,
          count: 10,
          oversize: function (combined_size) {
            alert('Combined attachment size is limited to 25 MB on ' + profile_name + '\'s account. Let them know if you need to send a larger attachment.');
          },
        };
      }
    }

    function encrypt_message(armored_pubkeys, plaintext, callback) {
      handle_send_btn_processing_error(function () {
        tool.crypto.message.encrypt(armored_pubkeys, null, null, plaintext, null, true, function (encrypted) {
          callback(encrypted.data);
        });
      });
    }

    function collect_and_check_input(success_callback) {
      if (S.cached('send_btn').text() === original_button_text) {
        if (tool.str.is_email_valid(S.cached('input_email').val())) {
          if (S.cached('input_text').val()) {
            success_callback(S.cached('input_email').val(), S.cached('input_text').val());
          } else {
            alert('Please add a message to send');
            S.cached('input_text').focus();
          }
        } else {
          alert('Please add a correct email so that ' + profile_name + ' can respond.');
          S.cached('input_email').focus();
        }
      } else {
        alert('Still working, please wait.');
      }
    }

    function render_upload_progress(progress) {
      if (attach.has_attachment()) {
        progress = Math.floor(progress);
        S.cached('send_btn').html(tool.ui.spinner('white') + (progress < 100 ? 'sending.. ' + progress + '%' : 'sending'));
      }
    }

    function load_pubkeys(success_callback) {
      S.cached('send_btn').html(tool.ui.spinner('white') + 'Encrypting');
      tool.api.attester.lookup_email(profile_email, function (success, result) {
        if (success && result && result.pubkey) {
          success_callback([result.pubkey]);
        } else {
          alert('Could not load information about recipient, please try again.');
          reset_send_btn();
        }
      });
    }

    function handle_send_btn_processing_error(callback) {
      try {
        callback();
      } catch (err) {
        catcher.handle_exception(err);
        reset_send_btn();
        alert(String(err));
      }
    }

    function reset_send_btn(delay) {
      S.cached('send_btn').text(original_button_text);
    }

  }

})();