






	





 
 



    
        

        
        
    
        

        
        
    
        

        
        
    
        

        
        
    
        

        
        
    
        

        
        
    

 








 














	



	



	



	



























	




	



































	
	
	
		
			
		
	
	
	




















	
	    





 









	
	    





 









	
	    








	



 
 
 


	




 





 

 
	 
 

 
	 
 

 









	
	
    



 




	
















  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  










  
	  
	  
  


	
	
	

	
		
			
		
		
			
		
		
			
				
			
		
	
	

	














<!DOCTYPE html>
<html lang="en">
<head>
    




	
		
	




<script language="JavaScript">
var beforeload = (new Date()).getTime();
var totalTime = 0;
var clientTime = 0;
var serverTime = 0;
var XmlHttpObj1;
function Sign(X) { return X>0 ? "+" : X<0 ? "-" : " " }
function CreateXmlHttpObj1() {
	try {XmlHttpObj1 = new ActiveXObject("Msxml2.XMLHTTP");}
	catch(e) {try{XmlHttpObj1 = new ActiveXObject("Microsoft.XMLHTTP");}
		catch(oc) {XmlHttpObj1 = null;}}
	if(!XmlHttpObj1 && typeof XMLHttpRequest != "undefined") {XmlHttpObj1 = new XMLHttpRequest();}}

function loadingTime() {
	//calculate the current time in afterload
	var afterload = (new Date()).getTime();
	//calculate the seconds
	clientTime = (afterload-beforeload)/1000;
	serverTime =  parseFloat(document.getElementById("serverTime").innerHTML);
	totalTime = (clientTime + serverTime).toFixed(3);
	document.getElementById("loadingtime").innerHTML = "and delivered in " + totalTime + " seconds";
}
function addLoadEvent(func) {
	var oldonload = window.onload;
	if (typeof window.onload != 'function') {
		window.onload = func;
	} else {
		window.onload = function() {
			if (oldonload) {
				oldonload();
			}
			func();
		}
	}
}
</script>
	<title>Conspiracy Theories by Cass R. Sunstein, Adrian Vermeule :: SSRN</title>
	
<meta name="description" content="Many millions of people hold conspiracy theories; they believe that powerful people have worked together in order to withhold the truth about some important pra">
<meta name="keywords" content=" SSRN, Conspiracy Theories, Cass R. Sunstein, Adrian Vermeule">
<meta name="citation_author" content="Sunstein, Cass R.">
<meta name="citation_author" content="Vermeule, Adrian">
<meta name="citation_title" content="Conspiracy Theories">
<meta name="citation_online_date" content="2008/01/17">

<meta name="citation_publication_date" content="2008/01/15">

<meta name="citation_doi" content="10.2139/ssrn.1084585">
<meta name="citation_abstract_html_url" content="https://papers.ssrn.com/abstract=1084585">
<meta name="citation_keywords" content="conspiracy theories, social networks, informational cascades, group polarization">
<meta name="citation_pdf_url" content="https://papers.ssrn.com/sol3/Delivery.cfm?abstractid=1084585"> 

	
	
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="format-detection" content="telephone=no">
	
	
		
	
    <link rel="stylesheet" href="https://www.ssrn.com/n/react/mendeley/style.bundle.css" />
	

	
	

	
	
	

	

	
	
<meta name='free_download_available' content='true'><meta name='free_download_available' content='true'></head>







 
	



	



	












	


















<body class="new-layout ">

	
	

	









	




	







	









		

		
		

	
	




	
	


	
	



	
	


	
	
	
	
	
	
		
			
			
		

		
		
	

	

	



	
	
	
	

	<script language="javascript">
		//Language functions
		function changeLanguage1(language, response){

			$.ajax({
				url: '/AltLanguage_ajax.cfm?type=changeLanguage&partid=1&strCode=en',
				cache: false,
				success: function(data) {
					// Update values in cookies
					Set_Cookie('SITEID',language,'-1','/','.ssrn.com','');
					Set_Cookie('SITEID',language,'1000','/','.ssrn.com','');

					// Finally, perform redirection
					if (response == 'reload') {
						window.location.reload();
					}
					else {
						window.location.href=response;
					}
				}
			});
		}

		function Set_Cookie( name, value, expires, path, domain, secure ) {
			// set time, its in milliseconds
			var today = new Date();
			today.setTime( today.getTime() );

			/*
			if the expires variable is set, make the correct
			expires time, the current script below will set
			it for x number of days, to make it for hours,
			delete * 24, for minutes, delete * 60 * 24
			*/
			if ( expires ) {
				expires = expires * 1000 * 60 * 60 * 24;
			}

			var expires_date = new Date( today.getTime() + (expires) );

			document.cookie = name + "=" +escape( value ) +
			( ( expires ) ? ";expires=" + expires_date.toGMTString() : "" ) +
			( ( path ) ? ";path=" + path : "" ) +
			( ( domain ) ? ";domain=" + domain : "" ) +
			( ( secure ) ? ";secure" : "" );
		}


		/*
		* We use this function when the language should be stripped from an object, like a form RADIO
		*/
		function getLanguage ( oObj ) {
			var specialChars = "!@#$^&%*()+=-[]\/{}|:<>?,.";

			// Need to clean up code if object came from Mura site.
			sCode = oObj.value;
			if (sCode.length > 2) {
				for (var i = 0; i < specialChars.length; i++) {
					sCode = sCode.replace(new RegExp("\\" + specialChars[i], 'gi'), '');
				}
				// After cleaning up special chars, we take the first two chars.
				sCode = sCode.substring(0,2).trim();
			}

			return sCode;
		}
	</script>







	








<link rel="stylesheet" type="text/css" href="https://static.ssrn.com/cfincludes/css/custom-bootstrap.min.css?v=401">
<link rel="stylesheet" type="text/css" href="https://static.ssrn.com/cfincludes/css/custom.min.css?v=401">
<link rel="stylesheet" type="text/css" href="https://static.ssrn.com/cfincludes/css/global.min.css?v=401">
<link href="https://static.ssrn.com/cfincludes/global_header/dist/style.bundle.css?v=401" rel="stylesheet">

<div class="accesibility-link">
	<a id="skip-to-content" title="Skip to content" href="#maincontent">Skip to main content</a>
</div>






<meta name="part_id" content="1">
<meta name="www_server" content="www.ssrn.com">
<meta name="static_server" content="static.ssrn.com">
<meta name="hq_server" content="hq.ssrn.com">
<meta name="papers_server" content="papers.ssrn.com">
<meta name="user_name" content="Public User">
<meta name="is_custom" content="false">
<meta name="own_design" content="false">
<meta name="ab_id" content="">
<meta name="on_behalf" content="False">
<meta name="login_user_id" content="">




<!--GLOBAL HEADER-->
<header id="global-header" data-id-plus-auth-enabled="false"></header>





	
	
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<script type="text/javascript">if(typeof jQuery == 'undefined') {
    document.write(unescape("%3Cscript src='https://#strStaticServer#/libraries/JQuery/v1.12.4/jquery.min.js' type='text/javascript'%3E%3C/script%3E"));
}</script>


<script>
	function sentEmailValidation(lngLoginID, forwardURL){
		var parameters = {
			"lngLoginID" : lngLoginID,
			"strForwardURL" : forwardURL
		};
		$.ajax({
			type: "POST",
			url: "https://static.ssrn.com/cfc/webServices/loginServices.cfc?method=sentValidationEmailNew",
			data: parameters,
			dataType: "jsonp",
			async: false,
			success: function(data) {
				if(data.RESULT == 1){
					$("#errorMessageLogin").html(data.MESSAGE);
				}
			},
			error: function(jqXHR, textStatus, errorThrown) {
				console.log(textStatus, errorThrown);
			}
		});
	};
