chrome.action.disable();

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab)=>{
    if (changeInfo.status == "complete") {
        console.log(tab.Url);
        if (tab.url.indexOf("taobao") != -1) {
            console.log("enabled");
            chrome.action.enable(tabId);
        } else {
            console.log("disable");
            chrome.action.disable(tabId);
        }
    }
});