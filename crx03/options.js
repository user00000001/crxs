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
        chrome.storage.sync.set({total: 0})
    })
})