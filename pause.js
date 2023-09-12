AFRAME.registerComponent('play', {
	init: function () {
		var myEl = document.querySelector('#yellow');
    var soundControls = document.querySelector('#soundControls');
		this.el.addEventListener('click', function () {
      //const audioCtx = new AudioContext();
      myEl.components.sound.playSound();
      //soundControls.setAttribute('src', '#pause');
      console.log('Playing Sound')
		});
	}
});