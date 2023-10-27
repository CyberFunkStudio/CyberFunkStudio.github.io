AFRAME.registerComponent('main-camera', {
    init: function()
    {
        document.getElementById('mainCamera').setAttribute('wasd-controls', 'enabled', false);
    },

    setCameraPosition: function(x, y, z, rx, ry, rz) {
        var wrapper = this.el;
        wrapper.setAttribute('animation__position', {
            property: 'position',
            to: {x: x, y: y, z: z},
            dur: 2000,
            easing: 'easeInOutQuad',
        });

        wrapper.setAttribute('animation__rotation', {
            property: 'rotation',
            to: {x: rx, y: ry, z: rz},
            dur: 2000,
            easing: 'easeInOutQuad',
        });
    } 
});