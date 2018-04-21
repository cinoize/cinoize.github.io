/*jshint browser: true */
/*global jQuery */

/* Foundation classes and utility functions for social features in the CNN
 * family of sites.
 *
 * This is treated as "vendor" script to indicate that this script must be
 * included before msib-init.js or any msib-init widget plugins.
 *
 * This script does *not* depend on msib_sdk.js and thus may be loaded
 * before or after. */

(function ($) {
    'use strict';

    var livefyreConvPlugins = [];

    /**
     * Deduce the plugin instance for a widget.
     * @return {CNN.social.LivefyreConvPlugin|undefined} The plugin instance
     *          that created the widget, if available.
     */
    function findPlugin(widget) {
        var wopts = widget.getOpts();

        return wopts ? wopts.cnnConfigTarget : void(0);
    }

    /**
     * Retrieve the list of registered Livefyre LiveComments plugins.
     * @return {CNN.social.LivefyreConvPlugin[]} The array of of plugins.
     */
    function getLivefyreConvPlugins() {
        return livefyreConvPlugins;
    }

    /**
     * Register a Livefyre LiveComments plugin for initialization.
     *
     * This must be done before DOM-ready.
     *
     * @param {CNN.social.LivefyreConvPlugin} plugin - The plugin to add.
     */
    function registerLivefyreConvPlugin(plugin) {
        if (plugin) {
            livefyreConvPlugins.push(plugin);
        }
    }

    /**
     * Base class for widgets that implement a Livefyre LiveComments instance.
     *
     * Subclasses must override the
     * {@link CNN.social.LivefyreConvPlugin#configureElement} and
     * {@link CNN.social.LivefyreConvPlugin#fetchElements} methods at the
     * very least.  If there are any post-init tasks that need to be done
     * (such as hooking up event handlers), then override the
     * {@link CNN.social.LivefyreConvPlugin#onWidgetLoaded} method.
     *
     * @constructor
     * @public
     */
    function LivefyreConvPlugin() {
    }

    /**
     * Validate email id using regular expression.
     * @param {string} email - Email address to validate.
     * @return {boolean} true if email id is valid,
     *                   false otherwise.
     */
    function isValidEmail(email) {
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(email);
    }

    /**
     * Generate the stream config for an element.
     *
     * @param {Element} elem - The element that will contain the widget.
     * @return {object} The Livefyre stream config to initialize the element.
     */
    LivefyreConvPlugin.prototype.configureElement = function (/*elem*/) {
        /* This must be overridden by subclasses. */
        /* Return nothing by default. */
        return {};
    };

    /**
     * Fetch the array of elements that will be initialized by this plugin.
     * @return {Array|jQuery|object} The array or array-like object that
     *                               lists the elements (may be empty).
     */
    LivefyreConvPlugin.prototype.fetchElements = function () {
        /* This must be overridden by subclasses. */
        /* Return nothing by default. */
        return [];
    };

    /**
     * Generate the stream config objects for each of the widgets created
     * by this plugin.
     *
     * These are passed to {@link fyre.conv.load}.
     *
     * @return {Array} The array of config objects (may be empty).
     */
    LivefyreConvPlugin.prototype.generateStreamConfigs = function () {
        var self = this,
            elems = $.makeArray(this.fetchElements());

        return $.map(elems, function (elem) {
            var streamCfg = self.configureElement(elem);

            /* Mark the "owner" of the specific widget. */
            streamCfg.cnnConfigTarget = self;

            return streamCfg;
        });
    };

    /**
     * Handle when the widget has been loaded.
     * @param {object}
     */
    LivefyreConvPlugin.prototype.onWidgetLoaded = function (/*widget*/) {
        /* This may be overridden by subclasses. */
        /* Do nothing by default. */
    };

    window.CNN = window.CNN || {};
    window.CNN.social = window.CNN.social || {};

    window.CNN.social.findPlugin = findPlugin;
    window.CNN.social.getLivefyreConvPlugins = getLivefyreConvPlugins;
    window.CNN.social.registerLivefyreConvPlugin = registerLivefyreConvPlugin;

    window.CNN.social.LivefyreConvPlugin = LivefyreConvPlugin;
    window.CNN.social.isValidEmail = isValidEmail;

}(jQuery));
/*jshint browser: true */
/*global CNN, jQuery */

/* Page commenting component, powered by Livefyre's Comments app.
 *
 * This will replace any element with the "js-livefyre-comments" class with a
 * commenting module.  The page must have a canonical URL set; this will be
 * used by the commenting module as the discussion thread.
 *
 * Example:
 *   <head>
 *     <link rel="canonical" href="http://example.com/foo/bar/baz.html">
 *   </head>
 *   <body>
 *     <div class="js-livefyre-comments"
 *       data-article-id="article_000731D1-DD63-9B4B-78D7-5A3C1B439283"
 *       data-checksum="1dce01869b3cd3dcc379d68c2d22b7af"
 *       data-collection-meta="..."></div>
 *   </body>
 *
 * See the Livefyre documentation on how the checksum and collection metadata
 * are generated:
 *
 * https://github.com/Livefyre/livefyre-docs/wiki/StreamHub-Integration-Guide
 */

