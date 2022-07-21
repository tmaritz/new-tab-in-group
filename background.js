chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
        target: {tabId: tab.id},
        function: openGroupTap(tab)
    });
});

function openGroupTap(tab) {
        var cur = tab[0];
        chrome.tabs.create({index: cur.index+1}, function(newTab) {
            chrome.tabs.group({tabIds: newTab.id, groupId: cur.groupId}); 
        });

}