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
		function save(){
		var objectId = $.cookie("objectId");
		var query = new Parse.Query("userSavedSearches");
		query.equalTo("objectId", objectId);
		query.each(function(obj) {
  		obj.set($.cookie("weWant"), mySwiper.activeIndex);
  		obj.set("savedSoFar", +$.cookie("weSay"))
  		return obj.save();
		}).then(function() {
  		// All objects updated.
		}, function(err) {
  		console.log(err);
		});
       
		}
	/* THIS IS TO CHECK WHAT THE SERVER SAYS*/
	/* THIS IS TO CALCULATE*/
		function calculate(){
			var sergeySays = $.cookie("theServerSays");
			var weSay = +sergeySays + 1
			var weWant = "slideIndex" + weSay
			$.cookie("weSay", weSay);
			$.cookie("weWant", weWant);
			alert($.cookie("weSay"));
			alert($.cookie("weWant"));
		}
	/* THIS IS TO CALCULATE*/
	/* THIS IS TO SAVE A SLIDE TO SAVED SEARCHES AND IT IS STRESSING ME OUT SO MUCH*/
		function getObjectId(){

	  var user = Parse.User.current().get("username");
      var getId = Parse.Object.extend("userSavedSearches");
      var query = new Parse.Query(getId);
      query.equalTo("usersname", user );
      query.find
      ({
        success: function(results){
          for (var i = 0; i < results.length; i++){
            var object = results[i];
            var theObjectId = object.id
            var serveySays = object.get('savedSoFar');
            $.cookie("theServerSays", serveySays);
            $.cookie("objectId", theObjectId);
            alert($.cookie("theServerSays"));

            
          }
        }, error: function(){}
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
		getObjectId();
		calculate();
		save();
		mySwiper.swipeNext();
		
	});
});