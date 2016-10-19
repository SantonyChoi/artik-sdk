const artik = require('../lib/artik-sdk');

var auth_token = '';
var device_id = '';
var user_id = '';
var message = '';
var action = '';

var cloud = artik.cloud(auth_token);

cloud.get_current_user_profile(function(response) {
	console.log("Get Current User Profile - response: " + response);
});

cloud.get_device_token(device_id, function(response) {
	console.log("Get Device Token - response: " + response);
});

cloud.get_device(device_id, false, function(response) {
	console.log("Get Device without properties - response: " + response);
});

cloud.get_device(device_id, true, function(response) {
	console.log("Get Device with properties - response: " + response);
});

cloud.get_user_device_types(100, false, 0, user_id, function(response) {
	console.log("Get User Device Types - response: " + response);
});

cloud.get_user_devices(100, false, 0, user_id, function(response) {
	console.log("Get User Devices without properties - response: " + response);
});

cloud.get_user_devices(100, true, 0, user_id, function(response) {
	console.log("Get User Devices with properties - response: " + response);
});

cloud.send_action(device_id, action, function(response) {
	console.log("Send action - response: " + response);
});

cloud.send_message(device_id, message, function(response) {
	console.log("Send message - response: " + response);
});

cloud.update_device_token(device_id, function(response) {
	console.log("Update Device Token - response: " + response);
});

cloud.delete_device_token(device_id, function(response) {
	console.log("Delete Device Token - response: " + response);
});