</script>
<script>
$( document ).ready(function() {

	// Show translation notice on footer on load
	var hebrewIsSelected = $('.dropdown-lang option:last-child').is(':selected'),
			$body = $('body'),
			$loginBox = $('.loginBox'),
			$menuMain = $('.menu-main'),
			$profileMenu = $('.profileMenu');

	if (hebrewIsSelected) {
		toggleTranslationNote();
	}

    
    $('#global-header .auth-menu > div > a:first-child').on('click', function() {
        pageDataTracker.trackEvent('conversionDriverClick', {conversionDriver:{name : 'ssrn-header:register'}});
    });

    $('#global-header .auth-menu > div > a:last-child').click(function(e) {
        pageDataTracker.trackEvent('conversionDriverClick', {conversionDriver:{name : 'ssrn-header:sign-in-or-register'}});
    });

    $('#global-header a[href$="/rankings/Ranking_display.cfm?TRN_gID=10"]').on('click', function() {
        pageDataTracker.trackEvent('conversionDriverClick', {conversionDriver:{name : 'rankings-top-papers'}});
    });

    $('#global-header a[href$="/submissions/CreateNewAbstract.cfm"]').on('click', function() {
        pageDataTracker.trackEvent('conversionDriverClick', {conversionDriver:{name : 'ssrn-header:submit-article'}});
    });

	$('#btnMenu').on('click', function() {
		$body.addClass('nav-is-open');
		$menuMain.addClass('open');
	});

	$('.mo-nav-close-btn').on('click', function() {
		$body.removeClass('nav-is-open');
		$(this).closest('.mo-nav').removeClass('open');
	});

	$('.mo-nav-search-btn').on('click', function() {
		$menuMain.find('.menu-search').toggleClass('open');
	});

	
	
	$(document).on('click','#profile', function(e){
		e.preventDefault();
		$body.toggleClass('nav-is-open');
		$profileMenu.toggleClass('open');
	});
	

	/* Cleaning the email text*/
	$('#txtLogin').bind("change keyup input",function() {
		$(".error_show_login").hide();
		$("#txtLogin").removeClass("loginError");
		$("#errorMessageLogin").hide();
	});

	/* Cleaning the password text*/
	$('.password-inp').bind("change keyup input",function() {
		$(".error_show_pass").hide();
		$("#txtPasswordLogin").removeClass("loginError");
		$("#errorMessageLogin").hide();
	});

	/*Function for encrypt*/
	function encrypt(key1, key2, key3){
		var key = btoa(key1 + "|" + key2 + "|" + key3);
		return key;
	};

	
	function validateFields (){
		var emptyLogin = false;
		var emptyPass = false;

		if(document.getElementById("txtLogin") == null || document.getElementById("txtLogin").value == "")
		{
		$("#txtLogin").addClass('loginError');
		$(".error_show_login").show();
		emptyLogin = true;
		}
		if(document.getElementById("txtPasswordLogin") == null || document.getElementById("txtPasswordLogin").value == "" )
		{
			$("#txtPasswordLogin").addClass('loginError');
			$(".error_show_pass").show();
			emptyPass = true;
		}
		if(emptyLogin == true || emptyPass == true){
			return false;
		}
		return true;
	};

	
	$('.password-inp').keypress(function(event) {
		if (event.keyCode == 13 || event.which == 13) {
			event.preventDefault();
			login();
		}
	});

	
	$('#txtLogin').keypress(function(event) {
		if (event.keyCode == 13 || event.which == 13) {
			event.preventDefault();
			login();
		}
	});

	
	$("#signin").click(function() {
		login();
	});

	
	function login(){
		if (validateFields() != false) {
			var user = document.getElementById("txtLogin").value;
			var pass = document.getElementById("txtPasswordLogin").value;
			var remember = $('.remember-me-check').prop('checked');
			var keyUser = encrypt(user, pass, remember);
			var parameters = {
				"key" : keyUser
			};
			$.ajax({
				type: "POST",
				url: "https://static.ssrn.com/cfc/webServices/loginServices.cfc?method=signinService",
				data: parameters,
				dataType: "jsonp",
				async: false,
				success: function(data) {
					if(data.ILOGINRESULT == 0) {
						var lngPartLogedIn = data.USER.PART_ID;
						buildmenu(lngPartLogedIn);
						$("#name-header div.user-name-overflow").text(data.USER.FULLNAME);
						$("#name-mo-header").text(data.USER.FULLNAME);
						$('#profile').show();
						$("#btnSignin").hide();
						$("#btnRegister").hide();
						$loginBox.removeClass('open');
						$body.removeClass('nav-is-open');
						
						pageData.visitor.loginSuccess = "true";
						pageData.visitor.loginStatus = "logged in";
						pageData.visitor.accessType = "ss:registered-user";
						pageData.visitor.userId = data.USER.ENCRYPT_PART_ID;
						pageDataTracker.trackEvent( 'newPage' , pageData);
						
					} else {
						
						pageData.visitor.loginSuccess = "false";
						pageDataTracker.trackEvent( 'newPage' , pageData);
						
						$("#errorMessageLogin").html(data.MESSAGETOSHOW);
						$("#errorMessageLogin").show();
					}
				}
			});
		} else {
			return false;
		};
	};

	
	function buildmenu(lngPartLogedIn){
		$("#personal").attr("href", "https://hq.ssrn.com/Participant.cfm?rectype=edit&partid=" + lngPartLogedIn + "&perinf=y");
		$("#affil").attr("href", "https://hq.ssrn.com/Affiliations/AffiliationList.cfm?partid=" + lngPartLogedIn);
		$("#suscr").attr("href", "https://hq.ssrn.com/Subscriptions.cfm?partId=" + lngPartLogedIn);
		$("#mypapers").attr("href", "https://hq.ssrn.com/submissions/MyPapers.cfm?partid=" + lngPartLogedIn);
	};

	
	$(document).click(function(event) {
		if(!$(event.target).closest('.header-tooltip').length && $(event.target)[0] != $('#btnSignin')[0] && $(event.target)[0] != $('#profile')[0] ) {
			if($('.header-tooltip').is(":visible") && $('.mo-nav-header').is(":hidden")) {
				$body.removeClass('nav-is-open');
				$('.header-tooltip').removeClass('open');
			}
		}

		// Makes the submenu links accesible by keyboard
		$('.has-sub-menu a')
			.focus(function() {
				$(this).parents("li").addClass("focus");
			})
			.blur(function() {
				$(this).parents("li").removeClass("focus");
			});
	});

	// Show translation notice on change
	$('.dropdown-lang').on('change', function() {
		toggleTranslationNote();
	});

	// Accordion functionality on Footer MO
	var $collapseBtn = $('h4[data-toggle="collapse"]'),
			$collapsableContent = $('.collapsable');

	$collapseBtn.on('click', function(){
		var $this = $(this),
				$parent = $this.parent(),
				$thisCollapsable = $parent.find('.collapsable');

		$collapsableContent.slideUp('fast');

		if ( !$thisCollapsable.is(":visible") ) {
			$thisCollapsable.slideDown('fast');
		}
	});

	// Show translation notice on footer
	function toggleTranslationNote() {
		$('.translation-notice').toggle();
	}
});

	//Language function
	function changeLanguage(lang){
        var curretUrl = window.location.href;
        if(curretUrl.indexOf('&lng') != -1) {
            var new_url = curretUrl.substring(0, curretUrl.indexOf('&lng'));
        }else{
            var new_url = window.location.href;
        }
        window.location.href=new_url+'&lng='+lang;
    }
</script>
<script type="text/javascript" src="https://static.ssrn.com/cfincludes/global_header/dist/app.bundle.js?v=401"></script>
<script type="text/javascript" async="async" src="https://static.ssrn.com/js/image-lazy-load.js"></script>


	<!-- new css -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css" crossorigin="anonymous">
	
	<link rel="stylesheet" type="text/css" href="https://static.ssrn.com/cfincludes/css/custom.min.css?v=401">

	<!-- new abstract css -->
	<link rel="stylesheet" type="text/css" href="https://static.ssrn.com/cfincludes/css/abstract.min.css?v=401">

	
	
















			

			





			






	




	


	
	





	








	

	
	
		
		
		
		
		
		
		
		
		
		
		
		
		
	

	
	
		
		
		
	

















<div id="genericToastr" class="generic-toastr">
	<div class="toastr-icon">
		<i id="toastrIcon"></i>
	</div>
	<div id="toastrMessage" class="toastr-mesage"></div>
	<div class="toastr-close">
		<i class="icon icon-gizmo-delete" onclick="closeToastr()"></i>
	</div>
	<div class="toastr-link"><a id="toastrLink" href="#"></a></div>
