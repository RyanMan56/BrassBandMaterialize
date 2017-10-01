(function($){
  $(function(){
    $('.button-collapse').sideNav();
    $('.dropdown-button').dropdown();
    $('.parallax').parallax();
    resizeBanner();
  }); // end of document ready

  $(window).on('resize', function() {
    var win = $(this);
    resizeBanner();
  });
})(jQuery); // end of jQuery name space

function resizeBanner() {
  var image_url = $('#banner').css('background-image'), image;

  // Remove url() or in case of Chrome url("")
  image_url = image_url.match(/^url\("?(.+?)"?\)$/);

  if (image_url[1]) {
      image_url = image_url[1];
      image = new Image();

      image.src = image_url;
  }

  var imageIdeal = new Image();
  imageIdeal.width = image.width * (300 / image.height);

  var targetHeight = ($('#banner').width() * image.height / image.width) - 1;
  $('#banner').css('height', targetHeight);
  console.log("should resize");

}
