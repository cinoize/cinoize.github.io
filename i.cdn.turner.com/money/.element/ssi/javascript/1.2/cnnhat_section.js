var thisDomain = document.domain;
if (thisDomain == 'moneypreview.turner.com' || thisDomain == 'money.cnn.com' || thisDomain == 'beta.money.cnn.com')
	urlPrefix = '';
else
	urlPrefix = 'http://money.cnn.com';

//document.write('<div style="background-color: #2a6f00;color:#fff;padding:3px 10px;font:normal 14px Arial;">Introducing the new and improved CNNMoney.com: <a href="'+ urlPrefix +'/galleries/2007/pf/0702/gallery.cnnmoney2/index.html" style="font-weight:bold;color:FFF;">Take a Tour to See All New Features</a></div>');
var R = new String(document.referrer);
if(R.length > 0 && R.indexOf("www.cnn.com") > -1) {
	document.write("<div align=\"right\"><a href=\"/cnn\"><img src=\"http://i.cnn.net/money/.element/img/1.0/banner/back_to_CNNcom_tab.gif\" alt=\"\" width=\"180\" height=\"19\" hspace=\"0\" vspace=\"0\" border=\"0\"></a></div>");
}
else{
	if(R.length > 0 && R.indexOf("finance.yahoo.com") > -1) 
		document.write("<div><a href=\"http://finance.yahoo.com\"><img src=\"http://i.cnn.net/money/.element/img/1.0/partner_logos/yahoo.130x30.gif\" alt=\"\" border=\"0\"></a></div>");
	else{
		if(R.length > 0 && R.indexOf("beta.cnn.com") > -1) {
			document.write("<div align=\"right\"><a href=\"http://beta.cnn.com\"><img src=\"http://i.cnn.net/money/.element/img/1.0/banner/back_to_CNNcom_beta_tab.gif\" alt=\"\" width=\"180\" height=\"19\" hspace=\"0\" vspace=\"0\" border=\"0\"></a></div>");
		}
	}
}

