// This document let's us click on the phone- and email-textfields. It then allows us to directly call the number or the write an email from the email client

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
            else if (action === 'Anna') {
                setState('Anna');
            }
            else if (action === 'Maxx') {
                setState('Maxx');
            }
        });
    }
});