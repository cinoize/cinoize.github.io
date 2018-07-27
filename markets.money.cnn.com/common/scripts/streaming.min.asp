/** HTTPStream.1.js */
var HTTPStream = (function() {
	function noop() {
		return null
	}
	if (!window.console) {
		this.console = {
			log: noop,
			warn: noop,
			error: noop,
			info: noop
		}
	}

	function createEvents(events, context) {
		var create = noop;
		if (window.jQuery) {
			var eventEl = jQuery("<div />");
			create = function(context, property, label) {
				var e = {
					fire: function() {
						eventEl.trigger(label, arguments)
					},
					addListener: function(fn) {
						var handler;
						if (fn instanceof Function) {
							handler = fn
						} else if (fn && fn.handler) {
							if (fn.context) {
								handler = function() {
									fn.handler.apply(fn.context, arguments)
								}
							} else {
								handler = fn.handler
							}
						}
						eventEl.bind(label, handler);
						return handler
					},
					removeListener: function(handler) {
						eventEl.unbind(label, handler)
					}
				};
				context[property] = function() {
					return e
				}
			}
		} else if (window.EventManager) {
			var em = new EventManager();
			create = function(context, property, label) {
				var e = em.add(label);
				context[property] = function() {
					return e
				}
			}
		} else {
			console.warn("HTTPStream.createEvents: Neither jQuery 1.3+ nor Events.3+ was found.")
		}
		createEvents = function(events, context) {
			for (var i in events) {
				if (events.hasOwnProperty(i)) {
					create(context, i, events[i])
				}
			}
		};
		createEvents(events, context)
	}

	function Transport(streamRequest) {
		var getReadyState, getStatus, getResponse, open, close;
		var theStreamTransport = this;

		function addEvent(el, type, fn) {
			if (window.jQuery) {
				jQuery(el).bind(type, fn)
			} else if (window.EventManager) {
				new EventManager().add(el, type, fn)
			}
		}
		createEvents({
			ontransportready: "transportready"
		}, theStreamTransport);
		this.ontransportready().addListener(function() {
			theStreamTransport.getReadyState = getReadyState;
			theStreamTransport.getStatus = getStatus;
			theStreamTransport.getResponse = getResponse;
			theStreamTransport.open = open;
			theStreamTransport.close = close
		});

		function initHTMLFile() {
			var setDomain = "",
				getTransferFrameBody;
			var htmlFile = new ActiveXObject("htmlfile");
			htmlFile.open();
			if (streamRequest.isXDomain) {
				setDomain = "<script>document.domain='" + document.domain + "';</script>"
			}
			htmlFile.write("<html><head>" + setDomain + "</head><body><iframe name='transferIframe'></iframe></body></html>");
			htmlFile.close();
			addEvent(window, "unload", function() {
				htmlFile = null;
				CollectGarbage()
			});
			open = function(URL) {
				if (streamRequest.isXDomain) {
					URL += "&xdomain=" + streamRequest.rootDomain
				}
				if (htmlFile.body.childNodes.length) {
					htmlFile.body.childNodes[0].src = URL
				}
			};
			close = function() {
				if (htmlFile.body.childNodes.length) {
					htmlFile.body.childNodes[0].src = 'about:blank'
				}
				var transferFrameBody = getTransferFrameBody();
				if (transferFrameBody) {
					transferFrameBody.innerHTML = ""
				}
			};
			getStatus = function() {
				return 200
			};
			getTransferFrameBody = function() {
				var frame;
				try {
					frame = htmlFile.frames.transferIframe;
					if (frame && frame.document) {
						return frame.document.body
					}
				} catch (e) {
					console.warn("initHTMLFile: getTransferFrameBody error: ", e.message)
				}
				return null
			};
			getResponse = function() {
				var response, transferFrameBody = getTransferFrameBody();
				if (transferFrameBody) {
					response = transferFrameBody.innerText;
					if (response) {
						return response
					}
				}
				return null
			};
			getReadyState = function() {
				var iframe, readyState;
				if (htmlFile && htmlFile.body) {
					iframe = htmlFile.body.childNodes[0];
					if (iframe) {
						readyState = iframe.readyState;
						if ("interactive" == readyState) {
							return 3
						} else if ("complete" == readyState) {
							return 4
						}
					}
				}
				return 0
			}
		}

		function initXMLHttpRequest(ownerWindow) {
			var xhr = new ownerWindow.XMLHttpRequest();
			addEvent(ownerWindow, "unload", function() {
				xhr.abort()
			});
			open = function(URL) {
				close();
				xhr.open("GET", URL, true);
				xhr.send(true)
			};
			close = function() {
				xhr.abort()
			};
			getStatus = function() {
				try {
					return xhr.status
				} catch (e) {
					return -1
				}
			};
			getResponse = function() {
				return xhr.responseText
			};
			getReadyState = function() {
				return xhr.readyState
			}
		}

		function initXDomainProxy() {
			var XDOMAIN_PROXY_PATH = "/includes/jslib/httpstream/xdomainproxy.asp?xdomain=";
			var createFrame, buildURL, proxy;
			createFrame = function(id) {
				var name, iframe, iframeDocument;
				name = 'HTTPStream_' + id + "_" + new Date().getTime();
				iframe = document.createElement("iframe");
				iframe.style.display = 'none';
				iframe.setAttribute("name", name);
				iframe.setAttribute("id", name);
				document.body.appendChild(iframe);
				if (window[name]) {
					iframeDocument = window[name]
				} else {
					iframeDocument = window.frames[name]
				}
				return {
					iframe: iframe,
					iframeDocument: iframeDocument
				}
			};
			buildURL = function() {
				var protocol = "http://",
					path = XDOMAIN_PROXY_PATH;
				if (streamRequest.isSecure) {
					protocol = "https://"
				}
				return protocol + streamRequest.fullDomain + path + streamRequest.rootDomain
			};
			proxy = createFrame("xDomainProxy");
			addEvent(proxy.iframe, "load", function() {
				initTransport(proxy.iframeDocument)
			});
			proxy.iframeDocument.location.replace(buildURL())
		}

		function initTransport(ownerWindow) {
			if (window.ActiveXObject) {
				initHTMLFile()
			} else if (window.XMLHttpRequest) {
				initXMLHttpRequest(ownerWindow || window)
			} else {
				getReadyState = getResponse = getStatus = open = close = function() {
					return null
				}
			}
			theStreamTransport.ontransportready().fire()
		}
		this.init = function() {
			if (streamRequest.isXDomain) {
				if (window.ActiveXObject) {
					initTransport()
				} else {
					initXDomainProxy()
				}
			} else {
				initTransport()
			}
		}
	}

	function Request(URL) {
		var rootDomain = "",
			fullDomain = "",
			isXDomain = false,
			isSecure = false,
			reHTTPProtocol = /https*:\/\//,
			reSlashes = /[\/\\]/,
			reCacheBust = /&_cachebust_=[0-9]+/,
			testURL = String(URL).toLowerCase();
		if (0 === testURL.indexOf("http")) {
			fullDomain = testURL.replace(reHTTPProtocol, "").split(reSlashes)[0];
			if (fullDomain != String(document.domain).toLowerCase()) {
				isXDomain = true
			}
			isSecure = (0 === testURL.indexOf("https"))
		}

		function isDomainMatch(domain) {
			var testDomain = String(domain).toLowerCase();
			if (fullDomain.indexOf(testDomain) != -1) {
				return true
			}
			return false
		}

		function setRootDomain(domain) {
			rootDomain = domain;
			document.domain = domain
		}

		function checkDomains() {
			var domainParts;
			if (isXDomain) {
				domainParts = String(document.domain).split(".");
				for (var i = 1, len = domainParts.length, testDomain; i < len; i++) {
					testDomain = domainParts.join(".");
					if (isDomainMatch(testDomain)) {
						setRootDomain(testDomain);
						break
					}
					domainParts.shift()
				}
				if (!rootDomain) {
					console.warn("HTTPStream.Request", "Streaming domains mismatch. This violates same origin rules.")
				}
			}
		}
		checkDomains();

		function getURL() {
			return URL
		}

		function setURL(newValue) {
			URL = newValue
		}

		function cacheBustURL() {
			var value = new Date().getTime();
			URL = String(URL).replace(reCacheBust, "");
			URL += "&_cachebust_=" + value
		}
		return {
			getURL: getURL,
			setURL: setURL,
			cacheBustURL: cacheBustURL,
			isXDomain: isXDomain,
			isSecure: isSecure,
			rootDomain: rootDomain,
			fullDomain: fullDomain
		}
	}

	function Client() {
		var WAIT_TIME = 250,
			MIN_WAIT_TIME = 250,
			NO_UPDATE_RETRY = 20,
			BASE_RETRY_WAIT_TIME = 5,
			MAX_BAD_CONNECTION_RETRY = 3,
			MAX_BAD_CONNECTION_RETRY_SCALAR = 3;
		var lastLen = 0,
			noUpdateCount = 0,
			updateCount = 0,
			messageCount = 0,
			connectionCount = 0,
			badConnectionCount = 0,
			badConnectionRetryAttempts = 0;
		var parseResponseTimeout, badConnectionRetryTimeout;
		var theStreamClient = this,
			streamTransport = null,
			streamRequest = null,
			reNewLine = /(^\r\n)|(\n$)/;
		createEvents({
			onupdate: "update",
			onconnect: "connect",
			ondisconnect: "disconnect"
		}, theStreamClient);

		function connect() {
			setTimeout(function() {
				streamTransport.open(streamRequest.getURL())
			}, 0);
			connectionCount++;
			theStreamClient.onconnect().fire(streamRequest.getURL());
			parseResponseTimeout = setTimeout(parseResponse, MIN_WAIT_TIME)
		}

		function disconnect() {
			clearTimeout(parseResponseTimeout);
			lastLen = 0;
			noUpdateCount = 0;
			updateCount = 0;
			messageCount = 0;
			theStreamClient.ondisconnect().fire()
		}

		function disconnectAndClose() {
			disconnect();
			streamTransport.close();
			theStreamClient.close = disconnect
		}

		function reconnect() {
			disconnect();
			connect()
		}

		function nextResponse(update) {
			if (!update) {
				noUpdateCount++
			} else {
				noUpdateCount = 0;
				updateCount++
			}
			if (4 == streamTransport.getReadyState()) {
				if (updateCount > 1) {
					goodConnection();
					reconnect()
				} else {
					console.warn("Only %o messages were received during life of stream", updateCount);
					badConnection()
				}
			} else if (noUpdateCount > NO_UPDATE_RETRY) {
				console.warn("hit maximum number of parseResponse intervals without seeing an update (%o). Stream appeared to stall.", NO_UPDATE_RETRY);
				badConnection()
			} else {
				parseResponseTimeout = setTimeout(parseResponse, WAIT_TIME)
			}
		}

		function parseResponse() {
			var update, raw, msg;
			var status = streamTransport.getStatus();
			if (200 == status) {
				raw = streamTransport.getResponse();
				if (raw) {
					raw = String(raw);
					if (raw.length > lastLen) {
						msg = raw.substr(lastLen, raw.length).replace(reNewLine, "").split("\n");
						if (msg && msg.length) {
							for (var i = 0, msgLength = msg.length; i < msgLength; i++) {
								if (msg[i]) {
									messageCount++;
									theStreamClient.onupdate().fire(msg[i])
								}
							}
							update = true;
							lastLen = raw.length
						}
					}
				}
			}
			nextResponse(update)
		}

		function badConnection() {
			badConnectionCount++;
			if (streamRequest) {
				streamRequest.cacheBustURL()
			}
			if (badConnectionCount < MAX_BAD_CONNECTION_RETRY) {
				reconnect()
			} else {
				badConnectionCount = 0;
				if (badConnectionRetryAttempts < MAX_BAD_CONNECTION_RETRY_SCALAR) {
					badConnectionRetryAttempts++
				}
				var retryWaitTime = Math.pow(BASE_RETRY_WAIT_TIME, badConnectionRetryAttempts) * 1000;
				console.warn("Have hit bad connection maximum (%o) times. %o ms wait before retry.", MAX_BAD_CONNECTION_RETRY, retryWaitTime);
				disconnect();
				badConnectionRetryTimeout = setTimeout(connect, retryWaitTime)
			}
		}

		function goodConnection() {
			badConnectionCount = 0;
			badConnectionRetryAttempts = 0;
			clearTimeout(badConnectionRetryTimeout)
		}
		this.getConnectionCount = function() {
			return connectionCount
		};
		this.getUpdateCount = function() {
			return updateCount
		};
		this.getMessageCount = function() {
			return messageCount
		};
		this.open = function(connectToURL) {
			this.close();

			function go() {
				goodConnection();
				connect();
				theStreamClient.close = disconnectAndClose
			}
			if (!streamTransport) {
				streamRequest = new Request(connectToURL);
				streamTransport = new Transport(streamRequest);
				streamTransport.ontransportready().addListener(go);
				streamTransport.init()
			} else {
				streamRequest.setURL(connectToURL);
				go()
			}
		};
		this.close = disconnect;
		this.setMaxConnectionCount = function(max) {
			console.warn("HTTPStream.Client.setMaxConnectionCount is deprecated. Doesn't seem useful, stop using it.")
		};
		this.setWaitTime = function(time) {
			WAIT_TIME = Math.max(time, MIN_WAIT_TIME)
		};
		this.setNoUpdateRetry = function(retry) {
			NO_UPDATE_RETRY = retry
		}
	}
	return {
		createEvents: createEvents,
		Transport: Transport,
		Request: Request,
		Client: Client
	}
})();

