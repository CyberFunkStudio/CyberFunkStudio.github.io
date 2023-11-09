AFRAME.registerComponent('clickable', {
    init: function() {
        var el = this.el;

        el.addEventListener('click', function() {
            document.getElementById('scene').components['game-state'].setState(el.id);
        });
    }
});