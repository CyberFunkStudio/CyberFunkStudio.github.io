AFRAME.registerComponent('text-field', {
    setVisibility: function(isVisible) {
        this.el.setAttribute('visible', isVisible);

        if (isVisible && this.el.classList.contains('Raycastable')) {
            this.el.setAttribute('data-raycastable', '');
        } else {
            this.el.removeAttribute('data-raycastable');
        }
    } 
});