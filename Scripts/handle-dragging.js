AFRAME.registerComponent('custom-look-controls', {
  schema: {
    sensitivity: { default: 0.001 } // change this value to adjust the overall sensitivity
  },
  init: function () {
    this.onMouseMove = this.onMouseMove.bind(this);
    this.lockChangeAlert = this.onLockChange.bind(this);
    document.addEventListener('pointerlockchange', this.lockChangeAlert, false);
    this.locked = false;
  },
  onLockChange: function () {
    if (document.pointerLockElement === document.body) {
      this.locked = true;
      document.addEventListener('mousemove', this.onMouseMove, false);
    } else {
      this.locked = false;
      document.removeEventListener('mousemove', this.onMouseMove, false);
    }
  },
  onMouseMove: function (event) {
    if (this.locked) {
      var movementX = event.movementX || 0;
      var movementY = event.movementY || 0;

      // Apply sensitivity scaling based on the schema value
      var deltaX = movementX * this.data.sensitivity;
      var deltaY = movementY * this.data.sensitivity;

      // Update rotation of the yaw and pitch objects directly
      this.yawObject.rotation.y -= this.toRadians(deltaX);
      this.pitchObject.rotation.x -= this.toRadians(deltaY);

      // Clamp the pitch rotation to prevent the camera from flipping over
      this.pitchObject.rotation.x = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, this.pitchObject.rotation.x));
    }
  },
  tick: function () {
    if (this.locked) {
      this.el.setAttribute('rotation', {
        x: THREE.Math.radToDeg(this.pitchObject.rotation.x),
        y: THREE.Math.radToDeg(this.yawObject.rotation.y),
        z: 0
      });
    }
  },
  toRadians: function (degrees) {
    return degrees * (Math.PI / 180);
  },
  remove: function () {
    document.removeEventListener('pointerlockchange', this.lockChangeAlert, false);
    if (this.locked) {
      document.removeEventListener('mousemove', this.onMouseMove, false);
    }
  }
});
