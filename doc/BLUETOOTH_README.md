#Bluetooth API

##start_scan

```javascript
String start_scan(function(String result))
```

**Description**

Start scanning for surrounding Bluetooth devices.

**Parameters**

 - *function(String result)*: callback function called with scan results
passed as a JSON formatted string parameter

**Return value**

*String*: Error

**Example**

```javascript
bluetooth.start_scan(function(result) {
	console.log('JSON scan results: ' + result);
});
```

##stop_scan

```javascript
String stop_scan()
```

**Description**

Stop scanning for Bluetooth devices. The callback set during the call to the
*start_scan* function will no longer be called

**Parameters**

None

**Return value**

*String*: Error

**Example**

```javascript
bluetooth.stop_scan();
```

##get_devices

```javascript
String get_devices()
```

**Description**

Return the list of Bluetooth devices that were previously discovered during
scan.

**Parameters**

None

**Return value**

*String*: JSON formatted string containing the list of discovered devices and their
properties.

**Example**

```javascript
console.log('Discovered devices: ' + bluetooth.get_devices());
```

##get_connected_devices

```javascript
String get_connected_devices()
```

**Description**

Return the list of Bluetooth devices to which the device is currently connected to.

**Parameters**

None

**Return value**

*String*: JSON formatted string containing the list of connected devices and their
properties.

**Example**

```javascript
console.log('Connected devices: ' + bluetooth.get_connected_devices());
```

##get_paired_devices

```javascript
String get_paired_devices()
```

**Description**

Return the list of Bluetooth devices with which the device is currently paired.

**Parameters**

None

**Return value**

*String*: JSON formatted string containing the list of paired devices and their
properties.

**Example**

```javascript
console.log('Paired devices: ' + bluetooth.get_paired_devices());
```

##start_bond

```javascript
String start_bond(String bdaddr, function(String result))
```

**Description**

Start pairing process with a remote Bluetooth device.

**Parameters**

 - *String*: Bluetooth address of the remote device to pair with.
 - *function(String result)*: callback function that will be called after the pairing
process with the result (*paired* or *unpaired*) passed as string.

**Return value**

*String*: Error

**Example**

```javascript
bluetooth.start_bond('01:02:03:04:05:06', function(result) {
	console.log('Pairing status: ' + result);
});
```

##stop_bond

```javascript
String stop_bond(String bdaddr)
```

**Description**

Unpair with a previously paired Bluetooth remote device.

**Parameters**

 - *String*: Bluetooth address of the remote device to unpair with.

**Return value**

*String*: Error

**Example**

```javascript
bluetooth.stop_bond('01:02:03:04:05:06');
```

##connect

```javascript
String connect(String bdaddr, function(String result))
```

**Description**

Connect to a remote Bluetooth device.

**Parameters**

 - *String*: Bluetooth address of the remote device to connect to.
 - *function(String result)*: callback function that will be called after connection
with the result (*connected* or *disconnected*) passed as string.

**Return value**

*String*: Error

**Example**

```javascript
bluetooth.connect('01:02:03:04:05:06', function(result) {
	console.log('Connection status: ' + result);
});
```

##disconnect

```javascript
String disconnect(String bdaddr)
```

**Description**

Disconnect from a previously connected Bluetooth remote device.

**Parameters**

 - *String*: Bluetooth address of the remote device to disconnect from.

**Return value**

*String*: Error

**Example**

```javascript
bluetooth. disconnect('01:02:03:04:05:06');
```

##remove_unpaired_devices

```javascript
String remove_unpaired_devices()
```

**Description**

Remove all devices to which the host is not paired from the discovered
devices list.

**Parameters**

None

**Return value**

*String*: Error

**Example**

```javascript
bluetooth.remove_unpaired_devices();
```

##remove_device

```javascript
String remove_device(String bdaddr)
```

**Description**

Remove specific device from the discovered devices list.

**Parameters**

 - *String*: Bluetooth address of the remote device to remove.

**Return value**

*String*: Error

**Example**

```javascript
bluetooth.remove_device('01:02:03:04:05:06');
```

##pxp_set_linkloss_level

```javascript
String pxp_set_linkloss_level(String addr, String level)
```

**Description**

Set the alert level of a BLE device exposing the proximity link-loss
profile.

**Parameters**

 - *String*: Bluetooth address of the remote device to configure.
 - *String*: alert level to set. Must be one of: *none*, *mild*, or *high*.

**Return value**

*String*: Error

**Example**

```javascript
bluetooth.pxp_set_linkloss_level('01:02:03:04:05:06', 'high');
```

##pxp_set_immediate_level

```javascript
String pxp_set_immediate_level(String addr, String level)
```

**Description**

Set the alert level of a BLE device exposing the immediate alert
service.

**Parameters**

 - *String*: Bluetooth address of the remote device to configure.
 - *String*: alert level to set. Must be one of: *none*, *mild*, or *high*.

**Return value**

*String*: Error

**Example**

```javascript
bluetooth.pxp_set_immediate_level('01:02:03:04:05:06', 'high');
```

##Full example

   * See [bluetooth-test.js](/test/bluetooth-test.js)
