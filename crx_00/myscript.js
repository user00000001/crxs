const elmClose = document.getElementById("close");

elmClose.onclick = () => {
    chrome.tabs.query({active: true, currentWindow: true}, (tabs)=>{
        const currentTab = tabs[0];
        chrome.tabs.query({currentWindow: true}, (tabs)=>{
            tabs.map(tab=>{
                if (tab.id != currentTab.id) {
                    chrome.tabs.remove(tab.id);
                }
            });
        });
    })
};