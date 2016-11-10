#Cloud API

##Constructor

```javascript
var cl = new cloud(String token);
```

**Description**

Create a new instance of the cloud API with a specific authorization token
needed to make requests to the ARTIK Cloud API.

**Parameters**

 - *String*: authorization token

**Return value**

New instance.

**Example**

```javascript
var cl = new cloud('<authorization token>');
```

##send_message

```javascript
String send_message(String device_id, String message, function(String response))
```

**Description**

Send a message to ARTIK cloud from a specific device ID.

**Parameters**

 - *String*: ID of the device sending the message.
 - *String*: message to send in JSON formatted string.
 - *function(String)*: optional callback function that will be called after
performing the request asynchronously. Response from the cloud is passed as a
parameter to the callback in a JSON formatted string. If no function is provided
the request will be performed synchronously.

**Return value**

*Undefined* if the callback function is provided, a JSON formatted *String* 
containing the response from the cloud otherwise (synchronous call).

**Example**

```javascript
var msg = '{ "data": { "state": true } }';
send_message('<device ID>', msg, function(response){
	console.log('Response: ' + response);
});
```

##send_action

```javascript
String send_action(String device_id, String action, function(String response))
```

**Description**

Send an action to ARTIK cloud targeted to a specific device ID.

**Parameters**

 - *String*: ID of the destination device to send the action to.
 - *String*: action to send in JSON formatted string.
 - *function(String)*: optional callback function that will be called after
performing the request asynchronously. Response from the cloud is passed as a
parameter to the callback in a JSON formatted string. If no function is provided
the request will be performed synchronously.

**Return value**

*Undefined* if the callback function is provided, a JSON formatted *String* 
containing the response from the cloud otherwise (synchronous call).

**Example**

```javascript
var seton = '{ "actions": [{ "name": "setOn", "parameters": {} }]}';
send_action('<device ID>', seton, function(response){
	console.log('Response: ' + response);
});
```

##get_current_user_profile

```javascript
String get_current_user_profile(function(String response))
```

**Description**

Get the current user profile, based on the authorization token.

**Parameters**

 - *function(String)*: optional callback function that will be called after
performing the request asynchronously. Response from the cloud is passed as a
parameter to the callback in a JSON formatted string. If no function is provided
the request will be performed synchronously.

**Return value**

*Undefined* if the callback function is provided, a JSON formatted *String* 
containing the response from the cloud otherwise (synchronous call).

**Example**

```javascript
get_current_user_profile(function(response){
	console.log('Response: ' + response);
});
```

##get_user_devices

```javascript
String get_user_devices(Number count, Boolean properties, Number offset, String user_id, function(String response))
```

**Description**

Get the list of devices belonging to a specific user.

**Parameters**

 - *Number*: maximum count of devices to return.
 - *Boolean*: if *true*, return device properties as well.
 - *Number*: offset in the devices list from which to start, used for pagination.
 - *String*: user ID corresponding to the owner of the devices to list.
 - *function(String)*: optional callback function that will be called after
performing the request asynchronously. Response from the cloud is passed as a
parameter to the callback in a JSON formatted string. If no function is provided
the request will be performed synchronously.

**Return value**

*Undefined* if the callback function is provided, a JSON formatted *String* 
containing the response from the cloud otherwise (synchronous call).

**Example**

```javascript
get_user_devices(10, false, 0, '<user ID>', function(response){
	console.log('Response: ' + response);
});
```

##get_user_device_types

```javascript
String get_user_device_types(Number count, Boolean shared, Number offset, String user_id, function(String response))
```

**Description**

Get the list of device types available to a specific user.

**Parameters**

 - *Number*: maximum count of device types to return.
 - *Boolean*: if *true*, return device types shared by all users as well.
 - *Number*: offset in the device types list from which to start, used for pagination.
 - *String*: user ID corresponding to the owner of the device types to list.
 - *function(String)*: optional callback function that will be called after
performing the request asynchronously. Response from the cloud is passed as a
parameter to the callback in a JSON formatted string. If no function is provided
the request will be performed synchronously.

**Return value**

*Undefined* if the callback function is provided, a JSON formatted *String* 
containing the response from the cloud otherwise (synchronous call).

**Example**

