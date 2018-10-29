$( "#front-end-btn" ).click(function() {
      $("#front-end").show();
      $("#mobile-dev").hide();
      $("#back-end").hide();
      $("#desktop-dev").hide();
    });
    $( "#mobile-dev-btn" ).click(function() {
      $("#front-end").hide();
      $("#mobile-dev").show();
      $("#back-end").hide();
      $("#desktop-dev").hide();
    });
    $( "#back-end-btn" ).click(function() {
      $("#front-end").hide();
      $("#mobile-dev").hide();
      $("#back-end").show();
      $("#desktop-dev").hide();
    });
    $( "#desktop-dev-btn" ).click(function() {
      $("#front-end").hide();
      $("#mobile-dev").hide();
      $("#back-end").hide();
      $("#desktop-dev").show();
    });