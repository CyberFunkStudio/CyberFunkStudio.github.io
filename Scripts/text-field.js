AFRAME.registerComponent('text-field', {
    setVisibility: function(isVisible) {
        this.el.setAttribute('visible', isVisible);
    } 
});