AFRAME.registerComponent('3d-interaction', {
    init: function() {
        var el = this.el;

        el.addEventListener('mouseenter', function() {
            el.setAttribute('scale','1.1 0.6 1.1')
        })

        el.addEventListener('mouseleave', function() {
            el.setAttribute('scale','1 0.5 1')
        });

        el.addEventListener('click', function() {
            document.getElementById('scene').components['game-state'].setState(el.id);
        });
    }
});