</div>



 



	<div class="container abstract-body" id="maincontent">
		<div class="row">
			<div class="col-sm-8 abstract-main-col">
				
				









	
	    












    
    






    
    







    




    



<div class="abstract-buttons ">

    
        
        
        
        
            
            

            
        
            
        
            <div class="button-wrapper inline">
                <a href="Delivery.cfm/SSRN_ID1084585_code254274.pdf?abstractid=1084585&mirid=1" class="button-link primary " data-abstract-id='1084585' data-abstract-title='Conspiracy Theories' >
                    <span><img alt='PDF icon' src='https://static.ssrn.com/cfincludes/img/icons/icon-adobe-pdf.svg' title='PDF icon' />Download This Paper</span>
                    
                </a>
            </div>
        
    
        
    

            
            
                

                
        
            
        
            <div class="button-wrapper inline">
                <a href="Delivery.cfm/SSRN_ID1084585_code254274.pdf?abstractid=1084585&mirid=1&type=2" class="button-link secondary " data-abstract-id='1084585' data-abstract-title='Conspiracy Theories' >
                    <span>Open PDF in Browser</span>
                    
                </a>
            </div>
        
    
        
    
            
        

    






    
        
    


    
            <div class="star-container">
            
                
            
            <a href="#" aria-label="Add to your Library" aria-pressed="false" role="button">
                <i class="icon icon-gizmo-star-outline" data-user-id="1" data-abstract-id="1084585" data-abstract-url="static.ssrn.com" data-abstract-auth="false"></i>
        <span>Add Paper to My Library</span>
        </a>
        </div>
    


</div>











	














	
	    







 



	




	







	




































    



			</div>
			<div class="col-sm-4 abstract-side-col">
				
				
				
					<div class="share-container">
						Share:
						<ul class="list-unstyled ">
							<li><a class="addthis_button_facebook" aria-label="Share on Facebook" role="button"><i class="icon icon-social-facebook" aria-hidden="true"></i></a></li>
							<li><a class="addthis_button_twitter" aria-label="Share on Twitter" role="button"><i class="icon icon-social-twitter" aria-hidden="true"></i></a></li>
							
							<li><a id="socialEmail" href="#" onClick='window.open("Email_Friend.cfm?abid=1084585","Email_Friend","toolbar=no,menubar=no,scrollbars=yes,resizable=yes,width=740,height=600")' aria-label="Share by Email" role="button"><i class="icon icon-gizmo-email" aria-hidden="true"></i></a></li>
							
							<li><a id="permalink" href="#" aria-label="Get Permalink" role="button"><i class="icon icon-gizmo-link" aria-hidden="true"></i></a></li>
						</ul>
					</div>
					<script type="text/javascript" src="https://s7.addthis.com/js/250/addthis_widget.js#pubid=ra-4fb149d9407dcd4b"></script>
					<script type="text/javascript">
						var paperTitle = "Conspiracy Theories";
						var addthis_share = addthis_share || {};
						addthis_share = {
							url: "https://ssrn.com/abstract=1084585",
							passthrough : {
								twitter: {
									
										text: paperTitle + " @SSRN"
									
								}
							}
						}

						function trackEventSocial(platform){
							pageDataTracker.trackEvent('socialShare', {
								social: {
									sharePlatform : platform
								}
							});
						};

						$('.addthis_button_facebook').click(function(e) {
							trackEventSocial('Facebook');
						});

						$('.addthis_button_twitter').click(function(e) {
							trackEventSocial('Twitter');
						});

						$('#socialEmail').click(function(e) {
							trackEventSocial('Email');
						});

						$('#permalink').click(function(e) {
							trackEventSocial('Permalink');
						});

					</script>
				
				
				
				<div class="permalink-tooltip">
					<div class="tooltip-bg"></div>
					<div class="tooltip-container">
					<div class="permalink-title">Permalink</div>
						<div class="permalink-description">Using the URL or DOI link below will ensure access to this page indefinitely</div>
						<div class="permalink-url">
							<input type="text" id="parmalinkURL" readonly class="permalink-input" value="https://ssrn.com/abstract=1084585">
							<a href="#" id="copyURL" class="btn-blue-outline btn-blue-outline-copy">Copy URL</a>
						</div>
						<div class="permalink-doi">
							<input type="text" id="parmalinkDOI" readonly class="permalink-input" value="https://dx.doi.org/10.2139/ssrn.1084585">
							<a href="#" id="copyDOI" class="btn-blue-outline btn-blue-outline-copy">Copy URL</a>
							</div>
						</div>
				</div>
				
			</div>
		</div>
		<div class="row">
			<div class="col-sm-8 abstract-main-col">
				
				


<div class="box-container box-abstract-main">
	
	
		
	

	
	
		
		
	

	
	
	
	<h1>Conspiracy Theories</h1>
	
    
        <div class="reference-info">
            
            
