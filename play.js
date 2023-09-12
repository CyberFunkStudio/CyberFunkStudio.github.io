/*
AFRAME.registerComponent('play-pause', {
	init: function () {
		var mySound = document.querySelector('#yellow');
    var soundControls = document.querySelector('#soundControls');
		this.el.addEventListener('click', function () {
			if(mySound.paused){
				mySound.play();
        soundControls.setAttribute('src', '#pause');
			} else {
				mySound.pause();
        soundControls.setAttribute('src', '#play');
			}
		});
	}
});
*/

AFRAME.registerComponent('play', {
	init: function () {
		var myEl = document.querySelector('#yellow');
    var soundControls = document.querySelector('#soundControls');
		this.el.addEventListener('click', function () {
      const audioCtx = new AudioContext();
      myEl.components.sound.playSound();
      soundControls.setAttribute('src', '#pause');
      
      console.log('Ho!')
      /*
			if(mySound.paused){
				mySound.play();
        soundControls.setAttribute('src', '#pause');
			} else {
				mySound.pause();
        soundControls.setAttribute('src', '#play');
			}
      */
		});
	}
});