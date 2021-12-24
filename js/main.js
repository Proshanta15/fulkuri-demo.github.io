$(document).ready(function () {


   //STICKY MENU On Scroll
   var height = $("#menu").height();
   $(window).scroll(function () {
     if ($(this).scrollTop() > height) {
       $(".navbar").addClass("fixed");
     } else {
       $(".navbar").removeClass("fixed");
     }
   });

   // BOTTOM TO TOP Button JS CODE
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      $("#bottom-to-top").css({
        opacity: "1",
        "pointer-events": "auto",
      });
    } else {
      $("#bottom-to-top").css({
        opacity: "0",
        "pointer-events": "none",
      });
    }
  });
  $("#bottom-to-top").click(function () {
    $("html").animate({ scrollTop: 0 }, 500);
  });
});

   //Owl-carousel For home Page

  $("#slider .carousel .owl-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    dots: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      992: {
        items: 1,
      },
    },
  });

    //Owl-carousel For video

    $(".youtube .carousel .owl-carousel").owlCarousel({
      loop: true,
      autoplay: false,
      dots: true,
      responsive: {
        0: {
          items: 1,
        },
        768: {
          items: 1,
        },
        992: {
          items: 1,
        },
      },
    });

     //Owl-carousel For home Page

     $("#body .carousel .owl-carousel").owlCarousel({
        loop: true,
        autoplay: true,
        dots: true,
        responsive: {
          0: {
            items: 1,
          },
          768: {
            items: 1,
          },
          992: {
            items: 1,
          },
        },
      });

       //Owl-carousel For blog Page

     $(".blog_slider .carousel .owl-carousel").owlCarousel({
      loop: true,
      autoplay: false,
      dots: true,
      responsive: {
        0: {
          items: 1,
        },
        768: {
          items: 2,
        },
        992: {
          items: 4,
        },
      },
    });

      //Owl-carousel For blog Page

      $("#popular .carousel .owl-carousel").owlCarousel({
        loop: true,
        autoplay: false,
        dots: true,
        responsive: {
          0: {
            items: 1,
          },
          576: {
            items: 2,
          },
          768: {
            items: 2,
          },
          992: {
            items: 2,
          },
        },
      });

      //Owl-carousel For blog many slider Page

      $(".many_slider .carousel .owl-carousel").owlCarousel({
        loop: true,
        autoplay: false,
        dots: true,
        responsive: {
          0: {
            items: 1,
          },
          576: {
            items: 2,
          },
          768: {
            items: 4,
          },
          992: {
            items: 6,
          },
        },
      });

        //Owl-carousel For blog Android

        $(".android .carousel .owl-carousel").owlCarousel({
          loop: true,
          autoplay: false,
          dots: true,
          responsive: {
            0: {
              items: 1,
            },
            576: {
              items: 2,
            },
            768: {
              items: 2,
            },
            992: {
              items: 4,
            },
          },
        });


           //Owl-carousel For blog news

           $(".news .carousel .owl-carousel").owlCarousel({
            loop: true,
            autoplay: false,
            dots: true,
            responsive: {
              0: {
                items: 1,
              },
              576: {
                items: 2,
              },
              768: {
                items: 2,
              },
              992: {
                items: 4,
              },
            },
          });

            //Owl-carousel For blog game

            $(".game .carousel .owl-carousel").owlCarousel({
              loop: true,
              autoplay: false,
              dots: true,
              responsive: {
                0: {
                  items: 1,
                },
                576: {
                  items: 2,
                },
                768: {
                  items: 2,
                },
                992: {
                  items: 4,
                },
              },
            });
  
            //Owl-carousel For Gaming section

            $(".buying .carousel .owl-carousel").owlCarousel({
              loop: true,
              autoplay: false,
              dots: true,
              responsive: {
                0: {
                  items: 1,
                },
                576: {
                  items: 2,
                },
                768: {
                  items: 1,
                },
                992: {
                  items: 2,
                },
              },
            });




  });