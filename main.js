/* 
Ip hider firefox extension
Version: 2.0
Author: Broekman
Description: replaces all visible IP addresses with X's to avoid doxing yourself 
*/
function HideIp(result) {
    // Check if the extension is enabled
    if (result.enabled) {
        // Get all elements and loop through them
        var ipAddresses = document.getElementsByTagName('*');
        for (var i = 0; i < ipAddresses.length; i++) {
            var ipAddress = ipAddresses[i];
            // Regulaer expression to check if the content of an element is an ip address
            let ipRegExp = /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/;
            let altIpAddressRegExp = /\d{1,3}\-\d{1,3}\-\d{1,3}\-\d{1,3}/;
            // Replace everything that matches the regular expression with X's
            ipAddress.innerHTML = ipAddress.innerHTML.replace(ipRegExp, 'XXX.XXX.XXX.XXX');
            // Replace everything that matches the Alternative regular expression with X's
            ipAddress.innerHTML = ipAddress.innerHTML.replace(altIpAddressRegExp, 'XXX.XXX.XXX.XXX');
        }
    }
}

function onError(error) {
    console.log(`Error: ${error}`);
}

let getting = browser.storage.sync.get("enabled");
getting.then(HideIp, onError);