<p><a href="##" onClick='window.open ("http://papers.ssrn.com/sol3/PIP_Journal.cfm?pip_jrnl=221448","PIP","toolbar=yes,menubar=yes,scrollbars=yes,resizable=yes,width=500,height=350");' class='btn-link'> Harvard Public Law Working Paper No. 08-03</a></p> <p><a href="##" onClick='window.open ("http://papers.ssrn.com/sol3/PIP_Journal.cfm?pip_jrnl=231074","PIP","toolbar=yes,menubar=yes,scrollbars=yes,resizable=yes,width=500,height=350");' class='btn-link'> U of Chicago, Public Law Working Paper No. 199</a></p> <p><a href="##" onClick='window.open ("http://papers.ssrn.com/sol3/PIP_Journal.cfm?pip_jrnl=219512","PIP","toolbar=yes,menubar=yes,scrollbars=yes,resizable=yes,width=500,height=350");' class='btn-link'> U of Chicago Law & Economics, Olin Working Paper No. 387</a></p> 

        </div>
    

	

	
	<p class="note note-list">
		
		
			<span>30 Pages</span>
		
		

		<span>Posted: 17 Jan 2008</span>
		
			<span>Last revised: 18 Jan 2010</span>
		
		
				
	</p>
	
		<div class="authors authors-full-width">
			
			




	<a class='lead-author-profile-link' href=https://papers.ssrn.com/sol3/cf_dev/AbsByAuth.cfm?per_id=16333 target='_blank' title='View other papers by this author'><span>See all articles by Cass R. Sunstein</span><i class='icon icon-gizmo-navigate-right' aria-hidden='true'></i></a><h2><A HREF=https://papers.ssrn.com/sol3/cf_dev/AbsByAuth.cfm?per_id=16333 target='_blank' title='View other papers by this author'>Cass R. Sunstein</a></h2><p>Harvard Law School; Harvard University - Harvard Kennedy School (HKS)</p><h2><A HREF=https://papers.ssrn.com/sol3/cf_dev/AbsByAuth.cfm?per_id=231075 target='_blank' title='View other papers by this author'>Adrian Vermeule</a></h2><p>Harvard Law School</p>

		</div>
	
	
	
	
	



	
	
	
	
		
		
	
	
		
			<p>Date Written: January 15, 2008</p>
		
	

	
	
		
		
		
		
		
	

	
	
		
	
	<div class="abstract-text">
		<h3>Abstract</h3>
		<p>Many millions of people hold conspiracy theories; they believe that powerful people have worked together in order to withhold the truth about some important practice or some terrible event. A recent example is the belief, widespread in some parts of the world, that the attacks of 9/11 were carried out not by Al Qaeda, but by Israel or the United States. Those who subscribe to conspiracy theories may create serious risks, including risks of violence, and the existence of such theories raises significant challenges for policy and law. The first challenge is to understand the mechanisms by which conspiracy theories prosper; the second challenge is to understand how such theories might be undermined. Such theories typically spread as a result of identifiable cognitive blunders, operating in conjunction with informational and reputational influences. A distinctive feature of conspiracy theories is their self-sealing quality. Conspiracy theorists are not likely to be persuaded by an attempt to dispel their theories; they may even characterize that very attempt as further proof of the conspiracy. Because those who hold conspiracy theories typically suffer from a crippled epistemology, in accordance with which it is rational to hold such theories, the best response consists in cognitive infiltration of extremist groups. Various policy dilemmas, such as the question whether it is better for government to rebut conspiracy theories or to ignore them, are explored in this light. <P></p>
	</div>
	

	<center>
		
		


	

	
	

		
		

	
	


	</center>

	
	
	
		
	
	
	

	
	
		
		
			
				
			
		
		<p><strong>Keywords:</strong> conspiracy theories, social networks, informational cascades, group polarization</p>
	
	

		

	
	
	

	
	

	
	




	








	



























    	
	
	
	
   	
	
	
	
	
	            
	

















	



	






	



	





	



    

	


	<p>
		<strong class="hidden-xs hidden-sm">Suggested Citation:</strong>
		<a href="#" class="suggested-citation-btn btn-link visible-xs visible-sm">Suggested Citation<i class="icon icon-gizmo-navigate-right"></i></a>
	</p>

	<div id="selectable" onclick="selectText('selectable')" class="suggested-citation">
		
			Sunstein,  Cass R. and Vermeule,  Adrian, Conspiracy Theories (January 15, 2008). Harvard Public Law Working Paper No. 08-03; U of Chicago, Public Law Working Paper No. 199; U of Chicago Law & Economics, Olin Working Paper No. 387. Available at SSRN: <a href="https://ssrn.com/abstract=1084585"  target="_blank">https://ssrn.com/abstract=1084585</a> or <a href="https://dx.doi.org/10.2139/ssrn.1084585" class="textlink" target="_blank">http://dx.doi.org/10.2139/ssrn.1084585 </a>
		
	</div>
	

	
	
	

	<a href="#" class="show-contact-btn btn-link" role="button" aria-label="Show contact information">
		<span aria-hidden="true"></span><i class="icon icon-gizmo-navigate-right" aria-hidden="true"></i>
	</a>

	
	<div class="contact-information">
		

	













	
	
	








	
	
		
		
	




	
	
		
		
	



















	

	

	


	























	
	<div class="author">

		

		

		
		
		

		
		
			
				
					
						<h3><a href="https://papers.ssrn.com/sol3/cf_dev/AbsByAuth.cfm?per_id=16333" target='_blank'>Cass R. Sunstein</a></h3>
					
			
		

		
		
		
		

		
		<div class="block-quote">
			
				
					
					
					
					
					
					
					
					
					
						
						
						


						
					
					<a href="http://hls.harvard.edu/"  target="_blank"><img class="logo" src="https://papers.ssrn.com/Organizations/OrgBrandings/305370_11482.gif"  alt="Harvard Law School"></a>
				
			

			
				
				
				
					
					
					
					
				
					
					
					
						
					
				
			

			
				
				
				


				<h4>Harvard Law School  ( <a href="javascript:void(0)" onClick="pageDataTracker.trackEvent('conversionDriverClick', {conversionDriver:{name : 'article-page:email'}});window.open('GetAuthorEmail.cfm?abid=1084585&pag=papers','Author_Email','toolbar=no,menubar=no,scrollbars=yes,resizable=no,width=700,height=470')">email</a> )</h4>
			

			
			
				
				
				<p>
					<span>1575 Massachusetts Ave<br>Areeda Hall 225<br>Cambridge, MA  02138<br>United States<br>617-496-2291 (Phone)<br></span>
				</p>
				
			

			

		</div>
		
	</div>
	

	
	<div class="author">

		

		

		
		
		

		
		
			
		

		
		
		
		

		
		<div class="block-quote">
			
				
			

			
				
				
				
					
					
					
					
				
					
					
					
						
					
				
			

			
				
				
				


				<h4>Harvard University - Harvard Kennedy School (HKS)  ( <a href="javascript:void(0)" onClick="pageDataTracker.trackEvent('conversionDriverClick', {conversionDriver:{name : 'article-page:email'}});window.open('GetAuthorEmail.cfm?abid=1084585&pag=papers','Author_Email','toolbar=no,menubar=no,scrollbars=yes,resizable=no,width=700,height=470')">email</a> )</h4>
			

			
			
				
				
				<p>
					<span>79 John F. Kennedy Street<br>Cambridge, MA  02138<br>United States<br></span>
				</p>
				
			

			

		</div>
		
	</div>
	

	
	<div class="author">

		

		

		
		
		

		
		
			
				
					
						<h3><a href="https://papers.ssrn.com/sol3/cf_dev/AbsByAuth.cfm?per_id=231075" target='_blank'>Adrian Vermeule (Contact Author)</a></h3>
					
			
		

		
		
		
		

		
		<div class="block-quote">
			
				
					
					
					
					
					
					
					
					
					
						
						
						


						
					
					<a href="http://hls.harvard.edu/"  target="_blank"><img class="logo" src="https://papers.ssrn.com/Organizations/OrgBrandings/305370_11482.gif"  alt="Harvard Law School"></a>
				
			

			
				
				
				
					
					
					
					
				
					
					
					
						
					
				
			

			
				
				
				


				<h4>Harvard Law School  ( <a href="javascript:void(0)" onClick="pageDataTracker.trackEvent('conversionDriverClick', {conversionDriver:{name : 'article-page:email'}});window.open('GetAuthorEmail.cfm?abid=1084585&pag=papers','Author_Email','toolbar=no,menubar=no,scrollbars=yes,resizable=no,width=700,height=470')">email</a> )</h4>
			

			
			
				
				
				<p>
					<span>1525 Massachusetts<br>Griswold 500<br>Cambridge, MA  02138<br>United States<br></span>
				</p>
				
			

			

		</div>
		
	</div>
	





	</div>
	

	
	
		
	

	<div id="mendeley-data-widget" data-abstract-id="1084585" data-mendeley-url="https://www.ssrn.com/n/"></div>
	<script type="text/javascript" src="https://www.ssrn.com/n/react/mendeley/app.bundle.js"></script>
	
</div>

				 
				
				









	
	    












    
    






    
    







    






<div class="abstract-buttons bottom">

    
        
        
        
        
            
            

            
        
            
        
            <div class="button-wrapper inline">
                <a href="Delivery.cfm/SSRN_ID1084585_code254274.pdf?abstractid=1084585&mirid=1" class="button-link primary " data-abstract-id='1084585' data-abstract-title='Conspiracy Theories' >
                    <span><img alt='PDF icon' src='https://static.ssrn.com/cfincludes/img/icons/icon-adobe-pdf.svg' title='PDF icon' />Download This Paper</span>
                    
                </a>
            </div>
        
    
        
    

            
            
                

                
        
            
        
            <div class="button-wrapper inline">
                <a href="Delivery.cfm/SSRN_ID1084585_code254274.pdf?abstractid=1084585&mirid=1&type=2" class="button-link secondary " data-abstract-id='1084585' data-abstract-title='Conspiracy Theories' >
                    <span>Open PDF in Browser</span>
                    
                </a>
            </div>
        
    
        
    
            
        

    







</div>











	














	
	    







 



	




	







	







































				

				<div class="clearfix"></div>
				<div>
					
						<link rel="stylesheet" href="https://static.ssrn.com/cfincludes/references_widget/dist/style.bundle.css?v=401" type="text/css"/>
						<script type="text/javascript" async="async" src="https://static.ssrn.com/cfincludes/references_widget/dist/app.bundle.js?v=401"></script>
						<div id="references-widget" data-server="static.ssrn.com" data-auth="false" data-user-id="1" data-url="https://static.ssrn.com/cfc/abstract/abstract.cfc?method=getReferences&ab_id=1084585&part_lngid=1" data-split="true"></div>
					
					<script type="text/javascript" async="async" src="https://static.ssrn.com/cfincludes/add_to_my_library_module/addToMyLibrary.js?v=401"></script>
					<link rel="stylesheet" href="https://static.ssrn.com/cfincludes/add_to_cart_module/dist/style.bundle.css?v=401" type="text/css"/>
					<script type="text/javascript" async="async" src="https://static.ssrn.com/cfincludes/add_to_cart_module/dist/app.bundle.js?v=401"></script>
					<div id="add-to-cart"></div>
				</div>
			</div>

			<div class="col-sm-4 abstract-side-col no-padding">
				
					<div class="row">
						
						
	










	
	    














	
	    














	
	    







	<div class="box-container box-registration-call-out">
		<h2 class="section-title">Here is the Coronavirus<br>related research on SSRN</h2>
		<div class="stats row">
			
        
            
        
            <div class="button-wrapper inline">
                <a href="https://www.ssrn.com/index.cfm/en/coronavirus/" class="button-link primary "  >
                    <span>View the research</span>
                    
                </a>
            </div>
        
    
        
    
		</div>
	</div>


					</div>
				
				<div class="row">
					
					




	












	
	
	









