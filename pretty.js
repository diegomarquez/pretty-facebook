chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	
	document.getElementsByTagName("html")[0].style.display = '';

	removeScript('pretty.css');
	removeScript('pretty-support.css');
	removeScript('pretty-messages.css');
	removeScript('pretty-notifications.css');
	removeScript('pretty-find-friends.css');
	
	injectScript('pretty.css');

	if (request.url.match(/www\.facebook\.com\/support/))
  	{
  		injectScript('pretty-support.css');
  	}

  	if (request.url.match(/www\.facebook\.com\/messages/))
  	{
  		injectScript('pretty-messages.css');
  	}

  	if (request.url.match(/www\.facebook\.com\/notifications/))
  	{
  		injectScript('pretty-notifications.css');
  	}

  	if (request.url.match(/www\.facebook\.com\/find-friends\/browser/))
  	{
  		injectScript('pretty-find-friends.css');
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