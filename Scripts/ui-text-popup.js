AFRAME.registerComponent('ui-text-popup', {
    schema: {
        'popupId': { type: 'string' },
        'overlayId': { type: 'string', default: 'overlay' }
    },
    
    init: function() {
        var el = this.el;
        var data = this.data;

        el.addEventListener('click', function() {
            popup = document.getElementById(data.popupId);
            overlay = document.getElementById(data.overlayId);

            overlay.style.display = 'block';
            popup.style.display = 'block';  
            overlay.style.visibility = 'visible';
            popup.style.visibility = 'visible';
            
            var button = document.createElement("input");
            button.type = "button";
            button.value = "OK";
            button.onclick = function () {
                overlay.style.display = 'none';
                popup.style.display = 'none';  
                overlay.style.visibility = 'hidden';
                popup.style.visibility = 'hidden';
                popup.removeChild(button);
            };
        
            popup.appendChild(button);
        });
    }
});
