$(document).ready(function(){
  $("#web").click(function(){
      $("#web-part").show();
      $("#web-arrow").show();
      $("#mobile-arrow").hide();
      $("#desktop-arrow").hide();
      $("#design-arrow").hide();
      $("#category-bar").css('background-color', '#f2ac00');
      $("#mobile-part").hide();
      $("#desktop-part").hide();
      $("#design-part").hide();
  });
  $("#mobile").click(function(){
      $("#web-part").hide();
      $("#mobile-part").show();
      $("#web-arrow").hide();
      $("#mobile-arrow").show();
      $("#desktop-arrow").hide();
      $("#design-arrow").hide();
      $("#mobile-arrow").css('border-bottom', '5px solid #50a5f5');
      $("#category-bar").css('background-color', '#50a5f5');
      $("#desktop-part").hide();
      $("#design-part").hide();
  });
  $("#desktop").click(function(){
      $("#web-part").hide();
      $("#mobile-part").hide();
      $("#desktop-part").show();
      $("#web-arrow").hide();
      $("#mobile-arrow").hide();
      $("#desktop-arrow").show();
      $("#design-arrow").hide();
      $("#desktop-arrow").css('border-bottom', '5px solid #ed5150');
      $("#category-bar").css('background-color', '#ed5250');
      $("#design-part").hide();
  });
  $("#design").click(function(){
      $("#web-part").hide();
      $("#mobile-part").hide();
      $("#desktop-part").hide();
      $("#design-part").show();
      $("#web-arrow").hide();
      $("#mobile-arrow").hide();
      $("#desktop-arrow").hide();
      $("#design-arrow").show();
      $("#design-arrow").css('border-bottom', '5px solid #66bb69');
      $("#category-bar").css('background-color', '#66bb69');
  });
});
$(document).ready(function () {
    $('.owl-carousel-header').owlCarousel({
    loop:true,
    margin:10,
    autoplayTimeout:10000,
    nav:true,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
    })
});