(function ($) {
    'use strict';

    var lastClickedShareElem,
        commentCounter = 0;

    /**
     * Assign a unique ID to an element, if it doesn't already have one.
     * @param {jQuery} elem - The target element.
     * @return {string} The ID of the element.
     */
    function guaranteeId(elem) {
        var id = elem.attr('id');

        /* If the element does not have an ID, assign one. */

        if (typeof id === 'undefined' || id === '') {
            do {
                id = 'cnnLivefyreComments_' + commentCounter;
                commentCounter += 1;
            } while (document.getElementById(id));
            elem.attr('id', id);
        }
        return id;
    }

    /**
     * Event handler for setting the last-clicked share element.
     * @param {jQuery.Event} evt - The jQuery event object.
     * @param {jQuery} evt.data - The clicked share element.
     *
     * This is not called for CNNMoney instance.
     */
    function setLastClickedElem(evt) {
        lastClickedShareElem = evt.data;
        return false;
    }

    /**
     * Attach click handlers to the share buttons so that we know which
     * element to attach the share popup to.
     *
     * This is a hack until the Gigya share popup can be centered in
     * the viewport.
     *
     * This is not called for CNNMoney instance.
     */
    function updateShareButtonHandlers() {
        /* We actually attach to the container because the button events
         * might be overridden by LiveComments itself. */
        $('.fyre-comment-footer').each(function () {
            var elem = $(this);

            if (!elem.data('cnn-click')) {
                elem.data('cnn-click', 1);
                elem.on('click', null, elem, setLastClickedElem);
            }
        });
    }

    /**
     * Handle when the share button is clicked on an item.
     *
     * https://github.com/Livefyre/livefyre-docs/wiki/JavaScript-API#wiki-share-delegate
     *
     * @param {object} data - The event payload.
     *
     * This is not called for CNNMoney instance.
     */
    function onShareItem(data) {
        CNN.share.popup({
            elem: lastClickedShareElem,
            /* Use the Livefyre-provided URL so the selected comment is
             * highlighted when clicked. */
            url: data.url
        });
    }

    /**
     * Show a custom "Show More Comments" button when needed
     * This is not called for CNNMoney instance.
     */
    function enableCustomShowMoreButton() {
        var tempCount = 0,
            oneCommentMet = 0,
            mobileLimit = 10,
            webLimit = 25;

        /* count number of top level visible comment blocks (plus their replies) and add mobile / web descriptor classes */
        $('.fyre .fyre-stream-content > .fyre-comment-article').each(function(index, value) {


            /* now add class to top level comment block if needed with minimum of one comment block showing no matter how many replies it has */
            if (oneCommentMet) {
                if (tempCount >= mobileLimit) {
                    $(value).addClass('non-mobile-comment');
                }
                if (tempCount >= webLimit) {
                    $(value).addClass('non-web-comment');
                }
            }
            else {

                /* wow we've reach the limit already and we're still in the 1st comment thread... can we pull off hiding some replies */
                if (tempCount >= mobileLimit) {
                    $(value).addClass('large-first-mobile-comment');
                }
                if (tempCount >= webLimit) {
                    $(value).addClass('large-first-web-comment');
                }

            }

            /* check to see if it's style is set to display none or not... if not then count it */
            if ($('> .fyre-comment-wrapper', $(value)).css('display') !== 'none') {
                tempCount = tempCount + 1;
            }

            /* loop through replies and add count to tempCount */
            $('.fyre-comment-article', $(value)).each(function(subindex, subvalue) {

                /* check to see if it's style is set to display none or not... if not then count it */
                if ($('> .fyre-comment-wrapper', $(subvalue)).css('display') !== 'none') {
                    tempCount = tempCount + 1;
                }

                if (tempCount > mobileLimit) {
                    $(subvalue).addClass('non-mobile-reply');
                }
                if (tempCount > webLimit) {
                    $(subvalue).addClass('non-web-reply');
                }

            });


            /* we've made sure at least one comment thread is visible before hiding */
            oneCommentMet = 1;

        });

        /* add appropriate class so that css knows when to show more comment button */
        if (tempCount >= mobileLimit) {
            $('.js-livefyre-comments').addClass('at-least-10-comments');
        }
        if (tempCount >= webLimit) {
            $('.js-livefyre-comments').addClass('at-least-25-comments');
        }

        /* add additional class to "in house" livefyre more button to hide it */
        $('.fyre .fyre-comment-stream > .fyre-stream-more').addClass('in-house-more-button');

        /* add custom more button */
        $('.js-livefyre-comments .fyre-comment-stream').append('<div class="cnn-custom-stream-more"><div class="fyre-stream-more"><div class="fyre-stream-more-container"><div class="fyre-text">Show More Comments</div></div></div></div>');


        /* when we click the custom more comments button, do work */
        $('.cnn-custom-stream-more .fyre-stream-more-container').click(function() {
            $('.js-livefyre-comments').addClass('show-all-initial-comments');
        });

    }


    /**
     * Make the comment edit box visible.
     *
     * We hide the comment box via CSS at start so that the users don't
     * try to enter a comment only to be kicked to the login page when
     * they try to submit.
     *
     * This function is triggered when the widget has been notified that
     * the user is logged-in.
     */
    function enableEditBox() {
        $('.js-livefyre-comments').addClass('js-livefyre-comments-logged-in');
    }

    /**
     * Constructor for this LivefyreConvPlugin subclass.
     *
     * This subclass implements creating standard LiveComments instances
     * in elements marked with the "js-livefyre-comments" CSS class.
     * The collection metadata must be provided in the data attributes.
     *
     * @constructor
     * @augments CNN.social.LivefyreConvPlugin
     */
    function Comments() {
        /* adding a couple subclass properties. */
        this.widget = null;
        this.targetId = null;
    }

    Comments.prototype = new CNN.social.LivefyreConvPlugin();

    Comments.prototype.configureElement = function (htmlElem) {
        var elem = $(htmlElem),
            targetId = guaranteeId(elem),
            articleId = elem.data('article-id'),
            checksum = elem.data('checksum'),
            collectionMeta = elem.data('collectionMeta'),
            cfg;

        this.targetId = targetId;

        cfg = {
            app: 'main',
            siteId: CNN.msib.localCfg.livefyre.siteId,
            el: targetId,
            articleId: articleId,
            collectionMeta: collectionMeta,

            /* Don't use the built-in share options; use our own sharing. */
            /* this is CNN - CNNMoney will use built-ins unless otherwise specified */
            /* postToButtons: [],
               shareDelegate: onShareItem
            */
        };

        /* Checksum is optional. */
        if (checksum) {
            cfg.checksum = checksum;
        }

        return cfg;
    };

    Comments.prototype.fetchElements = function () {
        return $('.js-livefyre-comments');
    };

    Comments.prototype.changeConv = function (cfg) {

        /*
          the cfg object should look like so :
          {
            "collectionMeta": "...",
            "checksum": "...",
            "articleId":"..."
          }
          This function will not work if any of these keys are missing from the object.
        */

        cfg = cfg || {};

        /* extend cfg with a couple items */
        cfg.siteId = CNN.msib.localCfg.livefyre.siteId;
        cfg.el = this.targetId;

        if (!("collectionMeta" in cfg) || !("checksum" in cfg) || !("articleId" in cfg)) {
          console.log("collectionMeta, checksum, and articleId are all required keys to refresh the comments, make sure these are being passed in the cfg object");
        } else {
          this.widget.changeCollection(cfg);
        }

    };

    Comments.prototype.onWidgetLoaded = function (widget) {
       /* disable CNN's share and show more button
        widget.on('commentCountUpdated', updateShareButtonHandlers);
        widget.on('initialRenderComplete', updateShareButtonHandlers);
        widget.on('initialRenderComplete', enableCustomShowMoreButton);
        */

        /* expose the widget element so we may update the conversation */
        this.widget = widget;

        widget.on('userLoggedIn', enableEditBox);

    };

    /* Register this plugin. */
    CNN.social.registerLivefyreConvPlugin(new Comments());

}(jQuery));
/*jshint browser: true */
/*global CNN */

