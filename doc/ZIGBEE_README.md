# Module Zigbee
   > This README permits to introduce each API functions of the module Zigbee.

## 1. Initialize & clean an usage with the module  Zigbee
   * Include the headers  
   First of all, we should include the main module of the Artik SDK and its depedencies wich depend on the Artik board version.  
   **_ex\._**:  

```javascript
	const artik = require('../lib/artik-sdk'); // Include dependencies of the Artik SDK.  
    const Zigbee = require('../src/zigbee'); // Instanciate the main module object.  
	const name = artik.get_platform_name(); // Get the platform name.

        if (name == 'Artik 520') { // Check for a A520 board
                const a5 = require('../src/platform/artik520'); // If 'yes', thee
n instantiate the platform depedencies.
        } else if (name == 'Artik 1020') { // Check for a A1020 board
                const a10 = require('../src/platform/artik1020'); // If 'yes', tt
hen instantiate the platform depedencies.
        } else if (name == 'Artik 71O') { // Check for a A710 board
                const a7 = require('../src/platform/artik710'); // If 'yes', thee
e
n instantiate the platform depedencies.
        }
		...
```
 __NB__:  
   \- After this step you should always call the main module object and use its dependencies for retrieve or operate with the modules of the Artik SDK.  
   \- Also be carefull due to the system of event emitter we need to construct the object from the javascript layer not the node.js addon C++.  
   
   * Instantiate the module  
   From the main module we can call the module Zigbee constructor.  
   **_ex\._**:  

```javascript
	var zb = artik.Zigbee();
		...
```

   * Function : Initialize  
   Instantiate and initialize the zigbee module.   
   **_ex\._**:  

```javascript
	zb.initialize(zb_device_type);
		...
```
 __NB__:  
   The parameter serves to define wich zigbee devices are support by the module.  
   

## 2. Process with the Zigbee module
   * Function : 'network_start'  
   'network_start' resumes the network operation.  
   **_ex\._**:  

```javascript
	console.log(zb.network_start());
		...
```

   * Function : 'network_form'  
   'network_form' creates a new network as a coordinator.  
   **_ex\._**:  

```javascript
	zb.network_form();
		...
```

   * Function : 'network_form_manually'  
   'network_form_manually' permits to form a network as a coordinator.  
   **_ex\._**:  

```javascript
	var channel = 25;  
	var tx_power = zb.ZIGBEE_TX_POWER_8;  
	var pan_id = 0x1234;  

	var network =[channel, tx_power, pan_id];
	console.log(zb.network_form_manually(network));
		...
```

   * Function : 'network_permitjoin'  
   'network_permitjoin' permits to join a network from another nodes.  
   **_ex\._**:  

```javascript
	zb.network_permitjoin(join_duration)
		...
```

   * Function : 'network_leave'  
   'network_leave' leaves the zigbee network.  
   **_ex\._**:  

```javascript
	console.log("network leave status : "+zb.network_leave());
		...
```

   * Function : 'network_join'  
   'network_join' joins automatically an other existing network by an other coordinator.  
   **_ex\._**:  

```javascript
	zb.network_join();
		...
```

   * Function : 'network_find'  
   'network_find' list all joinable network for zigbee.  
   **_ex\._**:  

```javascript
	zb.network_find();
		...
```

   * Function : 'network_request_my_network_status'  
   'network_request_my_network_status' retrieves the status of the network use by zigbee.  
   **_ex\._**:  

```javascript
	console.log("network request my network status : "+zb.network_request_my_network_status());
		...
```

   * Function : 'device_request_my_node_type'  
   'device_request_my_node_type' requests the device type.  
   **_ex\._**:  

```javascript
	console.log("device request my node type: " + zb.device_request_my_node_type());
		...
```

   * Function : 'device_find_by_cluster'  
   'device_find_by_cluster' finds an other device by a clustering (use ID and server/client filters).  
   **_ex\._**:  

```javascript
	var data = zb.device_find_by_cluster(zb.ZCL_ON_OFF_CLUSTER_ID);
	try {
		var result =JSON.parse(data);
		...
```

   * Function : 'onoff_command'  
   'onoff_command' process the command on/off to the cluster client.  
   **_ex\._**:  

```javascript
	console.log('on_off send :' + zb.onoff_command(array, zb.ZIGBEE_ONOFF_TOGGLE));
		...
```

   * Function : 'onoff_get_value'  
   'onoff_get_value' gets the state value of the cluster server.  
   **_ex\._**:  

```javascript
	zb.onoff_get_value(endpoint_id);
		...
```

   * Function : 'on'    
   'on' permits to store a callback associates to an event.  
   **_ex\._**:  

```javascript
	zb.on('found', function(message) {
        console.log("received: " + message);
});

		...
```

## 3. Full example

   * See [the test file](/test/zigbee-test.js)
