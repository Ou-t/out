$(document).ready(function(){
$('#secondScreen').hide();
$('.login-card').hide();
$('#ss').hide();

	function startSwiper(){
  	var mySwiper = $('.swiper-container').swiper({
    //Your options here:
    mode:'horizontal',
    loop: true
    //etc..
  });
  	
}

	$('#submitButton').click(function(){
		$('#firstScreen').fadeOut( 500 );
		$('#secondScreen').fadeIn( 500 );
		startSwiper();
	});

	$('#login').click(function(){
		$('#secondScreen').fadeOut( 500 );
		$('.login-card').fadeIn( 500 );
	});
	$('#savedSearches').click(function(){
		$('#mainContentWrapper').fadeOut( 500 );
		$('#foot').fadeOut( 500 );
		$('#ss').fadeIn();
	});
	$('#findMore').click(function(){
		$('#ss').fadeOut( 500 );
		$('#foot').fadeIn( 500 );
		$('#mainContentWrapper').fadeIn( 500 );

	});
});