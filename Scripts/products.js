// this document creates the product-popup-windows, defines their content and how they can be interacted with

document.addEventListener('DOMContentLoaded', function() {
    // Function to log the id of the clicked entity
    function showProduct() {
        let product_text ="";
        switch (event.target.id) {
            case "Expand Web":
                    product_text =  `
                    <h1>All About Expand Web</h1>
                Expand Web pages (Web blocks) can be integrated into existing websites or stand alone as independent websites (Home Planets). Unlike traditional flat web pages, our Web products are spatial and present information in an interactive three-dimensional space. Cyber Funk Studio handles the conception, design, and technical integration of these digital spaces.
                Through the design of Expand Web products, complex data can be visually represented, making it more tangible and comprehensible. Another strength of the Expand Web products is the ability to convey a narrative with great depth. This is suitable for clients who want to depict complex processes or for projects that aim to tell an emotional story.
                
              `
                break;
            case "Expand Print":
                    product_text =  `
                    <h1>All About Expand Print</h1>
                Digital content is made accessible via Web-AR technology on a print medium, eliminating the need for downloading an app. The virtual content complements the analog information, creating an exciting collage between analog qualities and digital possibilities. Business cards, brochures, and books become physical anchors and provide a projection surface for three-dimensional models or videos. Content can be swapped out multiple times, dynamically telling a story over a certain duration. Thus, our Expand Print products not only represent information in three dimensions but, with the ability to tell stories over time, they even acquire a fourth dimension.
                  `
                    break;
            case "Product-3":
                        product_text =  `
                        <h1>Comming soon</h1>
                        `
                    break;
            case "Product-4":
                            product_text =  `
                            <h1>Comming Soon</h1>
                            `
                    break;    
            case "About-button":
                      product_text =  `
                      <h1>About Cyber Funk Studio</h1>
                      Cyber Funk Studio strives to bridge the gap between Extended Reality and traditional communication media. We make digital content tangible in physical space by merging the analog with the digital. This creates powerful, unique hybrids that offer a glimpse into the future.
                      `
                    break;     

            default:
                break;
        }
      Swal.fire({
        title: "<strong>All About</strong> "+event.target.id,
        width: "80%",
        html: product_text,
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText: `<i class="fa fa-thumbs-up"></i> Great!`,
        confirmButtonAriaLabel: "Thumbs up, great!",
      });
    }

    const products = document.querySelectorAll('.products');
    products.forEach(function(product) {
        product.addEventListener('click', showProduct);
    });
  });