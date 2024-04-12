//This document makes clickable A-Textfields pop a little when the mouse hovers above it

AFRAME.registerComponent('mouse-reaction', {    
    init: function() {
        var el = this.el;

        el.addEventListener('mouseenter', function() {
            el.setAttribute('scale','1.1 1.1 1.1')
        });

        el.addEventListener('mouseleave', function() {
            el.setAttribute('scale','1 1 1')
        });
    }
});