/**
 * StreamManager.js
 */
 function StreamManager() {
	 this.params = (function() {
		 return {
			 alertHistoryDays: 7,
			 bestAvailableQuote: true,
			 connectionTimeout: 300,
			 datePrecision: "default",
			 feedSelectionGroup: "default",
			 gmtOffset: 0,
			 hasHeartbeat: true,
			 isRealtime: false,
			 isTextMode: false,
			 lockRequests: false,
			 messageHistory: 5,
			 outputVersion: 1,
			 pathStreamserver: "/Streamserver/streamserver.dll",
			 sessionid: false,
			 siteid: false,
			 setNoUpdateRetry: "default",
			 showAlerts: false,
			 showConsoleMessages: false,
			 suppressErrors: false,
			 suppressInitialEvents: false,
			 threadRollup: 5000,
			 verboseEvents: true,
			 waitTime: "default"
		 }
	 })();
	 this.HTTPStreamMap = (function() {
		 return {
			 "a": ["symbol", "date", "ask", "size", "realtime"],
			 "A": ["symbol", "date", "ask", "size", "realtime"],
			 "b": ["symbol", "date", "bid", "size", "realtime"],
			 "B": ["symbol", "date", "bid", "size", "realtime"],
			 "e": ["symbol"],
			 "g": ["guid"],
			 "h": ["date"],
			 "i": [],
			 "j": [],
			 "l": ["date", "xml"],
			 "m": ["symbol", "date", "last"],
			 "n": ["date", "dockey", "sourceId", "source", "symbol", "headline", "teaser"],
			 "q": ["symbol", "open", "high", "low", "close", "high52W", "low52W", "beta", "divAnn", "divPaymentDate", "divExDate", "epsTTM", "shares", "volume100D", "openInterest", "isRestricted", "fcdFeed"],
			 "t": ["symbol", "date", "last", "shares", "volume", "change", "changePct", "sequence", "modifier"],
			 "z": []
		 }
	 })();
	 this._createCustomEventTypes()
 }
 StreamManager.prototype.init = function(params) {
	 for (var x in params) {
		 if (params.hasOwnProperty(x)) {
			 this.params[x] = params[x]
		 }
	 }
	 this.messages = [];
	 if (!this.HTTPStream) {
		 this.HTTPStream = new HTTPStream.Client();
		 var hs = this.HTTPStream;
		 hs.onconnect().addListener({
			 handler: this._onHTTPStreamConnect,
			 context: this
		 });
		 hs.ondisconnect().addListener({
			 handler: this._onHTTPStreamDisconnect,
			 context: this
		 });
		 hs.onupdate().addListener({
			 handler: this._onHTTPStreamUpdate,
			 context: this
		 })
	 }
 };
 StreamManager.prototype.setParam = function(param, val) {
	 this.params[param] = val
 };
 StreamManager.prototype.start = function() {
	 if (!this.HTTPStream) {
		 this.init()
	 }
	 var url = this._getURL();
	 if (url) {
		 this.HTTPStream.open(url)
	 }
 };
 StreamManager.prototype.stop = function() {
	 if (this.HTTPStream) {
		 this.HTTPStream.close()
	 }
 };
 StreamManager.prototype.restart = function() {
	 this.stop();
	 this.start()
 };
 StreamManager.prototype._createCustomEventTypes = function() {
	 HTTPStream.createEvents({
		 "onStreamAlert": "streamAlert",
		 "onStreamAsk": "streamAsk",
		 "onStreamBid": "streamBid",
		 "onStreamBidAskMidpoint": "streamBidAskMidpoint",
		 "onStreamConnect": "streamConnect",
		 "onStreamDisconnect": "streamDisconnect",
		 "onStreamError": "streamError",
		 "onStreamHeartbeat": "streamHeartbeat",
		 "onStreamInit": "streamInit",
		 "onStreamInitComplete": "streamInitComplete",
		 "onStreamQuote": "streamQuote",
		 "onStreamNews": "streamNews",
		 "onStreamTrade": "streamTrade",
		 "onStreamUpdate": "streamUpdate"
	 }, this)
 };
 StreamManager.prototype._addMessageLog = function(message) {
	 var params = this.params;
	 var len = params.messageHistory;
	 var messages = this.messages;
	 if (len && len > 0) {
		 if (messages.length >= len) {
			 messages.shift()
		 }
		 messages.push(message);
		 if ("raw" == params.showConsoleMessages) {
			 try {
				 window.console.log(new Date().toString(), message)
			 } catch (e) {}
		 }
	 }
 };
 StreamManager.prototype._translateVerboseMessage = function(type, msg) {
	 var map = this.HTTPStreamMap[type];
	 var params = this.params;
	 var out = {};
	 if (map) {
		 var thisMsg;
		 for (var x = 0, xLen = msg.length; x < xLen; x++) {
			 var m = map[x];
			 if (m) {
				 thisMsg = msg[x];
				 out[m] = (thisMsg && "!" != thisMsg) ? thisMsg : false;
				 var o = out[m];
				 if ("date" == m) {
					 o *= 1000;
					 o -= (params.gmtOffset * 60 * 1000);
					 if ("high" == params.datePrecision) {
						 var t = new Date().getTime();
						 var diff = 1000 - (t - (Math.floor(t / 1000) * 1000));
						 o += diff
					 }
				 }
				 out[m] = o
			 }
		 }
	 } else {
		 try {
			 window.console.warn("Couldn't find HTTPStream map entry for %o (%o)", type, msg)
		 } catch (err) {}
	 }
	 return out
 };
 StreamManager.prototype._onHTTPStreamConnect = function(eventType, message) {
	 this.onStreamConnect().fire(message)
 };
 StreamManager.prototype._onHTTPStreamDisconnect = function(eventType, message) {
	 this.onStreamDisconnect().fire(message)
 };
 StreamManager.prototype._fireEvent = function(event, msg) {
	 if (true === this.params.suppressInitialEvents && this.isInitializing) {
		 return
	 }
	 event.fire(msg)
 };
 StreamManager.prototype._onHTTPStreamUpdate = function(e, msgRaw) {
	 var params = this.params;
	 var bShowConsoleMessages = params.showConsoleMessages;
	 if (!e || !msgRaw || 0 === msgRaw.length) {
		 return
	 }
	 this._addMessageLog(msgRaw);
	 var msg = msgRaw.split(/\s/);
	 var streamEventRaw = msg.shift();
	 if (!streamEventRaw) {
		 return
	 }
	 if ("string" != typeof streamEventRaw) {
		 streamEventRaw.toString()
	 }
	 var streamEvent = streamEventRaw.charAt(0);
	 var streamEventModifier = false;
	 if (/[yp]/.test(streamEvent)) {
		 streamEventModifier = streamEvent;
		 streamEvent = streamEventRaw.charAt(1)
	 }
	 var uid = false;
	 var symbol = false;
	 if (streamEvent) {
		 var isSymbolEvent = /[abeqmt]/i.test(streamEvent);
		 uid = (streamEventRaw.length > 1) ? streamEventRaw.split(streamEvent)[1] : false;
		 if (isSymbolEvent) {
			 symbol = this._getSymbolByUID(uid);
			 msg.unshift(symbol.symbolWSODIssue);
			 if ("t" == streamEvent) {
				 msg.push(streamEventModifier)
			 }
		 }
		 if (params.verboseEvents) {
			 msg = this._translateVerboseMessage(streamEvent, msg)
		 }
		 switch (streamEvent) {
			 case "a":
			 case "A":
				 this._fireEvent(this.onStreamAsk(), msg);
				 break;
			 case "b":
			 case "B":
				 this._fireEvent(this.onStreamBid(), msg);
				 break;
			 case "e":
				 if (!symbol.error || !params.suppressErrors) {
					 this._fireEvent(this.onStreamError(), msg)
				 }
				 break;
			 case "g":
				 this.guid = msg;
				 break;
			 case "h":
				 this._fireEvent(this.onStreamHeartbeat(), msg);
				 break;
			 case "i":
				 this._fireEvent(this.onStreamInit());
				 this.isInitializing = true;
				 break;
			 case "j":
				 this.isInitializing = false;
				 this._fireEvent(this.onStreamInitComplete());
				 break;
			 case "l":
				 this._fireEvent(this.onStreamAlert(), msg);
				 break;
			 case "m":
				 this._fireEvent(this.onStreamBidAskMidpoint(), msg);
				 break;
			 case "n":
				 if (params.verboseEvents) {
					 if (msg.symbol) {
						 msg.symbol = msg.symbol.split(/\|/);
						 for (var i = msg.symbol.length - 1; i >= 0; i--) {
							 if (!msg.symbol[i].length) {
								 msg.symbol.splice(i, 1)
							 }
						 }
					 }
					 msg.uid = uid
				 }
				 this._fireEvent(this.onStreamNews(), msg);
				 break;
			 case "q":
				 this._fireEvent(this.onStreamQuote(), msg);
				 break;
			 case "t":
				 this._fireEvent(this.onStreamTrade(), msg);
				 break;
			 case "z":
				 break;
			 default:
		 }
		 if (symbol) {
			 if ("e" == streamEvent) {
				 if (!symbol.error) {
					 symbol.error = true
				 }
			 } else {
				 if (symbol.error) {
					 symbol.error = false
				 }
			 }
		 }
		 if (bShowConsoleMessages && "boolean" == typeof bShowConsoleMessages) {
			 try {
				 window.console.log(new Date().toString(), streamEvent, msg.toSource())
			 } catch (err) {}
		 }
		 this._fireEvent(this.onStreamUpdate(), msg)
	 }
 };
 StreamManager.prototype._getSymbolByUID = function(uid) {
	 var s = this.symbols;
	 for (var x in s) {
		 if (uid == s[x].uid) {
			 return s[x]
		 }
	 }
	 return false
 };
 StreamManager.prototype.addSymbol = function(symbolObj) {
	 if (symbolObj.constructor == Array) {
		 for (var x = 0; x < symbolObj.length; x++) {
			 this._addSymbol(symbolObj[x])
		 }
	 } else {
		 this._addSymbol(symbolObj)
	 }
 };
 StreamManager.prototype._mergeEvents = function(oldEvents, newEvents) {
	 if (/t/.test(oldEvents) && /T/.test(newEvents)) {
		 oldEvents = oldEvents.replace(/t/g, "T")
	 }
	 return oldEvents
 };
 StreamManager.prototype._addSymbol = function(symbolObj) {
	 var s = ("object" == typeof symbolObj) ? symbolObj.symbolWSODIssue : symbolObj;
	 if (!this.symbols) {
		 this.symbols = {}
	 }
	 if (s) {
		 if (this.symbols[s]) {
			 if (symbolObj.events && this.symbols[s].events) {
				 this.symbols[s].events = this._mergeEvents(this.symbols[s].events, symbolObj.events)
			 }
		 } else {
			 this.symbols[s] = {
				 symbolWSODIssue: s,
				 events: symbolObj.events || "t"
			 };
			 if (symbolObj.isRealtime) {
				 this.symbols[s].isRealtime = true
			 }
		 }
	 }
 };
 StreamManager.prototype.removeSymbol = function(symbolWSODIssue) {
	 if (this.symbols[symbolWSODIssue]) {
		 delete this.symbols[symbolWSODIssue]
	 }
 };
 StreamManager.prototype.removeAllSymbols = function() {
	 this.symbols = {}
 };
 StreamManager.prototype.addNews = function(newsObj) {
	 if (newsObj.constructor == Array) {
		 for (var x = 0; x < newsObj.length; x++) {
			 this._addNews(newsObj[x])
		 }
	 } else {
		 return this._addNews(newsObj)
	 }
 };
 StreamManager.prototype._addNews = function(newsObj) {
	 var news = {};
	 for (var x in newsObj) {
		 if (newsObj.hasOwnProperty(x)) {
			 news[x] = newsObj[x]
		 }
	 }
	 this.news.push(news);
	 return this.news.length - 1
 };
 StreamManager.prototype.removeAllNews = function() {
	 this.news = []
 };
 StreamManager.prototype._isRequestValid = function() {
	 return this._length(this.symbols) > 0 || this._length(this.news) > 0
 };
 StreamManager.prototype._length = function(arr) {
	 var count = 0;
	 for (var n in arr) {
		 if (arr.hasOwnProperty(n)) {
			 count++
		 }
	 }
	 return count
 };
 StreamManager.prototype._getURL = function() {
	 var params = this.params;
	 if (!this._isRequestValid || !this._isRequestValid()) {
		 try {
			 window.console.warn("Not enough data to request stream.  use a public add method.")
		 } catch (err) {}
		 return false
	 }
	 if (params.lockRequests) {
		 try {
			 window.console.log("Request locked.")
		 } catch (errLock) {}
		 return false
	 }
	 var url = [];
	 url.push("Version=" + params.outputVersion);
	 url.push("Rollup=" + params.threadRollup);
	 url.push("Timeout=" + params.connectionTimeout);
	 if ("default" == params.waitTime) {
		 this.HTTPStream.setWaitTime(Math.max(250, Math.ceil(params.threadRollup / 2)))
	 } else {
		 this.HTTPStream.setWaitTime(params.waitTime)
	 }
	 if (params.sessionid) {
		 url.push("sessionid=" + params.sessionid)
	 }
	 if (params.siteid) {
		 url.push("siteid=" + params.siteid)
	 }
	 if (!params.siteid && !params.sessionid) {
		 try {
			 window.console.error("StreamManager error: sessionid OR siteid is required.  You must set it using StreamManager.prototype.setParam('sessionid', <user\'s session id>) prior to calling init.")
		 } catch (errSession) {}
		 return false
	 }
	 if (params.hasHeartbeat) {
		 url.push("Heartbeat")
	 }
	 if (params.bestAvailableQuote) {
		 url.push("Quote.BestAvailable=" + (params.bestAvailableQuote ? 1 : 0))
	 }
	 if ("default" != params.feedSelectionGroup) {
		 url.push("FeedSelection.Group=" + params.feedSelectionGroup)
	 }
	 if (params.isTextMode) {
		 url.push("TextMode")
	 }
	 if (params.showAlerts) {
		 url.push("Alerts=" + params.alertHistoryDays)
	 }
	if(params.timezone) {
		url.push("TimeZone=" + params.timezone);
	}
	 var symbolCount = 0;
	 for (var thisSymbol in this.symbols || {}) {
		 if (this.symbols.hasOwnProperty(thisSymbol)) {
			 var s = this.symbols[thisSymbol];
			 s.uid = symbolCount++;
			 var qs = [s.uid, s.symbolWSODIssue, s.events];
			 if (params.isRealtime || s.isRealtime) {
				 qs.push("1")
			 } else {
				 qs.push("0")
			 }
			 url.push("Quote=" + qs.join(","))
		 }
	 }
	 var newsCount = 0;
	 for (var thisNews in this.news || {}) {
		 if (this.news.hasOwnProperty(thisNews)) {
			 var n = this.news[thisNews];
			 if (!n) {
				 continue
			 }
			 n.uid = newsCount++;
			 var newsQs = [];
			 if (n.inputs) {
				 newsQs = [n.uid, "V2"];
				 for (var y in n.inputs) {
					 if (n.inputs.hasOwnProperty(y)) {
						 newsQs.push([y, n.inputs[y]].join("="))
					 }
				 }
			 } else {
				 newsQs = [n.uid, n.symbolWSODIssue, n.rowCount, n.maxAge, "ID=" + n.dmId]
			 }
			 url.push("News=" + newsQs.join(","))
		 }
	 }
	 url = [params.pathStreamserver, "?", url.join("&")].join("");
	 return url
 };


