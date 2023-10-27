/**
 * Handles the connection of the various game states and how to move between them.
 */
AFRAME.registerComponent('game-state', {
    init: function() {
        this.setState(GameStates.Home.name);
        this.animationDuration_ms = 2000;
    },

    setState: function(state) {
        this.state = GameStates.Matching(state);

        var pos = this.state.position;
        var rot = this.state.rotation;
        var rigRot = this.state.rigRotation;

        this.setCameraPosition(pos.x, pos.y, pos.z, rot.x, rot.y, rot.z, this.animationDuration_ms);
        this.setTextFieldVisibility(state);
        this.setRigRotation(rigRot.x, rigRot.y, rigRot.z, this.animationDuration_ms);
    },

    setCameraPosition: function(x, y, z, rx, ry, rz, duration) {
        var mainCameraWrapper = document.getElementById('mainCameraWrapper').components['main-camera'];
        mainCameraWrapper.setCameraPosition(x, y, z, rx, ry, rz, duration);
    },

    setTextFieldVisibility: function(state) {
       var allTextfields = document.querySelectorAll('.Textfield');
       var currentGameStateTextfields = GameStates.Matching(state).textfieldIds;

       allTextfields.forEach(function(textfield) {
            if(currentGameStateTextfields.includes(textfield.id)){
                textfield.setAttribute('visible', true);
            } else {
                textfield.setAttribute('visible', false);
            }
       });
    },

    setRigRotation: function(rx, ry, rz, duration) {
        var rig = document.getElementById('rig');
        rig.setAttribute('animation', {
            property: 'rotation',
            to: {x: rx, y: ry, z: rz},
            dur: duration,
            easing: 'easeInOutQuad'
        });
    }
});