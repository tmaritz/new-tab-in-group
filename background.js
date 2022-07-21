chrome.action.onClicked.addListener((tab) => {
    chrome.tabs.query({currentWindow: true, active: true}, function(allTabs) {
        var currentTab = allTabs[0];
        chrome.tabs.create({index: currentTab.index+1}, function(newTab) {
            chrome.tabs.group({tabIds: newTab.id, groupId: currentTab.groupId}); 
        });
    }); 
});