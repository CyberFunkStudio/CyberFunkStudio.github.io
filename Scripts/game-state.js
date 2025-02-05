/**
 * Handles the connection of the various game states and how to move between them.
 * This class focuses on providing a high-level overview of WHAT happens. HOW it happens should
 * be delegated to separate classes where possible/sensible.
 */
AFRAME.registerComponent('game-state', {
    init: function() {
        this.setState(GameStates.Home.name);
        this.animationDuration_ms = 2000;
    },

    setState: function(state) {
        var newState = GameStates.Matching(state);
    
        this.state = newState;

        var pos = this.state.position;
        var rot = this.state.rotation;
        var rigRot = this.state.rigRotation;

        this.setTextFieldVisibility(this.state);
        this.setCameraPosition(pos.x, pos.y, pos.z, rot.x, rot.y, rot.z, this.animationDuration_ms);
        this.setRigRotation(rigRot.x, rigRot.y, rigRot.z, this.animationDuration_ms);
        
    },

    setCameraPosition: function(x, y, z, rx, ry, rz, duration) {
        var mainCameraWrapper = document.getElementById('mainCameraWrapper').components['main-camera'];
        mainCameraWrapper.setCameraPosition(x, y, z, rx, ry, rz, duration);
    },

    setTextFieldVisibility: function(state) {
        var currentGameStateTextfields = GameStates.Matching(state).textfieldIds;
        
        document.querySelectorAll('[text-field]').forEach(function(textfield) {
            var isVisible = currentGameStateTextfields.includes(textfield.id);
            textfield.components['text-field'].setVisibility(isVisible);
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