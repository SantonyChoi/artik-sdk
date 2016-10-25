#Network API

##get_current_ip

```javascript
String get_current_ip()
```

**Description**

Get the current public IP address exposed by the device on the web.

**Parameters**

None.

**Return value**

*String* containing the public IP address by which the device is known on the web.

**Example**

```javascript
console.log('Public IP: ' + network.get_current_ip());
```

##get_online_status

```javascript
get_online_status(function(String status))
```

**Description**

Get notified of web connectivity changes.

**Parameters**

 - *function(String)* callback function called whenever a change occurs on the network 
connectivity of the device. The status is passed as a JSON formatted *String* as shown below:

```javascript
{
	"online_status": "0"
}
```

**Return value**

None.

**Example**

```javascript
network.get_online_status(function(status) {
	console.log('New connectivity status: ' + status);
});
```

#Full example

   * See [network-test.js](/test/network-test.js)
