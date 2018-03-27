function validate_frm_subscribe(theForm) {
  var reason = "";
  reason += validateFN(theForm.txtfirstname);
  reason += validateLN(theForm.txtlastname);
  reason += validateEmailB(theForm.txtemail);
  reason += validateValidation(theForm.security_code);
 
  if (reason != "") {
    alert("Some fields need correction:\n" + reason);
    return false;
  }

  return true;
}
function validate_frm_register(theForm) {
  var reason = "";
  reason += validateFN(theForm.txtfirstname);
  reason += validateLN(theForm.txtlastname);
  reason += validateEmailB(theForm.txtemail);
  reason += validateLocation(theForm.sellocation);
  reason += validateValidation(theForm.security_code);
 
  if (reason != "") {
    alert("Some fields need correction:\n" + reason);
    return false;
  }

  return true;
}

function validateEmailB(fld) {
    var error="";
    var tfld = trim(fld.value);                        // value of field with whitespace trimmed off
    var emailFilter = /^[^@]+@[^@.]+\.[^@]*\w\w$/ ;
    var illegalChars= /[\(\)\<\>\,\;\:\\\"\[\]]/ ;
   
    if (fld.value == "") {
        fld.style.background = '#FFFFC6';
        error = "You must enter an Email address.\n";
		
    } else if (!emailFilter.test(tfld)) {              //test email for illegal characters
        fld.style.background = '#FFFFC6';
        error = "Please enter a valid Email address.\n";
		
    } else if (fld.value.match(illegalChars)) {
        fld.style.background = '#FFFFC6';
        error = "The Email address contains illegal characters.\n";
		
    } else {
        fld.style.background = 'White';
    }
    return error;
}
function validateValidation(fld) {
    var error = "";
 
    if (fld.value.length == 0) {
        fld.style.background = '#FFFFC6'; 
		error = "You must enter the Security Validation.\n";
		
    } else {
        fld.style.background = 'White';
    }
    return error;  
}

function validateLocation(fld) {
	var error = "";
    var cnt = -1;
    for (var i=fld.length-1; i > -1; i--) {
        if (fld[i].checked) {cnt = i; i = -1;}
    }
    if (cnt == -1) 
		error = "You must select a Location.\n";
	 return error; 
}

function validateLN(fld) {
    var error = "";
 
    if (fld.value.length == 0) {
        fld.style.background = '#FFFFC6'; 
		error = "You must enter a Last Name.\n";
		
    } else {
        fld.style.background = 'White';
    }
    return error;  
}
function validateFN(fld) {
    var error = "";
 
    if (fld.value.length == 0) {
        fld.style.background = '#FFFFC6'; 
        error = "You must enter a First Name.\n";
		
    } else {
        fld.style.background = 'White';
    }
    return error;  
}
function validateEmpty(fld) {
    var error = "";
 
    if (fld.value.length == 0) {
        fld.style.background = 'Yellow'; 
        error = "The required field has not been filled in.\n"
		
    } else {
        fld.style.background = 'White';
    }
    return error;  
}
function validateEmail(fld) {
    var error="";
    var tfld = trim(fld.value);                        // value of field with whitespace trimmed off
    var emailFilter = /^[^@]+@[^@.]+\.[^@]*\w\w$/ ;
    var illegalChars= /[\(\)\<\>\,\;\:\\\"\[\]]/ ;
   
    if (fld.value == "") {
        fld.style.background = 'Yellow';
        error = "You didn't enter an email address.\n";
		
    } else if (!emailFilter.test(tfld)) {              //test email for illegal characters
        fld.style.background = 'Yellow';
        error = "Please enter a valid email address.\n";
		
    } else if (fld.value.match(illegalChars)) {
        fld.style.background = 'Yellow';
        error = "The email address contains illegal characters.\n";
		
    } else {
        fld.style.background = 'White';
    }
    return error;
}
function trim(s)
{
  return s.replace(/^\s+|\s+$/, '');
}