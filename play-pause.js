AFRAME.registerComponent('play-pause', {
	init: function () {
		var myVideo = document.querySelector('#waves');
		var videoControls = document.querySelector('#videocontrols');
		this.el.addEventListener('click', function () {
			if(myVideo.paused){
				myVideo.play();
				videocontrols.setAttribute('src', '#pause');
			} else {
				myVideo.pause();
				videocontrols.setAttribute('src', '#play');
			}
		});
	}
});