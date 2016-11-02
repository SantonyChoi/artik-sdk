var events = require('events');
var util = require('util');
var serial = require('../lib/artik-sdk').serial;

function Serial(id, label, baudrate, parity, frame_size, stop_bit, ctrl) {
	events.EventEmitter.call(this);
	this.serial = serial(id, label, baudrate, parity, frame_size, stop_bit, ctrl);
}

util.inherits(Serial, events.EventEmitter);
module.exports = Serial;

Serial.prototype.request = function request() {
	var _ = this;
	return this.serial.request(function(val) {
		_.emit('read', val);
	});
};

Serial.prototype.release = function release() {
    return this.serial.release();
};

Serial.prototype.write = function write(val) {
    return this.serial.write(val);
};

Serial.prototype.get_port_num = function get_port_num() {
    return this.serial.get_port_num();
};

Serial.prototype.get_name = function get_name() {
    return this.serial.get_name();
};

Serial.prototype.get_baudrate = function get_baudrate() {
    return this.serial.get_baudrate();
};

Serial.prototype.get_parity = function get_parity() {
    return this.serial.get_parity();
};

Serial.prototype.get_data = function get_data() {
    return this.serial.get_data();
};

Serial.prototype.set_port_num = function set_port_num(val) {
    return this.serial.set_port_num(val);
};

Serial.prototype.set_name = function set_name(val) {
    return this.serial.set_name(val);
};

Serial.prototype.set_baudrate = function set_baudrate(val) {
    return this.serial.set_baudrate(val);
};

Serial.prototype.set_parity = function set_parity(val) {
    return this.serial.set_parity(val);
};

Serial.prototype.set_data = function set_data(val) {
    return this.serial.set_data(val);
};
