AFRAME.registerComponent('3d-interaction', {
    init: function() {
        var el = this.el;

        el.addEventListener('mouseenter', function() {
            el.setAttribute('scale','1.1 1.1 1.1')
        })

        el.addEventListener('mouseleave', function() {
            el.setAttribute('scale','1 1 1')
        });

        el.addEventListener('click', function() {
            console.log('Button clicked:', el.id);
            document.getElementById('scene').components['game-state'].setState(el.id);
            if (el.id ==='Home'){
                var aboutTextfield = document.getElementById('About-Textfield');
                var isVisible = aboutTextfield.getAttribute('visible');
                aboutTextfield.object3D.visible = !aboutTextfield.object3D.visible;
            }

            else if (el.id ==='Contact-Textfield'){
                var contactTextfield = document.getElementById('Contact-Textfield');
                var isVisible = contactTextfield.getAttribute('visible');
                contactTextfield.object3D.visible = !contactTextfield.object3D.visible;
            }
        });
    }
});