<div class="box-paper-statics">
	<div class="row">
		<div class="col-xs-12">
			<h2>Paper statistics</h2>
		</div>
	</div>
	
	<div class="stats row">
		

		
		
			 
				<div class="stat col-lg-4">
					<div class="lbl">Downloads</div>
					<div class="number" title="">    44,361</div>
				</div>
			
		

		
		
			<div class="stat col-lg-4">
				<div class="lbl">Abstract Views</div>
				<div class="number" title="">   238,540</div>
			</div>
		

		
		 
		<div class="stat col-lg-4">
			<div title="SSRN compiles rankings of Papers in our system
based on a number of measures,
such as downloads and citations.
To be ranked, a paper must be a publicly available
scholarly full-text paper on SSRN.
Privately available papers
are not considered in these rankings."
			class="lbl">rank</div>
			<div class="number" title="">       30</div>
		</div>
		
	</div>

	<div>
		
			<!--Citations abstract--->
			<link rel="stylesheet" href="https://static.ssrn.com/cfincludes/citations_abstract_widget/dist/style.bundle.css?v=401" type="text/css"/>
			<script type="text/javascript" async="async" src="https://static.ssrn.com/cfincludes/citations_abstract_widget/dist/app.bundle.js?v=401"></script>
			<div id="citations-widget-abstract" data-url="https://static.ssrn.com/cfc/abstract/abstract.cfc?method=getCitedbys&ab_id=1084585&splitByOrigin=true&splitLimit=2&part_lngid=1" data-url-citations="https://papers.ssrn.com/sol3/Citations.cfm?abid=1084585">
			</div>
		
	</div>

	
		
			
			
				<div class="references-citations">
					<a href="#references-widget" title="">
						<span>       11</span>
						<span title="This link gives the references in this paper that have been resolved by our automated systems, with hot links to online versions of each paper where we have been able to locate them.">
						References</span>
					</a>
				</div>
			
		
	
</div>
<div class="row">

	
		<div class="stat plumx col-lg-6">
				<div class="lbl">PlumX Metrics</div>
				<div class="hidden-xs">
					<a href="https://plu.mx/ssrn/a/?ssrn_id=1084585" class="plumx-plum-print-popup" data-popup="left" data-hide-when-empty="false" data-site="ssrn" data-hide-usage="false" data-badge="false"></a>
				</div>
				<div class="visible-xs">
					<a href="https://plu.mx/ssrn/a/?ssrn_id=1084585" class="plumx-plum-print-popup" data-popup="right" data-hide-when-empty="false" data-site="ssrn" data-hide-usage="false" data-badge="false"></a>
				</div>
			</div>
	
</row>


<script type="text/javascript">
//this breaks the add to library of refrences and abstract

// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
// 	anchor.addEventListener('click', function (e) {
		// e.preventDefault();

		// document.querySelector(this.getAttribute('href')).scrollIntoView({
		// 	behavior: 'smooth'
		// });
