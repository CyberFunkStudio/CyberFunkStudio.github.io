AFRAME.registerComponent('clickable', {
    init: function() {
        var el = this.el;

        el.addEventListener('click', function() {
            if (el.classList.contains('products')) return;
            const buttons = document.querySelectorAll('button'); // Select all buttons
            buttons.forEach(button => {
                button.classList.remove('transparent'); // Remove the "transparent" class
            });
            
            const whichButton = el.getAttribute("text").value;
            document.querySelector("."+whichButton).classList.add("transparent");
            document.getElementById('scene').components['game-state'].setState(el.id);
        });
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const menuButtons = document.querySelectorAll('.menu-button');
    menuButtons.forEach(button => {
      button.addEventListener('click', function () {
        const state = this.getAttribute('data-state');
        handleMenuButtonClick(state);
      });
    });
  });