```javascript
get_user_device_types(10, false, 0, '<user ID>', function(response){
	console.log('Response: ' + response);
});
```

##get_user_application_properties

```javascript
String get_user_application_properties(String user_id, String app_id, function(String response))
```

**Description**

Get properties stored by a user for a specific application.

**Parameters**

 - *String*: user ID whose application properties are to be returned.
 - *String*: application ID whose properties are to be returned.
 - *function(String)*: optional callback function that will be called after
performing the request asynchronously. Response from the cloud is passed as a
parameter to the callback in a JSON formatted string. If no function is provided
the request will be performed synchronously.

**Return value**

*Undefined* if the callback function is provided, a JSON formatted *String* 
containing the response from the cloud otherwise (synchronous call).

**Example**

```javascript
get_user_application_properties('<user ID>', '<app ID>', function(response){
	console.log('Response: ' + response);
});
```

##get_device

```javascript
String get_device(String device_id, Boolean properties, function(String response))
```

**Description**

Get information related to a specific device.

**Parameters**

 - *String*: device ID whose information is to be returned.
 - *Boolean*: if *true*, return the device properties as well.
 - *function(String)*: optional callback function that will be called after
performing the request asynchronously. Response from the cloud is passed as a
parameter to the callback in a JSON formatted string. If no function is provided
the request will be performed synchronously.

**Return value**

*Undefined* if the callback function is provided, a JSON formatted *String* 
containing the response from the cloud otherwise (synchronous call).

**Example**

```javascript
get_device('<device ID>', true, function(response){
	console.log('Response: ' + response);
});
```

##get_device_token

```javascript
String get_device_token(String device_id, function(String response))
```

**Description**

Get authorization token associated to a specific device.

**Parameters**

 - *String*: device ID whose token is to be returned.
 - *function(String)*: optional callback function that will be called after
performing the request asynchronously. Response from the cloud is passed as a
parameter to the callback in a JSON formatted string. If no function is provided
the request will be performed synchronously.

**Return value**

*Undefined* if the callback function is provided, a JSON formatted *String* 
containing the response from the cloud otherwise (synchronous call).

**Example**

```javascript
get_device_token('<device ID>', function(response){
	console.log('Response: ' + response);
});
```

##add_device

```javascript
String add_device(String user_id, String device_type_id, String name, function(String response))
```

**Description**

Add a new device to a specific user.

**Parameters**

 - *String*: user ID to associate the new device to.
 - *String*: device type ID of the new device to create.
 - *String*: friendly name to give to the new device.
 - *function(String)*: optional callback function that will be called after
performing the request asynchronously. Response from the cloud is passed as a
parameter to the callback in a JSON formatted string. If no function is provided
the request will be performed synchronously.

**Return value**

*Undefined* if the callback function is provided, a JSON formatted *String* 
containing the response from the cloud otherwise (synchronous call).

**Example**

```javascript
add_device('<user ID>', '<device type ID>', 'Heartrate sensor', function(response){
	console.log('Response: ' + response);
});
```

##delete_device

```javascript
String delete_device(String user_id, String device_type_id, String name, function(String response))
```

**Description**

Delete a specific device from the authorized user account.

**Parameters**

 - *String*: device ID of the device to delete.
 - *function(String)*: optional callback function that will be called after
performing the request asynchronously. Response from the cloud is passed as a
parameter to the callback in a JSON formatted string. If no function is provided
the request will be performed synchronously.

**Return value**

*Undefined* if the callback function is provided, a JSON formatted *String* 
containing the response from the cloud otherwise (synchronous call).

**Example**

```javascript
delete_device('<device ID>', function(response){
	console.log('Response: ' + response);
});
```

##update_device_token

```javascript
String update_device_token(String device_id, function(String response))
```

**Description**

Update the authorization token of a specific device.

**Parameters**

 - *String*: device ID whose token is to be refreshed.
 - *function(String)*: optional callback function that will be called after
performing the request asynchronously. Response from the cloud is passed as a
parameter to the callback in a JSON formatted string. If no function is provided
the request will be performed synchronously.

**Return value**

*Undefined* if the callback function is provided, a JSON formatted *String* 
containing the response from the cloud otherwise (synchronous call).

**Example**

```javascript
update_device_token('<device ID>', function(response){
	console.log('Response: ' + response);
});
```

