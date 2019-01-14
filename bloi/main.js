var endpoint = "https://www.jsonstore.io/8ba4fd855086288421f770482e372ccb5a05d906269a34da5884f39eed0418a1";

function geturl(){
    var url = document.getElementById("urlinput").value;
    var protocol_ok = url.startsWith("http://") || url.startsWith("https://") || url.startsWith("ftp://");
    if(!protocol_ok){
        newurl = "http://"+url;
        return newurl;
        }else{
            return url;
        }
}
function decode64(input) {
 
    var keyStr = "ABCDEFGHIJKLMNOP" +
    "QRSTUVWXYZabcdef" +
    "ghijklmnopqrstuv" +
    "wxyz0123456789+/" +
    "=";
 
    var output = "";
 
    var chr1, chr2, chr3 = "";
 
    var enc1, enc2, enc3, enc4 = "";
 
    var i = 0;
 
    // remove all characters that are not A-Z, a-z, 0-9, +, /, or =
 
    var base64test = /[^A-Za-z0-9\+\/\=]/g;
 
    if (base64test.exec(input)) {
 
        alert("There were invalid base64 characters in the input text.\n" +
 
        "Valid base64 characters are A-Z, a-z, 0-9, '+', '/',and '='\n" +
 
        "Expect errors in decoding.");
 
    }
 
    input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
 
    do {
 
        enc1 = keyStr.indexOf(input.charAt(i++));
 
        enc2 = keyStr.indexOf(input.charAt(i++));
 
        enc3 = keyStr.indexOf(input.charAt(i++));
 
        enc4 = keyStr.indexOf(input.charAt(i++));
 
        chr1 = (enc1 << 2) | (enc2 >> 4);
 
        chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
 
        chr3 = ((enc3 & 3) << 6) | enc4;
 
        output = output + String.fromCharCode(chr1);
 
        if (enc3 != 64) {
 
            output = output + String.fromCharCode(chr2);
 
        }
 
        if (enc4 != 64) {
 
            output = output + String.fromCharCode(chr3);
 
        }
 
        chr1 = chr2 = chr3 = "";
 
        enc1 = enc2 = enc3 = enc4 = "";
 
 
 
    } while (i < input.length);
 
 
    return decodeURI(output);
 
}
function getrandom() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 5; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
}

function genhash(){
    if (window.location.hash == ""){
        window.location.hash = getrandom();
    }
}

function send_request2(url,hac) {
    this.url = url;
    $.ajax({
        'url': endpoint + "/" + hac,
        'type': 'POST',
        'data': JSON.stringify(this.url),
        'dataType': 'json',
        'contentType': 'application/json; charset=utf-8'
})
}
function send_request(url) {
    this.url = url;
    $.ajax({
        'url': endpoint + "/" + window.location.hash.substr(1),
        'type': 'POST',
        'data': JSON.stringify(this.url),
        'dataType': 'json',
        'contentType': 'application/json; charset=utf-8'
})
}

function shorturl(){
    var longurl = geturl();
    genhash();
    send_request(longurl);
}

var hashh = window.location.hash.substr(1);

if (window.location.hash != "") {
    $.getJSON(endpoint + "/" + hashh, function (data) {
        
	data = data["result"];

        if (data != null) {
            window.location.href = data;
        } 

    }).fail(function(){ 
	newurl =    window.location.hash.substr(1);
        console.log(newurl);
	if (newurl.startsWith("ITE")) { 
	newurl = newurl.substr(3); 
	newurl = decode64(newurl);
	console.log(newurl);
	}
        newhash= getrandom();
	send_request2(newurl,newhash);

	$.getJSON(endpoint + "/" + newhash, function (data) {
	  data=data["result"];
        if (data !=null) {        
	window.location.href=data+"#"+newhash;
        } else { window.location.href=newurl +"#BROK"+"/"+newhash; }
	});
	});

}

