chrome.runtime.onInstalled.addListener(()=>{
    chrome.contextMenus.create({
        id: "Chapter 6",
        title: "Search Baidu for \"%s\"",
        type: "normal",
        contexts: ["selection"]
    });
});

chrome.contextMenus.onClicked.addListener((info)=>{
    chrome.tabs.create({
        url: "https://www.baidu.com/s?wd=" + encodeURIComponent(info.selectionText)
    });
});