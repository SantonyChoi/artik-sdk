# Module ADC
  > This README permits to introduce each API functions of the module ADC.

## 1. Initialize & clean an usage with the module ADC
  * Include the headers  
    First of all, we should include the main module of the Artik SDK and its depedencies wich depend on the Artik board version.   
  **_ex\._**:  

```javascript
	const artik = require('../lib/artik-sdk'); // Instantiate the main module object for accessing to the Artik SDK.
	const name = artik.get_platform_name(); // Get the platform name.

	if (name == 'Artik 520') { // Check for a A520 board
		const a5 = require('../src/platform/artik520'); // If 'yes', then instantiate the platform depedencies.
	} else if (name == 'Artik 1020') { // Check for a A1020 board
		const a10 = require('../src/platform/artik1020'); // If 'yes', then instantiate the platform depedencies.
	} else if (name == 'Artik 71O') { // Check for a A710 board
		const a7 = require('../src/platform/artik710'); // If 'yes', then instantiate the platform depedencies.
	}
		...
```
 __NB__:  
   After this step you should always call the main module object and use its dependencies for retrieve or operate with the modules of the Artik SDK.    
   
   * Instantiate the module  
   From the main module object we can call the module ADC constructor..  
   **_ex\._**:  

```javascript
	var adc = artik.adc(0, "adcjs-test"); // we use a board Artik 5
		...
```
 __NB__:  
   - The first parameter serves to indicate wich analog port should be use;  
   - Rather than the second which it serves to name the module object.  

   * Function : 'request'  
   'request' permits to request the analog port reserved for the module.  
   It will not allows to share it with another instance of module ADC otherwise the function will throw an exception.  
   **_ex\._**:  

```javascript
	   adc.request();
		...
```

   * Function : 'release'  
   'release' releases the modules ressources.  
   If it's not call the next 'request' call with the same analog port will fail.  
   **_ex\._**:  

```javascript
	adc.release();
		...
```

## 2. Process with the ADC module

   * Function : 'get_value'  
   'get_value' reads the data sent to the analog port.  
   **_ex\._**:  

```javascript
    console.log("Value : [%d]", adc.get_value());
		...
```

   * Function : 'get_pin_num'  
   'get_pin_num' permits to retrieve the analog port number.  
   **_ex\._**:  

```javascript
	console.log("Pin : A[%d]", adc.get_pin_num());
		...
```

   * Function : 'get_name'  
   'get_name' retrieves the friendly name.  
   **_ex\._**:  

```javascript
	console.log("[%s] : load", adc.get_name());
		...
```

   * Function : 'set_pin_num'  
   >'set_pin_num' changes the analog port number without re-enable the module (It should be done manualy).  
   **_ex\._**:  

```javascript
	adc.release(); // Close the pending module.

	adc.set_pin_num(); // Change the port number.

	adc.request(); // Finally request the new analog port.
		...
```
   * Function : 'set_name'  
   'set_name' permits to change the friendly name of the module.  
   **_ex\._**:  

```javascript
	adc.set_name("new_name_adc_test");
		...
```
## 3. Full example

   * See [the test file](/test/adc-test.js)

