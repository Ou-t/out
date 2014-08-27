$(document).ready(function(){
$('#secondScreen').hide();

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
});