$(document).ready(function(){
    $('.slider').owlCarousel({
        items:1,
        loop:true,
        autoplay:true,
        dots:false,
        autoplaySpeed:2000,
    });

    $('.imgses').owlCarousel({
      items:5,
      loop:true,
      magin:0,
      nav:false,
      autoplay:true,
      dots:false,
      autoplaySpeed:2000,
      responsive:{
        0:{
            items:3,
            
        },
       768:{
          items:3,
          
      },
        1000:{
            items:4,
            
        },
        1200:{
            items:5,
            
        }
    }
  });
  $('.comments').owlCarousel({
    items:1,
    loop:true,
    nav:false,
    autoplay:true,
    dots:true,
    autoplaySpeed:2000,
    
});
  });


  $('.bannars').isotope({
    // set itemSelector so .grid-sizer is not used in layout
    itemSelector: '.bannar-item',
    percentPosition: true,
    masonry: {
      // use element for option
      columnWidth: '.bannar-item'
    }
  })


  $('.bannars').imagesLoaded()
  .always( function( instance ) {
    console.log('all images loaded');
  })
  .done( function( instance ) {
    console.log('all images successfully loaded');
  })
  .fail( function() {
    console.log('all images loaded, at least one is broken');
  })
  .progress( function( instance, image ) {
    var result = image.isLoaded ? 'loaded' : 'broken';
    console.log( 'image is ' + result + ' for ' + image.img.src );
  });



  


  $(document).ready(function(){
    $('.product-slider').owlCarousel({
        items:4,
        loop:true,
        nav:true,
        dots:false,
        autoplaySpeed:2000,
        responsive:{
          0:{
              items:1,
              center:true,
               
          },
          500:{
            items:2,
             center:true,
        },
          768:{
            items:3,
            
        },
          1000:{
              items:3,
               
          },
          1200:{
              items:4,
              center:true,
              margin:100,
               
          }
      }
  })
  $('.menu').slicknav({
    'prependTo': '.header-menu',
    'label' : ' ',
  });
});
  
   


    new WOW().init();
 