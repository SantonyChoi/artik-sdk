const artik = require('../lib/artik-sdk');

var auth_token = '';
var device_id = '';
//var host = "s-api.samsungsami.io"; //for sdr
var host = "api.samsungsami.io"; //normal websocket
var uri = "/v1.1/websocket?ack=true";
var port = 443;
var ssl_connection = 2;
var use_se = false;
var register_message = '{"sdid":"f8b8e08f08d24e278bc574f7361d207f","Authorization":"bearer 8d7feba956ae41788b2b2295a8a7d132","type":"register"}';
var test_send_message = '{"data": {"actions": [{"name": "setOn"}]},"ddid":"f8b8e08f08d24e278bc574f7361d207f","sdid":"f8b8e08f08d24e278bc574f7361d207f","type":"message"}'

var websocket = artik.websocket(host, uri, port, ssl_connection, use_se);

websocket.open_stream(function(result) {
	console.log("Connect result: " + result);
	websocket.write_stream(register_message);
	websocket.set_receive_callback(function(message){
		websocket.write_stream(test_send_message);
		console.log("received: " + message);
	});
});

process.on('SIGINT', function () {
    console.log("Close stream");
    websocket.close_stream();
    process.exit(0);
});