/* msib-init configuration for prod and dev for CNN Money for site, not dev environment.
 * 
 */

(function () {
    'use strict';

    var host = window.location.hostname;

    window.CNN = window.CNN || {};

    CNN.msib = CNN.msib || {};
    CNN.msib.localCfg = CNN.msib.localCfg || {};

    CNN.msib.localCfg.instance = 'money';

    CNN.msib.localCfg.livefyre = CNN.msib.localCfg.livefyre || {};
    /* siteId defined by cnn-login-app */
    CNN.msib.localCfg.livefyre.cookieName = 'cnnLFCookie';
    CNN.msib.localCfg.livefyre.network = 'cnn.fyre.co';
    CNN.msib.localCfg.livefyre.cookieTtl =  2 * 7 * 24 * 60 * 60 * 1000;
    CNN.msib.localCfg.livefyre.tokenEndPoint = '//cnn-login-app.prod.services.ec2.dmtio.net/services/livefyre/authtoken';

    CNN.msib.localCfg.gigya = CNN.msib.localCfg.gigya || {};

    CNN.msib.localCfg.msib = CNN.msib.localCfg.msib || {};

    CNN.msib.localCfg.mod = CNN.msib.localCfg.mod || {};
    CNN.msib.localCfg.mod.saml_logout = 'http://markets.money.qai.cnn.com/marketsdata/site/logoutsecureservices';
  
    if (host.match(/^money\.cnn\.com$/i) || host.match(/^stage\.money\.cnn\.com$/i) ) {
        CNN.msib.localCfg.gigya.appId = '3_gtUbleJNtrRITgx-1mM_ci7GcIrH8xL9W_VfAbzSa4zpFrRwnpq_eYd8QTRkr7VC';
        CNN.msib.localCfg.mod.saml_logout = 'http://markets.money.cnn.com/marketsdata/site/logoutsecureservices';

    }  else {
        CNN.msib.localCfg.gigya.appId = '3_rXsA415Q3s8tcp2UZg_6Io5FLBWLpVZmZqmUNuYXDjKqCaCmgq2VdNte7cURdLVq'; /* test account: dev-migration.cnn.com */
    }


    CNN.msib.env = CNN.msib.env || {};
    CNN.msib.env.host = host;
}());
/**
	Create generic modal overlay
 **/

CNNM_MODAL = {
	overlay_element_id : 'js-ms-overlay',
	overlay_element : null,
	modal_title_id : 'js-ms-overlay-modal-title',
	modal_title : {},
	modal_body_id : 'js-ms-overlay-modal-body',
	modal_body: {},
	modal_style : {
		'standard' : 'ms-overlay-style--standard',
		'naked' : 'ms-overlay-style--naked'
	},
	
	createEmptyOverlay : function() {
		var overlayObject;
		
		if(this.overlay_element == null) {
			overlayObject = document.createElement('div');
			overlayObject.className = "ms-overlay";
			overlayObject.id = this.overlay_element_id;

			overlayObject.innerHTML = 
				'<div class="ms-overlay-bg" onclick="CNNM_MODAL.hide()"></div>\
				<div class="ms-overlay-modal">\
					<span class="icon icon--close" onclick="CNNM_MODAL.hide()"></span>\
					<h1 id="'+this.modal_title_id+'" class="ms-overlay-modal-title"></h1>\
					<div id="'+this.modal_body_id+'" class="ms-overlay-modal-body"></div>\
				<div>';
			document.body.appendChild(overlayObject);
	
			this.overlay_element = document.getElementById(this.overlay_element_id);
			this.modal_body = document.getElementById(this.modal_body_id);
			this.modal_title = document.getElementById(this.modal_title_id);
		}
		return;
	},
	render_overlay : function(showFunction, properties) {
		properties = properties || {};
		var containerID;
		/* head */
		this.modal_title.innerHTML = properties.header || '';
		if(this.modal_title.innerHTML == '') {
			this.modal_title.className += ' hidden';
		} else {
			this.modal_title.className = this.modal_title.className.replace(/ hidden/g, '');
		}

		/* body */
		if(showFunction != undefined) {
			containerID = this.modal_body_id;
			showFunction(containerID);
		}


	},
	show : function(style) {
		style = style || 'standard';
		var styleClass = this.modal_style[style] || this.modal_style['style'];

		this.overlay_element.className = this.overlay_element.className.replace(/ ms-overlay-style--\w+/g,'')
		this.overlay_element.className += ' show' + ' ' + styleClass;
	},
	hide : function() {
		this.overlay_element.className = this.overlay_element.className.replace(/ show/g, '');
		this.modal_body.innerHTML = '';
	},
	init : function () {
		/* Check if overlay element is already on the page.  Else add it. */
		this.overlay_element = document.getElementById(this.overlay_element_id);
		this.createEmptyOverlay()
	}	
};


