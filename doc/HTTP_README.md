# Module HTTP
   > This README permits to introduce each API functions of the module HTTP.  

## 1. Initialize & clean an usage with the module HTTP
   * Include the headers  
   First of all, we should include the main module of the Artik SDK and its depedencies wich depends on the Artik board version.  
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
   From the main module we can call the module HTTP constructor.    
   **_ex\._**:  

```javascript
	var http = artik.http();
		...
```

## 2. Process with the module HTTP
   * Function : 'get'  
   'get' permits to process a 'get' command base on the HTTP protocol.  
   **_ex\._**:  

```javascript
	var headers = [
		"user-agent", "Artik browser",
		"Accept-Language", "en-US,en;q=0.8"
	];

	http.get("https://httpbin.org/get", headers, function(response, status) {
    		console.log("GET - status " + status + " - response: " + response);
	});
		...
```
 __NB__:  
   \- First parameter is the URL link;    
   \- Second is the HTTP header object;    
   \- The last is the callback use for retrieve the data.  
 
   * Function : 'post'  
   'post' permits to process a 'post' command base on the HTTP protocol.  
   **_ex\._**:  

```javascript
	var headers = [
		"user-agent", "Artik browser",
		"Accept-Language", "en-US,en;q=0.8"
	];

	http.post("https://httpbin.org/post", headers, body, function(response, status) {
			console.log("POST - status " + status + " - response: " + response);
	});
		...
```
 __NB__:  
   \- First parameter is the URL link;  
   \- Second is the HTTP header object;    
   \- Third parameter is the request container;  
   \- The last is the callback use for retrieve the data.  
 
   * Function : 'put'  
   'put' permits to process a 'put' command base on the HTTP protocol.  
   **_ex\._**:  

```javascript
	var headers = [
		"user-agent", "Artik browser",
		"Accept-Language", "en-US,en;q=0.8"
	];
	var body = "name=samsung&project=artik";

	http.put("https://httpbin.org/put", headers, body, function(response, status) {
			console.log("PUT - status " + status + " - response: " + response);
	});
		...
```
 __NB__:  
   \- First parameter is the URL link;    
   \- Second is the HTTP header object;    
   \- Third parameter is the request container;    
   \- The last is the callback use for retrieve the data.  
 
   * Function : 'del'  
   'del' permits to process a 'delete' command base on the HTTP protocol.  
   **_ex\._**:  

```javascript
	var headers = [
		"user-agent", "Artik browser",
		"Accept-Language", "en-US,en;q=0.8"
	];

	http.get("https://httpbin.org/delete", headers, function(response, status) {
			console.log("DELETE - status " + status + " - response: " + response);
	});
		...
```
 __NB__:  
   \- First parameter is the URL link;  
   \- The second is the HTTP header object.  
   \- The last is the callback use for retrieve the data.  
 
## 3. Full example

   * See [the test file](/test/http-test.js)
