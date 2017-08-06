$(document).ready(function(){
    var checkfordndbox = setInterval(function() {
        if($('.ads-widget-preview-container:not(.ExtDnd)').length > 0 &&
            $('[ng-model$="imageURL"]').length > 0 )
        {
            var dnd = $('.ads-widget-preview-container')
            dnd.addClass('ExtDnd')

            dnd.on("dragover", function(event) {
                event.preventDefault();  
                event.stopPropagation();
                $(this).addClass('dragging');
            });

            dnd.on("dragleave", function(event) {
                event.preventDefault();  
                event.stopPropagation();
                $(this).removeClass('dragging');
            });

            dnd.on("drop", function(e) {
                e.preventDefault();  
                e.stopPropagation();
                var file = e.originalEvent.dataTransfer.files[0]
                var reader = new FileReader();
                reader.onload = function(evt) {           
                    console.log(evt.target.result)
                    var imgtxt = $('[ng-model$="imageURL"]')
                    imgtxt.val(evt.target.result)
                    imgtxt.trigger($.Event("input", {keyCode: 13}))
                };
                reader.readAsDataURL(file)
            });
        }
    }, 2000); 
})
