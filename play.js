AFRAME.registerComponent('play', {
	init: function () {
		var myEl = document.querySelector('#yellow');
		this.el.addEventListener('click', function () {
      myEl.components.sound.playSound();
      console.log('Playing Sound')
		});
	}
});