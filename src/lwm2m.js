var events = require('events');
var util = require('util');
var lwm2m = require('../lib/artik-sdk').lwm2m;

var Lwm2m = function(){
    events.EventEmitter.call(this);
    this.lwm2m = new lwm2m();
    setImmediate(function(self) {
        self.emit('started');
    }, this);
}

util.inherits(Lwm2m, events.EventEmitter);

module.exports = Lwm2m;

Lwm2m.prototype.client_connect = function(id, uri, name, lifetime,
        objects, psk_id, psk_key) {
    var _ = this;
    return this.lwm2m.client_connect(id, uri, name, lifetime,
            objects, psk_id, psk_key,
            function(err) {
                _.emit('error', err);
            },
            function(uri) {
                _.emit('execute', uri);
            },
            function(uri) {
                _.emit('changed', uri);
            });
}

Lwm2m.prototype.client_disconnect = function() {
    return this.lwm2m.client_disconnect();
}

Lwm2m.prototype.client_write_resource = function(uri, buffer) {
    return this.lwm2m.client_write_resource(uri, buffer);
}

Lwm2m.prototype.client_read_resource = function(uri) {
    return this.lwm2m.client_read_resource(uri);
}

