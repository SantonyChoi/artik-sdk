var events = require('events');
var util = require('util');
var websocket = require('../lib/artik-sdk').websocket;

var Websocket = function(host, uri, port, ssl_connection, use_se) {
	events.EventEmitter.call(this);
	this.websocket = websocket(host, uri, port, ssl_connection, use_se);
}

util.inherits(Websocket, events.EventEmitter);

module.exports = Websocket;

Websocket.prototype.open_stream = function open_stream() {
	var _ = this;
	return this.websocket.open_stream(
		function(status) {
			_.emit('connection', status);
		}, 
		function(message) {
			_.emit('receive', message);
		});
};

Websocket.prototype.write_stream = function write_stream(message) {
	return this.websocket.write_stream(message);
};

Websocket.prototype.close_stream = function close_stream() {
	return this.websocket.close_stream();
};
