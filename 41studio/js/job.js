$(document).ready(function () {
    $( ".learn-more-button" ).click(function() {
      $( ".modal-fullwidth" ).show();
    });
    $( ".close-button" ).click(function() {
      $( ".modal-fullwidth" ).hide();
    });
});
$('.back-top').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });