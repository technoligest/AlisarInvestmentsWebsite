
$(function() {
$('a[href*="#"]:not([href="#"])').click(function() {
  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000);
      return false;
    }
  }
});
});

		$(document).ready(function() {
			/*
			 *  Simple image gallery. Uses default settings
			 */
       $(".various").fancybox({
		maxWidth	: 600 ,
//        maxHeight:100,
		fitToView	: false,
		width		: '100%',
		height		: '100%',
		autoSize	: false,
		closeClick	: false,
		openEffect	: 'none',
		closeEffect	: 'none',
           padding: [0,0,0,0],
    closeBtn:true
	});
		});
