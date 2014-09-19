Parse.initialize("xkfgL5v2oOViK8ge6CGTuZ7DYWxw6yoiaVTBgK2V", "zHRjkPi3PyVtsi4fWyth7Ydklg216CD5KuvNn97n");
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

  	function goHome(){
  		$('.login-card').slideUp( 500 );
  		$('#secondScreen').fadeIn( 500 );
  	};

	/* THIS IS TO LOGIN*/
	//Function to sign in
		$("#loginSubmit").click(function(event){
		            event.preventDefault();
		            signIn();
		        });
		      
		        
		        function signIn(){
		            
		            var username = document.getElementById("usr").value;
		            var password = document.getElementById("psw").value;
		            
		            window.Usersname = username;

		           Parse.User.logIn(username, password, {
		          success: function(user) {
		            
		            alert("Welcome, " + Usersname + ".");
		            
		            goHome();
		          },

		          error: function(user, error) {
		                
		                alert("Error: " + error.code + " " + error.message);
		              }
		            });   
		        };
		       // End function to sign in
	/* THIS IS TO LOGIN*/

	$('#loginSubmit').click(function(){
		signIn();
	});

	$('#submitButton').click(function(){
		$('#firstScreen').fadeOut( 500 );
		$('#secondScreen').fadeIn( 500 );
		startSwiper();
	});

	$('#login').click(function(){
		$('#secondScreen').fadeOut( 500 );
		$('.login-card').slideDown( 500 );
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
	$('#delete').click(function(){
		
	});
});