// 	});
// });
</script>
				</div>
				
				<div class="row">
					




    
        <div class="box-container box-related-journals">
            <h2 class="section-title">Related eJournals</h2>
        <ul class="quick-links">
        
            
            

            

            
                
                

                <li class="related-journal">
                    <p><a href="https://papers.ssrn.com/sol3/JELJOUR_Results.cfm?form_name=journalBrowse&journal_id=164009">University of Chicago Coase-Sandor Institute for Law & Economics Research Paper Series</a></p>
                    <div class="rj-btn-container">
                        
                        
        
            
        
            <div class="button-wrapper inline">
                <a href="javascript:void(0);" class="button-link primary " onclick=trackEventsArticle('https://hq.ssrn.com/jourInvite.cfm?jourid=CMBO_164009&abid=1084585','related-journal'); >
                    <span>Follow</span>
                    
                </a>
            </div>
        
    
        
    

                        <i class="icon icon-gizmo-information" aria-hidden="true"></i>

                        <div class="related-journals-tooltip">
                            <div class="tooltip-bg"></div>
                            <i class="icon icon-gizmo-delete" aria-label="Close Tooltip" role="button"></i>
                            <div class="tooltip-container">
                                <h4 class="rj-title">University of Chicago Coase-Sandor Institute for Law & Economics Research Paper Series</h4>
                                <p class="rj-description">
                                    Subscribe to this free journal for more curated articles on this topic
                                </p>
                                <div class="rj-statistics">
                                    <div class="rj-followers">
                                        <div class="rjs-title">FOLLOWERS</div>
                                        <div class="rjs-description">     5,210</div>
                                    </div>
                                    <div class="rj-papers">
                                        <div class="rjs-title">PAPERS</div>
                                        <div class="rjs-description">      821</div>
                                    </div>
                                </div>
                                
                                    <div class="rj-information">
                                        <div>This Journal is curated by:</div>
                                        <div><b>Omri Ben-Shahar</b> at University of Chicago Law School</div>
                                    </div>
                                
                            </div>
                        </div>
                    </div>
                </li>
            

            

            
        
            
            

            

            
                
                

                <li class="related-journal">
                    <p><a href="https://papers.ssrn.com/sol3/JELJOUR_Results.cfm?form_name=journalBrowse&journal_id=184030">Harvard Law School, Public Law & Legal Theory Research Paper Series</a></p>
                    <div class="rj-btn-container">
                        
                        
        
            
        
            <div class="button-wrapper inline">
                <a href="javascript:void(0);" class="button-link primary " onclick=trackEventsArticle('https://hq.ssrn.com/jourInvite.cfm?jourid=CMBO_184030&abid=1084585','related-journal'); >
                    <span>Follow</span>
                    
                </a>
            </div>
        
    
        
    

                        <i class="icon icon-gizmo-information" aria-hidden="true"></i>

                        <div class="related-journals-tooltip">
                            <div class="tooltip-bg"></div>
                            <i class="icon icon-gizmo-delete" aria-label="Close Tooltip" role="button"></i>
                            <div class="tooltip-container">
                                <h4 class="rj-title">Harvard Law School, Public Law & Legal Theory Research Paper Series</h4>
                                <p class="rj-description">
                                    Subscribe to this free journal for more curated articles on this topic
                                </p>
                                <div class="rj-statistics">
                                    <div class="rj-followers">
                                        <div class="rjs-title">FOLLOWERS</div>
                                        <div class="rjs-description">     5,079</div>
                                    </div>
                                    <div class="rj-papers">
                                        <div class="rjs-title">PAPERS</div>
                                        <div class="rjs-description">      742</div>
                                    </div>
                                </div>
                                
                                    <div class="rj-information">
                                        <div>This Journal is curated by:</div>
                                        <div><b>Carol S. Steiker</b> at Harvard Law School</div>
                                    </div>
                                
                            </div>
                        </div>
                    </div>
                </li>
            

            

            
        
            
            

            
                <div class="more quick-links">
            

            
                
                

                <li class="related-journal">
                    <p><a href="https://papers.ssrn.com/sol3/JELJOUR_Results.cfm?form_name=journalBrowse&journal_id=174573">University of Chicago Law School, Public Law & Legal Theory Research Paper Series</a></p>
                    <div class="rj-btn-container">
                        
                        
        
            
        
            <div class="button-wrapper inline">
                <a href="javascript:void(0);" class="button-link primary " onclick=trackEventsArticle('https://hq.ssrn.com/jourInvite.cfm?jourid=CMBO_174573&abid=1084585','related-journal'); >
                    <span>Follow</span>
                    
                </a>
            </div>
        
    
        
    

                        <i class="icon icon-gizmo-information" aria-hidden="true"></i>

                        <div class="related-journals-tooltip">
                            <div class="tooltip-bg"></div>
                            <i class="icon icon-gizmo-delete" aria-label="Close Tooltip" role="button"></i>
                            <div class="tooltip-container">
                                <h4 class="rj-title">University of Chicago Law School, Public Law & Legal Theory Research Paper Series</h4>
                                <p class="rj-description">
                                    Subscribe to this free journal for more curated articles on this topic
                                </p>
                                <div class="rj-statistics">
                                    <div class="rj-followers">
                                        <div class="rjs-title">FOLLOWERS</div>
                                        <div class="rjs-description">     3,797</div>
                                    </div>
                                    <div class="rj-papers">
                                        <div class="rjs-title">PAPERS</div>
                                        <div class="rjs-description">      733</div>
                                    </div>
                                </div>
                                
                                    <div class="rj-information">
                                        <div>This Journal is curated by:</div>
                                        <div><b>Alison L. LaCroix</b> at University of Chicago Law School, <b>Aziz Z. Huq</b> at University of Chicago - Law School, <b>Richard H. McAdams</b> at University of Chicago Law School</div>
                                    </div>
                                
                            </div>
                        </div>
                    </div>
                </li>
            

            

            
        
            
            

            

            
                
                

                <li class="related-journal">
                    <p><a href="https://papers.ssrn.com/sol3/JELJOUR_Results.cfm?form_name=journalBrowse&journal_id=1504413">Jurisprudence & Legal Philosophy eJournal</a></p>
                    <div class="rj-btn-container">
                        
                        
        
            
        
            <div class="button-wrapper inline">
                <a href="javascript:void(0);" class="button-link primary " onclick=trackEventsArticle('https://hq.ssrn.com/jourInvite.cfm?jourid=CMBO_1504413&abid=1084585','related-journal'); >
                    <span>Follow</span>
                    
                </a>
            </div>
        
    
        
    

                        <i class="icon icon-gizmo-information" aria-hidden="true"></i>

                        <div class="related-journals-tooltip">
                            <div class="tooltip-bg"></div>
                            <i class="icon icon-gizmo-delete" aria-label="Close Tooltip" role="button"></i>
                            <div class="tooltip-container">
                                <h4 class="rj-title">Jurisprudence & Legal Philosophy eJournal</h4>
                                <p class="rj-description">
                                    Subscribe to this fee journal for more curated articles on this topic
                                </p>
                                <div class="rj-statistics">
                                    <div class="rj-followers">
                                        <div class="rjs-title">FOLLOWERS</div>
                                        <div class="rjs-description">     1,284</div>
                                    </div>
                                    <div class="rj-papers">
                                        <div class="rjs-title">PAPERS</div>
                                        <div class="rjs-description">    11,895</div>
                                    </div>
                                </div>
                                
                                    <div class="rj-information">
                                        <div>This Journal is curated by:</div>
                                        <div><b>Brian Bix</b> at University of Minnesota Law School, <b>Matthew D. Adler</b> at Duke University School of Law</div>
                                    </div>
                                
                            </div>
                        </div>
                    </div>
                </li>
            

            

            
        
            
            

            

            
                
                

                <li class="related-journal">
                    <p><a href="https://papers.ssrn.com/sol3/JELJOUR_Results.cfm?form_name=journalBrowse&journal_id=700441">Law, Norms & Informal Order eJournal</a></p>
                    <div class="rj-btn-container">
                        
                        
        
            
        
            <div class="button-wrapper inline">
                <a href="javascript:void(0);" class="button-link primary " onclick=trackEventsArticle('https://hq.ssrn.com/jourInvite.cfm?jourid=CMBO_700441&abid=1084585','related-journal'); >
                    <span>Follow</span>
                    
                </a>
            </div>
        
    
        
    

                        <i class="icon icon-gizmo-information" aria-hidden="true"></i>

                        <div class="related-journals-tooltip">
                            <div class="tooltip-bg"></div>
                            <i class="icon icon-gizmo-delete" aria-label="Close Tooltip" role="button"></i>
                            <div class="tooltip-container">
                                <h4 class="rj-title">Law, Norms & Informal Order eJournal</h4>
                                <p class="rj-description">
                                    Subscribe to this fee journal for more curated articles on this topic
                                </p>
                                <div class="rj-statistics">
                                    <div class="rj-followers">
                                        <div class="rjs-title">FOLLOWERS</div>
                                        <div class="rjs-description">      543</div>
                                    </div>
                                    <div class="rj-papers">
                                        <div class="rjs-title">PAPERS</div>
                                        <div class="rjs-description">     7,596</div>
                                    </div>
                                </div>
                                
                                    <div class="rj-information">
                                        <div>This Journal is curated by:</div>
                                        <div><b>Richard H. McAdams</b> at University of Chicago Law School</div>
                                    </div>
                                
                            </div>
                        </div>
                    </div>
                </li>
            

            

            
        
            
            

            

            
                
                

                <li class="related-journal">
                    <p><a href="https://papers.ssrn.com/sol3/JELJOUR_Results.cfm?form_name=journalBrowse&journal_id=930224">Law & Psychology eJournal</a></p>
                    <div class="rj-btn-container">
                        
                        
        
            
        
            <div class="button-wrapper inline">
                <a href="javascript:void(0);" class="button-link primary " onclick=trackEventsArticle('https://hq.ssrn.com/jourInvite.cfm?jourid=CMBO_930224&abid=1084585','related-journal'); >
                    <span>Follow</span>
                    
                </a>
            </div>
        
    
        
    

                        <i class="icon icon-gizmo-information" aria-hidden="true"></i>

                        <div class="related-journals-tooltip">
                            <div class="tooltip-bg"></div>
                            <i class="icon icon-gizmo-delete" aria-label="Close Tooltip" role="button"></i>
                            <div class="tooltip-container">
                                <h4 class="rj-title">Law & Psychology eJournal</h4>
                                <p class="rj-description">
                                    Subscribe to this fee journal for more curated articles on this topic
                                </p>
                                <div class="rj-statistics">
                                    <div class="rj-followers">
                                        <div class="rjs-title">FOLLOWERS</div>
                                        <div class="rjs-description">      522</div>
                                    </div>
                                    <div class="rj-papers">
                                        <div class="rjs-title">PAPERS</div>
                                        <div class="rjs-description">     4,776</div>
                                    </div>
                                </div>
                                
                                    <div class="rj-information">
                                        <div>This Journal is curated by:</div>
                                        <div><b>Valerie P. Hans</b> at Cornell University - School of Law, <b>Jeffrey J. Rachlinski</b> at Cornell Law School</div>
                                    </div>
                                
                            </div>
                        </div>
                    </div>
                </li>
            

            
                </div>
                
            

            
        
        </ul>
        
                <a href="#" class="view-more" aria-label="View more" role="button"> <i class="icon icon-gizmo-navigate-right" aria-hidden="true"></i></a>
        
        </div>
    

<script>
    $(document).ready(function(){
        if(navigator.appName == "Netscape" && navigator.appVersion.indexOf('Edge') > -1){
            $('.related-journals-tooltip').css('top','32px');
        }
        if(navigator.userAgent.toLowerCase().indexOf('firefox') > -1){
            $('.related-journals-tooltip').css('right','5px');
        }
    });
