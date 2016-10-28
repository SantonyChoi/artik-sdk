var events = require('events');
var util = require('util');
var zigbee = require('../lib/artik-sdk').zigbee;

var Zigbee = function(){
	events.EventEmitter.call(this);
	this.zb = new zigbee();
	setImmediate(function(self) {
		self.emit('started');
	}, this);
}

util.inherits(Zigbee, events.EventEmitter);

module.exports = Zigbee;

Zigbee.prototype.ON_OFF_SWITCH = 0x0000;
Zigbee.prototype.LEVEL_CONTROL_SWITCH = 0x0001;
Zigbee.prototype.ON_OFF_LIGHT = 0x0100;
Zigbee.prototype.DIMMABLE_LIGHT = 0x0101;

Zigbee.prototype.ZCL_ON_OFF_CLUSTER_ID = 0x0006;

Zigbee.prototype.ZIGBEE_ONOFF_OFF = 3220;
Zigbee.prototype.ZIGBEE_ONOFF_ON =3221;
Zigbee.prototype.ZIGBEE_ONOFF_TOGGLE =3222;

/* TX_POWER */
Zigbee.prototype.ZIGBEE_TX_POWER_8 = 8;
Zigbee.prototype.ZIGBEE_TX_POWER_7 = 7;
Zigbee.prototype.ZIGBEE_TX_POWER_6 = 6;
Zigbee.prototype.ZIGBEE_TX_POWER_5 = 5;
Zigbee.prototype.ZIGBEE_TX_POWER_4 = 4;
Zigbee.prototype.ZIGBEE_TX_POWER_3 = 3;
Zigbee.prototype.ZIGBEE_TX_POWER_2 = 2;
Zigbee.prototype.ZIGBEE_TX_POWER_1 = 1;
Zigbee.prototype.ZIGBEE_TX_POWER_0 = 0;
Zigbee.prototype.ZIGBEE_TX_POWER_MINUS1 = -1;
Zigbee.prototype.ZIGBEE_TX_POWER_MINUS2 = -2;
Zigbee.prototype.ZIGBEE_TX_POWER_MINUS3 = -3;
Zigbee.prototype.ZIGBEE_TX_POWER_MINUS4 = -4;
Zigbee.prototype.ZIGBEE_TX_POWER_MINUS5 = -5;
Zigbee.prototype.ZIGBEE_TX_POWER_MINUS6 = -6;
Zigbee.prototype.ZIGBEE_TX_POWER_MINUS7 = -7;
Zigbee.prototype.ZIGBEE_TX_POWER_MINUS8 = -8;
Zigbee.prototype.ZIGBEE_TX_POWER_MINUS9 = -9;
Zigbee.prototype.ZIGBEE_TX_POWER_MINUS11 = -11;
Zigbee.prototype.ZIGBEE_TX_POWER_MINUS12 = -12;
Zigbee.prototype.ZIGBEE_TX_POWER_MINUS14 = -14;
Zigbee.prototype.ZIGBEE_TX_POWER_MINUS17 = -17;
Zigbee.prototype.ZIGBEE_TX_POWER_MINUS20 = -20;
Zigbee.prototype.ZIGBEE_TX_POWER_MINUS26 = -26;
Zigbee.prototype.ZIGBEE_TX_POWER_MINUS43 = -43;

Zigbee.prototype.initialize = function(devices) {
	var _ = this;
	return this.zb.initialize(
		devices,
		function(data) {
			_.emit('event', data);
		}
	);
};

Zigbee.prototype.network_start = function() {
	return this.zb.network_start();
};

Zigbee.prototype.network_leave = function() {
	return this.zb.network_leave();
};

Zigbee.prototype.network_form = function() {
	return this.zb.network_form();
};

Zigbee.prototype.network_form_manually = function(network_info) {
	return this.zb.network_form_manually(network_info);
};

Zigbee.prototype.network_permitjoin = function(duration_sec) {
	return this.zb.network_permitjoin(duration_sec);
};

Zigbee.prototype.network_join = function() {
	return this.zb.network_join();
};

Zigbee.prototype.network_request_my_network_status = function() {
	return this.zb.network_request_my_network_status();
};

Zigbee.prototype.device_request_my_node_type = function() {
	return this.zb.device_request_my_node_type();
};

Zigbee.prototype.device_find_by_cluster = function(cluster_id) {
	return this.zb.device_find_by_cluster(cluster_id);
};

Zigbee.prototype.onoff_command = function(endpoint, onoff_value) {
	return this.zb.onoff_command(endpoint, onoff_value);
};

Zigbee.prototype.onoff_get_value = function(endpoint_id) {
	return this.zb.onoff_get_value(endpoint_id);
};
