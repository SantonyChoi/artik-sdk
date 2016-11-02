# Module GPIO 
   > This README permits to introduce each API functions of the module GPIO.

## 1. Initialize & clean an usage with the module GPIO 
   * Include the headers  
   First of all, we should include the main module of the Artik SDK and its depedencies wich depend on the Artik board version.  
   **_ex\._**:  

```javascript
	const artik = require('../lib/artik-sdk');  // Include dependencies of the Artik SDK.  
    const Gpio = require('../src/gpio'); // Instanciate the main module object.  
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
   From the main module we can call the module GPIO constructor.  
   **_ex\._**:  

```javascript
	var gpio = new Gpio(a5.ARTIK_A5_GPIO_XEINT1, 'button', 'in' , 'digital', 'both', 0);
		...
```
 __NB__:  
   \- The first parameter is the digital pin number;  
   \- The second the friendly name;  
   \- The third for the direction;  
   \- The fourth is the type;  
   \- The fifth is the edge for detect the change state;  
   \- The last is the initial value.  

   * Function : 'request'  
   'request' permits to request the module GPIO with the given configuration, return an error if it's fail.  
   **_ex\._**:  

```javascript
	gpio.request();
		...
```

   * Function : 'release'  
   'release' serves to free the ressources require by the object module GPIO.  
   **_ex\._**:  

```javascript
	gpio.release();
		...
```

## 2. Process with the GPIO module
   * Function : 'read'  
   'read' permits to read to the digital pin.  
   **_ex\._**:  

```javascript
	console.log("Value on digital pin : "+gpio.read());
		...
```

   * Function : 'write'  
   'write' permits to write to the digital pin.  
   **_ex\._**:  

```javascript
	gpio.write(1);
		...
```

   * Function : 'get_name'  
   'get_name' retrieves the friendly name of the module.  
   **_ex\._**:  

```javascript
	console.log("gpio name : " + gpio.get_name());
		...
```

   * Function : 'get_direction'  
   'get_direction' retrieves the direction of the module.  
   **_ex\._**:  

```javascript
	console.log("gpio direction : " + gpio.get_direction());
		...
```

   * Function : 'get_type'  
   'get_type' retrieves the type of the module.  
   **_ex\._**:  

```javascript
	console.log("gpio type : " + gpio.get_type());
		...
```

   * Function : 'get_id'  
   'get_id' retrieves the digital pin number of the module.  
   **_ex\._**:  

```javascript
	console.log("gpio pin number : " + gpio.get_id());
		...
```

   * Function : 'on'  
   'on' permits to store a callback associates to an event.  
   **_ex\._**:  

```javascript
	button.on('changed', function(val) {
		console.log("Button state: " + val);
	});
		...
```
	
## 3. Full example

   * See [the test file](/test/gpio-test.js)
