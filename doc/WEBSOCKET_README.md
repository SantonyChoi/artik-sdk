# Module Websocket
   > This README permits to introduce each API function of the module Websocket.

## 1. Initialize & clean an usage with the Websocket module
   * Include the headers  
   First of all, we should include the main module of the Artik SDK and its depedencies wich depends on the Artik board version.  
   **_ex\._**:  

```javascript
	const artik = require('../lib/artik-sdk'); // Include dependencies of the Artik SDK.  
	const Websocket = require('../src/websocket'); // Instanciate the main module object.  
	const name = artik.get_platform_name(); // Get the platform name.  

	if (name == 'Artik 520') { // Check for a A520 board
		const a5 = require('../src/platform/artik520'); // If 'yes', then instantiate the platform depedencies.  
	} else if (name == 'Artik 1020') { // Check for a A1020 board
		const a10 = require('../src/platform/artik1020'); // If 'yes', then instantiate the platform depedencies.  
        } else if (name == 'Artik 71O') { // Check for a A710 board
                const a7 = require('../src/platform/artik710'); // If 'yes', thee
n instantiate the platform depedencies.
        }
		...
```
 __NB__:  
   \- After this step you should always call the main module object and use its dependencies for retrieve or operate with the modules of the Artik SDK.    
   \- Also be carefull due to the system of event emitter we need to construct the object from the javascript layer not from the node.js addon C++.

   * Instantiate the module  
   From the main module we can call the module Websocket constructor.  
   **_ex\._**:  

```javascript
	var host = "s-api.samsungsami.io";
	var uri = "/v1.1/websocket?ack=true"; 
	var port = 443;
	var ssl_connection = 2;
	var use_se = false;
	var websocket = new Websocket(host, uri, port, ssl_connection, use_se);
		...
```
 __NB__:  
   \- First one is the host name;  
   \- The second is the URL;  
   \- The third parameter is the port number;  
   \- The fourth is the channel SSL;  
   \- The last parameter permits to enable the secure environment;  

## 2. Process with the Websocket module
   * Function : 'open_stream'  
   'open_stream' permits to open a stream channel whith a websocket server.  
   **_ex\._**:  

```javascript
	websocket.open_stream();
		...
```
   * Function : 'write_stream'  
   'write_stream' writes to the channel of a websocket server.  
   **_ex\._**:  

```javascript
	var register_message = '{"sdid":"f8b8e08f08d24e278bc574f7361d207f","Authorization":"bearer bd2e6e5fdf374d329016130d54edc385","type":"register"}';

	websocket.write_stream(register_message);
		...
```

   * Function : 'close_stream'  
   'close_stream' closes a stream channel of a websocket server.  
   **_ex\._**:  

```javascript
	websocket.close_stream();
		...
```

   * Function : 'on'  
   'on' permits to store a callback associates to an event.  
   **_ex\._**:  

```javascript
	websocket.on('receive', function(message) {
        console.log("received: " + message);
        websocket.write_stream(test_send_message);
});
		...
```

## 3. Full example

   * See [the test file](/test/websocket-test.js)
