AFRAME.registerComponent('main-camera', {
    init: function() {
        var fov = AFRAME.utils.device.isMobile() ? 80 : 50;

        this.cameraEntity = this.el.children[0];
        
        this.cameraEntity.setAttribute('wasd-controls', 'enabled', false);    
        this.cameraEntity.setAttribute('fov', fov);
    },
    
    tick: function() {
        TWEEN.update();
    },

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
    },

    toggleLookControls: function() {
        var isEnabled = this.cameraEntity.getAttribute('look-controls').magicWindowTrackingEnabled;
        this.cameraEntity.setAttribute('look-controls', 'magicWindowTrackingEnabled', !isEnabled);
    }
});