/*
 * Modal function used by MOD (See profile page Alert Management popups)
 */
function cnnHideOverlays() { 
	CNNM_MODAL.hide();
}
/**
 **/
var CNNM_MS_DISPLAYS = {
	css_url : "/.element/css/pkg/cnnmoney.members.services.html",
	modal_viewer : null || CNNM_MODAL,



	show_login_modal : function() {
		this.modal_viewer.render_overlay(CNNM_MS_DISPLAYS.show_gigya_screenset_login);
	},

	show_registration_modal : function() {
		this.modal_viewer.render_overlay(CNNM_MS_DISPLAYS.show_gigya_screenset_registration);
	},

	show_profile_modal : function() {
		if(CNNM_MS_CONNECT.cnnm_user.get_login_status()) {
			this.modal_viewer.render_overlay(CNNM_MS_DISPLAYS.show_gigya_screenset_profile);
		} else {
			this.show_login_modal();
		}
	},

	/* Modal with all social accounts linked to this account */
	show_linkedaccounts_modal : function(user) {

		var header = 'Social Settings';
		var linkedAccounts = user.get_linked_accounts() || [];
		var bodyHTML = '';
		var k = 0;

		for (index in linkedAccounts) {
			var linkedClass = (linkedAccounts[index].is_linked)? '': 'unlinked'; 
			var profileImage = ('' != linkedAccounts[index].profile_image)? '<img src="'+linkedAccounts[index].profile_image+'"/>': ''; 

			bodyHTML += 
				'<li class="social-settings-item--'+ index +' '+linkedClass+'">\
					<span class="social-settings-status" onclick="CNNM_MS_PROFILEPAGE.toggle_social_account(this)"><span class="icon icon--checkmark"></span></span>\
					<span class="social-settings-name">\
						<span class="social-settings-icon"></span>\
					</span>\
					<span class="social-settings-avatar">'+profileImage+'</span>\
		          </li>';
		}
		bodyHTML =
			'<div class="social-settings">\
		        <ul>'
		        + bodyHTML +
		        '</ul>\
		        <aside class="ms-overlay-note">\
		        	<p>Note: If you unlink your social account, you will be logged out and you will log in with your provided email address and password.</p>\
		        </aside>\
		    </div>';

		this.show_custom_message(header, bodyHTML);
	},

	show_iframe_modal : function(url, properties) {
		properties = properties || {};
		var style = properties.style || '';
		var width = properties.width ||  '100%';
		var height = properties.height ||  '100%';

		this.modal_viewer.render_overlay(function(containerID){
			var container = document.getElementById(containerID);
			var iframe = '<iframe class="ms-overlay-iframe" src='+url+' width='+width+' height='+height+'></iframe>';
			
			container.innerHTML = iframe;
			CNNM_MS_DISPLAYS.modal_viewer.show(style);

		});
	},



	show_custom_message : function(header, body) {
		header = header || '';
		var bodyHTML = (body || '').trim();

		if (bodyHTML != '') {
			this.modal_viewer.render_overlay(function(containerID){
				var container = document.getElementById(containerID);
				container.innerHTML = bodyHTML;
			}, {'header' : header});

			CNNM_MS_DISPLAYS.modal_viewer.show();
		}
	},


	/* Helper - Gigya Edit Profile modal
	*
	*/
	show_gigya_screenset_profile : function(containerID) {
		gigya.accounts.showScreenSet({
            'screenSet': 'CNNMoney-ProfileUpdate',
            'containerID': containerID,
            "onError": function errorHandler(eventObj) {
                /* screenset failed to load */
        		var message = eventObj.statusMessage || '';
        		console.log('Error getting profile overlay = ' + message);

            },
			'onAfterScreenLoad' : function() {
				CNNM_MS_DISPLAYS.modal_viewer.show()
			},
            'onAfterSubmit' : function(eventObj) {
            	CNNM_MS_CONNECT.cnnm_user.build_user_profile(eventObj);
            	if(CNNM_MS_PROFILEPAGE !== undefined) {
            		CNNM_MS_PROFILEPAGE.display_profile_data();
            	}
            	CNNM_MS_DISPLAYS.show_profile_modal();
            }
       });
	},


	/* Helper - Gigya Login modal
	*
	*/
	show_gigya_screenset_login : function(containerID) {
		gigya.accounts.showScreenSet(
			{
				'screenSet':'CNNMoney-RegistrationLogin', 
				'containerID': containerID,
            	'onError': function errorHandler(eventObj) {
                	/* screensets aren't loading */
                	var message = eventObj.statusMessage || '';
                	console.log('Error getting login overlay - ' + message);
				},
				'onAfterScreenLoad' : function() {
					CNNM_MS_DISPLAYS.modal_viewer.show()
				}
            });
	},

	/* Helper - Gigya Registration modal
	*
	*/
	show_gigya_screenset_registration : function(containerID) {
		gigya.accounts.showScreenSet(
			{
	    			'screenSet':'CNNMoney-RegistrationLogin', 
					'containerID': containerID,
					'startScreen':'gigya-register-screen',
            		'onError': function errorHandler(eventObj) {
                		/* screensets aren't loading */
                		var message = eventObj.statusMessage || '';
                		console.log('Error getting registration overlay - ' + message);
					},
					'onAfterScreenLoad' : function() {
						CNNM_MS_DISPLAYS.modal_viewer.show()
					}
            });
	},

	/* Handles MOD alerts button overlay 
	 * id (string) =  MOD request id
	 */
	show_MOD_overlay : function(id) {
		if(CNNM_MS_CONNECT.cnnm_user.get_login_status()) {
			if ( CNNM_MS_CONNECT.cnnm_user.has_email() ){
				CNNM_MS_CONNECT.make_MOD_request(id);
			} else {
				CNNM_MS_DISPLAYS.show_emailrequired_overlay();
			}
		} else {
			/* Register Callback to  continue user flow (*show popup user wanted to see before login screen appeared) after user has logged in) */
			CNNM_MS_CONNECT.add_post_login_callback(function(){
				CNNM_MS_CONNECT.make_MOD_request(id);
			}, true);

			this.show_login_modal();
			
		}
	},

	show_emailrequired_overlay : function () {
		var title = "We're sorry!";
		var message = 'This feature requires a confirmed email address. Please add your email in your <a href="javascript:CNNM_MS_DISPLAYS.show_profile_modal();">profile</a> and add an email. <br />We will send you a confirmation email to your inbox';
		this.show_custom_message(title, message);
	},

	/*
	 * 	Update login state on top banner
	 */
	toggle_loggedin_link : function(isloggedin, username) {
		/* 
		 * 1. Display username 
		 * 2. Swap login with logout link.
		 */
		try
		{
			cnnmBanner.setLoggedInStatus(isloggedin.toString(), username);    
		}
		catch(e)
		{
			setTimeout(function() {
				cnnmBanner.setLoggedInStatus(isloggedin.toString(), username); 
			}, 1500);
			console.log("Error updating banner in moneySetNavDropdown");
		}

	},

	load_styles : function() {
        jQuery.ajax(this.css_url, {
	            cache: true,
	            dataType: 'html'
	        }).done(function (data) {
				var parser = new DOMParser();
				var dom = parser.parseFromString(data, "text/xml");
				var retrieved_linktag = dom.firstChild || {};

			var link_tag = document.createElement("link");
			link_tag['href'] = retrieved_linktag.attributes['href'].nodeValue;
			link_tag.rel = 'stylesheet';
			link_tag.id = 'js-ms-form-styles';			
			document.head.appendChild(link_tag);


	        }).fail(function (xhr, settings, error) {
	            console.log(error);
	           
        });

	},

	setup_onclickhandlers : function() {

		jQuery('.cnnLogin').on('click', function(){CNNM_MS_DISPLAYS.show_login_modal();});
		jQuery('.cnnLogout').on('click', function(){CNNM_MS_CONNECT.logout();});
	},

	init: function() {
		this.modal_viewer = CNNM_MODAL;
		this.modal_viewer.init();
		this.load_styles();
		this.setup_onclickhandlers();
	}
}
function CNNM_MS_User() {
	var self = this;
	var user_name = '';
	var user_nickname = '';
	var user_image;
	var user_email = '';
	var newsletter_subscriptions = {
			'Opening Bell' : 'off',
			'Closing Bell' : 'off',
			'Breaking News Alerts' : 'off'
		};
	var linked_accounts = {
			'facebook' : { is_linked : false, profile_image : ''},
			'twitter' : { is_linked : false, profile_image : ''},
			'googleplus' : { is_linked : false, profile_image : ''},
			'linkedin' : { is_linked : false, profile_image : ''}
		};
	var isloggedin = false;

	/* Mapping of gigya data id to newsletter name */
	var newsletter_dataID_mapping = {
			'moneybreakingnews' : 'Breaking News Alerts',
			'moneyhtmlmarketbriefing' : 'Closing Bell',
			'moneypremarket' : 'Opening Bell'
		};

	this.isValidNewsletter = function(newsletterID) {
		return (newsletter_dataID_mapping[newsletterID] !== undefined);
	}

	this.set_subscriptions_status = function(newsletterName, status, callback){
		/* set User properties */
		newsletterName = newsletterName || '';
		var newsletterID = '';

		for(var id in newsletter_dataID_mapping) {
			if(newsletterName == newsletter_dataID_mapping[id]) {
				newsletterID = id;
				break;
			}
		}
		/* save in database */
		CNNM_MS_CONNECT.set_subscription_status(newsletterID, status, function(){
			newsletter_subscriptions[newsletterName] =  status;
			callback();
		})

	}

	this.set_linked_account = function(accountType, status, image) {
		if(linked_accounts[accountType] !== undefined)
		{
			linked_accounts[accountType].is_linked = status;
			linked_accounts[accountType].profile_image = image;			
		}
	}

	var init_subscriptions_status = function(gigyaDataObj) {
		gigyaDataObj = gigyaDataObj || {};
		var newsletters_data = gigyaDataObj.newsletters || [];

		for( k in newsletters_data) {
			var newsletterData = newsletters_data[k] || {};
			var newsletterData_id = k;
			var newsletterData_status = newsletterData.newsletter_sts;
			var newslettername = newsletter_dataID_mapping[newsletterData_id];

			if(newsletter_subscriptions[newslettername] !== undefined) {
				newsletter_subscriptions[newslettername] = ((newsletterData_status == 1)? 'on' : 'off');
			}
		}
	}


	this.get_login_status = function() {
		return isloggedin;
	}

	this.get_username = function() {
		return user_name;
	}

	this.get_subscriptions_status = function(newsletter_name){
		return (newsletter_subscriptions[newsletter_name] || 'off');
	}

	this.get_linked_accounts = function() {
		return linked_accounts;
	}

	this.has_email = function() {
		return user_email != '';
	}

	this.build_user_profile = function(gigyaObj) {
		var gigyaProfile = gigyaObj.profile || {};
		var gigyaData = gigyaObj.data || {};
		var gigyaIdentities = gigyaObj.identities || [];
		/*
			set user_name =
			set user_nickname
			set user_image
			set newsletter_subscriptions
		*/
		isloggedin = true;

		/* set user name */
		var firstname = gigyaProfile.firstName || '';
		var lastname = gigyaProfile.lastName || '';
		user_name = (firstname + ' ' + lastname).trim();
		user_nickname = (gigyaProfile.nickname || '').trim();
		user_email = gigyaProfile.email || '';

		/* set user image */
		if(user_name == '' && user_nickname == '') { user_name = "Hello";}
		if(gigyaProfile.photoURL != '') {
			this.user_image = gigyaProfile.photoURL;
		}

		/* set newsletter subscription statuses */
		init_subscriptions_status(gigyaData);

		/* set linked accounts */
		for (k = 0; k < gigyaIdentities.length; k++){
			var providerName = gigyaIdentities[k].provider;
			if(linked_accounts.hasOwnProperty(providerName)) {
				linked_accounts[providerName].is_linked = true;
				linked_accounts[providerName].profile_image = gigyaIdentities[k].photoURL || '';
			}
		} 
	}
};
/**
CNNM_MS_CONNECT  (ms.connect.js)
	The controller and form processing object. Handles all connections to Gigya & MOD

CNNM_MS_DISPLAYS (ms.display.js)
	Handles form member services page page rendering

CNNM_MS_User (ms.fuser.js)
	CNN$ User object

CNNM_PROFILE (ms.profile.js)
	Handles profile page

CNNM_MODAL (modal_overlay.js)
	Handles basic modal displays

ms.css
	styles


**/

