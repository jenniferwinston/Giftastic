// Initial array of emotions
$(document).ready(function(){
    var topics = ['Happy', 'Sassy', 'Frightened', 'Laughing', 'Scared', 'Mind Blown', 'Hungry', 'Confused'];

    // ========================================================

  //  create topics array buttons
    function buttonExpress(){
        $('#buttonsView').empty();
        
        for ( var i=0; i < topics.length; i++) {
            //create all buttons
            var a = $('<button>');
            a.addClass('expression');
            a.attr('data-name', topics[i]);
            a.text(topics[i]);
            $('#buttonsView').append(a);
        }
    }    
    buttonExpress();
   


  $(document).on('click', '.expression', function() {

    var express = $(this).html(); 
    console.log(express);
    
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + express + "&api_key=dc6zaTOxFJmzC&limit=10";
        console.log(queryURL);
        $.ajax({url: queryURL, method: 'GET'})
        .done(function(response) {
            // grabs the data
            var results = response.data;
            $('#expressView').empty();
                //loops through the data
                for ( var j=0; j < results.length; j++) {
                    var imageDiv = $('<div>');
                    var imageView = results[j].images.fixed_height.url;
                    // var still = results[j].images.fixed_height_still;
                        console.log(imageView);  
                    var expressImage = $('<img>').attr("src", imageView);
                       imageDiv.append() 

                       $('#expressView').prepend(expressImage);
                       

                        // var expressDiv = $('<div class="express">');
                        // var rating = response.Rated;
                        // var displayRated= $('<p>').text("Rating: " + rating);
                        // expressDiv.append(displayRated);
                }
        });
    })





//adding new button
$('#addExpress').on('click', function(){
    if ($('#express-input').val().trim() == ''){
      alert('Input can not be left blank');
   }
   else {
    var express = $('#express-input').val().trim();
    topics.push(express);
    buttonExpress();
    return false;
    }

});



          
        });  

  


       