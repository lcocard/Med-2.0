(function($) {
  $(function() {
    $(".sidenav").sidenav();
    $(".parallax").parallax();
    $('select').formSelect();
    $('.scrollspy').scrollSpy();
    AOS.init();
  }); // end of document ready
})(jQuery); // end of jQuery name space
