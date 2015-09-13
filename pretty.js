chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {

	removeScript('pretty.css');
	removeScript('pretty-support.css');

	injectScript('pretty.css');

	if (request.url.match(/www\.facebook\.com\/support/))
  	{
  		injectScript('pretty-support.css');
  	}

  	sendResponse();
});

injectScript = function(url) {
	var link = document.createElement("link");
	link.href = chrome.extension.getURL(url);
	link.type = "text/css";
	link.rel = "stylesheet";
	
	(document.head || document.documentElement).appendChild(link);
}

removeScript = function(url) {
	var styleSheets = document.getElementsByTagName('link');

	for (var i = 0; i < styleSheets.length; i++) {
		if (styleSheets[i].href.match(url)) {
			(document.head || document.documentElement).removeChild(styleSheets[i]);	
		}
	}
}