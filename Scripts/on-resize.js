 // Registers window format changes. When a change occurs it triggers the updateLayout function
 window.addEventListener('resize', updateLayout);

 // Defines mobile window format. triggers layout update functions of A-Frame Textfields (for mobile)
 function updateLayout() {
   const isMobile = window.innerWidth <= 800; // Assuming 800px as a breakpoint

   updateContactTextFields(isMobile);

   updateMaxxAndAnnaTextFields(isMobile);

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
   const positionMaxx = isMobile ? '-1.3 3.0 -1.65' : '-1 2.6 -0.9';
   const positionAnna = isMobile ? '-1.35 2.4 -1.15' : '-1.35 2.6 -1.9';
   const scale = isMobile ? '0.8 0.8 0.8' : '1 1 1';

   document.getElementById('About-Maxx').setAttribute('position', positionMaxx);
   document.getElementById('About-Maxx').setAttribute('scale', scale);

   document.getElementById('About-Anna').setAttribute('position', positionAnna);
   document.getElementById('About-Anna').setAttribute('scale', scale);
 }