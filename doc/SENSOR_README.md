# Module Sensor
   > This README permits to introduce each API functions of the module Sensor.  

## 1. Initialize & clean an usage with the module Sensor  
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
   From the main module we can call the module Sensor constructor.  
   **_ex\._**:  

```javascript	
	var module_sensor = artik.sensor(); // Instantiate the module sensor.
		...
```

## 2. Process with the Sensor module
### A. The module sensor
   * Function : 'list'  
   'list' permits to list all usable configurations for operate with a specific sensor device.  
   **_ex\._**:  

```javascript
	var array_of_device_sensor = module_sensor.list();
		...
```
 __NB__:
   The function 'list' will return an array of class 'DeviceSensor' wich is the parent abstract class of each sensor device class.  
   That class permit to implement for each device sensor three functions list below :  
   \- get_name() : which is use for retrieve the friendly name of the configuration of a sensor device;  
   \- get_type() : which serves to define a type for the sensor device; 
   \- get_index() : finaly the index permits to identify the configuration number for the type of sensor device.  

   * Function : 'get_sensor'  
   'get_sensor' permits to retrieve a specifc sensor but return an upcast of the sensor device class.  
   **_ex\._**:  

```javascript
	var photolight_sensor = module_sensor.get_sensor(0, a5.ARTIK_A5_SENSORS.DEVICE.LIGHT); // Get the 1st type of sensor light.
	// or
	var photolight_sensor = module_sensor.get_sensor(4, a5.ARTIK_A5_SENSORS.DEVICE.LIGHT); // Get the 4th.
		...
```
__NB__:
   The returned object should be downcast for using its sensor device features.   

   * Function : 'get_accelerometer_sensor'  
   'get_accelerometer_sensor' permits to create a new native object for operate with an accelerometer sensor device.  
   **_ex\._**:  

```javascript
	var accelerometer_sensor = module_sensor.get_accelerometer_sensor(0);
		...
```

   * Function : 'get_flame_sensor'  
   'get_flame_sensor' creates a new native object for operate with a flame sensor device.  
   **_ex\._**:  

```javascript
	var flame_sensor = module_sensor.get_flame_sensor(0);
		...
```

   * Function : 'get_humidity_sensor'  
   'get_humidity_sensor' permits to create a new native object for operate with an humidity sensor device.   
   **_ex\._**:  

```javascript
	var humid_sensor = module_sensor.get_humidity_sensor(0);
		...
```

   * Function : 'get_light_sensor'  
   'get_light_sensor' creates a new native object for operate with a light sensor device.  
   **_ex\._**:  

```javascript
	var photoresistor_light_sensor = module_sensor.get_light_sensor(0);
		...
```

   * Function : 'get_proximity_sensor'  
   'get_proximity_sensor' permits to create a new native object for operate with a proximity sensor device.  
   **_ex\._**:  

```javascript
	var proximity_sensor = module_sensor.get_proximity_sensor(0);
		...
```

   * Function : 'get_temperature_sensor'  
   'get_temperature_sensor' permits to create a new native object for operate with a temperature sensor device.  
   **_ex\._**:  

```javascript
	var environment_temperature_sensor = module_sensor.get_temperature_sensor(0);
		...

```

### B. All supported sensors  
#### 0. The abstract class sensor  
   * Function : 'get_type'  
   'get_type' retrieves the type of the sensor device.  
   **_ex\._**:  

```javascript
	var photolight_sensor = module_sensor.get_sensor(4, a5.ARTIK_A5_SENSORS.DEVICE.LIGHT);
	logout.log("Get a device of type "+photolight_sensor.get_type());
		...

```

   * Function : 'get_index'  
   'get_index' serves to identify the configuration number for the type of the sensor device.   
   **_ex\._**:  

```javascript
	var photolight_sensor = module_sensor.get_sensor(4, a5.ARTIK_A5_SENSORS.DEVICE.LIGHT);
	logout.log("Get the n°"+photolight_sensor.get_index()+" of light sensor configurations.");
		...
```

   * Function : 'get_name'  
   'get_index' gets the friendly name of the configuration of the sensor device;  
   **_ex\._**:  

```javascript
	var photolight_sensor = module_sensor.get_sensor(4, a5.ARTIK_A5_SENSORS.DEVICE.LIGHT);
	logout.log("The sensor light is for : "+photolight_sensor.get_name()+" tracking...");
		...
```

#### 1. The Accelerometer sensor  
   * Function : 'get_type'  
   See parent class definition.  

   * Function : 'get_index'  
   See parent class definition.  

   * Function : 'get_name'  
   See parent class definition.  

   * Function : 'get_speed_x'  
   'get_speed_x' gets the value of the axis X.  
   **_ex\._**:  

```javascript
	console.log("x = "+accelerometer_sensor.get_speed_x());
		...
```

   * Function : 'get_speed_y'  
   'get_speed_y' gets the value of the axis Y.  
   **_ex\._**:  

```javascript
	console.log("y = "+accelerometer_sensor.get_speed_y());
		...
```

   * Function : 'get_speed_z'  
   'get_speed_z' gets the value of the axis Z.  
   **_ex\._**:  

```javascript
	console.log("z = "+accelerometer_sensor.get_speed_z());
		...
```

#### 2. The Flame sensor  
   * Function : 'get_type'  
   See parent class definition.  

   * Function : 'get_index'  
   See parent class definition.  

   * Function : 'get_name'  
   See parent class definition.  

   * Function : 'get_signals'  
   'get_signals' gets the flame presence value (0 or 1).  
   **_ex\._**:  

```javascript
	console.log("there is a flame ?  "+flame_sensor.get_signals());
		...
```

#### 3. The Humidity sensor
   * Function : 'get_type'    
   See parent class definition.  

   * Function : 'get_index'  
   See parent class definition.  

   * Function : 'get_name'  
   See parent class definition.  

   * Function : 'get_humidity'  
   'get_humidity' process the percent value of humidity.  
   **_ex\._**:  

```javascript
	console.log(humid_sensor.get_humidity()+"% of humidity");
		...
```

#### 4. The Light sensor  
   * Function : 'get_type'  
   See parent class definition.  

   * Function : 'get_index'  
   See parent class definition.  

   * Function : 'get_name'  
   See parent class definition.  

   * Function : 'get_intensity'  
   'get_intensity' process the percent value of brightness.   
   **_ex\._**:  

```javascript
	console.log(photolight_sensor.get_intensity()+"% of light");
		...
```

#### 5. The Proximity sensor
   * Function : 'get_type'  
   See parent class definition.  

   * Function : 'get_index'  
   See parent class definition.  

   * Function : 'get_name'  
   See parent class definition.  

   * Function : 'get_presence'  
   'get_presence' gets the presence value (0 or 1).  
   **_ex\._**:  

```javascript
	console.log("there is an obstacle ?  "+proximity_sensor.get_presence());
		...
```

#### 6. The Temperature sensor
   * Function : 'get_type'  
   See parent class definition.  

   * Function : 'get_index'  
   See parent class definition.  

   * Function : 'get_name'  
   See parent class definition.  

   * Function : 'get_celcius'  
   'get_celcius' process the temperature value in celicus.  
   **_ex\._**:  

```javascript
	console.log(environment_temperature_sensor.get_celcius()+"C° of temperature");
		...
```

   * Function : 'get_fahrenheit'  
   'get_fahrenheit' process the temperature value in fahrenheit.  
   **_ex\._**:  

```javascript
	console.log(environment_temperature_sensor.get_fahrenheit()+"F° of temperature");
		...
```

## 3. Full example

   * See [the test file](/test/sensor-test.js)
