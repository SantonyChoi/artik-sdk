var events = require('events');
var util = require('util');
var mqtt = require('../lib/artik-sdk').mqtt;

var Mqtt = function(){
    events.EventEmitter.call(this);
    this.mqtt = new mqtt();
    setImmediate(function(self) {
        self.emit('started');
    }, this);
}

util.inherits(Mqtt, events.EventEmitter);

module.exports = Mqtt;

Mqtt.prototype.create_client = function(id, name, password,
        clean_session, keep_alive, block) {
    var _ = this;
    return this.mqtt.create_client(id, name, password, clean_session, keep_alive, block,
            function(result) {
                _.emit('connected', result);
            },
            function(result) {
                _.emit('disconnected', result);
            },
            function(mid) {
                _.emit('published', mid);
            },
            function(mid, topic, buffer, qos, retain) {
                _.emit('message', mid, topic, buffer, qos, retain);
            },
            function(mid) {
                _.emit('subscribed', mid);
            },
            function(mid) {
                _.emit('unsubscribed', mid);
            });
}

Mqtt.prototype.destroy_client = function() {
    return this.mqtt.destroy_client();
}

Mqtt.prototype.set_willmsg = function(topic, message, qos, retain) {
    return this.mqtt.set_willmsg(topic, message, qos, retain);
}

Mqtt.prototype.free_willmsg = function() {
    return this.mqtt.free_willmsg();
}

Mqtt.prototype.clear_willmsg = function() {
    return this.mqtt.clear_willmsg();
}

Mqtt.prototype.destroy_client = function() {
    return this.mqtt.destroy_client();
}

Mqtt.prototype.tls_set = function(ca_file, ca_path, cert_file, key_file) {
    return this.mqtt.tls_set(ca_file, ca_path, cert_file, key_file);
}

Mqtt.prototype.tls_insecure_set = function(insecure) {
    return this.mqtt.tls_insecure_set(insecure);
}

Mqtt.prototype.tls_opts_set = function(reqs, version, ciphers) {
    return this.mqtt.tls_opts_set(reqs, version, ciphers);
}

Mqtt.prototype.tls_psk_set = function(key, identity, ciphers) {
    return this.mqtt.tls_psk_set(key, identity, ciphers);
}

Mqtt.prototype.connect_server = function(host, port) {
    return this.mqtt.connect_server(host, port);
}

Mqtt.prototype.subscribe = function(qos, topic) {
    return this.mqtt.subscribe(qos, topic);
}

Mqtt.prototype.unsubscribe = function(topic) {
    return this.mqtt.unsubscribe(topic);
}

Mqtt.prototype.disconnect = function() {
    return this.mqtt.disconnect();
}

Mqtt.prototype.publish = function(qos, retain, topic, buffer) {
    return this.mqtt.publish(qos, retain, topic, buffer);
}
