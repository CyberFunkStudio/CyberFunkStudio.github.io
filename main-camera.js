AFRAME.registerComponent('main-camera', {
    init: function()
    {
      this.el.setAttribute('wasd-controls', 'enabled', false);
    },

    setCameraPosition: function(x, y, z, rx, ry, rz) {
        var wrapper = this.el;
        var lookControls = document.getElementById('mainCamera').components['look-controls'];

        wrapper.setAttribute('position', {x: x, y: y, z: z});
        wrapper.setAttribute('rotation', {x: rx, y: ry, z: rz}); 
        lookControls.pitchObject.rotation.set(0, 0, 0);
        lookControls.yawObject.rotation.set(0, 0, 0);
    } 
});