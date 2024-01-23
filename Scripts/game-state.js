AFRAME.registerComponent('game-state', {
    init: function () {
        this.homeButtonPositions = {
            'About': document.getElementById('About').object3D.position.clone(),
            'Team': document.getElementById('Team').object3D.position.clone(),
            'Contact': document.getElementById('Contact').object3D.position.clone(),
            'Products': document.getElementById('Products').object3D.position.clone(),
        };
        this.homeButtonRotations = {
            // Set initial rotations for buttons, probably all zero
            'About': { x: 0, y: 0, z: 0 },
            'Team': { x: 0, y: 0, z: 0 },
            'Contact': { x: 0, y: 0, z: 0 },
            'Products': { x: 0, y: 0, z: 0 },
        };

        this.setState(GameStates.Home.name);
        this.animationDuration_ms = 2000;
    },

    setState: function (state) {
        var newState = GameStates.Matching(state);
        this.state = this.state !== newState ? newState : GameStates.Home;

        var pos = this.state.position;
        var rot = this.state.rotation;
        var rigRot = this.state.rigRotation;

        if (newState.name === GameStates.Home.name) {
            // Restore buttons to their original positions and rotations
            this.setButtonPositions(this.homeButtonPositions, this.homeButtonRotations);
        } else {
            // Set new positions and rotations for buttons based on the newState
            this.setButtonPositions(newState.buttonPositions, newState.buttonRotations);
        }

        this.setTextFieldVisibility(this.state);
        this.setCameraPosition(pos.x, pos.y, pos.z, rot.x, rot.y, rot.z, this.animationDuration_ms);
        this.setRigRotation(rigRot.x, rigRot.y, rigRot.z, this.animationDuration_ms);
    },

    setButtonPositions: function (buttonPositions, buttonRotations) {
        if (buttonPositions) {
            Object.keys(buttonPositions).forEach((buttonId) => {
                const position = buttonPositions[buttonId];
                const button = document.getElementById(buttonId);
                if (button) {
                    // If using 'setAttribute', positions should be a string in the format "x y z"
                    button.setAttribute('position', `${position.x} ${position.y} ${position.z}`);

                    if (buttonRotations && buttonRotations[buttonId]) {
                        const rotation = buttonRotations[buttonId];
                        // Rotations should also be set as a string "x y z"
                        button.setAttribute('rotation', `${rotation.x} ${rotation.y} ${rotation.z}`);
                    }
                } else {
                    console.error('No button found with ID:', buttonId);
                }
            });
        }
    },

    setCameraPosition: function (x, y, z, rx, ry, rz, duration) {
        var mainCameraWrapper = document.getElementById('mainCameraWrapper').components['main-camera'];
        mainCameraWrapper.setCameraPosition(x, y, z, rx, ry, rz, duration);
    },

    setTextFieldVisibility: function (state) {
        var currentGameStateTextfields = GameStates.Matching(state).textfieldIds;

        document.querySelectorAll('[text-field]').forEach(function (textfield) {
            var isVisible = currentGameStateTextfields.includes(textfield.id);
            textfield.components['text-field'].setVisibility(isVisible);
        });
    },

    setRigRotation: function (rx, ry, rz, duration) {
        var rig = document.getElementById('rig');
        rig.setAttribute('animation', {
            property: 'rotation',
            to: { x: rx, y: ry, z: rz },
            dur: duration,
            easing: 'easeInOutQuad'
        });
    }
});