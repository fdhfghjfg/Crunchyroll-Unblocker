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

//var _ip = chrome.storage.sync.get(ip, function () {});

var opt = {
	type: "basic",
	title: "Cruncyroll Unblocker",
	message: "Successfully loaded US page",
	iconUrl: "crunblock16.png"
}


chrome.browserAction.onClicked.addListener(function(tab) {
	chrome.cookies.remove({url: "http://crunchyroll.com/", name: "sess_id"});

	chrome.proxy.settings.set({value: config, scope: 'regular'}, function () {});

	chrome.tabs.create({url: "http://www.crunchyroll.com"});
	
	alert("fdgdfgdfg ");

	setTimeout(function(){chrome.proxy.settings.set({value: proxyOff, scope: 'regular'}, function () {})}, 1000);
	
	//chrome.notifications.create("proxysuccess", opt, function ());
}); 