var events = require('events');
var util = require('util');
var bluetooth = require('../lib/artik-sdk').bluetooth;

var Bluetooth = function(){
	events.EventEmitter.call(this);
	this.bt = new bluetooth();
	setImmediate(function(self) {
		self.emit('started');
	}, this);
}

util.inherits(Bluetooth, events.EventEmitter);

module.exports = Bluetooth;

Bluetooth.prototype.start_scan = function() {
	var _ = this;
	return this.bt.start_scan(function(device) {
		_.emit('scan', device);
	});
};

Bluetooth.prototype.stop_scan = function() {
	return this.bt.stop_scan();
};

Bluetooth.prototype.get_devices = function() {
	return this.bt.get_devices();
};

Bluetooth.prototype.get_paired_devices = function() {
	return this.bt.get_paired_devices();
};

Bluetooth.prototype.get_connected_devices = function() {
	return this.bt.get_connected_devices();
};

Bluetooth.prototype.start_bond = function(addr) {
	var _ = this;
	return this.bt.start_bond(addr, function(status) {
		_.emit('bond', status);
	});
};

Bluetooth.prototype.stop_bond = function(addr) {
	return this.bt.stop_bond(addr);
};

Bluetooth.prototype.connect = function(addr) {
	var _ = this;
	return this.bt.connect(addr, function(status) {
		_.emit('connect', status);
	});
};

Bluetooth.prototype.disconnect = function(addr) {
	return this.bt.disconnect(addr);
};

Bluetooth.prototype.remove_unpaired_devices = function() {
	return this.bt.remove_unpaired_devices();
};

Bluetooth.prototype.remove_device = function(addr) {
	return this.bt.remove_device(addr);
};

Bluetooth.prototype.pxp_set_linkloss_level = function(addr, level) {
	return this.bt.pxp_set_linkloss_level(addr, level);
};

Bluetooth.prototype.pxp_set_immediate_level = function(addr, level) {
	return this.bt.pxp_set_immediate_level(addr, level);
};
