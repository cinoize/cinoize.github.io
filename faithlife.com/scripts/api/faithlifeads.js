// jshint evil: true
(function (win, doc) {
	var currentRequestId = 0, // use to give every JSONP callback a unique identifier
		head = doc.getElementsByTagName('head')[0],
		callbacks = {};

	function getUrl(zones, denomination, platform, target) {
		var url = '//serve.faithlifeads.com/www/delivery/spc.php',
			random = Math.floor(Math.random() * 99999999999),
			zoneids = '';

		for (var zonename in zones) {
			zoneids += encodeURIComponent(zonename + '=' + zones[zonename] + '|');
		}
		zoneids += '&nz=1';

		url += '?zones=' + zoneids + '&r=' + random + '&block=1';
		url += doc.charset ? '&charset=' + doc.charset : (doc.characterSet ? '&charset=' + doc.characterSet : '');

		if (denomination)
			url += '&denomination=' + denomination;

		if (platform)
			url += '&platform=' + platform;

		if (target)
			url += '&target=' + target;

		if (win.location)
			url += '&loc=' + encodeURIComponent(win.location);

		if (doc.referrer)
			url += '&referer=' + encodeURIComponent(doc.referrer);

		return url;
	}

	function jsonp(url, callback) {
		var script = doc.createElement('script'), // the script to insert into the document to place the request
			callbackName = 'cb' + (currentRequestId++), // generated unique callback function name
			fqCallback = 'faithlifeAds.callbacks.' + callbackName; // fully qualified callback name to avoid polluting the global namespace

		// save a reference to the callback
		callbacks[callbackName] = function () {
			// clean up the callback reference (the reference to the function we're currently in)
			delete callbacks[callbackName];

			// clean up the script element
			script.parentNode.removeChild(script);

			// execute the callback passed to us
			callback.apply(null, Array.prototype.slice.call(arguments));
		};

		// inject the callback function name into the URL
		url += (/\?/.test(url) ? '&' : '?') + 'callback=' + fqCallback;

		script.src = url;

		// make the request
		head.insertBefore(script, head.firstChild);
	}

	function randomString() {
		var charSet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz',
			string = '',
			len = 8,
			rnum,
			i;

		for (i = 0; i < len; i++) {
			rnum = Math.floor(Math.random() * charSet.length);
			string += charSet.substring(rnum, rnum + 1);
		}
		return string;
	}

	function initAds(disableEval) {
		var faithlifeAdElements = win.document.getElementsByTagName('faithlife:ad'),
			adElementArray = [],
			width = win.innerWidth || screen.width,
			zones = {},
			denomination,
			platform,
			target,
			i, ii;

		// push elements onto static array
		for (i = 0, ii = faithlifeAdElements.length; i < ii; i++) {
			adElementArray.push(faithlifeAdElements[i]);
		}

		// aggregate zone information
		for (i = 0, ii = adElementArray.length; i < ii; i++) {
			(function (elFaithlifeAd) {
				var zone = elFaithlifeAd.getAttribute('zone'),
					minWidth = elFaithlifeAd.getAttribute('min-width'),
					maxWidth = elFaithlifeAd.getAttribute('max-width'),
					zoneName = randomString();

				if ((minWidth && width < minWidth) || (maxWidth && width > maxWidth)) {
					elFaithlifeAd.isHidden = true; // hide ads outside of width range
				}
				else {
					zones[zoneName] = zone;
					elFaithlifeAd.name = zoneName;
				}

				if (!denomination)
					denomination = elFaithlifeAd.getAttribute('denomination');

				if (!target)
					target = elFaithlifeAd.getAttribute('target');

				if (!platform) {
					if (navigator.userAgent.indexOf('Kindle') > 0 || navigator.userAgent.indexOf('Silk') > 0) {
						platform = 'Kindle';
					}
					else if (navigator.userAgent.indexOf('Android') > 0) {
						platform = 'Android';
					}
					else if (navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 || navigator.userAgent.indexOf('iPod') > 0) {
						platform = 'iOS';
					}
					else if (navigator.userAgent.indexOf('Windows NT 6.2') > 0 || navigator.userAgent.indexOf('Windows NT 6.3') > 0) {
						platform = 'Windows8';
					}
					else if (navigator.userAgent.indexOf('Windows NT') > 0) {
						platform = 'Windows';
					}
					else if (navigator.userAgent.indexOf('Mac OS X') > 0) {
						platform = 'MacOSX';
					}
				}
			} (adElementArray[i]));
		}

		jsonp(getUrl(zones, denomination, platform, target), function (data) {
			// replace <faithlife:faithlifead> tags with ad widget
			for (i = 0, ii = adElementArray.length; i < ii; i++) {
				(function (elFaithlifeAd) {
					if (data[elFaithlifeAd.name] && !elFaithlifeAd.isHidden && elFaithlifeAd.parentNode) {
						var elAdContainer = doc.createElement('div'),
							onLoad = elFaithlifeAd.getAttribute('onload');

						elAdContainer.className = 'ad-widget';
						elAdContainer.innerHTML = data[elFaithlifeAd.name];
						elAdContainer.getElementsByTagName('img').onload = disableEval ? null : eval(onLoad);
						elFaithlifeAd.parentNode.replaceChild(elAdContainer, elFaithlifeAd);
					}
				})(adElementArray[i]);
			}
		});
	}

	if (win.faithlifeAds && win.faithlifeAds.init) {
		initAds();
		win.faithlifeAds.callbacks = callbacks;
	}
	else {
		win.faithlifeAds = {
			callbacks: callbacks,
			init: function (disableEval) {
				initAds(disableEval);
			}
		};
	}
})(window, document);
