var menuItem = {
    id: 'speak',
    title: 'Speak',
    contexts: ["selection"]
}
chrome.contextMenus.create(menuItem);
function fixedEncodeURI(str) {
    return encodeURI(str).replace(/%5B/g, '[').replace(/%5D/g, ']')
}
chrome.contextMenus.onClicked.addListener(function(clickData){
    if(clickData.menuItemId == 'speak' && clickData.selectionText) {
        chrome.tts.speak(clickData.selectionText, {'rate': 0.7})
    }
})