# Module Time
   > This README permits to introduce each API function of the module Time.  

## 1. Initialize & clean an usage with the module Time
   * Include the headers  
   First of all, we should include the main module of the Artik SDK and its dependencies which depend on the Artik board version.  
   **_ex\._**:  

```javascript
	const artik = require('../lib/artik-sdk'); // Instantiate the main module for accessing to the Artik SDK.  
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
   From the main module object we can call the module Time constructor.   
   **_ex\._**:  

```javascript
	var time = artik.time();
		...
```

## 2. Process with the module Time 
### A. The module Time 
   * Function : 'set_time'  
   'set_time' serves to set the system clock with a native Date object.  
   **_ex\._**:  

```javascript
	var new_js_date = new Date(); // We create a native Date object.  
	new_js_date.setUTCSeconds(new_js_date.getUTCSeconds()+6000);// We add an certain amount of seconds.  
	time.set_time(new_js_date) // Then we can modify the system clock.  
		...
```

   * Function : 'get_time'  
   'get_time' serves to get the actual GMT time store into a native Date object.   
   **_ex\._**:  

```javascript
	console.log("Time Date JS object = "+time.get_time());
		...
```

   * Function : 'get_time_str'  
   'get_time_str' serves to get the actual GMT time by a String object.  
   **_ex\._**:  

```javascript
	console.log("Time String JS object = "+time.get_time_str());  
		...
```

   * Function : 'get_tick'  
   'get_tick' permits to return the actual time in milli-seconds.  
   **_ex\._**:  

```javascript
	var begin = time.get_tick();  

	while ((time.get_tick() - begin) < 10000) // Check if the loop process is less than 10 seconds.  
		...
```

   * Function : 'create_alarm_second'  
   'create_alarm_second' creates an alarm and takes an amount of seconds as parameter.  
   **_ex\._**:  

```javascript
	alarm = module.create_alarm_second(a5.ARTIK_A5_TIME.ZONE.GMT2, 42, function() {
	    console.log("This function is call when the alarm reach its deadline.");
	});
	// or a negativ GMT  
    alarm = module.create_alarm_second(-a5.ARTIK_A5_TIME.ZONE.GMT2, 42, function() {
	    console.log("This function is call 42 seconds after its registration.");
	});
		...
```
 __NB__:  
   \- First parameter is use for set a local time;  
   \- The second parameter is use as the starter value in seconds for the alarm cooldown;  
   \- The last one is a callback wich is call when the alarm cooldown reach 0.  

   * Function : 'create_alarm_date'  
   'create_alarm_date' creates an alarm and take a native Date object as parameter.  
   **_ex\._**:  

```javascript
	alarm = module.create_alarm_date(a5.ARTIK_A5_TIME.ZONE.GMT2, new_date, function() {
	    console.log("This function is call when the alarm reach its deadline.");  
	});
	// or a negativ GMT value
	alarm = module.create_alarm_date(-a5.ARTIK_A5_TIME.ZONE.GMT2, new_date, function() {
	    console.log("This function is call at the date indication after its registration.");  
	});
		...
```
 __NB__:  
   \- First parameter is use for set a local time;  
   \- The second parameter is the expiry date of the alarm;    
   \- The last is a callback wich is call when the alarm exceed the expiry date.   

   * Function : 'sync_ntp'  
   'sync_ntp' permits to connect to a specific server and then synchronize the system clock with the clock of the remote host.  
   **_ex\._**:  

```javascript 
	if (module.sync_ntp(hostname) == S_OK)
		console.log("Synchronization succeed !");  
		...
```
### B. The object Alarm
   * Function : 'cancel'  
   'cancel' free the alarm.   
   **_ex\._**:  

```javascript
	alarm.cancel();
		...
```

   * Function : 'get_delay'   
   'get_delay' permits to get the remain time before the end of the alarm.  
   **_ex\._**:  

```javascript
	console.log("Seconds remain : "+alarm.get_delay()+" secs...");
		...

```

## 3. Full example

   * See [the test file](/test/time-test.js)


