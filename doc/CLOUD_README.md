# Module Cloud
   > This README permits to introduce each API functions of the module Cloud.  

## 1. Initialize & clean an usage with the module Cloud
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
   From the main module we can call the module Cloud constructor.    
   **_ex\._**:  

```javascript
	var auth_token = ''	
	var cloud = artik.cloud(auth_token);
		...
```
 __NB__:  
   The parameter serves to store the authentification token.  

## 2. Process with the module Cloud  
   * Function : 'send_message'  
   'send_message' permits to send a message to a specific device stored in the cloud.  
   **_ex\._**:  

```javascript
	cloud.send_message(device_id, message, function(response) {
		console.log("Send message - response: " + response);
	})
		...
```

   * Function : 'send_action'  
   'send_action' send an action command to a specific device stored in the cloud.  
   **_ex\._**:  

```javascript
	cloud.send_action(device_id, action, function(response) {
		console.log("Send action - response: " + response);
	});
		...
```

   * Function : 'get_current_user_profile'  
   'get_current_user_profile' allows to retrieve the current user profile.    
   **_ex\._**:  

```javascript
	cloud.get_current_user_profile(function(response) {
		console.log("Get Current User Profile - response: " + response);
	});
		...
```

   * Function : 'get_user_devices'  
   'get_user_devices' list all devices owned by the user.  
   **_ex\._**:  

```javascript
	cloud.get_user_devices(100, false, 0, user_id, function(response) {
		console.log("Get user devices without properties - response: " + response);
	});
		...
```
 __NB__:  
   \- First parameter is the maximum size list of devices;  
   \- The second parameter serves to inform if we should transfer the properties;  
   \- The third is the offset within the list.  

   * Function : 'get_user_device_types'  
   'get_user_device_types' list all types devices owned by the user.  
   **_ex\._**:  

```javascript
	cloud.get_user_device_types(100, false, 0, user_id, function(response) {
		console.log("Get User Device Types - response: " + response);
	});
		...
```
 __NB__:  
   \- First parameter is the maximum size list of types devices;  
   \- The second parameter serves to inform if we should transfer the properties;  
   \- The third is the offset within the remote list.  

   * Function : 'get_device'  
   'get_device' retrieves a specific device.  
   **_ex\._**:  

```javascript
	cloud.get_device(device_id, false, function(response) {
		console.log("Get Device without properties - response: " + response);
	});
		...
```
 __NB__:  
   The second parameter enable the device properties transfer.  

   * Function : 'get_device_token'  
   'get_device_token' retrieves the token of a specific device.  
   **_ex\._**:  

```javascript
	cloud.get_device_token(device_id, function(response) {
		console.log("Get Device Token - response: " + response);
	});
		...
```

   * Function : 'update_device_token'  
   'update_device_token' retrieves a specific device for update its token.  
   **_ex\._**:  

```javascript
	cloud.update_device_token(device_id, function(response) {
		console.log("Update Device Token - response: " + response);
	});
		...
```

   * Function : 'delete_device_token'  
   'delete_device_token' retrieves a specific device for delete its token.  
   **_ex\._**:  

```javascript
	cloud.delete_device_token(device_id, function(response) {
		console.log("Delete Device Token - response: " + response);
	});
		...
```

   * Function : 'delete_device'  
   'delete_device' retrieves a specific device for delete it.  
   **_ex\._**:  

```javascript
	cloud.delete_device(device_id, function(response) {
		console.log("Delete Device - response: " + response);
	});
		...
```

## 3. Full example

   * See [the test file](/test/cloud-test.js)
