var $carousel = $('.carousel').flickity( getSliderSettings() );
var isFlickity = true;
// toggle Flickity on/off
$('.button--toggle').on( 'click', function()
{
	//Clearing previous contents
	$carousel.flickity('destroy');
	$('.carousel').empty();

	//$(".carousel").append('<div class="carousel-cell"></div>');
	$(".carousel").append('<div class="carousel-cell"><img src="https://s3-us-west-1.amazonaws.com/powr/defaults/image-slider2.jpg"></div>');

	// init new Flickity
	$carousel.flickity( getSliderSettings() );
});

function getSliderSettings()
{
	return {
				wrapAround		: true,
				cellAlign		: "center",
				adaptiveHeight	: true,
				lazyLoad		: true,
				autoPlay		: 3000,
				pauseAutoPlayOnHover: true,
				initialIndex	: 0,
				arrowShape	:	{
									x0: 10,
									x1: 60, "y1": 50,
									x2: 50, "y2": 20,
									x3: 45
								}
			};
}