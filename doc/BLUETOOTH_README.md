# Module Bluetooth
   > This README permits to introduce each API function of the module Bluetooth.  

## 1. Initialize & clean an usage with the module Bluetooth
   * Include the headers  
   First of all, we should include the main module of the Artik SDK and its depedencies wich depend on the Artik board version.  
   **_ex\._**:  

```javascript
	const artik = require('../lib/artik-sdk'); // Include dependencies of the Artik SDK.  
	const Bluetooth = require('../src/bluetooth'); // Instanciate the main module object.  
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
       \- After this step we should always call the main module object and use its dependencies for retriev or operates with the modules of the Artik SDK.  
       \- Also be carefull due to the system of event emitter we need to construct the object from the javascript layer not from the node.js addon C++.  

* Instantiate the module  
   From the main module object we can call the module Bluetooth constructor.  
   **_ex\._**:  

```javascript
	var bt = artik.Bluetooth();
		...
```

## 2. Process with the module Bluetooth
   * Function : 'start_scan'  
   'start_scan' permits to launch the 'scan' command for discovering the other devices.  
   **_ex\._**:  

```javascript
	bt.start_scan();
		...
```

   * Function : 'stop_scan'  
   'stop_scan' permits to cancel the 'scan' command.  
   **_ex\._**:  

```javascript
	bt.stop_scan();
		...
```

   * Function : 'get_devices'  
   'get_devices' retrieves the list of devices discovered.  
   **_ex\._**:  

```javascript
	bt.get_devices();
		...
```

   * Function : 'get_paired_devices'  
   'get_paired_devices' permits to retrieve the list of devices paired to the Artik board.  
   **_ex\._**:  

```javascript
	bt.get_paired_devices();
		...
```

   * Function : 'get_connected_devices'  
   'get_connected_devices' list the connected devices of the Artik board.  
   **_ex\._**:  

```javascript
	bt.get_connected_devices();
		...
```

   * Function : 'start_bond'  
   'start_bond' creates asynchronously a bond between the Artik board and a remote device.  
   **_ex\._**:  

```javascript
	bt.start_bond(device.address);
		...
```

   * Function : 'stop_bond'  
   'stop_bond' permits to disable asynchronously a bond between the Artik board and a remote device.   
   **_ex\._**:  

```javascript
	bt.stop_bond(device.address);
		...
```

   * Function : 'connect'  
   'connect' serves to connect to a device.  
   **_ex\._**:  

```javascript
	bt.connect(device.address);
		...
```

   * Function : 'disconnect'  
   'disconnect' is use for disconnect the module from a device.  
   **_ex\._**:  

```javascript
	bt.disconnect(device.address);
		...
```

   * Function : 'free_devices'  
   'free_devices' free the devices list.  
   **_ex\._**:  

```javascript
	bt.free_devices();
		...
```

   * Function : 'remove_unpaired_devices'  
   'remove_unpaired_devices' releases a device from the list of devices.  
   **_ex\._**:  

```javascript
	bt.remove_unpaired_devices();
		...
```

   * Function : 'remove_device'  
   'remove_device' destroy asynchronously a bond to a device.  
   **_ex\._**:  

```javascript
	bt.remove_device(device);
		...
```

   * Function : 'on'  
   'on' permits to store a callback associates to an event.  
   **_ex\._**:  

```javascript
	bt.on('start', function() { console.log("test callback register"); } );  
		...
```


## 3. Full example

   * See [the test file](/test/bluetooth-test.js)