</script>

				</div>

				<div class="row">
					
					

















    
        <div class="box-container box-recommended-papers">
            <h2 class="section-title">Recommended Papers</h2>
            <ul class="list-recommended-papers">
                
                
                    <li>
                        
                        

                        
                        
                        <p><a href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=225298&rec=1&srcabs=1084585&pos=1" target="_blank">Risk Taking by Mutual Funds as a Response to Incentives</a></p>
                        
                            <p>By
                                
                                
                                    
                                    <a href="https://papers.ssrn.com/sol3/cf_dev/AbsByAuth.cfm?per_id=16290" target="_blank" title="View other papers by this author">Judith A. Chevalier</a>
                                     and 
                                
                                    
                                    <a href="https://papers.ssrn.com/sol3/cf_dev/AbsByAuth.cfm?per_id=21500" target="_blank" title="View other papers by this author">Glenn Ellison</a>
                                    
                                
                            </p>
                        
                        
                    </li>
                
                    <li>
                        
                        

                        
                        
                        <p><a href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=338881&rec=1&srcabs=1084585&pos=2" target="_blank">Mutual Fund Flows and Performance in Rational Markets</a></p>
                        
                            <p>By
                                
                                
                                    
                                    <a href="https://papers.ssrn.com/sol3/cf_dev/AbsByAuth.cfm?per_id=41160" target="_blank" title="View other papers by this author">Richard C. Green</a>
                                     and 
                                
                                    
                                    <a href="https://papers.ssrn.com/sol3/cf_dev/AbsByAuth.cfm?per_id=38880" target="_blank" title="View other papers by this author">Jonathan Berk</a>
                                    
                                
                            </p>
                        
                        
                    </li>
                
                    <li>
                        
                        

                        
                        
                        <p><a href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=383061&rec=1&srcabs=1084585&pos=3" target="_blank">Mutual Fund Flows and Performance in Rational Markets</a></p>
                        
                            <p>By
                                
                                
                                    
                                    <a href="https://papers.ssrn.com/sol3/cf_dev/AbsByAuth.cfm?per_id=41160" target="_blank" title="View other papers by this author">Richard C. Green</a>
                                     and 
                                
                                    
                                    <a href="https://papers.ssrn.com/sol3/cf_dev/AbsByAuth.cfm?per_id=38880" target="_blank" title="View other papers by this author">Jonathan Berk</a>
                                    
                                
                            </p>
                        
                        
                    </li>
                
                <div class="more">
                    
                        <li>
                            
                            

                            
                            
                            <p><a href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=226142&rec=1&srcabs=1084585&pos=4" target="_blank">Career Concerns of Mutual Fund Managers</a></p>
                            
                                <p>By
                                    
                                    
                                        
                                        <a href="https://papers.ssrn.com/sol3/cf_dev/AbsByAuth.cfm?per_id=16290" target="_blank" title="View other papers by this author">Judith A. Chevalier</a>
                                         and 
                                    
                                        
                                        <a href="https://papers.ssrn.com/sol3/cf_dev/AbsByAuth.cfm?per_id=21500" target="_blank" title="View other papers by this author">Glenn Ellison</a>
                                        
                                    
                                </p>
                            

                            
                            
                        </li>
                    
                        <li>
                            
                            

                            
                            
                            <p><a href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=130990&rec=1&srcabs=1084585&pos=5" target="_blank">Career Concerns of Mutual Fund Managers</a></p>
                            
                                <p>By
                                    
                                    
                                        
                                        <a href="https://papers.ssrn.com/sol3/cf_dev/AbsByAuth.cfm?per_id=16290" target="_blank" title="View other papers by this author">Judith A. Chevalier</a>
                                         and 
                                    
                                        
                                        <a href="https://papers.ssrn.com/sol3/cf_dev/AbsByAuth.cfm?per_id=21500" target="_blank" title="View other papers by this author">Glenn Ellison</a>
                                        
                                    
                                </p>
                            

                            
                            
                        </li>
                    
                        <li>
                            
                            

                            
                            
                            <p><a href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=1298325&rec=1&srcabs=1084585&pos=6" target="_blank">The Persistence of Risk-Adjusted Mutual Fund Performance</a></p>
                            
                                <p>By
                                    
                                    
                                        
                                        <a href="https://papers.ssrn.com/sol3/cf_dev/AbsByAuth.cfm?per_id=17581" target="_blank" title="View other papers by this author">Edwin J. Elton</a>, 
                                        
                                    
                                        
                                        <a href="https://papers.ssrn.com/sol3/cf_dev/AbsByAuth.cfm?per_id=20851" target="_blank" title="View other papers by this author">Martin J. Gruber</a>, ...
                                        
                                    
                                </p>
                            

                            
                            
                        </li>
                    
                        <li>
                            
                            

                            
                            
                            <p><a href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=225637&rec=1&srcabs=1084585&pos=7" target="_blank">Are Some Mutual Funds Managers Better than Others? Cross-Sectional Patterns in Behavior and Performance</a></p>
                            
                                <p>By
                                    
                                    
                                        
                                        <a href="https://papers.ssrn.com/sol3/cf_dev/AbsByAuth.cfm?per_id=16290" target="_blank" title="View other papers by this author">Judith A. Chevalier</a>
                                         and 
                                    
                                        
                                        <a href="https://papers.ssrn.com/sol3/cf_dev/AbsByAuth.cfm?per_id=21500" target="_blank" title="View other papers by this author">Glenn Ellison</a>
                                        
                                    
                                </p>
                            

                            
                            
                        </li>
                    
                        <li>
                            
                            

                            
                            
                            <p><a href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=226676&rec=1&srcabs=1084585&pos=8" target="_blank">Hot Hands in Mutual Funds:  the Persistence of Performance, 1974-87</a></p>
                            
                                <p>By
                                    
                                    
                                        
                                        <a href="https://papers.ssrn.com/sol3/cf_dev/AbsByAuth.cfm?per_id=228437" target="_blank" title="View other papers by this author">Darryll Hendricks</a>, 
                                        
                                    
                                        
                                        <a href="https://papers.ssrn.com/sol3/cf_dev/AbsByAuth.cfm?per_id=17128" target="_blank" title="View other papers by this author">Jayendu Patel</a>, ...
                                        
                                    
                                </p>
                            

                            
                            
                        </li>
                    
                        <li>
                            
                            

                            
                            
                            <p><a href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=1299388&rec=1&srcabs=1084585&pos=9" target="_blank">Mutual Fund Styles</a></p>
                            
                                <p>By
                                    
                                    
                                        
                                        <a href="https://papers.ssrn.com/sol3/cf_dev/AbsByAuth.cfm?per_id=2321" target="_blank" title="View other papers by this author">Stephen J. Brown</a>
                                         and 
                                    
                                        
                                        <a href="https://papers.ssrn.com/sol3/cf_dev/AbsByAuth.cfm?per_id=2309" target="_blank" title="View other papers by this author">William N. Goetzmann</a>
                                        
                                    
                                </p>
                            

                            
                            
                        </li>
                    
                        <li>
                            
                            

                            
                            
                            <p><a href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=224417&rec=1&srcabs=1084585&pos=10" target="_blank">The Value of Active Mutual Fund Management: An Examination of the Stockholdings and Trades of Fund Managers</a></p>
                            
                                <p>By
                                    
                                    
                                        
                                        <a href="https://papers.ssrn.com/sol3/cf_dev/AbsByAuth.cfm?per_id=16600" target="_blank" title="View other papers by this author">Narasimhan Jegadeesh</a>, 
                                        
                                    
                                        
                                        <a href="https://papers.ssrn.com/sol3/cf_dev/AbsByAuth.cfm?per_id=173216" target="_blank" title="View other papers by this author">Hsiu-lang Chen</a>, ...
                                        
                                    
                                </p>
                            

                            
                            
                        </li>
                    
                </div>
            </ul>
            
                <a href="#" onclick="" class="view-more" aria-label="view-more" role="button"> <i class="icon icon-gizmo-navigate-right" aria-hidden="true"></i></a>
            
        </div>
    

				</div>
			</div>
		</div>

		<div class="feedback-tab-container">
				<div class="feedback-tab" role="button" tabindex="0">
					<span>Feedback</span>
					<i class="icon icon-gizmo-comment" aria-hidden="true"></i>
				</div>
			</div>
			

<div id="feedbackModule" class="modal-wrapper">
	<div class="modal-custom feedback">
		<i class="icon-gizmo-delete modal-close" aria-label="Close modal" title="Close modal" role="button" tabindex="0"></i>
		<div class="feedback-title">Feedback to SSRN</div>
		<form name="formSuggestions" role="suggestions">
			<div class="feedback-description">
				<label for="txtFeedback">
					<span class="feedback-label">Feedback</span>
					<span class="feedback-required">&nbsp;(required)</span>
				</label>
				<textarea id="txtFeedback" name="txtFeedback" maxlength="1000" placeholder="(1,000 Characters Max)" required></textarea>
			</div>
			<div class="feedback-email">
				<label for="txtEmail">
					<span class="feedback-label">Email</span>
					<span class="feedback-required">&nbsp;(required)</span>
				</label>
				<input type="email" id="txtEmail" name="txtEmail" value="" required>
			</div>
			<button class="btn-orange btn-add-to-cart feedback-submit">
				Submit
				<i class="icon-gizmo-navigate-right" aria-hidden="true"></i>
			</button>
		</form>
		<div class="modal-divider"></div>
		<div class="feedback-information">If you need immediate assistance, call 877-SSRNHelp (877 777 6435) in the United States, or +1 212 448 2500 outside of the United States, 8:30AM to 6:00PM U.S. Eastern, Monday - Friday.</div>
	</div>
