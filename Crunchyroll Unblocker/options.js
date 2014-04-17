function save_options () {
	var _ip = document.getElementById('ip').value;
	var _protocol = document.getElementById('protocol').value;
	chrome.storage.sync.set({
	ip: _ip,
	protocol: _protocol
	}, function() {
	var status = document.getElementById('submitbtn');
	status.textContent = 'Saved';
	});
}

function restore_options() {
	chrome.storage.sync.get({
	ip: '151.200.170.146',
	protocol: 'http'
	}, function(items) {
	document.getElementById('ip').value = items.ip;
	document.getElementById('protocol').value = items.protocol;
	});
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('submitbtn').addEventListener('click', save_options);