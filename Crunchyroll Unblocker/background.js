var config = {
	mode: "fixed_servers",
	rules: {
		proxyForHttp: {
			scheme: "http",
			host: "151.200.170.146"
		}
	}
};

var proxyOff = {
	mode: "direct"
}

chrome.browserAction.onClicked.addListener(function(tab) {
	chrome.cookies.remove({"url": "http://crunchyroll.com/", "name": "sess_id"});

	chrome.proxy.settings.set({value: config, scope: 'regular'}, function () {});

	chrome.tabs.create({url: 'http://www.crunchyroll.com'});

	setTimeout(function(){chrome.proxy.settings.set({value: proxyOff, scope: 'regular'}, function () {})}, 1000);
});