</div>

<script language="javascript" type="text/javascript">
	
		var strServer = "papers.ssrn.com";
		var strSugPageName = "/sol3/papers.cfm";
		var strIP = "144.202.76.220";
		var strFullUrl = "papers%2Essrn%2Ecom%2Fsol3%2Fpapers%2Ecfm%3Fabstract%5Fid%3D1084585";
		var sEmail = "";
	
</script>


	</div>

	
	

	




	
	





  
  

	
	
		
	


	
	
		
			
			
		
	
		
	
		
	
		
			
				
			
			
		
	
		
	


	
	
	






	
	
<link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css">



	<!-- includes piwik Trakcer -->
	


	 


<!-- Piwik -->
<script type="text/javascript">
var pkBaseURL = (("https:" == document.location.protocol) ? "https://piwik.ssrn.com/" : "http://piwik.ssrn.com/");
document.write(unescape("%3Cscript src='" + pkBaseURL + "piwik.js' type='text/javascript'%3E%3C/script%3E"));
</script><script type="text/javascript">
try {
var piwikTracker = Piwik.getTracker(pkBaseURL + "piwik.php", 7);





	piwikTracker.setCustomVariable(1, "User", "Unknown","visit");
	piwikTracker.trackPageView();
	piwikTracker.enableLinkTracking();

} catch( err ) {}
</script><noscript><p><img src="https://piwik.ssrn.com/piwik.php?idsite=7" style="border:0" alt="" /></p></noscript>
<!-- End Piwik Tracking Code -->

	<!--Includesss footer -->










<!--FOOTER-->

<nav class="footer-integration footer-redesigned ">
	<div class="container">
		<div class="row">
			
				<div class="footer-col">
                    
        
            
        
            <div class="button-wrapper inline">
                <a href="https://hq.ssrn.com/submissions/CreateNewAbstract.cfm" class="button-link secondary submit-paper-btn"  >
                    <span>Submit a Paper</span>
                    
                        <i class="icon icon-gizmo-navigate-right"></i>
                    
                </a>
            </div>
        
    
        
    
					<a class="section-508-link" href="https://www.ssrn.com/index.cfm/en/section-508/">Section 508 Text Only Pages</a>
				</div>
			
			<div class="footer-col">
				<h4 data-toggle="collapse">SSRN Quick Links <i class="icon-gizmo-navigate-down" aria-hidden="true"></i></h4>
				<ul class="footer-links collapsable">
					<li><a href="https://www.elsevier.com/solutions/ssrn" target="_blank">SSRN Solutions</a></li>
					<li><a href="https://www.ssrn.com/index.cfm/en/rps/">Research Paper Series</a></li>
					<li><a href="https://www.ssrn.com/index.cfm/en/conferences/">Conference Papers</a></li>
					<li><a href="https://papers.ssrn.com/sol3/DisplayPipPublishers.cfm">Partners in Publishing</a></li>
					<li><a href="https://www.ssrn.com/index.cfm/en/Announcements-Jobs/">Jobs &amp; Announcements</a></li>
					<li><a target="_blank" href="https://communications.elsevier.com/webApp/els_doubleOptInWA?do=0&srv=els_SSRN&sid=153&uif=0&uvis=3">Newsletter Sign Up</a></li>
				</ul>
			</div>
			<div class="footer-col">
				<h4 data-toggle="collapse">SSRN Rankings <i class="icon-gizmo-navigate-down" aria-hidden="true"></i></h4>
				<ul class="footer-links collapsable">
					<li><a href="https://hq.ssrn.com/rankings/Ranking_display.cfm?TRN_gID=10">Top Papers</a></li>
					<li><a href="https://www.ssrn.com/index.cfm/en/top-authors/">Top Authors</a></li>
					<li><a href="https://www.ssrn.com/index.cfm/en/top-organizations/">Top Organizations</a></li>
				</ul>
			</div>
			<div class="footer-col">
				<h4 data-toggle="collapse">About SSRN <i class="icon-gizmo-navigate-down" aria-hidden="true"></i></h4>
				<ul class="footer-links collapsable">
					<li><a href="https://www.ssrn.com/index.cfm/en/ssrns-objectives/">SSRN Objectives</a></li>
					<li><a href="https://www.ssrn.com/index.cfm/en/network-directors/">Network Directors</a></li>
					<li><a href="https://www.ssrn.com/index.cfm/en/presidents-letter/">Presidential Letter</a></li>
					<li><a href="https://www.ssrn.com/index.cfm/en/recent-announcements/">Announcements</a></li>
					<li><a href="https://www.ssrn.com/index.cfm/en/contactus/">Contact us</a></li>
					<li><a href="https://www.ssrn.com/index.cfm/en/ssrn-faq/">FAQs</a></li>
				</ul>
			</div>
			
		</div>
		<ul class="footer-social-links">
			<li><a target="_blank" href="https://www.facebook.com/SSRNcommunity/" aria-label="Facebook" role="link"><i class="icon icon-social-facebook" aria-hidden="true"></i></a></li>
			<li><a target="_blank" href="https://www.linkedin.com/company/493409?trk=tyah&trkInfo=clickedVertical%3Acompany%2CentityType%3AentityHistoryName%2CclickedEntityId%3Acompany_493409%2Cidx%3A0" aria-label="Linkedin" role="link"><i class="icon icon-social-linkedin" aria-hidden="true"></i></a></li>
			<li><a target="_blank" href="https://twitter.com/SSRN" aria-label="Twitter" role="link"><i class="icon icon-social-twitter" aria-hidden="true"></i></a></li>
			<li style="display:none;"><a target="_blank" href="javascript:void(0);" role="button"><i class="icon icon-social-googleplus" aria-hidden="true"></i></a></li>
		</ul>
		<div class="footer-elsevier">
			<div class="footer-left">
				<a class="logo-elsevier" target="_blank" href="https://www.elsevier.com/"></a>
			</div>
			<div class="footer-left">
				<div class="footer-links">
					<a href="https://www.ssrn.com/index.cfm/en/dmca-notice-policy/">Copyright</a>
					<a href="https://www.ssrn.com/index.cfm/en/terms-of-use/">Terms and Conditions</a>
					<a href="https://www.elsevier.com/legal/privacy-policy" target="_blank">Privacy Policy</a>
				</div>
				<div class="footer-text">
					<p>We use cookies to help provide and enhance our service and tailor content.<br/>By continuing, you agree to the use of cookies. To learn more, visit <a href="https://www.ssrn.com/index.cfm/en/ssrn-faq/#cookies">our Cookies page</a>.
					<span class="icon-gizmo-lightning alwaysshowme">
						<span class="tooltip top" role="tooltip">
							<span class="tooltip-arrow"></span>
							<span class="tooltip-inner">This page was processed by aws-apollo5 in <span id="serverTime">  0.219</span> seconds <span id="loadingtime"></span></span>
						</span>
					</span>
					</p>
				</div>
			</div>
			<div class="footer-right">
				<a class="logo-relx" target="_blank" href="http://www.relx.com/"></a>
			</div>
		</div>
	</div>
</nav>
<!--END FOOTER-->




	


	





	<a href="https://papers.ssrn.com/sol3/updateInformationLog.cfm?process=true"><img src="header/pixel.gif" border="0" alt=" " width="1" height="1"></a>

	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js?v=401"></script>
	<script src="https://static.ssrn.com/cfincludes/generic-toastr/generic-toastr.js?v=401"></script>
	<script src="https://static.ssrn.com/cfincludes/copy2clipboard/copy2clipboard.js?v=401"></script>
	<script src="https://static.ssrn.com/cfincludes/feedback-module/feedback-module.js?v=401"></script>
	<script src="https://papers.ssrn.com/sol3/Scripts/versions-groups.js?v=401"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js?v=401" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
<script src="Scripts/papers.js?v=401" type="text/javascript"></script>
	<script type="text/javascript" src="//d39af2mgp1pqhg.cloudfront.net/widget-popup.js?v=401"></script>
</body>










	




	

</html>
