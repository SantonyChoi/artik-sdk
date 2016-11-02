# Module I2C
   > This README permits to introduce each API function of the module I2C.

## 1. Initialize & clean an usage with the module I2C
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
   From the main module we can call the module I2C constructor.  
   **_ex\._**:  

```javascript
	var i2c = artik.i2c(1, 2000, '8', 0x62);
		...
```
 __NB__:  
   \- The first parameter is the I2C controller ID;  
   \- The second is the maximum frequency;  
   \- The third parameter is the word size for the chip;  
   \- The last parameter is the address of the chip.  

   * Function : 'request'  
   'request' permits to request the module I2C with the given configuration, return an error if it's fail.  
   **_ex\._**:  

```javascript
	if (i2c.request() != S_OK) {
		...
```

   * Function : 'release'  
   'release' serves to free the ressources require by the object module I2C.  
   **_ex\._**:  

```javascript
	i2c.release();
		...
```

## 2. Process with the I2C module
   * Function : 'read'  
   'read' permits to read at the chip adress.  
   **_ex\._**:  

```javascript
	var reg = i2c.read(1);
	console.log('Version: ' + Buffer(reg).toString('hex'));
		...
```

   * Function : 'write'  
   'write' permits to write at the chip adress.  
   **_ex\._**:  

```javascript
	var reg = new Buffer([0xff], 'hex');
	console.log('Writing 0x' + Buffer(reg).toString('hex') + ' to config register');
	i2c.write(reg);
		...
```

   * Function : 'read_register'  
   'read_register' reads to a specific register from the chip adress.  
   **_ex\._**:  

```javascript
	console.log('Version: ' + Buffer(i2c.read_register(0, 1)).toString('hex'));
		...
```
 __NB__:  
   \- The first parameter is the register number;  
   \- The last is the max size for read.  

   * Function : 'write_register'  
   'write_register' writes to a specific register from the chip adress.  
   **_ex\._**:  

```javascript
	var reg = new Buffer([0xff], 'hex');
	console.log('Writing 0x' + Buffer(reg).toString('hex') + ' to config register');
	i2c.write_register(8, reg);
		...
```
 __NB__:  
   \- The first parameter is the address of the register;  
   \- the last is the data to write.  

## 3. Full example

   * See [the test file](/test/i2c-test.js)
