$(document).ready(function(){
  $("#web").click(function(){
      $("#web-part").show();
      $("#web-arrow").show();
      $("#mobile-arrow").hide();
      $("#desktop-arrow").hide();
      $("#design-arrow").hide();
      $("#web-button").css('color', '#f2ac00');
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
      $("#mobile-button").css('color', '#50a5f5');
      $("#mobile-button").css('border-color','#50a5f5');
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
      $("#desktop-button").css('color', '#ed5150');
      $("#desktop-button").css('border-color','#ed5150');
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
      $("#design-button").css('color', '#66bb69');
      $("#design-button").css('border-color','#66bb69');
      $("#design-arrow").css('border-bottom', '5px solid #66bb69');
      $("#category-bar").css('background-color', '#66bb69');
  });
});
$(document).ready(function(){
  $("#people1").click(function(){
      $("#people1-part").show();
      $("#people1-arrow").show();
      $("#people2-arrow").hide();
      $("#people3-arrow").hide();
      $("#people4-arrow").hide();
      $("#people1-arrow").css('border-bottom', '5px solid #50a5f5');
      $("#people2-part").hide();
      $("#people3-part").hide();
      $("#people4-part").hide();
  });
  $("#people2").click(function(){
      $("#people1-part").hide();
      $("#people2-part").show();
      $("#people1-arrow").hide();
      $("#people2-arrow").show();
      $("#people3-arrow").hide();
      $("#people4-arrow").hide();
      $("#people2-arrow").css('border-bottom', '5px solid #50a5f5');
      $("#people3-part").hide();
      $("#people4-part").hide();
  });
  $("#people3").click(function(){
      $("#people1-part").hide();
      $("#people2-part").hide();
      $("#people3-part").show();
      $("#people1-arrow").hide();
      $("#people2-arrow").hide();
      $("#people3-arrow").show();
      $("#people4-arrow").hide();
      $("#people3-arrow").css('border-bottom', '5px solid #50a5f5');
      $("#people4-part").hide();
  });
  $("#people4").click(function(){
      $("#people1-part").hide();
      $("#people2-part").hide();
      $("#people3-part").hide();
      $("#people4-part").show();
      $("#people1-arrow").hide();
      $("#people2-arrow").hide();
      $("#people3-arrow").hide();
      $("#people4-arrow").show();
      $("#people4-arrow").css('border-bottom', '5px solid #50a5f5');
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
$('.back-top').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });
$(document).ready(function () {
    $( "#content1-logo" ).click(function() {
      $( ".sosmed-logo-wrapper" ).slideToggle( "slow" );
    });
});
$(document).ready(function () {
    $( "#support-image" ).click(function() {
      $( ".admin-chat" ).slideToggle( "slow" );
    });
});