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
    // displayExpress();


  // function displayExpress() {

  //   var express = $(this).attr('data-name');
  //   var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + express + "&api_key=dc6zaTOxFJmzC&limit=10";
        
  //       $.ajax({url: queryURL, method: 'GET'}).done(function(response) {
  //           var expressDiv = $('<div class="express">');
  //          //creates the rating
  //           var rating = response.Rated;
  //           var displayRated= $('<p>').text("Rating: " + rating);
  //           expressDiv.append(displayRated);
  //           //creates the image
  //           var image = $('<img>').attr("src" );
  //           expressDiv.append(image);
  //       });
  //   }




//adding new button
$('#addExpress').on('click', function(){
    var express = $('#express-input').val().trim();
    topics.push(express);
    buttonExpress();
    return false;
});






  


       