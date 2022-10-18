function toggleHider() {
    // Check if the extension is currently enabled
    browser.storage.sync.get('enabled').then(function(result) {
        // If the extension is enabled, disable it and change the icon to the disabled icon
        if (result.enabled) {
            browser.storage.sync.set({enabled: false});
            browser.browserAction.setIcon({path: 'icons/ip_disabled.png'});
        // If the extension is disabled, enable it and change the icon to the enabled icon
        } else {
            browser.storage.sync.set({enabled: true});
            browser.browserAction.setIcon({
                path: 'icons/ip_enabled.png'
            });

        }
    });
}

// Get the current state of the extension and set the icon accordingly
browser.storage.sync.get('enabled').then(function (result) {
    if (result.enabled) {
        browser.browserAction.setIcon({
            path: 'icons/ip_enabled.png'
        });
    } else {
        browser.browserAction.setIcon({
            path: 'icons/ip_disabled.png'
        });

    }
});

browser.browserAction.onClicked.addListener(toggleHider);