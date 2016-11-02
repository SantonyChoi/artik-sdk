# Module Network
   > This README permits to introduce each API function of the module Network.  

## 1. Initialize & clean an usage with the module Network
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
   From the main module we can call the module Network constructor.  
   **_ex\._**:  

```javascript
	var network = artik.network();
		...
```

## 2. Process with the module Network
   * Function : 'get_current_ip'  
   'get_current_ip' serves for retrieve the host IP.  
   **_ex\._**:  

```javascript
	console.log("MY IP Address : " +network.get_current_ip());
		...
```
 __NB__:  
   The first and lonely parameter serves to store a callback for retrieving the host IP.    

   * Function : 'get_online_status'  
   'get_online_status' serves to know if the network is establish.  
   **_ex\._**:   
```javascript
	console.log("There is a connexion : " +network.get_online_status());
		...
```

## 3. Full example

   * See [the test file](/test/network-test.js)
