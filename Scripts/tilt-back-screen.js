// this document gives out a warning when the phone is being tilted. It is a quick fix and a better solution should be found in the future

document.addEventListener('DOMContentLoaded', function () {
    const cameraEl = document.getElementById('mainCamera');
    
    cameraEl.setAttribute('look-controls', 'enabled', true);
    cameraEl.setAttribute('look-controls', 'magicWindowTrackingEnabled', false);
    

    // here is the function to notify the user to tilt his phone back
    window.addEventListener('resize', function() {
      if (!cameraEl) return;

      if (window.innerWidth > 600 && AFRAME.utils.device.isMobile()) {
        var fullScreenDiv = document.createElement('div');

        // Set styles to make the div fullscreen, with a green background, and high z-index
        fullScreenDiv.style.position = 'absolute';
        fullScreenDiv.style.top = '0';
        fullScreenDiv.style.left = '0';
        fullScreenDiv.style.width = '100%';
        fullScreenDiv.style.height = '100%';
        fullScreenDiv.style.backgroundColor = 'green';
        fullScreenDiv.style.zIndex = '9999';
        fullScreenDiv.style.display = 'flex';
        fullScreenDiv.style.justifyContent = 'center';
        fullScreenDiv.style.alignItems = 'center';
        fullScreenDiv.style.color = 'white';
        fullScreenDiv.style.fontSize = '24px';

        // Create the h1 element
        var message = document.createElement('h1');
        message.textContent = 'Please tilt your phone';

        // Add the h1 element to the div
        fullScreenDiv.appendChild(message);
        // Add the div to the body of the document, making it visible on the page
        document.body.appendChild(fullScreenDiv);

      } else {
        location.reload();
      }

      cameraEl.setAttribute('aspect', window.innerWidth / window.innerHeight);
      // Adjust other scene properties as necessary
    });
  });