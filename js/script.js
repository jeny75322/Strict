feather.replace()


// Slick Slider 
$(document).ready(function(){
    $('.slick_item').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow:'<i class="fa-solid fa-chevron-left prev-arrow"></i>',
        nextArrow:'<i class="fa-solid fa-chevron-right next-arrow"></i>',
        autoplay: true,
        autoplaySpeed: 1000,
        responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      });
  });

  // Navbar & Top button
let navbar = document.querySelector('#navber');
window.addEventListener('scroll',function(){
    var sticky = window.scrollY;

    if (sticky > 350) {
        navbar.classList.add("sticky_menu")
        
    } else {
        navbar.classList.remove("sticky_menu")
    }
})