##delete_device_token

```javascript
String delete_device_token(String device_id, function(String response))
```

**Description**

Delete the authorization token of a specific device.

**Parameters**

 - *String*: device ID whose token is to be deleted.
 - *function(String)*: optional callback function that will be called after
performing the request asynchronously. Response from the cloud is passed as a
parameter to the callback in a JSON formatted string. If no function is provided
the request will be performed synchronously.

**Return value**

*Undefined* if the callback function is provided, a JSON formatted *String* 
containing the response from the cloud otherwise (synchronous call).

**Example**

```javascript
delete_device_token('<device ID>', function(response){
	console.log('Response: ' + response);
});
```

##sdr_start_registration

```javascript
String sdr_start_registration(String device_type_id, String vendor_id, function(String response))
```

**Description**

Start Secure Device Registration process.

**Parameters**

 - *String*: device type ID of the device to register.
 - *String*: vendor specific ID of the device to register.
 - *function(String)*: optional callback function that will be called after
performing the request asynchronously. Response from the cloud is passed as a
parameter to the callback in a JSON formatted string. If no function is provided
the request will be performed synchronously.

**Return value**

*Undefined* if the callback function is provided, a JSON formatted *String* 
containing the response from the cloud otherwise (synchronous call).

**Example**

See [Secure Device Registration example](#secure-device-registration-example)

##sdr_registration_status

```javascript
String sdr_registration_status(String registration_id, function(String response))
```

**Description**

Get current status of the Secure Device Registration process.

**Parameters**

 - *String*: registration ID returned by the *sdr_start_registration* function.
 - *function(String)*: optional callback function that will be called after
performing the request asynchronously. Response from the cloud is passed as a
parameter to the callback in a JSON formatted string. If no function is provided
the request will be performed synchronously.

**Return value**

*Undefined* if the callback function is provided, a JSON formatted *String* 
containing the response from the cloud otherwise (synchronous call).

**Example**

See [Secure Device Registration example](#secure-device-registration-example)

##sdr_complete_registration

```javascript
String sdr_complete_registration(String registration_id, String nonce, function(String response))
```

**Description**

Complete the Secure Device Registration process after the user has entered
the PIN into ARTIK Cloud portal. Should be called only after registration status
is set to **PENDING_DEVICE_COMPLETION**.

**Parameters**

 - *String*: registration ID returned by the *sdr_start_registration* function.
 - *String*: registration nonce returned by the *sdr_start_registration* function.
 - *function(String)*: optional callback function that will be called after
performing the request asynchronously. Response from the cloud is passed as a
parameter to the callback in a JSON formatted string. If no function is provided
the request will be performed synchronously.

**Return value**

*Undefined* if the callback function is provided, a JSON formatted *String* 
containing the response from the cloud otherwise (synchronous call).

**Example**

See [Secure Device Registration example](#secure-device-registration-example)

#Full example

##Secure Device Registration example

Full SDR procedure is documented [here](https://developer.artik.cloud/documentation/advanced-features/secure-your-devices.html)

```javascript
var artik = require('artik-sdk');
var sleep = require('sleep');
var cloud = new artik.cloud('<fill up with user authorization token>');
var dtid = '<fill up with device type ID>';
var vid = '<fill up with vendor id>';
var regId = '';
var regNonce = '';

function getRegistrationStatus(response) {
        var regStatus = JSON.parse(response).data.status;
        if (regStatus == "PENDING_USER_CONFIRMATION") {
                sleep.sleep(1);
                cloud.sdr_registration_status(regId, getRegistrationStatus);
        } else if (regStatus == "PENDING_DEVICE_COMPLETION") {
                cloud.sdr_complete_registration(regId, regNonce, function(response) {
                        console.log('Response: ' + response);
                        process.exit(0);
                });
        }
}

cloud.sdr_start_registration(dtid, vid, function(response) {
        var json = JSON.parse(response);
        regId = json.data.rid;
        regNonce = json.data.nonce;

        console.log('Enter pin ' + json.data.pin + ' in the ARTIK Cloud portal');

        cloud.sdr_registration_status(regId, getRegistrationStatus);
});
```

##Other example
   * See [cloud-test.js](/test/cloud-test.js)
