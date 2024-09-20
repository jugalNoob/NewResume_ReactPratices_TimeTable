import React from 'react';

function Dom() {


  // window.location object examples
console.log("Current URL (href):", window.location.href); // Logs the full URL of the current page
console.log("Domain Name (hostname):", window.location.hostname); // Logs the domain name of the web host
console.log("Path and Filename (pathname):", window.location.pathname); // Logs the path and filename of the current page
console.log("Protocol (protocol):", window.location.protocol); // Logs the protocol (http: or https:)

// Additional window.location properties and methods

console.log("Port (port):", window.location.port); // Logs the port number (e.g., "80" or "443"). Returns an empty string if no port is specified.
console.log("Search (search):", window.location.search); // Logs the query string part of the URL (e.g., "?id=123&name=John").
console.log("Hash (hash):", window.location.hash); // Logs the anchor part of the URL (e.g., "#section1").




// --------------window.navigator object examples  -------------->>


// Check if the browser is currently online or offline
if (navigator.onLine) {
  console.log("The browser is online.");
} else {
  console.log("The browser is offline.");
}



//check  cookies 
if (navigator.cookieEnabled) {
  console.log("Cookies are enabled in the browser.");
} else {
  console.log("Cookies are disabled in the browser. Please enable them for full functionality.");
}


const appCodeName = navigator.appCodeName;
console.log("Browser Code Name: " + appCodeName);
const platform = navigator.platform;
console.log("Platform: " + platform);


const userAgentData = navigator.userAgentData;
console.log("User Agent Data: " + JSON.stringify(userAgentData));



///Loaction  In browser mode

if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition(function(position) {
      console.log("Latitude: " + position.coords.latitude);
      console.log("Longitude: " + position.coords.longitude);
  });
  } else {
  console.log("Geolocation is not supported in this browser.");
  }
  
  
  const language = navigator.language;
  console.log("Preferred Language: " + language);
  
  const userAgent = navigator.userAgent;
  console.log("User-Agent String: " + userAgent);
  




console.log("Browser App Name:", window.navigator.appName); // Logs the name of the browser
console.log("Browser App Version:", window.navigator.appVersion); // Logs the version of the browser
console.log("User Agent:", window.navigator.userAgent); // Logs the user agent string
console.log("Platform:", window.navigator.platform); // Logs the platform (e.g., Win32)
// Logs the name of the browser
console.log("Browser Name (appName):", window.navigator.appName); 

// Logs the version of the browser as a string
console.log("Browser Version (appVersion):", window.navigator.appVersion); 

// Logs the user agent string, which includes information about the browser, version, and operating system
console.log("User Agent (userAgent):", window.navigator.userAgent); 

// Logs the platform (e.g., "Win32" for Windows, "MacIntel" for macOS)
console.log("Platform (platform):", window.navigator.platform); 

// Logs the language of the browser (e.g., "en-US" for American English)
console.log("Language (language):", window.navigator.language); 

// Checks if cookies are enabled in the browser
console.log("Cookies Enabled (cookieEnabled):", window.navigator.cookieEnabled); 

// Checks if the browser is online
console.log("Online Status (onLine):", window.navigator.onLine); 

// Logs the geolocation object if available (used to access the user's location)
console.log("Geolocation (geolocation):", window.navigator.geolocation); 

// Logs the vendor of the browser (e.g., "Google Inc." for Chrome)
console.log("Vendor (vendor):", window.navigator.vendor); 

// Logs the number of logical processors available to the user
console.log("Hardware Concurrency (hardwareConcurrency):", window.navigator.hardwareConcurrency); 

// Checks if the browser is running in standalone mode (e.g., as a PWA)
console.log("Standalone Mode (standalone):", window.navigator.standalone);

// Logs the maximum number of touch points supported by the device
console.log("Max Touch Points (maxTouchPoints):", window.navigator.maxTouchPoints); 

// Checks if Do Not Track is enabled
console.log("Do Not Track (doNotTrack):", window.navigator.doNotTrack); 

// Logs battery information if available
if (navigator.getBattery) {
    navigator.getBattery().then(function(battery) {
        console.log("Battery Level:", battery.level * 100 + "%");
        console.log("Battery Charging:", battery.charging ? "Yes" : "No");
    });
}





// window.history object examples  ------------------->>
console.log("History Length:", window.history.length); // Logs the number of URLs in the history stack
// window.history.back(); // Goes back to the previous page
// window.history.forward(); // Goes forward to the next page

// window.screen object examples  --------------------->>
console.log("Screen Width:", window.screen.width); // Logs the width of the screen
console.log("Screen Height:", window.screen.height); // Logs the height of the screen
console.log("Available Screen Width:", window.screen.availWidth); // Logs the available width of the screen
console.log("Available Screen Height:", window.screen.availHeight); // Logs the available height of the screen
console.log("Color depth: " + window.screen.colorDepth);
console.log("Pixel depth: " + window.pixelDepth);


// window.alert, window.confirm, and window.prompt examples
// window.alert("This is an alert!"); // Displays an alert box
// var isConfirmed = window.confirm("Do you want to proceed?"); // Displays a confirm box, returns true if OK is pressed
// console.log("User confirmed:", isConfirmed);
// var userInput = window.prompt("Please enter your name:"); // Displays a prompt box, returns the user input
// console.log("User input:", userInput);


  return (
    <div>
      
    </div>
  )
}

export default Dom
