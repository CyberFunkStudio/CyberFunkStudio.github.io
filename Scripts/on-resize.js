 // Registers window format changes. When a change occurs it triggers the updateLayout function
 window.addEventListener('resize', updateLayout);

 function isMobile() {
  return window.innerWidth <= 800; // Adjust breakpoint as necessary
}
 
 // Defines mobile window format. triggers layout update functions of A-Frame Textfields (for mobile)
 function updateLayout() {
   const mobile = isMobile();

   updateContactTextFields(mobile);
  //updateMaxxAndAnnaTextFields(isMobile);

 }

 // moves the Contact Textfield to one of two positions along the X axis.
 function updateContactTextFields(isMobile) {
   const desktopX = '-0.3';
   const mobileX = '-0.8';
   const newX = isMobile ? mobileX : desktopX;

   document.getElementById('Contact-Textfield').setAttribute('position', newX + ' 4.55 1.3');
   document.getElementById('Mail-Textfield').setAttribute('position', newX + ' 4.39 1.3');
   document.getElementById('Telephone-Textfield').setAttribute('position', newX + ' 4.3 1.3');
 }

 // moves the Maxx and Anna Textfields to one of two positions and scale values
 function updateMaxxAndAnnaTextFields(isMobile) {
  /*
  const positionMaxx = isMobile ? '-1.3 3.0 -1.65' : '-0.269 2.28 -1.43';
   const positionAnna = isMobile ? '-1.35 2.4 -1.15' : '-0.435 2.27 -1.936';
   const scale = isMobile ? '1 1 1' : '1 1 1';

   document.getElementById('About-Maxx').setAttribute('position', positionMaxx);
   document.getElementById('About-Maxx').setAttribute('scale', scale);

   document.getElementById('About-Anna').setAttribute('position', positionAnna);
   document.getElementById('About-Anna').setAttribute('scale', scale);
   */
 }