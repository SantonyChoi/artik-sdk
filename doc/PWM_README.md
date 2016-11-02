# Module PWM
   > This README permits to introduce each API function of the module PWM.

## 1. Initialize & clean an usage with the PWM module
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
   From the main module we can call the module PWM constructor.  
   **_ex\._**:  

```javascript
	var pwm = artik.pwm(a5.ARTIK_A5_PWM.PWMIO.XPWMIO1, "pwm-test", 400000, a5.ARTIK_A5_PWM.POLR.NORMAL, 200000);
	// The polarity and chip number use the platform module variables.
		...
```
 __NB__:  
   \- The first parameter serves to define which chip number should be use into the PWM object;  
   \- The second is the friendly name;  
   \- The third is the value of the duty cycle (the max value for a period);  
   \- The fourth sets the polarity of the module;  
   \- The last is the value of a period.  

   * Function : 'request'  
   'request' permits to request the module.    
   It will not allow to share the same PWM chip with another instance of module PWM, otherwise the function will throw an exception.   
   **_ex\._**:  

```javascript
	pwm.request();
		...
```

   * Function : 'release'  
   'release' serves to release the ressources.   
   Otherwise the next 'request' call with the same chip number will fail.   
   **_ex\._**:  

```javascript
	pwm.release();
		...
```

## 2. Process with the PWM module
   * Function : 'enable'  
   'enable' switch on the module.  
   **_ex\._**:  

```javascript
	pwm.enable();
		...
```

   * Function : 'disable'  
   'disable' switch off the module.  
   **_ex\._**:  

```javascript
	pwm.disable();
		...
```

   * Function : 'set_period'  
   'set_period' permits to set the value of the PWM period (the value cannot be greater than the duty cycle).  
   **_ex\._**:  

```javascript
	pwm.set_period(300000); // the value is < 400 000 (because the duty cycle is egual to this value).  
		...
```

   * Function : 'set_polarity'  
   'set_polarity' permits to set the direction polarity.  
   **_ex\._**:  

```javascript
	pwm.set_polarity(ARTIK_A5_PWM.POLR.INVERT);  
		...
```

   * Function : 'set_duty_cycle'  
   'set_duty_cycle' permits to define the maximum value of a signal.  
   **_ex\._**:  

```javascript
	pwm.set_duty_cycle(500000);
		...
```

   * Function : 'set_pin_num'  
   'set_pin_num' permits to set the chip number use by a module PWM object.  
   **_ex\._**:  

```javascript
	pwm.set_pin_num(a5.ARTIK_A5_PWM.PWMIO.XPWMIO2);
		...
```

   * Function : 'set_name'  
   'set_name' permits to set the friendly name of the module.  
   **_ex\._**:  

```javascript
	pwm.set_name("new_test_pwm_name");
		...
```

   * Function : 'get_period'  
   'get_period' retrieves the intensity value of a period.    
   **_ex\._**:  

```javascript
    console.log("Period value : [%d]", pwm.get_period());
		...
```

   * Function : 'get_polarity'  
   'get_polarity' retrieves the polarity of the module.   
   **_ex\._**:  

```javascript
	console.log("Polarity value : [%d]", pwm.get_polarity());
		...
```

   * Function : 'get_duty_cycle'  
   'get_duty_cycle' retrieves the value of the duty cycle store into the module.  
   **_ex\._**:  

```javascript
	console.log("Duty Cycle value : [%d]", pwm.get_duty_cycle());
		...
```

   * Function : 'get_pin_num'  
   'get_pin_num' retrieves the chip number of the module.  
   **_ex\._**:  

```javascript
	console.log("Chip number value : [%d]", pwm.get_pin_num());
		...
```

   * Function : 'get_name'  
   'get_name' retrieves the friendly name of the module.  
   **_ex\._**:  

```javascript
	console.log("Name value : [%s]", pwm.get_name());
		...
```

## 3. Full example

   * See [the test file](/test/pwm-test.js)
