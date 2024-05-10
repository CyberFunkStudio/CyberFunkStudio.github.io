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
   const mobileX = '-0.75';
   const newX = isMobile ? mobileX : desktopX;

   //contact-Text Position
   const desktopXcontact = '-0.43';
   const mobileXcontact ='-0.7';
   const newXcontact = isMobile ? mobileXcontact : desktopXcontact;

   const desktopYcontact = '4.55';
   const mobileYcontact ='4.65';
   const newYcontact = isMobile ? mobileYcontact : desktopYcontact;

   const desktopZcontact = '-0.6';
   const mobileZcontact = '-0.6';
   const newZcontact = isMobile ? mobileZcontact : desktopZcontact;

   //Mail button Position
   const desktopXmail = '-0.3';
   const mobileXmail = '-0.8';
   const newXmail = isMobile ? mobileXmail : desktopXmail;

   const desktopYmail = '4.23';
   const mobileYmail = '4.45';
   const newYmail = isMobile ? mobileYmail : desktopYmail;

   const desktopZmail = '-0.3';
   const mobileZmail = '-0.75';
   const newZmail = isMobile ? mobileZmail : desktopZmail;

   //Telephone Button Position
   const desktopXtele = '-0.3';
   const mobileXtele = '-0.75';
   const newXtele = isMobile ? mobileXtele : desktopXtele;
   
   const desktopYtele = '4.3';
   const mobileYtele = '4.33';
   const newYtele = isMobile ? mobileYtele : desktopYtele;

   const desktopZtele = '-0.6';
   const mobileZtele = '-0.72';
   const newZtele = isMobile ? mobileZtele : desktopZtele;


   document.getElementById('Contact-Textfield').setAttribute('position', newXcontact + ' ' + newYcontact + ' ' + newZcontact);
   document.getElementById('Mail-Textfield').setAttribute('position', newXmail + ' ' + newYmail + ' ' + newZmail);
   document.getElementById('Telephone-Textfield').setAttribute('position', newXtele + ' ' + newYtele + ' ' + newZtele);
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