AFRAME.registerComponent('clickable', {
    init: function() {
        var el = this.el;
        this.isClicked = false;

        el.addEventListener('click', function() {
            document.getElementById('scene').components['game-state']
                .setState(this.isClicked ? GameStates.Home : el.id);
            this.isClicked = !this.isClicked;
        });
    }
});