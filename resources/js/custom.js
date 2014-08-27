$(document).ready(function(){
$('#secondScreen').hide();

	$('#submitButton').click(function(){
		$('#firstScreen').fadeOut( 500 );
		$('#secondScreen').fadeIn( 500 );
	});
});