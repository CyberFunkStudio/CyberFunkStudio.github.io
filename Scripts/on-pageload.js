    // Call updateMenuButtonState with initial state set to 'Home' on initial page load
    // Call updateLayout function on initial page load
    document.addEventListener('DOMContentLoaded', function () {
        updateMenuButtonState('Home');
        updateLayout();
      });
  
      // Sets active menu button as transparent
      function updateMenuButtonState(activeState) {
        const buttons = document.getElementById("menu-buttons");
  
        Array.from(buttons.children).forEach(button => {
  
          if (button.innerHTML === activeState) {
            button.classList.add('transparent');
          } else {
            button.classList.remove('transparent');
          }
        });
      }