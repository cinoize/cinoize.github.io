
function Format(value,style,oOptions) {
	return format_data.FormatVal(value,style,oOptions);
}

// js number formatting for etrade
format_data = function() {

	this.error = [];
	this.error["-32768"] = "--";
	this.error["NA"] = "--";
	this.error["--"] = "--";
	this.error["NaN"] = "--";

	this.magnitudes = {
		shortcap : ["", "K", "M", "B", "T"],
		longspace : ["", " thousand", " million", " billion", " trillion"],
		longcap : ["", "Thousand", "Million", "Billion", "Trillion"],
		longcapspace : ["", " Thousand", " Million", " Billion", " Trillion"]
	};
}

format_data.prototype.FormatVal = function(value,style,oOptions) 
{
	var valueOrig = value;
	if (this.error[value]) {
		return this.error[value]; // return error
	}
	try {
		return this[style](value, valueOrig,oOptions);
	} catch (e) {
		return '--';
	}
}

// :: Basic Number Formatting ::
format_data.prototype.Price = function(value,valueOrig) 
{
	value = value.toFixed(this.SigDigitsAll(valueOrig));
	value = this.comma(value);
	return value;
}
format_data.prototype.PriceNoDecimal = function(value,valueOrig) 
{
	value = value.toFixed(0);
	value = this.comma(value);
	return value;
}
format_data.prototype.IndexPriceNoDecimal = function(value,valueOrig)
{
	value = value.toFixed(0);
	value = this.comma(value);
	return value;
}
format_data.prototype.ToHundredth = function(value,valueOrig) 
{
	value = value.toFixed(2);
	value = this.comma(value);
	return value;
}
format_data.prototype.PriceCurrency = function(value,valueOrig) 
{
	value = value.toFixed(4);
	return value;
}
format_data.prototype.PriceCurrencyColor = function(value,valueOrig) 
{
	value = value.toFixed(4);
	value = this.color(value,valueOrig);
	return value;
}
format_data.prototype.FullVolume = function(value,valueOrig) 
{
	value = value.toFixed(0);
	value = this.comma(value);
	return value;
}
format_data.prototype.ShortMagnitude = function(value,valueOrig) 
{
	value = this.getMagnitude(1,valueOrig,"shortcap");
	return value;
}

format_data.prototype.PriceColor = function(value,valueOrig) 
{
	value = value.toFixed(this.SigDigits(valueOrig));
	value = this.comma(value);
	value = this.showSign(value,valueOrig);
	value = this.color(value,valueOrig);
	return value;
}
format_data.prototype.PriceColorNoDecimal = function(value,valueOrig) 
{
	value = value.toFixed(0);
	value = this.comma(value);
	value = this.showSign(value,valueOrig);
	value = this.color(value,valueOrig);
	return value;
}
format_data.prototype.PercentParensColor = function(value,valueOrig) {
	value = value.toFixed(this.SigDigits(valueOrig));
	value = this.comma(value);
	value = value+"%";
	value = this.showSign(value,valueOrig);
	value = this.colorParens(value,valueOrig);
	return value;
}
format_data.prototype.PercentColor = function(value,valueOrig) {
	value = value.toFixed(2);
	value = this.comma(value);
	value = value+"%";
	value = this.showSign(value,valueOrig);
	value = this.color(value,valueOrig);
	return value;
}
format_data.prototype.PlainPercent = function(value,valueOrig) {
	value = value.toFixed(2);
	value = this.comma(value);
	value = value+"%";
	return value;
}
format_data.prototype.PercentPrecision = function(value,valueOrig) {
	value = value.toFixed(3);
	value = this.comma(value);
	value = value+"%";
	return value;
}
format_data.prototype.bid_ask = function(value,valueOrig) 
{
	value = value * 100;
	value = value.toFixed(0);
	value = 'x'+this.comma(value);
	return value;
}

// :: Basic DateTime Formatting ::
format_data.prototype.timestamp = function(value,valueOrig) 
{
	var t =  new Date(value);
	var day = t.getDate();
	var mon = t.getMonth();
	var year = t.getFullYear();
	var h = t.getHours();
	var minute = t.getMinutes() + '';
	var utc = t.getTimezoneOffset() / 60;
	var utcHour = h + utc;
	if (utcHour > 11) {
		if (utcHour == 12) {
			utcHour = 12;
		} else {
			utcHour = (utcHour - 12);
		}
		var ampm = 'PM';
	} else { var ampm = 'AM'; }
	if (minute.length == 1) {minute = '0'+minute;}
	
	return utcHour+':'+minute+ ' '+ampm+' ET '+(mon+1)+'/'+day+'/'+year;
}

format_data.prototype.ShortTime = function(value,valueOrig,oOptions) 
{
	if (!oOptions) { oOptions = {}; }
	var t =  new Date(value);
	var day = t.getDate();
	var mon = t.getMonth();
	var year = t.getFullYear();
	var h = t.getHours();
	var minute = t.getMinutes() + '';
	var seconds = "";
	if (oOptions.showSeconds){
		seconds = t.getSeconds()+'';
	}
	var utc = t.getTimezoneOffset() / 60;
	var utcHour = h + utc;
	if (utcHour > 11) {
		if (utcHour == 12) {
			utcHour = 12;
		} else {
			utcHour = (utcHour - 12);
		}
		var ampm = 'pm';
	} else { var ampm = 'am'; }
	if (minute.length == 1) {minute = '0'+minute;}
	if (seconds.length == 1) {seconds = '0'+seconds;}
	
	return [utcHour, ':', minute, (oOptions.showSeconds) ? ':' + seconds : '' , ampm ,' ET'].join("");
}

