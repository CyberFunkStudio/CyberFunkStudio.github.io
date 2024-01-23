AFRAME.registerComponent('main-camera', {
    init: function () {
        this.onEnterVRHandler = this.onEnterVR.bind(this);
        this.onExitVRHandler = this.onExitVR.bind(this);

        this.el.sceneEl.addEventListener('enter-vr', this.onEnterVRHandler);
        this.el.sceneEl.addEventListener('exit-vr', this.onExitVRHandler);
    },

    bindMethods: function () {
        this.onEnterVR = this.onEnterVR.bind(this);
        this.onExitVR = this.onExitVR.bind(this);
    },

    addEventListeners: function () {
        var sceneEl = this.el.sceneEl;
        sceneEl.addEventListener('enter-vr', this.onEnterVR);
        sceneEl.addEventListener('exit-vr', this.onExitVR);
    },

    onEnterVR: function () {
        const isMobileVR = AFRAME.utils.device.checkHeadsetConnected() || AFRAME.utils.device.isMobile();
        if (isMobileVR) {
            this.initialRotation = this.el.getAttribute('rotation');
            this.el.setAttribute('rotation', { x: 0, y: 0, z: 0 });
            this.setInitialCameraRotation();
        }
    },

    onExitVR: function () {
        if (this.initialRotation) {
            // On exiting VR, reset camera rotation as well as gyroscope zero point
            this.el.setAttribute('rotation', this.initialRotation);
            this.resetGyroscopeZeroPoint();
        }
    },


    resetGyroscopeZeroPoint: function () {
        // Reset camera rotation
        this.el.setAttribute('rotation', { x: 0, y: 0, z: 0 });

        // If using look-controls, reset pitch and yaw orientation
        if (this.el.components['look-controls']) {
            var lookControls = this.el.components['look-controls'];
            lookControls.pitchObject.rotation.set(0, 0, 0);
            lookControls.yawObject.rotation.set(0, 0, 0);
        }
    },

    setInitialCameraRotation: function () {
        // Replace with your intended default configuration.
        var initialRotation = new THREE.Vector3(0, -90, 0); // Adjust as needed further
        this.el.setAttribute('rotation', initialRotation);

        // If using look-controls, reset magic window tracking to the initial position.
        if (this.cameraEntity.components['look-controls']) {
            var lookControls = this.cameraEntity.components['look-controls'];
            lookControls.pitchObject.rotation.set(THREE.Math.degToRad(initialRotation.x), 0, 0);
            lookControls.yawObject.rotation.set(0, THREE.Math.degToRad(initialRotation.y), 0);
        }
    },

    setCameraPosition: function (x, y, z, rx, ry, rz, duration) {
        // Animate the camera rig position
        this.el.setAttribute('animation__pos', {
            property: 'position',
            to: `${x} ${y} ${z}`,
            dur: duration
        });
        // Animate the camera rig rotation
        this.el.setAttribute('animation__rot', {
            property: 'rotation',
            to: `${rx} ${ry} ${rz}`,
            dur: duration
        });
    },

    remove: function () {
        var sceneEl = this.el.sceneEl;
        sceneEl.removeEventListener('enter-vr', this.onEnterVR);
        sceneEl.removeEventListener('exit-vr', this.onExitVR);
    },
});