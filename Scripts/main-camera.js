//This document handles the main camera. it sets its inital position and rotation. it also handles the camera transitions

AFRAME.registerComponent('main-camera', {
    
    //setting up main camera component
    init: function() {
        // sets field of view value depending on platform (fov mobile : fov desktop)
        var fov = AFRAME.utils.device.isMobile() ? 70 : 50;

        this.cameraEntity = this.el.children[0];
        this.cameraObject = this.cameraEntity.components['camera'].camera;
        
        this.cameraEntity.setAttribute('wasd-controls', 'enabled', false);    
        this.cameraEntity.setAttribute('fov', fov);
    },
    
    // allows us to intervene in an ongoing animation
    tick: function() {
        if (this.initialRotationCounter++ < this.initialRotationMax)
        {
            this.rotateTowardsZero();
        }
        
        TWEEN.update();
    },

    rotateTowardsZero: function() {
        const quaternion = new THREE.Quaternion();        
        this.cameraObject.getWorldQuaternion(quaternion);
        this.cameraObject.quaternion.rotateTowards(quaternion.invert(), this.rotateTowardsStep_rad);
    },


// setting camera position, rotation and animation duration (values defined in GAMESTATES.js)
    setCameraPosition: function(x, y, z, rx, ry, rz, duration) {
        var wrapper = this.el;

        wrapper.setAttribute('animation__position', {
            property: 'position',
            to: {x: x, y: y, z: z},
            dur: duration,
            easing: 'easeInOutQuad'
        });
        wrapper.setAttribute('animation__rotation', {
            property: 'rotation',
            to: {x: rx, y: ry, z: rz},
            dur: duration,
            easing: 'easeInOutQuad'
        });

        this.resetLookControls(duration);
    },

    //resetting the look control to 0 at each game state position. this ensures that the users camera interaction works as intended in each game state
    resetLookControls: function(duration) {
        var lookControls = this.cameraEntity.components['look-controls'];

        new TWEEN.Tween(lookControls.pitchObject.rotation)
            .to({x: 0, y: 0, z: 0}, duration)
            .easing(TWEEN.Easing.Quadratic.InOut)
            .start();
        new TWEEN.Tween(lookControls.yawObject.rotation)
            .to({x: 0, y: 0, z: 0}, duration)
            .easing(TWEEN.Easing.Quadratic.InOut)
            .start();
    }
});