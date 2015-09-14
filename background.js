function InjectScripts(o) {
	if (o.frameId != 0)
		return;

	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
	  chrome.tabs.sendMessage(tabs[0].id, { url: o.url }, function(response) {});
	});
}

chrome.webNavigation.onDOMContentLoaded.addListener(InjectScripts, { url: [{ hostContains: 'www.facebook.com' }] });
chrome.webNavigation.onHistoryStateUpdated.addListener(InjectScripts, { url: [{ hostContains: 'www.facebook.com' }] });