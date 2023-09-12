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