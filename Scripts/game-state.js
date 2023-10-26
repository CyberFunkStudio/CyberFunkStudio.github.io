/**
 * Handles the connection of the various game states and how to move between them.
 */
AFRAME.registerComponent('game-state', {
    init: function() {
        this.setState(GameStates.Home.name);
    },

    setState: function(state) {
        this.state = GameStates.Matching(state);

        var pos = this.state.position;
        var rot = this.state.rotation;
        var rigRot = this.state.rigRotation;

        this.setCameraPosition(pos.x, pos.y, pos.z, rot.x, rot.y, rot.z);
        this.setTextFieldVisibility(state);
        this.setRigRotation(rigRot.x, rigRot.y, rigRot.z);

    },

    setCameraPosition: function(x, y, z, rx, ry, rz) {
        var mainCameraWrapper = document.getElementById('mainCameraWrapper');
        
        mainCameraWrapper.setAttribute('animation__position', {
            property: 'position',
            to: {x: x, y: y, z: z},
            dur: 2000,
            easing: 'easeInOutQuad',
        });

        mainCameraWrapper.setAttribute('animation__rotation', {
            property: 'rotation',
            to: {x: rx, y: ry, z: rz},
            dur: 2000,
            easing: 'easeInOutQuad',
        });
        //mainCamera.setCameraPosition(x, y, z, rx, ry, rz);
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

    setRigRotation: function(rx, ry, rz) {
        var rig = document.getElementById('rig');
        rig.setAttribute('animation', {
            property: 'rotation',
            to: {x: rx, y: ry, z: rz},
            dur: 2000,
            easing: 'easeInOutQuad'
        });
    }
});