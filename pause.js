AFRAME.registerComponent('pause', {
	init: function () {
		var myEl = document.querySelector('#yellow');
		this.el.addEventListener('click', function () {
      myEl.components.sound.pauseSound();
      console.log('Sound is Paused')
		});
	}
});