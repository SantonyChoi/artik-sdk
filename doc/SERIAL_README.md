# Module Serial
   > This README permits to introduce each API functions of the module Serial.

## 1. Initialize & clean an usage with the module Serial
   * Include the headers  
   First of all, we should include the main module of the Artik SDK and its depedencies wich depend on the Artik board version.  
   **_ex\._**:  

```javascript
	const artik = require('../lib/artik-sdk'); // Instantiate the main module object for accessing to the Artik SDK.  
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
   After this step you should always call the main module object and use its dependencies for retrieve or operate with the modules of the Artik SDK.    
   
   * Instantiate the module  
   From the main module we can call the module Serial constructor.  
   **_ex\._**:  

```javascript
	var serial = artik.serial(a5.ARTIK_A5_SERIAL.SCOM.XSCOM2,
				  "serial-loopback",
				  a5.ARTIK_A5_SERIAL.BAUD.B115200,
				  a5.ARTIK_A5_SERIAL.PARITY.NONE,
				  a5.ARTIK_A5_SERIAL.DATA.BIT8,
				  a5.ARTIK_A5_SERIAL.STOP.BIT1,
				  a5.ARTIK_A5_SERIAL.FLOWCTRL.NONE);

```
 __NB__:  
   \- The first parameter is the serial port number;  
   \- The second is the friendly name;  
   \- The third is the frequency;  
   \- The fourth is the parity mode;  
   \- The fifth is the word size;  
   \- The sixth parameter is the ;  
   \- The last one is the address of the chip.  

   * Function : 'request'  
   'request' permits to request the module Serial with the given configuration, return an error if it's fail.  
   **_ex\._**:  

```javascript
	serial.request();
		...
```

   * Function : 'release'  
   'release' serves to free the ressources owned by the object module Serial.  
   **_ex\._**:  

```javascript
	serial.release();
		...
```

## 2. Process with the Serial module
   * Function : 'write'  
   'write' permits to write to the 'tx' port.  
   **_ex\._**:  

```javascript
	serial.write("send a packet");
		...
```
   * Function : 'get_port_num'   
   'get_port_num' permits to retrieve the serial port number of the module.  
   **_ex\._**:  

```javascript
	serial.get_port_num();
		...
```

   * Function : 'get_name'  
   'get_name' permits to retrieve the friendly name of the module.  
   **_ex\._**:  

```javascript
	serial.get_name();
		...
```

   * Function : 'get_baudrate'  
   'get_baudrate' permits to retrieve the frequency set of the module.  
   **_ex\._**:  

```javascript
	serial.get_baudrate();
		...
```

   * Function : 'get_parity'  
   'get_parity' permits to retrieve the parity set of the module.  
   **_ex\._**:  

```javascript
	serial.get_parity();
		...
```

   * Function : 'get_data'  
   'get_data' permits to retrieve the word size of the module.  
   **_ex\._**:  

```javascript
	serial.get_data();
		...
```

   * Function : 'get_stop'  
   'get_stop' permits to retrieve the bit stop set of the module.  
   **_ex\._**:  

```javascript
	serial.get_stop();
		...
```

   * Function : 'get_flowctrl'  
   'get_flowctrl' permits to retrieve the flow control mode set of the module.  
   **_ex\._**:  

```javascript
	serial.get_flowctrl();
		...
```

   * Function : 'set_port_num'  
   'set_port_num' permits to set the serial port number of the module.  
   **_ex\._**:  

```javascript
	serial.set_port_num();
		...
```

   * Function : 'set_name'  
   'set_name' permits to set the friendly name of the module.  
   **_ex\._**:  

```javascript
	serial.set_name();
		...
```

   * Function : 'set_baudrate'  
   'set_baudrate' permits to set the frequency of the module.  
   **_ex\._**:  

```javascript
	serial.set_baudrate();
		...
```

   * Function : 'set_parity'  
   'set_parity' permits to set the bit parity of the module.  
   **_ex\._**:  

```javascript
	serial.set_parity();
		...
```

   * Function : 'set_data'  
   'set_data' permits to set the word size of the module.  
   **_ex\._**:  

```javascript
	serial.set_data();
		...
```

   * Function : 'set_stop'  
   'set_stop' permits to set the stop bit of the module.  
   **_ex\._**:  

```javascript
	serial.set_stop();
		...
```

   * Function : 'set_flowctrl'  
   'set_flowctrl' permits to set the flow control mode of the module.  
   **_ex\._**:  

```javascript
	serial.set_flowctrl();
		...
```


   * Function : 'on'  
   'on' permits to store a callback associates to an event.  
   **_ex\._**:  

```javascript
	serial.on('read', function(message) {
        console.log("received: " + message);
});

		...
```


## 3. Full example

   * See [the test file](/test/serial-test.js)