// :: Last Trade Time ::
format_data.prototype.LastTradeTime = function(value,valueOrig) 
{
	var t =  new Date(value);
	var day = t.getDate();
	var mon = t.getMonth();
	var year = t.getFullYear();
	var h = t.getHours();
	var minute = t.getMinutes() + '';
	var seconds = t.getSeconds() + '';
	var utc = t.getTimezoneOffset() / 60;
	var utcHour = h + utc;
	if (utcHour > 11) {
		if (utcHour == 12) {
			utcHour = 12;
		} else {
			utcHour = (utcHour - 12);
		}
		var ampm = 'PM';
	} else { var ampm = 'AM'; }
	if (minute.length == 1) {minute = '0'+minute;}
	
	//format like this ---> Data as of 3:05 PM ET, 10/09/2009
	
	return utcHour+':'+minute+':'+seconds+' '+ampm+' ET '+(mon+1)+'/'+day+'/'+year;
}

format_data.prototype.ShortDate = function(value, valueOrig){
	var t =  new Date(value);
	var day = t.getDate();
	var mon = t.getMonth();
	
	if(mon < 10){
		mon = "0" + mon;
	}
	
	var year = t.getFullYear();
	return (mon + 1)+'/'+day+'/'+year;
}

// :: Helper Functions ::
format_data.prototype.color = function(value,valueOrig) 
{
	if (valueOrig > 0) {
		value = '<span class="posData">'+value+'</span>';
	} else if (valueOrig < 0) {
		value = '<span class="negData">'+value+'</span>';
	} else {
		value = '<span class="unchanged">'+value+'</span>';
	}
	return value;
}
format_data.prototype.colorParens = function(value,valueOrig) 
{
	if (valueOrig > 0) {
		value = '<span class="posData">('+value+')</span>';
	} else if (valueOrig < 0) {
		value = '<span class="negData">('+value+')</span>';
	} else {
		value = '<span class="unchanged">('+value+')</span>';
	}
	return value;
}
format_data.prototype.showSign = function(value,valueOrig) 
{
	if (valueOrig > 0.0001) {
		value = '+'+value;
	}
	return value;
}
format_data.prototype.SigDigits = function(valueOrig) 
{
	valueOrig = Math.abs(valueOrig);
	if (valueOrig > 999) {
		return 0;
	} else if (valueOrig < .01 && valueOrig > 0) {
		return 4;
	} else {
		return 2;
	}
}
format_data.prototype.SigDigitsAll = function(valueOrig) 
{
	valueOrig = String(valueOrig.toFixed(4)) + '';
	x = valueOrig.split('.');
	x1 = x[1];
	var len = Number(x1.length);

	var testString = String(x[1]);
	if (testString.charAt(len - 1) == '0') {
		len--;
		if (testString.charAt(len - 1) == '0') {
			len--;
		}
	}
	
	if (len > 3) {
		return 4;
	} else if (len > 2) {
		return 3;
	} else {
		return 2;
	}
}
format_data.prototype.getMagnitude = function(numDigits,valueOrig,type) 
{
	valueOrig = Math.abs(valueOrig);
	var c = 0;
	while (valueOrig >= 1000 && c < 4) {
		valueOrig /= 1000;
		c++;
	}
	value = valueOrig.toFixed(numDigits);
	return value + this.magnitudes[type][c];
}
format_data.prototype.comma = function(value) 
{ // eh, copied this function from somewhere
	value += '';
	x = value.split('.');
	x1 = x[0];
	x2 = x.length > 1 ? '.' + x[1] : '';
	var rgx = /(\d+)(\d{3})/;
	while (rgx.test(x1)) {
		x1 = x1.replace(rgx, '$1' + ',' + '$2');
	}
	return x1 + x2;
}

format_data.prototype.MsToJsDate = function(value){
	var dF = (value - 25568) * 86400000;
 	var t =  new Date(dF);
 	return t;
}

//--------------------------------------------------------------------------
// :: Simple String Format Method's ::
//--------------------------------------------------------------------------
format_data.prototype.trim = function(value, valueOrig, oOptions) {
	//Usage:: var sString = Format(string,"trim",{len:100, tail:'...'});
	if (oOptions && oOptions.len) {
		var len = oOptions.len; // string length
	} else {
		var len = 100;
	}

	if (oOptions && oOptions.tail) {
		var tail = oOptions.tail;
	} else {
		var tail = '';
	}

	try {
		if (valueOrig.length < 1 || valueOrig == " " || valueOrig == "undefined") {
			valueOrig = "n.a.";
		} else if (valueOrig.length > len) {
			if (tail) {
				valueOrig = valueOrig.substr(0, len) + tail;
			} else {
				if (valueOrig.length + 3 > len)
					valueOrig = valueOrig.substr(0, valueOrig.length - (valueOrig.length - len)) + '...';
			}
		} else {
			if (oOptions.forceTail) {
				valueOrig = valueOrig + tail;
			}
		}
	} catch (e) {
		valueOrig = "n.a.";
	}

	return valueOrig;
}

var format_data = new format_data();