var CNNM_MS_CONNECT = {
	ms_display : {},
	cnnm_user : {},

	gigyascript_id : 'js-gigya-script', 
	gigyascript_timer : 0,
	callbacks : [],
	mod_prefix : '',
	post_login_callbacks : [], // holds objects {callOnce: true, callback: function(){} }

	set_MOD_URL_host : function () {
		var cnnTestEnv = location.hostname;

		if (cnnTestEnv.indexOf('jcmsdev') > -1
			|| cnnTestEnv.indexOf('qai') > -1
			|| cnnTestEnv.indexOf('turner') > -1
			|| cnnTestEnv.indexOf('dev') > -1
			|| cnnTestEnv.indexOf('ref') > -1
			|| cnnTestEnv.indexOf('train') > -1
			|| cnnTestEnv.indexOf('localhost') > -1
		) {
			this.mod_prefix = 'http://markets.money.qai.cnn.com';
		} else {
			this.mod_prefix = 'http://markets.money.cnn.com';
		}
	},

	make_MOD_request : function (requestId) 
	{
		jQuery('.showOverlay').removeClass('showOverlay');

		switch (requestId) 
		{
			case 'wsod_setAlertButton':
				alertType = quotes.WSODIssue; /* quotes.WSODIssue defined on quote pages */
				var url = CNNM_MS_CONNECT.get_MOD_prefix() + "/secure/alerts/iframe.asp?wsodissue=" + alertType + '&rnd=' + Math.floor(Math.random() * 101010101);
				this.ms_display.show_iframe_modal(url, {style: 'naked', width: '300px', height: '415px'});
				break;
			case 'wsod_addToWatchlistButton':
				alertType = quotes.WSODIssue; /* quotes.WSODIssue defined on quote pages */
				var url = CNNM_MS_CONNECT.get_MOD_prefix() + "/secure/watchlist/addSymbol.asp?wsodissue=" + alertType + '&rnd=' + Math.floor(Math.random() * 101010101);
				this.ms_display.show_iframe_modal(url, {style: 'naked', width: '573px', height: '397px'});
				break;
			case 'managa_btn0':
				alertType = 'company';
				var url = CNNM_MS_CONNECT.get_MOD_prefix() + '/secure/alerts/iframe.asp?alertType=' + alertType + '&rnd=' + Math.floor(Math.random() * 101010101);

				this.ms_display.show_iframe_modal(url, {style: 'naked', width: '880px', height: '486px'});
				break;
			case 'managa_btn1':
				alertType = 'mf';
				var url = CNNM_MS_CONNECT.get_MOD_prefix() + '/secure/alerts/iframe.asp?alertType=' + alertType + '&rnd=' + Math.floor(Math.random() * 101010101);
				this.ms_display.show_iframe_modal(url, {style: 'naked', width: '880px', height: '468px'});
				break;
			case 'managa_btn2':
				alertType = 'watchlist';
				var url = CNNM_MS_CONNECT.get_MOD_prefix() + '/secure/alerts/iframe.asp?alertType=' + alertType + '&rnd=' + Math.floor(Math.random() * 101010101);
				this.ms_display.show_iframe_modal(url, {style: 'naked', width: '880px', height: '517px'});
				break;
			case 'managa_btn3':
				alertType = 'keyword';
				var url = CNNM_MS_CONNECT.get_MOD_prefix() + '/secure/alerts/iframe.asp?alertType=' + alertType + '&rnd=' + Math.floor(Math.random() * 101010101);
				this.ms_display.show_iframe_modal(url, {style: 'naked', width: '880px', height: '427px'});
				break;
			case 'viewNewslettersOverlay':
					jQuery('#profile_newsletter_overlay').cnnShowOverlay();
					var fetchEmails = true;
					jQuery('.myNewsletter_signUp').each(function(i) {
				if (jQuery(this).hasClass('loading'))
					fetchEmails = false
				});
				if (!CNN_NEWSLETTERS_LOADED && fetchEmails) {
					jQuery('.myNewsletter_signUp').addClass('loading');
					ms_getEmails('ms_uiGetEmails')
				}
				break;
			default:
				break
		}

	},

	logout : function() {
		/* Log out steps:
			Logout of Gigya
			Logout of LiveFyre
			Clear liveFyre token cookie
			Logout of MOD SAML
			Reload page
		*/
		try{
			this.mod_logout();
		}catch(e){}
		try{
			this.gigya_logout();
		}catch(e){}

		this.remove_livefyre_cookie();

		try{
			Livefyre.require(['fyre.conv#3', 'auth'], function(Conv, auth) { auth.logout();});
		}catch(e){}
	},
	gigya_logout : function() {
		gigya.accounts.logout();
	},
	mod_logout : function() {
        jQuery.ajax({
            url: CNN.msib.localCfg.mod.saml_logout,
            type: 'GET',
            dataType: 'jsonp',
            error: function(jqXHR, textStatus, errorThrown ) {
            	console.log('MS: MOD Logout - Error - ' +  errorThrown);
            }
        }).done(function tokenResponse(response) {
        	console.log('MS: MOD Logout - Success');
    	});
	},
    post_logout_actions : function (eventObj) { 
		location.reload();
    },
    
    post_login_actions : function (eventObj) { 
		var accountData = eventObj.data || {};
		/** set turner brand **/
        //Check if the Turner_Brand field is set to the correct value
        if (!accountData.hasOwnProperty('Turner_Brand')) {
	
				//Set the Turner_Brand field
				accountData.Turner_Brand = 'CNNMoney';

				gigya.accounts.setAccountInfo({
					data: accountData,
					callback: function(response){}
				});
        }
		CNNM_MS_CONNECT.livefyre_settoken(eventObj, CNNM_MS_CONNECT.check_login_state);
		CNNM_MODAL.hide();

		/* slight delay needed because of race conditions from overlay show/hide toggle */
		setTimeout(function(){
			for(i = 0; i < CNNM_MS_CONNECT.post_login_callbacks.length; i++) {
				CNNM_MS_CONNECT.post_login_callbacks[i].callback();

				if(CNNM_MS_CONNECT.post_login_callbacks[i].callOnce) {
					CNNM_MS_CONNECT.post_login_callbacks.splice(i,1);
				}
			}

			/* refresh page */
			location.reload();
		}, 300);
    },

    add_post_login_callback: function(callback, onlyCallOnce) {
    	onlyCallOnce = onlyCallOnce ||  true;
    	callback = callback || function(){};

    	this.post_login_callbacks.push({
    		callOnce : onlyCallOnce,
    		callback : callback
    	});
    },


	link_social_account : function (thirdpartyid, callback) {
		gigya.socialize.addConnection({ 
			'provider': thirdpartyid,
			'callback' : callback
		});
	},

	unlink_social_account : function (thirdpartyid, callback) {
		gigya.socialize.removeConnection({ 
			'provider': thirdpartyid,
			'callback' : callback
		});
	},

	/*
	* name (String) = newsletter id used by gigya
	* status (Integer) = 1/0
	*/
	set_subscription_status : function(newsletterID, status, cb) {

		/* 	1 = Active / Subscribed
			2 = Pending 
			4 = Removed /  Unsubscribed
		*/
		status = (1 == status || 'on' == status)? 1 : 4;
		newsletterID = newsletterID || '';
		if('' == newsletterID) return;

		/* get and edit settings */
		gigya.ids.getAccountInfo({
			include: 'data',
			callback: function (gigyaObj) {
				var editedData = gigyaObj.data || {};

				if(CNNM_MS_CONNECT.cnnm_user.isValidNewsletter(newsletterID)) {

					editedData.newsletters = editedData.newsletters || {};
					var newsletterObject = editedData.newsletters;
					var currentTime = (new Date()).toISOString();

					/* Update newsletter data */
					if(newsletterObject[newsletterID] !== undefined) {
						newsletterObject[newsletterID].newsletter_sts = status;
						newsletterObject[newsletterID].last_update_dte = currentTime;
					} else {
						newsletterObject[newsletterID] = {
							create_dte : currentTime,
							last_update_dte : currentTime,
							newsletter_sts : 1
						}
					}

					/* save settings */
					gigya.accounts.setAccountInfo({
						data: editedData,
						callback: function(response){
							if(response.errorCode === 0) {
								cb();							
							}
						}
					});
				}
			}
		});
	},

	/* Check if user logged in and update login status */
	check_login_state : function() {
		gigya.ids.getAccountInfo({
			include: 'profile, identities-all, data',
			extraProfileFields: 'languages, certifications',
            callback: function (gigyaObj) {
				var userUID = gigyaObj.UID || '';


                if (gigyaObj.errorCode === 0 && userUID != '') {
                	CNNM_MS_CONNECT.cnnm_user.build_user_profile(gigyaObj);

                	/* Update login status on top banner */
					CNNM_MS_CONNECT.ms_display.toggle_loggedin_link(CNNM_MS_CONNECT.cnnm_user.get_login_status(), CNNM_MS_CONNECT.cnnm_user.get_username());
                } else {
                	console.log('MS: check_login_state - Error - ' + gigyaObj.errorCode);
                	console.dir(gigyaObj)
				}

				CNNM_MS_CONNECT.run_callbacks();
            }
        });
	},

	register_callback : function(callback) {
		this.callbacks.push(callback);
	},

	run_callbacks : function() {
		for(n = 0; n < this.callbacks.length; n++) {
			this.callbacks[n]();
		}
	},

	get_MOD_prefix : function () {
		return this.mod_prefix;
	},

	get_cookies : function() {
		var retVar = {};
		if (document.cookie) {
			var cookies = document.cookie.split('; ');
			for ( var i = 0; i < cookies.length; i++) {
				var namevaluePairs = cookies[i].split('=');
				retVar[namevaluePairs[0]] = namevaluePairs[1] || null
			}
		}
		return retVar;
	},

	remove_livefyre_cookie : function() {
		/* delete cookie */
		var cookie = '';
		var path = '/';
		var domain = '.cnn.com';
		var expiredDate = 'Fri, 13-Apr-1970 00:00:00 GMT';

		var cookieObj = this.get_cookies();

		var cookieValue = cookieObj[CNN.msib.localCfg.livefyre.cookieName]; 

		cookie = CNN.msib.localCfg.livefyre.cookieName + '=;expires=' + expiredDate + ';path=' + path + ';domain=' + domain;

		document.cookie = cookie;

	},



	/**
     * Attempt livefrye authenication to login service
     */
    livefyre_settoken: function (user, callback) {

        jQuery.ajax({
			/*
			//cnn-login-app.dev.services.ec2.dmtio.net/services/livefyre/authtoken
			//cnn-login-app.ref.services.ec2.dmtio.net/services/livefyre/authtoken"
			//cnn-login-app.prod.services.ec2.dmtio.net/services/livefyre/authtoken
			*/
            url: CNN.msib.localCfg.livefyre.tokenEndPoint,
            data: {
                UID: user.UID,
                UIDSignature: user.UIDSignature,
                signatureTimestamp: user.signatureTimestamp,
                displayName: user.nickname || ''
            },
            type: 'GET',
            dataType: 'json',
            cache: false,
            error: function(jqXHR, textStatus, errorThrown ) {
				callback();
            }
        }).done(function tokenResponse(response) {

            if (response.success && response.authToken) {
				/* set cookie */
				var path = '/';
				var domain = '.cnn.com';
				var numHours = numHours = (new Date((new Date()).getTime() + CNN.msib.localCfg.livefyre.cookieTtl * 3600000)).toGMTString();
				document.cookie = CNN.msib.localCfg.livefyre.cookieName + '=' + response.authToken
						+ ((numHours) ? (';expires=' + numHours) : '')
						+ ((path) ? ';path=' + path : '')
						+ ((domain) ? ';domain=' + domain : '');
			}
			callback();
    	});
    },


    /**
     * Start loading the Livefyre bootstrapper.
     * This provides the window.fyre globals.
     * @param {function} callback - Passes true if successful, false otherwise.
     */
    load_livefyre_script : function (callback) {
        var livefyreJs = '//cdn.livefyre.com/Livefyre.js';

        /* Load the Livefyre bootstrapper. */
        jQuery.ajax(livefyreJs, {
            cache: true,
            dataType: 'script'
        }).done(function () {
            callback(true);
        }).fail(function (xhr, settings, error) {
            console.log('MS: loading livefyre script - error - ' + error);
            callback(false);
        });
    },

    /**
     * Initialize Livefyre plugins - all comments and integrate livefyre with our login system.
     * @param {function} callback - Called when Livefyre has initialized.
     */
    init_livefyre : function (callback) {
    	callback = callback || function(){};

        var plugins = CNN.social.getLivefyreConvPlugins(),
            streamCfgs = [],
            i;

        for (i = 0; i < plugins.length; i += 1) {
            Array.prototype.push.apply(streamCfgs,
                    plugins[i].generateStreamConfigs());
        }

        if (!streamCfgs.length) {
            /* No plugins to initialize, so skip Livefyre initialization. */
            callback();
        } else {
            this.load_livefyre_script(function (success) {
                if (!success) {
                    /* Livefyre load failed; skip Livefyre and load
                     * everything else. */
                    callback();
                } else {
                    /* Initialize Livefyre with the stream configs. */
					Livefyre.require(['fyre.conv#3', 'auth'], function(Conv, auth) {
						/* get livefyre token */
						var cookieObj = CNNM_MS_CONNECT.get_cookies()

						var token = cookieObj[CNN.msib.localCfg.livefyre.cookieName]; 

					    new Conv({
	                        network: CNN.msib.localCfg.livefyre.network,
						}, streamCfgs, function(widget) {});

						auth.delegate({
							login: function login(cb) 
							{
								if ( token != undefined) 
								{
									cb(null, {livefyre: token});
								} else 
								{
									CNNM_MS_CONNECT.ms_display.show_login_modal();
								}
							},
							/* Logging out thru livefyre button */
							logout: function logout(cb) 
							{
								CNNM_MS_CONNECT.remove_livefyre_cookie();
		                        CNNM_MS_CONNECT.gigya_logout();
								cb(null);
							},
							viewProfile: function viewProfile(user) 
							{
								location.href = 'http://money.cnn.com/profile/';
							},
							editProfile: function editProfile(user) 
							{
								location.href = 'http://money.cnn.com/profile/';
							}
						});

						/* Login user if already logged in thru CNN members services (gigya) */
						if (token != undefined) {
							auth.authenticate({livefyre: token});
						}
                    });
                }
            });
        }
    },

	load_gigya_script : function (callback) {
		var appid = CNN.msib.localCfg.gigya.appId;
        var gigyaURL = 'http://cdn.gigya.com/js/gigya.js?apikey='+appid;

        /* Load the Gigya API. */
        jQuery.ajax({
            url: gigyaURL,
            cache: true,
            dataType: 'script'
        }).done(function () {
            callback();
        }).fail(function (xhr, settings, error) {
            console.log('MS: loading gigya script - error - ' + error);
            callback();
        });


	},

	init : function(user, overlayViewer) {
		this.set_MOD_URL_host();
		this.cnnm_user = user || new CNNM_MS_User();

		this.load_gigya_script(function(){
			try{
				/* initialize Object to handle Modal Screen displays */
				CNNM_MS_CONNECT.ms_display = overlayViewer; 
				CNNM_MS_CONNECT.ms_display.init();				
			}catch(e){
				console.log('MS: error initializing CNNM_MS_DISPLAYS ' + e.message)
			}
			try{
				/* setup post login and logout actions */
				gigya.accounts.addEventHandlers({
					onLogin: CNNM_MS_CONNECT.post_login_actions,
					onLogout: CNNM_MS_CONNECT.post_logout_actions
				});
			}catch(e){}
			try{
				/* register post check_login_state callbacks */
				/* initialize LiveFyre */
				CNNM_MS_CONNECT.register_callback(function(){ CNNM_MS_CONNECT.init_livefyre(); });

				CNNM_MS_CONNECT.check_login_state();
			}catch(e){}
		});


	}
};

jQuery(document).ready(function(){
	if(location.href.match("http://markets.money.cnn.com/secure/watchlist/") != null) {
		jQuery('#managa_btn2').click(function() {
			var url = CNNM_MS_CONNECT.get_MOD_prefix() + '/secure/alerts/iframe.asp?alertType=watchlist&rnd=' + Math.floor(Math.random() * 101010101);
			CNNM_MS_DISPLAYS.show_iframe_modal(url, {style: 'naked', width: '680px'});
		});
		var styleTag = document.createElement('style');
		styleTag.innerHTML =".ms-overlay-modal-title { margin: 0} .ms-overlay-iframe{height: 100vh !important; max-height: 471px}";
		document.head.appendChild(styleTag);		
		CNNM_MODAL.createEmptyOverlay()
	}

	CNNM_MS_CONNECT.init(new CNNM_MS_User(), CNNM_MS_DISPLAYS);		
});