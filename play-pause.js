AFRAME.registerComponent('play-pause', {
	init: function () {
		var mySound = document.querySelector('#yellow');
		this.el.addEventListener('click', function () {
			if(mySound.paused){
				mySound.play();
			} else {
				mySound.pause();
			}
		});
	}
});