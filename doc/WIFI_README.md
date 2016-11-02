# Module Wifi
   > This README permits to introduce each API functions of the module Wifi.

## 1. Initialize & clean an usage with the module Wifi
   * Include the headers  
   First of all, we should include the main module of the Artik SDK and its depedencies wich depend on the Artik board version.  
   **_ex\._**:  

```javascript
	const artik = require('../lib/artik-sdk'); // Include dependencies of the Artik SDK.  
    const Wifi = require('../src/wifi'); // Instanciate the main module object.  
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
   From the main module we can call the module Wifi constructor.  
   **_ex\._**:  

```javascript
	var wifi = new Wifi();
		...
```

## 2. Process with the Wifi module
   * Function : 'connect'  
   'connect' permits to connect to a specific endpoint.  
   **_ex\._**:  

```javascript
	var ssid = '<enter a SSID here>';  
	var pwd = '<passphrase of the SSID>';  

	wifi.connect(ssid, pwd, true);  
		...
```
 __NB__:  
   \- The first parameter inform wich endpoint we want to request;  
   \- The second is the password associates to the endpoint;  
   \- Finally the last permits to enable the persistency.  

   * Function : 'disconnect'  
   'disconnect' permits to disconnect the module from the endpoint.  
   **_ex\._**:  

```javascript
	wifi.disconnect();
		...
```

   * Function : 'scan_request'  
   'scan_request' process a 'scan' command.  
   **_ex\._**:  

```javascript
	wifi.scan_request();  
		...
```

   * Function : 'get_scan_result'  
   'get_scan_result' list the results of the command 'scan'.  
   **_ex\._**:  

```javascript
	console.log(wifi.get_scan_result());  
		...
```

   * Function : 'getScanCb'  
   'getScanCb' retrieves the callback use by the scan process.  
   **_ex\._**:  

```javascript
	var wifi_bis = artik.Wifi();
	wifi_bis.on('scan', wifi.getScanCb()); // store the same callback 'scan' into the second Wifi object.  
		...
```

   * Function : 'getConnectCb'  
   'getConnectCb' retrieves the callback use by the connect process.  
   **_ex\._**:  

```javascript
	var wifi_bis = artik.Wifi();
	wifi_bis.on('connect', wifi.getConnectCb()); // store the same callback 'connect' into the second Wifi object.  
		...
```

   * Function : 'on'  
   'on' permits to store a callback associates to an event.  
   **_ex\._**:  

```javascript
	var wifi_bis = artik.Wifi();
	wifi_bis.on('connect', function () { // store the same callback 'connect' into the second Wifi object.  
             console.log("Welcome...");
    });  
		...
```



## 3. Full example

   * See [the test file](/test/wifi-test.js)
