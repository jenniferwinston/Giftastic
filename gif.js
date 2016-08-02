// Initial array of emotions
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
   


  $('#buttonsView').on('click', function() {

    var express = $(this).attr('data-name');
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + express + "&api_key=dc6zaTOxFJmzC&limit=10";
        
        $.ajax({url: queryURL, method: 'GET'})
        .done(function(response) {
            var results = response.data;
                for ( var j=0; j < results.length; j++) {
                       var imageView = response.data.image_original_url;
                       var expressImage = $('<img>');
                       expressImage.attr('src', imageView);
                       expressImage.attr('alt', 'express image');
                       $("#expressView").prepend(expressImage);

                       //  var expressDiv = $('<div class="express">');
                       //  var rating = response.Rated;
                       //  var displayRated= $('<p>').text("Rating: " + rating);
                       //  expressDiv.append(displayRated);
                }
        });
    })





//adding new button
$('#addExpress').on('click', function(){
    var express = $('#express-input').val().trim();
    topics.push(express);
    buttonExpress();
    return false;
        
});



           
          

  


       