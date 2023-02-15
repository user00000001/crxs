chrome.runtime.sendMessage({todo: "showPageAction"});
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
    if (request.todo=="changeColor") {
        // console.log(request);
        var addColor = request.clickedColor;
        $('a#cniil_wza').css('color', addColor);
    }
})