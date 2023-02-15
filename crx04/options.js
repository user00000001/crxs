$(function(){
    chrome.storage.sync.get(['total', 'limit'], function(budget){
        $('#limit').val(budget.limit);
    });
    $('#saveLimit').on('click', function(){
        var limit = $('#limit').val();
        if(limit) {
            chrome.storage.sync.set({limit}, function(){
                close();
            });
        }
    });
    $('#resetTotal').on('click',function(){
        chrome.storage.sync.set({total: 0}, function(){
            var notifications = {
                type: 'basic',
                iconUrl: 'icons/icon_48.png',
                title: "Total Reset!",
                message: "Total has been reset to zero!"
              };
              chrome.notifications.create('limitnotif', notifications);
        })
    })
})