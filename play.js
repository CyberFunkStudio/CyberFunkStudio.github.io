AFRAME.registerComponent('play', {
	init: function () {
		var myEl = document.querySelector('#yellow');
		this.el.addEventListener('click', function () {
      myEl.components.sound.playSound();
      console.log('Playing Sound')
		});
	}
});


//another idea for a toggle behavior:
/*
AFRAME.registerComponent('audiohandler', {
  init:function() {
     let playing = false;
     let audio = document.querySelector("#audio");
     this.el.addEventListener('click', () => {
          if(!playing) {
              audio.play();
           } else {
              audio.pause();
              audio.currentTime = 0;
           }
           playing = !playing;
     });
  }
})
*/

// another idea for preloading sound
/*
<script src="https://aframe.io/releases/0.7.0/aframe.min.js"></script>
<script>
  AFRAME.registerComponent('audiohandler', {
    init: function() {
      let playing = false;
      var el = this.el;
      let audioEl = document.querySelector("a-sound");
      audioEl.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/b/bd/Bizet_-_Carmen_-_Toreador_Song_%28French%2C_Musopen%29.ogg");
      audioEl.addEventListener("loaded", (e) => {
        console.log("AUDIO LOADED")
        console.log(e)
        var audio = audioEl.components.sound;
        el.addEventListener('click', (ee) => {
          console.log(ee)
          if (!playing) {
            audio.playSound();
          } else {
            audio.stopSound();

          }
          playing = !playing;
        });

      })
    }
  })

</script>

<a-scene cursor="rayOrigin:mouse">
  <a-box position="0 0 -2" color="blue" audiohandler></a-box>
  <a-sound autoplay="false"></a-sound>
</a-scene>

*/