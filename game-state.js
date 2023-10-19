/**
 * Handles the connection of the various game states and how to move between them.
 */
AFRAME.registerComponent('game-state', {
    init: function() {
        this.direction = GameStates.Home;
    },

    setState: function(state) {
        this.state = GameStates.Matching(state);

        var pos = this.state.position;
        var rot = this.state.rotation;

        this.setCameraPosition(pos.x, pos.y, pos.z, rot.x, rot.y, rot.z);
    },

    setCameraPosition: function(x, y, z, rx, ry, rz) {
        var mainCamera = document.getElementById('mainCameraWrapper').components['main-camera'];
        mainCamera.setCameraPosition(x, y, z, rx, ry, rz);
    } 
});