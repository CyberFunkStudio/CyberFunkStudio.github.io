document.addEventListener('DOMContentLoaded', function() {
    // Function to log the id of the clicked entity
    function showProduct() {
        let product_text ="";
        switch (event.target.id) {
            case "Product-1":
                product_text =  `
                <h1>${event.target.id}</h1>
                <img src="http://placekitten.com/200/300" />
                You can use <b>bold text</b>,
                <a href="#">links</a>,
      Sed vulputate mi sit amet mauris. Commodo elit at imperdiet dui accumsan sit amet nulla. Velit egestas dui id ornare arcu. Risus at ultrices mi tempus imperdiet. Eget magna fermentum iaculis eu non. Ut etiam sit amet nisl purus in mollis nunc. Etiam erat velit scelerisque in dictum non consectetur a. Consequat ac felis donec et odio pellentesque. Sed velit dignissim sodales ut eu sem integer vitae justo. Egestas pretium aenean pharetra magna ac placerat vestibulum lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum. Tortor id aliquet lectus proin nibh nisl condimentum id. Vulputate mi sit amet mauris commodo quis imperdiet massa tincidunt. Tellus integer feugiat scelerisque varius morbi enim nunc faucibus. Risus feugiat in ante metus dictum at tempor commodo ullamcorper. Suspendisse sed nisi lacus sed viverra tellus in. Volutpat blandit aliquam etiam erat velit scelerisque.
              `
                break;
            case "Product-2":
                    product_text =  `
                    <h1>${event.target.id}</h1>
                    You can use <b>bold text</b>,
                    <a href="#">links</a>,
                <img src="http://placekitten.com/200/301" />

          Dolor purus non enim praesent. Lectus sit amet est placerat in egestas. Pellentesque dignissim enim sit amet venenatis. Eget magna fermentum iaculis eu non diam phasellus. Massa enim nec dui nunc mattis enim ut tellus elementum. At risus viverra adipiscing at. Interdum velit laoreet id donec ultrices. Orci phasellus egestas tellus rutrum tellus pellentesque. Vitae sapien pellentesque habitant morbi tristique. Lorem ipsum dolor sit amet. Ipsum dolor sit amet consectetur adipiscing elit. Nunc id cursus metus aliquam eleifend mi in. In hac habitasse platea dictumst quisque sagittis purus sit amet. Malesuada pellentesque elit eget gravida cum.
                  `
                    break;
            case "Product-3":
                        product_text =  `
                        <h1>${event.target.id}</h1>
                        You can use <b>bold text</b>,
                <img src="http://placekitten.com/200/303" />

                        <a href="#">links</a>,
                Dolor purus non enim praesent. Lectus sit amet est placerat in egestas. Pellentesque dignissim enim sit amet venenatis. Eget magna fermentum iaculis eu non diam phasellus. Massa enim nec dui nunc mattis enim ut tellus elementum. At risus viverra adipiscing at. Interdum velit laoreet id donec ultrices. Orci phasellus egestas tellus rutrum tellus pellentesque. Vitae sapien pellentesque habitant morbi tristique. Lorem ipsum dolor sit amet. Ipsum dolor sit amet consectetur adipiscing elit. Nunc id cursus metus aliquam eleifend mi in. In hac habitasse platea dictumst quisque sagittis purus sit amet. Malesuada pellentesque elit eget gravida cum.
                        `
                    break;
            case "Product-4":
                            product_text =  `
                <img src="http://placekitten.com/200/305" />

                            <h1>${event.target.id}</h1>
                            You can use <b>bold text</b>,
                            <a href="#">links</a>,
                    Leo urna molestie at elementum eu. Facilisis volutpat est velit egestas dui id. Facilisi etiam dignissim diam quis enim lobortis. Cras ornare arcu dui vivamus arcu felis bibendum ut. Natoque penatibus et magnis dis parturient montes nascetur ridiculus. Faucibus in ornare quam viverra orci sagittis eu volutpat odio. Vestibulum lorem sed risus ultricies tristique nulla. Luctus venenatis lectus magna fringilla urna porttitor rhoncus. Amet purus gravida quis blandit. Semper quis lectus nulla at. Purus sit amet volutpat consequat. Dignissim cras tincidunt lobortis feugiat vivamus at augue. Et molestie ac feugiat sed. Fermentum dui faucibus in ornare quam viverra. Aliquam faucibus purus in massa tempor nec feugiat. A cras semper auctor neque vitae tempus quam. Pulvinar sapien et ligula ullamcorper malesuada proin libero nunc. Feugiat pretium nibh ipsum consequat nisl.
                            `
                    break;

            default:
                break;
        }
      Swal.fire({
        title: "<strong>All About</strong> "+event.target.id,
        icon: "success",
        width: "80%",
        html: product_text,
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText: `
          <i class="fa fa-thumbs-up"></i> Great!
        `,
        confirmButtonAriaLabel: "Thumbs up, great!",
      });
    }

    const products = document.querySelectorAll('.products');
    products.forEach(function(product) {
        product.addEventListener('click', showProduct);
    });
  });