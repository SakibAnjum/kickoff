(function ($) {
 "use strict";





















/*----------------------------
 jQuery MeanMenu
------------------------------ */
	jQuery('nav#dropdown').meanmenu();

/*----------------------------
 wow js active
------------------------------ */
var wow = new WOW(
                     {
                     boxClass:     'wow',      // default
                     animateClass: 'animatedd', // default
                     offset:       0,          // default
                     mobile:       true,       // default
                     live:         true        // default
                   }
                   )
                   wow.init();

/*----------------------------
 owl active
------------------------------ */
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    items:1,
    autoplayTimeout:10000,
    autoplay:true,
    animateIn:'fadeIn',
    animateOut:'fadeOut',
    navText:['<i class="icofont icofont-thin-left"></i>','<i class="icofont icofont-thin-right"></i>']

})

/*----------------------------
 price-slider active
------------------------------ */
	  $( "#slider-range" ).slider({
	   range: true,
	   min: 40,
	   max: 600,
	   values: [ 60, 570 ],
	   slide: function( event, ui ) {
		$( "#amount" ).val( "�" + ui.values[ 0 ] + " - �" + ui.values[ 1 ] );
	   }
	  });
	  $( "#amount" ).val( "�" + $( "#slider-range" ).slider( "values", 0 ) +
	   " - �" + $( "#slider-range" ).slider( "values", 1 ) );

/*--------------------------
 scrollUp
---------------------------- */
	$.scrollUp({
        scrollText: '<i class="fa fa-angle-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });

})(jQuery);
