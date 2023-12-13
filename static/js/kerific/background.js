chrome.action.onClicked.addListener((tab) => {
    // Ensure that the tab ID is valid
    if (tab.id) {
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            files: ['scripts/content.js']
        });
    }
});
