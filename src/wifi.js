var events = require('events');
var util = require('util');
var wifi = require('../lib/artik-sdk').wifi;

var Wifi = function(){
	events.EventEmitter.call(this);
	this.wifi = new wifi();
	setImmediate(function(self) {
		self.emit('started');
	}, this);
}

util.inherits(Wifi, events.EventEmitter);

module.exports = Wifi;

Wifi.prototype.scan_request = function() {
	var _ = this;
	return this.wifi.scan_request(function(list) {
		_.emit('scan', list);
	});
};

Wifi.prototype.connect = function(ssid, password, is_persistent) {
	var _ = this;
	return this.wifi.connect(ssid, password, is_persistent, function() {
		_.emit('connected');
	});
};

Wifi.prototype.disconnect = function() {
	return this.wifi.disconnect();
};

Wifi.prototype.get_scan_result = function() {
	return this.wifi.get_scan_result();
};
