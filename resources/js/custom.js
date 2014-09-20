Parse.initialize("xkfgL5v2oOViK8ge6CGTuZ7DYWxw6yoiaVTBgK2V", "zHRjkPi3PyVtsi4fWyth7Ydklg216CD5KuvNn97n");
$(document).ready(function(){
$('#secondScreen').hide();
$('.login-card').hide();
$('#ss').hide();

	function startSwiper(){

  	var mySwiper = $('.swiper-container').swiper({
    //Your options here:
    mode:'horizontal',
    loop: false
    //etc..
  });
  	window.mySwiper = mySwiper
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
	/* THIS IS TO CHECK WHAT THE SERVER SAYS*/
		function checkWhatServerSays(){
		var user = Parse.User.current().get("username");

       var serverSays =  Parse.Object.extend("userSavedSearches");
       var query = new Parse.Query(serverSays);
       query.equalTo("usersname", user );
       query.find
       ({
        success: function(results) 
              {
              // Do something with the returned Parse.Object values
              for (var i = 0; i < results.length; i++) { 
              var object = results[i];
              var theServerSays = object.get('savedSoFar');
              
              $.cookie("theServerSays", theServerSays);
              
              }
              },
              error: function(error) 
              {
              alert("Error: " + error.code + " " + error.message);
              }
      });
		}
	/* THIS IS TO CHECK WHAT THE SERVER SAYS*/
	/* THIS IS TO SAVE A SLIDE TO SAVED SEARCHES AND IT IS STRESSING ME OUT SO MUCH*/
		function saveCurrentSlide(){

		var user = Parse.User.current().get("username");
				

       var slideSave = Parse.Object.extend("userSavedSearches");
       var saveSlide = new Parse.Query(slideSave);
       saveSlide.equalTo("username", "test");
       saveSlide.first({
  		success: function(plz) {

  			if (plz) { alert("'yay'")};

  		var serveySays = $.cookie("theServerSays");
		var weSay = serveySays + 1
		var weWant = "slideIndex" + weSay
     	plz.set(String(weWant), mySwiper.activeIndex);
     	plz.set("savedSoFar", weSay);
    	plz.save();
    							},
  		error: function(error) {
    	alert("Error: " + error.code + " " + error.message);
  		}
		});

       

        
 
        
  }
	/* THIS IS TO SAVE A SLIDE TO SAVED SEARCHES*/
	

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
		$('#mainSliderWrapper').fadeOut( 500 );
		$('#foot').fadeOut( 500 );
		$('#ss').fadeIn();
	});
	$('#findMore').click(function(){
		$('#ss').fadeOut( 500 );
		$('#foot').fadeIn( 500 );
		$('#mainSliderWrapper').fadeIn( 500 );

	});
	$('#delete').click(function(){

	});
	$('#pin').click(function(){
		/*alert(Parse.User.current().get("username"));(this will be useful in future please dont discard)*/
		checkWhatServerSays();
		saveCurrentSlide();

	});
});