AFRAME.registerComponent('click-listener', {
    schema: {
        action: { type: 'string' }
    },
    init: function () {
        var action = this.data.action;
        
        this.el.addEventListener('click', function () {
            if (action === 'call') {
                window.location.href = 'tel:+41775320531';
            }else if(action === 'email'){
                window.location.href = 'mailto:info@cyberfunk.studio';
            }
        });
    }
});