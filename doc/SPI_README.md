# Module SPI
   > This README permits to introduce each API functions of the module SPI.

## 1. Initialize & clean an usage with the module SPI
   * Include the headers
   > First of all, we should include the main module of the Artik SDK and its depedencies wich depend on the Artik board version.  
   > **_ex\._**:  

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
   > Then from the main module we can call the module SPI constructor.
   > **_ex\._**:  

```javascript
	var spi = artik.spi(a5.ARTIK_A5_SPI.BUS.BUS1, // depends on Artik 5 board
			      a5.ARTIK_A5_SPI.CS.CS0,
			      a5.ARTIK_A5_SPI.MODE.MODE0,
			      a5.ARTIK_A5_SPI.BITS.BITS8,
			      500000);
		...
```
 __NB__:  
   - The first parameter is the bus number;  
   - The second is the chip select number;  
   - The third is the mode controller;  
   - The fourth the amount of bit per word;  
   - The last bits max speed.  

   * Function : 'request'
   >  'request' permits to request the module SPI with the given configuration, return an error if it's fail.  
   > **_ex\._**:  

```javascript
	if (spi.request() != S_OK) {
		...
```

   * Function : 'release'
   > 'release' serves to free the ressources require by the object module SPI.  
   > **_ex\._**:  

```javascript
	spi.release()
		...
```

## 2. Process with the SPI module
   * Function : 'read'
   > 'read' permits to read to the 'rx' port.  
   > **_ex\._**:  

```javascript
	var buffer_read = spi.read(45) // Pass the lenght max for read and return the message if it can read else return an error.
		...
```

   * Function : 'write'
   > 'write' permits to write directly to the 'tx' port.  
   > **_ex\._**:  

```javascript
 	var buff_write = new Buffer([0x4, 0x0], 'hex');  
	var nb_wrote = spi.write(buff_write) // Return the lenght of the sent message else return an error.  
		...
```

   * Function : 'read_write'
   > 'read_write' merges the two capabilities for read or write a message.  
   > **_ex\._**:  

```javascript
	var buff_read = new Buffer([0x84, 0x0], 'hex'); // value for a command read ((0x2 << 1 ) | 0x80).  
	var buff_write = new Buffer([0x4, 0x0], 'hex'); // value for a command write (0x2 << 1).  
	var error_val = spi.read_write(buff_read, buff_write, 2) // Store the message into parameters or send the message if it can else return an error.   
		...
```

## 3. Full example

   * See [the test file](/test/spi-test.js)
