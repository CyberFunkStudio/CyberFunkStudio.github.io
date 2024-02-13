let mouseDown = false;
AFRAME.registerComponent('mouse-flow-controls', {
  dependencies: ['look-controls'],

  init: function () {
    // Add the event listeners to the window object
    this.onMouseMove = this.onMouseMove.bind(this);
    window.addEventListener('mousemove', this.onMouseMove);
    window.addEventListener('mousedown', function(){
      mouseDown = true;
    });
    window.addEventListener('mouseup', function(){
      mouseDown = false;
    });
    // Ensure low sensitivity
    this.sensitivity = 0.00001; // As low as we want
  },

  remove: function () {
    // Remove event listeners when the component is removed
    window.removeEventListener('mousemove', this.onMouseMove);
  },

  onMouseMove: function (evt) {
    if(!mouseDown) return;
    const lookControls = this.el.components['look-controls'];
    const data = lookControls.data;

    if (!data.enabled) return;

    const movementX = evt.movementX || 0;
    const movementY = evt.movementY || 0;

    const pitchObject = lookControls.pitchObject;
    const yawObject = lookControls.yawObject;
    const PI_2 = Math.PI;
    // Apply the sensitivity factor to the rotation deltas
    yawObject.rotation.y -= movementX * this.sensitivity;
    pitchObject.rotation.x -= movementY * this.sensitivity;
    pitchObject.rotation.x = Math.max(-PI_2, Math.min(PI_2, pitchObject.rotation.x));
  },

  update: function () {
    // Set newly updated sensitivity if provided through `setAttribute`
    if (this.data.sensitivity) {
      this.sensitivity = this.data.sensitivity;
    }
  },
});