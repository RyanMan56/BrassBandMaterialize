(function($){
  $(function(){
    $('.button-collapse').sideNav();
    $('.dropdown-button').dropdown();
    $('.parallax').parallax();

    $('.nav-item').append('<div class="nav-line scale-transition scale-out"></div>');

    resizeBanner();
  }); // end of document ready

  $(window).on('resize', function() {
    var win = $(this);
    resizeBanner();
  });

  $(window).scroll(function() {
    if ($(window).scrollTop() < $('#banner').height() - $('.nav-items').outerHeight() / 2) {
      $('.nav-items').removeClass('hidden');
    } else {
      $('.nav-items').addClass('hidden');
    }
  });

  $('.nav-item').mouseenter(toggleAnimation);
  $('.nav-item').mouseleave(toggleAnimation);

})(jQuery); // end of jQuery name space

function resizeBanner() {
  var image_url = $('#banner').css('background-image'), image;

  // Remove url() or in case of Chrome url("")
  image_url = image_url.match(/^url\("?(.+?)"?\)$/);

  if (image_url[1]) {
      image_url = image_url[1];
      image = new Image();

      image.src = image_url;

      $(image).load(function () {
        var imageIdeal = new Image();
        imageIdeal.width = image.width * (300 / image.height);

        var targetHeight = ($('#banner').width() * image.height / image.width) - 1;
        $('#banner').css('height', targetHeight);

        var logo = document.getElementById('logo');
        $('.my-brand-logo').css('height', targetHeight);
        $('.my-brand-logo').css('width', targetHeight * logo.naturalWidth / logo.naturalHeight);
        $('#logo-container').css('height', targetHeight);
        $('#nav-container').css('height', targetHeight);
      });

  }
}

function toggleAnimation() {
  console.log($(this).children().length);
  $(this).children('.nav-line').toggleClass('scale-in');
}