/**
 * Wall Street On Demand - Streaming
 */
if (typeof wsod_js == "undefined" || !wsod_js){ wsod_js = {}; }

wsod_js.streaming = {

	streamStarted: false,

	/**
	 * Config
	 */
	config: {
		SITE_ID:				2536
		,CONNECTION_TIMEOUT:	180
		,STREAMING_ENABLED: 	true
		,URL_PREFIX:			"//markets.money.cnn.com/"
		,STREAM_URL:			"//streamer.money.cnn.com" //prod
		,TIMEZONE_OFFSET:		0 // leave this at 0
		,TIMEZONE:				-5 // Input for streamserver that makes output return in ET
		,FEEDS:{
			"sungard":true,
			"batsus":true
		}
		,RT:{
			579435:1,//Nasdaq
			575769:1, //S P
			599362:1, //dow
			256471344:1 //Bitcoin
		}
		,NO_STREAM: {
			//599362: true
		}
		,DOW_ISSUE: 			599362
		,DOW_REFRESH_RATE: 		120//2 mins
		,STREAM_TYPES:			["last",		"change",		"changePct"]  //volume
		,STREAM_FORMATS:		["ToHundredth",	"PriceColor",	"PercentColor"] //FullVolume
		,STREAM_INTERVAL:		2000
		,UP_ARROW:				"//i.cdn.turner.com/money/.element/img/3.0/data/arrowUp.gif"
		,DOWN_ARROW:			"//i.cdn.turner.com/money/.element/img/3.0/data/arrowDown.gif"
		,NOCHANGE_ARROW:		"//i.cdn.turner.com/money/.element/img/3.0/data/noChangeArrow.gif"
		,USE_BG_COLORS:			false
		,TBILLS:{
			588119:true,
			572094:true,
			590469:true
		}
		,FX:{
			617254:true,
			616660:true,
			572971:true,
			618341:true,
			614258:true
		}
		,TBILL_FACTOR:10
		,COMMODITY_FACTOR:100
		,COMMODITIES_ADJ:{115314631:"multiply",114548702:"multiply",114512756:"multiply"}
	},

	/**
	 * Array for all the HTML spans we'll stream into
	 */
	streamingSpans: [],

	/**
	 * Actually starts the stream
	 */
	initializeStream: function(){

		this.stream = {};
		//symbol handling
		this.symbolCount = 0;
		this.streamSyms = {};
		for (var feed in this.config.FEEDS){
			this.streamSyms[feed] = [];

			//get issues. no issues? DO NOT START STREAM
			this.getStreamSymbols(feed);

			//get symbols for THIS FEED ONLY
			this.streamSyms[feed] = this.removeDuplicatesFromArray(this.streamSyms[feed]);
		};

		function initStreamManager(feed) {
			//init new streamManager for EACH feed
			this.stream[feed] = new StreamManager();

			//set params per feed
			this.setParamsAndSymbols(feed);
			this.stream[feed].start();
		}

		//check all feeds for any of them have symbols
		//this check eliminates quotes from feeds we don't want to stream, e.g. TelekursTP
		for (var feed in this.config.FEEDS){
			if (this.streamSyms[feed].length > 0){
				initStreamManager.call(this, feed);
				this.streamStarted = true;
			}
		}

		this.startDowTimer();
	},

	/**
	 * Sets up some basic stream parameters
	 */
	setParamsAndSymbols: function(feed){
		var self = this;

		//get symbols for THIS FEED ONLY
		for (var x=0; x < this.streamSyms[feed].length; x++){
			var wsodissue = this.streamSyms[feed][x];
			this.stream[feed].addSymbol({
				symbolWSODIssue:wsodissue,
				isRealtime:		this.config.RT[wsodissue]
			});
		}

		var streamInputs = {
			siteid:					this.config.SITE_ID,
			connectionTimeout:		this.config.CONNECTION_TIMEOUT,
			timezone:				this.config.TIMEZONE,
			isRealtime:				(feed == "batsus")?true:false,
			suppressInitialEvents: 	true,
			hasHeartbeat: 			true,
			messageHistory: 		5,
			threadRollup: 			this.config.STREAM_INTERVAL,
			gmtOffset:				this.config.TIMEZONE_OFFSET,
			pathStreamserver:		this.config.STREAM_URL + "/Streamserver/streamserver.dll",
			feedSelectionGroup:	 	(feed == "batsus") ? "StreamerBats" : "StreamerSungard"
			//,showConsoleMessages: "raw"
		};

		this.stream[feed].init(streamInputs);

		//for the Dow's first byte
		this.stream[feed].isInitialDowByte = true;

		/*
		//we do NOT want to show values from TP unless they are actual trades
		this.stream[feed].initComplete = false;

		//when stream is done initializing, set this flag to true
		this.stream[feed].onStreamInitComplete().addListener(function(){
			self.stream[feed].initComplete = true;
		});
		*/

		//attach listener for trades
		this.stream[feed].onStreamTrade().addListener(function(event, message) {
			self.handleOnStreamTrade(event, message, {feed: feed});
		});
	},

	/**
	 * Keep track of how long Dow must be "frozen"
	 */
	startDowTimer: function(){
		var self = this;
		//clear
		if (this.dowTimerInterval){
			window.clearInterval(this.dowTimerInterval);
		}
		//reset
		this.dowTimer = 0;
		//start
		this.dowTimerInterval = window.setInterval(function(){
			self.dowTimer++;
		},1000);
	},

	/**
	 *	Get stream ids by parsing document, eh
	 */
	getStreamSymbols: function(feed){
		var self = this;
		var $allSelectors = this.getStreamSelectors(null,null,feed,{returnAll:true,cacheSelectors:true});

		//get symbols from page
		$allSelectors.each(function(){
			self.queueStreamSymbols(this);
		});
	},

	/**
	 * This actually adds symbols to stream (by feed), saves selectors locally for speed, etc
	 *
	 */
	queueStreamSymbols: function(span){
		var self = this;
		var $span = jQuery(span);

		//get attributes
		var streamAttr = String($span.attr("stream")); //e.g. "changePct_12345"

		//only capture issue ids we are showing a price for
		//(they may also have change, changePct, vol, etc..but they can't have change without "last")

		if (streamAttr.indexOf("last_") > -1){
			var streamFeedAttr 	= String($span.attr("streamFeed")).toLowerCase();
			var issue 			= this.parseWsodIssue(streamAttr);
			var feed 			= this.parseFeedSelection(streamFeedAttr);

			//if we have a valid issue id and it's not explicitly excluded, push it to 1 of 2 arrays
			if (issue > 0 && !this.config.NO_STREAM[issue]){

				if (feed == "batsus"){
					this.streamSyms["batsus"].push(issue);
				} else {
					//default to sungard, if no feed selection set at the symbol level
					this.streamSyms["sungard"].push(issue);
				}

				this.symbolCount++;
			}
		}
	},

	/**
	 * Parse wsod issue from HTML
	 */
	parseWsodIssue: function(streamAttr){
		try {
			return Number(streamAttr.split("last_")[1]);
		}catch(e){
			return -1;
		}
	},

	/**
	 * Parse feed selection, if set, from HTML and validate against config
	 */
	parseFeedSelection: function(streamFeedAttr){
		if (this.config.FEEDS[streamFeedAttr]){
			return streamFeedAttr;
		} else {
			return false;
		}
	},

	/**
	 * Restart stream
	 */
	restartStream: function(){

		for (var feed in this.config.FEEDS){
			if (this.stream && this.stream[feed]){
				this.stream[feed].removeAllSymbols();
				this.stream[feed].stop();
			}
		}

		this.initializeStream();

	},

	/**
	 * Stop all streams
	 */
	stopStreams: function(){

		for (var feed in this.config.FEEDS){
			if (this.stream && this.stream[feed]){
				this.stream[feed].removeAllSymbols();
				this.stream[feed].stop();
			}
		}
	},

	/**
	 * Debug helper
	 */
	_setStreamDebug: function(message,args){
		var self = this;
		var dbg = jQuery("#streamerDebug").find("tr:first");
		if (dbg.length){
			var isDow = (this.config.DOW_ISSUE == message.symbol) ? " DOW" : "";
			dbg.before('<tr class="streamerDebugRow"><td>' +args.feed+ '</td><td><a target="_blank" href="//mde.wallst.com/?XrefSymbolSearch=' +message.symbol + '">' +message.symbol + '</a>'+ isDow+ '</td><td>' +message.last+ '</td><td>' +message.changePct+ '</td></tr>');
		}
	},

	/**
	 * Event for when trades come through
	 *
	 * This event fires for every trade.
	 */
	handleOnStreamTrade: function(evt, t, args){

		if (!args) { args = {}; }

		var self 				= this;
		var tradeSym 			= t.symbol;
		var feed 				= args.feed || "sungard";
		var primaryWSODIssue 	= this.primarySymbol();

		/*
		//make sure we're done initing -- we do not want to continue unless we've got a trade
		if (this.stream[feed].initComplete === false){
			return;
		}*/

		if (this.config.USE_BG_COLORS){
			//this._setStreamDebug(t,args);
		}

		//check Dow embargo
		if (!this.stream[feed].isInitialDowByte){
			if (this.config.DOW_ISSUE == t.symbol){
				if (this.dowTimer < this.config.DOW_REFRESH_RATE){
					//do not update !!
					//console.info("DOW received: Cannot update; timer at " + this.dowTimer);
					return;
				} else {
					console.info("DOW received: Update made, timer at " + this.dowTimer);
					//reset timer, and continue to update the Dow on the DOM
					this.startDowTimer();
				}
			}
		} else {
			this.stream[feed].isInitialDowByte = false;//never true more than once
		}

		if (primaryWSODIssue && primaryWSODIssue == tradeSym){
			this.handlePrimaryQuote(t,primaryWSODIssue);
		}

		//stream types and their formats
		var streamDataTypes 	= this.config.STREAM_TYPES;
		var streamFormatTypes 	= this.config.STREAM_FORMATS;

		//update the DOM
		var typeLen = streamDataTypes.length;
		for (var i=0; i < typeLen; i++){

			var type = streamDataTypes[i];

			//Use "greater than" filter to skip primary last price (since that's already handlded)
			if (type == "last" && primaryWSODIssue && primaryWSODIssue == tradeSym){
				var $selectors = this.getStreamSelectors("last",tradeSym,feed,{filterPrimary:true});
			} else {
				var $selectors = this.getStreamSelectors(type,tradeSym,feed);
			}

			if ($selectors.length > 0){

				//flip arrow, only if needed
				if ("change" == type){

					var arrow = this.getStreamSelectors("arrow",tradeSym,feed) || [];
					if (arrow.length > 0){
						//we only want the first, jQueried
						arrow = jQuery(arrow[0]);
						//get image
						var arrowImg = arrow.find("img");
						//is it up or down?
						var isUpOrDown = (arrowImg.attr("src").indexOf("arrowDown")>-1) ? "down" : "up";
						var noChg = (arrowImg.attr("src").indexOf("noChange")>-1) ? true : false;
						//swap image source attribute based on today's change
						if ((noChg || "down" == isUpOrDown) && parseFloat(t["change"]) > 0){
							arrowImg.attr("src",self.config.UP_ARROW);
						} else if ((noChg || "up" == isUpOrDown) && parseFloat(t["change"]) < 0){
							arrowImg.attr("src",self.config.DOWN_ARROW);
						} else if(parseFloat(t["change"]) == 0) {
							arrowImg.attr("src", self.config.NOCHANGE_ARROW);
						}
					}
				}

				//change the quote data...
				//update every matching element (we can have a few of the same symbols on 1 page)

				jQuery.each($selectors, function(){

					var $span 			= jQuery(this);
					var format 			= $span.attr("streamFormat");
					var streamFormat 	= (format) ? format : streamFormatTypes[i];
					var feedHelperColor = (feed=="batsus") ? "pink" : "yellow";
					var isRealTime		= $span.attr("streamRealTime") || 0;


					if ("last" == type || "change" == type){
						//check if this is a Treasury yield, and factor it down. don't ask.
						if (self.config.TBILLS[tradeSym]){
							t[type] = (Number(t[type]) / self.config.TBILL_FACTOR);
						}
						//check if this is a commodity that needs to be factored to meet dispaly rqmts
						if (self.config.COMMODITIES_ADJ[tradeSym]){
							var action = self.config.COMMODITIES_ADJ[tradeSym];
							console.info("handleOnStreamTrade - Commodity Adj - ", tradeSym, " - ", action);
							if ("multiply" == action){
								t[type] = (Number(t[type]) * self.config.COMMODITY_FACTOR);
							} else if ("divide" == action){
								t[type] = (Number(t[type]) / self.config.COMMODITY_FACTOR);
							}
						}
					}

					//check if this is currency, and reset the format for 4 places after decimal
					//console.log(self.config.FX[tradeSym]);
					if (self.config.FX[tradeSym]){
						if ("last" == type) {
							streamFormat = "PriceCurrencyColor";
						}
					}

					//update the DOM
					if (self.config.USE_BG_COLORS){
						$span
							.css("background-color",feedHelperColor)
							.html(Format(Number(t[type]),streamFormat))
						;

						window.setTimeout(function(){
							$span.css("background-color","transparent");
						},500);

					} else {
						$span.html(Format(Number(t[type]),streamFormat));
					}

					//brka - no decimal +/- change
					if ("change" == type && tradeSym == 65806){
						$span.html(Format(Number(t[type]),"PriceColorNoDecimal"));
					}

					//do a few unique things when the trade message sends a last_price
					if ("last" == type){
						self.updateTimeStamps({
							t:				t,
							feed:			feed,
							isRealTime:		isRealTime,
							feedHelperColor:feedHelperColor
						});
					}

				});//end updating DOM
			}
		};

	},

	/**
	 * Update timestamps adjacent to streaming data
	 */
	updateTimeStamps: function(args){

		var self = this;
		var t = args.t;
		var tradeSym = t.symbol;
		var feed = args.feed;
		var isRealTime = args.isRealTime;
		var feedHelperColor = args.feedHelperColor;

		//update the timestamp when the last price changes
		var $timeSpans = this.getStreamSelectors("time","All",feed);

		jQuery.each($timeSpans,function(){
			var $timeSpan 	= jQuery(this);
			var issueArray 	= $timeSpan.attr("stream");
				issueArray 	= issueArray.split("time_")[1];//get ids
				issueArray 	= issueArray.split("|");//make an array

			if (jQuery.inArray(String(tradeSym),issueArray) > -1){

				var timezoneOffset 	= new Date().getTimezoneOffset();
				var streamDate 		= Number(t.date);
				var dateFormat 		= $timeSpan.attr("streamDateFormat") || -1;
				var timeOnSpan		= Number($timeSpan.attr("streamJsTime")) || -1;

				if (dateFormat < 0){
					return true;//continue
				}

				var jsTime = (timezoneOffset * 60 * 1000) + streamDate;

				/**
				 * Compare time from stream with time already in the span about to be updated
				 * If the time is older, don't jump back in time -- bail out.
				 */
				if (jsTime < timeOnSpan){
					//console.warn("Time is stale! No update for issue " ,tradeSym, " for time " ,jsTime, ";", $timeSpan);
					return true;//continue
				}

				var dateToFormat = new Date(jsTime);
				if (dateFormat){
					tradeDate = jQuery.PHPDate(unescape(dateFormat),dateToFormat);
				} else {
					tradeDate = jQuery.PHPDate("g:ia x",dateToFormat);
				}

				//update timestamps on the DOM
				if (self.config.USE_BG_COLORS){
					$timeSpan
						.css("background-color",feedHelperColor)
						.text(tradeDate)
					;

					window.setTimeout(function(){
						$timeSpan.css("background-color","transparent");
					},500);

				} else {
					$timeSpan.text(tradeDate);
				}

				if (timeOnSpan !== -1){
					$timeSpan.attr("streamJsTime",jsTime);
				}

			}
		});

	},

	/**
	 * Get stream selector
	 * 	gets from a client-side cache of all selectors (fast!) vs getting from jQuery every time
	 *
	 * @param type {String} the type of data
	 * @param tradeSym {String} the wsodissue from the stream
	 * @param feed {String} the feed
	 */
	getStreamSelectors: function(type,tradeSym,feed,args){
		var self = this;

		args = args || {};

		//check cache first! never cache timestamps
		if (!args.cacheSelectors && "time" != type && this.streamingSpans[type+tradeSym+feed]){
			return this.streamingSpans[type+tradeSym+feed];
		}

		var selector = "";
		if (args.returnAll === true){
			selector = "span[stream]";//get them all
		} else if ("time" == type){
			selector = "span[stream^='time_']";//starts with
		} else {
			selector = "span[stream='"+type+"_"+tradeSym+"']";//exact match
		}

		//check my investments frame first
		var $selectorsInIframe = [];
		try{
			if (frames['myInvestments'] && frames['myInvestments'].document){
				$selectorsInIframe = jQuery(selector, frames['myInvestments'].document);
			}
		}catch(e){}

		if (args.filterPrimary === true){
			selector = selector + ":gt(0)";//exclude first one on the page (the primary quote)
		}

		//join all selectors on the page into a single collection
		var $allSelectors = jQuery(selector);

		if ($selectorsInIframe.length > 0){
			$allSelectors = $allSelectors.add($selectorsInIframe);
		}

		//filter selectors that match the FEED we are streaming
		if (feed=="batsus"){
			$allSelectors = $allSelectors.filter("span[streamFeed='BatsUS']");
		} else {
			//we must be on sungard, so filter out all bats spans (not all sungard spans have streamFeed attribute)
			$allSelectors = $allSelectors.not("span[streamFeed='BatsUS']");
		}

		//lastly, filter again -- don't update hidden spans
		//TT0341415 - As of 2/5/2015, CNNMoney has asked us to remove this constraint as their new Markets Overview page does not display last prices, only % changes and
		//that is preventing the stream data from being updated on the page.
		//$allSelectors = $allSelectors.not(":hidden");

		//cache these!
		if ($allSelectors.length > 0){
			this.streamingSpans[type+tradeSym+feed] = $allSelectors;
		}

		return $allSelectors;
	},

	/**
	 * Gets wsod issue from global var in Snapshot page
	 */
	primarySymbol: function(){
		try {
			//return it
			return Number(wsod_WSODIssue);
		}catch(e){
			return false;
		}
	},

	/**
	 * Special case for the primary symbol quote on the Snapshot page
	 *
	 * @param t {Object} The Trade
	 * @param wsodIssue {Number/Bool} The issue ID from the company/index snapshot
	 */
	handlePrimaryQuote: function(t,wsodIssue){
		var self = this;
		var tradeSym = t.symbol;

		if (wsodIssue == tradeSym){

			window.clearTimeout(this.updatePriceTimer);

			//update the timestamp
			var $timeSpan = jQuery("table.wsod_quoteData span[stream='time_"+wsodIssue+"']:eq(0)");
			if ($timeSpan.length){
				var streamDate = parseFloat(t.date);
				var tradeDate = Format(streamDate,"ShortTime",{showSeconds:false});
				$timeSpan.text(tradeDate);
			}

			//update the price
			var $priceSpan = jQuery("table.wsod_quoteData span[stream='last_"+wsodIssue+"']:eq(0)"); //only get the first span
			var format = $priceSpan.attr("streamFormat") || "ToHundredth";
			var precision = ("PriceNoDecimal" == format) ? 0 : 2;
			var spanLast = $priceSpan.text();
			var lastRaw = this.toNumber(t.last,precision);

			if (lastRaw){ lastRaw = lastRaw.toFixed(precision); }

			//globalize last price, and track it
			this.lastPrimaryPrice = this.toNumber(spanLast,precision);

			//only change price color if a change is != 0
			var diff = (lastRaw - this.lastPrimaryPrice);

			if (diff != 0){

				var colorClass = (diff < 0) ? "negData" : "posData";

				//commatize these here before they're split, so we have the comma in the comparison arrays.
				this.lastPrimaryPrice = Format(this.lastPrimaryPrice,"comma");
				lastRaw = Format(lastRaw,"comma");

				//make arrays for comparison
				var lastTrade = String(this.lastPrimaryPrice).split("");
				var newTrade = String(lastRaw).split("");

				function getDifferenceInArrays(){
					for (var i=0; i < lastTrade.length; i++){
						if (lastTrade[i] != newTrade[i]){
							return parseInt(i);
							break;
						}
					}
					return null;
				}

				var unequalPoint = getDifferenceInArrays();
				var tradeLen = newTrade.length;
				var uncolored = [];
				var colored = [];

				//loop over the new trade, but look out for the unequal point and push onto different arrays.
				jQuery(newTrade).each(function(x){
					if (x < unequalPoint){
						uncolored.push(this);//outside the span
					} else {
						colored.push(this);//inside the span
					}
				});

				//rebuild the new trade with the colored span in the right place
				var newPriceHTML = [uncolored.join(""), '<span class="' ,colorClass, '">' ,colored.join(""), '</span>'].join("");

				$priceSpan.html(newPriceHTML);

				//after half a second, clear the color change (by removing the class on the inner span) and go back to black
				this.updatePriceTimer = window.setTimeout(function(){
					$priceSpan.find("span").removeClass(colorClass); //or removeAttr("class")
				},500);

			}
		}
	},

	toNumber: function(str,precision) {
		// get rid of any user inputted commas or dollar signs or anything else that snuck past isNaN
		// if null values, replace with 0s
		var newNum = (String(str).replace(/\s/g,'') == '') ? 0 : parseFloat(String(str).replace(/[^0-9.]/g,""));
		if (precision !== 0){precision = 2;}
		try {
			return Number(newNum.toFixed(precision));
		} catch(e){
			return Number(newNum);
		}
	},

	/**
	 * Util for removing duplicates from simple array, e.g. [1,2,2,2,3,4,5,5] => [1,2,3,4,5]
	 *
	 * @param a {Array} array to strip duplicates from
	 */
	removeDuplicatesFromArray: function(a){
		var r = new Array();
		o:for(var i = 0, n = a.length; i < n; i++) {
			for(var x = 0, y = r.length; x < y; x++){
				if(r[x]==a[i]) {
					continue o;
				}
		  	}
		  	r[r.length] = a[i];
		}
		return r;
	}

};

function marketTrackerPresent(){
	if (location.href.indexOf("dev3") > -1){
		console.info("Market Tracker check skipped (dev3)");
		return false;
	} else if (jQuery("#wsod_marketTrackerContainer").length>0 || jQuery("#wsod_marketTrackerContainerRibbon").length>0){
		console.info("wsod_js: Market Tracker found. Waiting for CNN to start the stream...");
		return true;
	} else {
		console.info("wsod_js: Market Tracker not found. Stream will be started in a few seconds...");
		return false;
	}
}

function startStream(delay){
	window.setTimeout(function(){
		wsod_js.streaming.initializeStream();
	},delay);
}

//wait 2 secs before starting stream, if market tracker is NOT present.
if (wsod_js.streaming.config.STREAMING_ENABLED && !marketTrackerPresent()){
	startStream(2250);
}

//safety check after 10 seconds to see if stream ever started.
window.setTimeout(function(){
	if (wsod_js.streaming.streamStarted === false){
		console.info("wsod_js: Stream has not started after 10 seconds; Starting stream now...");
		startStream(0);
	}
},10000);
