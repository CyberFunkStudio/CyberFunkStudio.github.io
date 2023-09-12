AFRAME.registerComponent('stop', {
	init: function () {
		var myEl = document.querySelector('#yellow');
		this.el.addEventListener('click', function () {
      myEl.components.sound.stopSound();
      console.log('Sound is Stopped')
		});
	}
});