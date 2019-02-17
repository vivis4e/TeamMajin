$(document).ready(function () {

    $.getJSON('https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UC-xpsVOic6BgkII5AdJGHlw&key=AIzaSyC0qis5VyrtGNwYJtTIk3SaJvoayb3H41c', function(data) {
        $('.odometer__yt').html(data.items[0].statistics.subscriberCount);

    });

    function reqListener () {
        console.log(this.responseText);
      }
  
      var oReq = new XMLHttpRequest(); //New request object
      oReq.onload = function() {
          //This is where you handle what to do with the response.
          //The actual data is found on this.responseText
          $('.odometer__tw').html(this.responseText); //Will alert: 42
      };
      oReq.open("get", "twitter-app.php", true);
      //                               ^ Don't block the rest of the execution.
      //                                 Don't wait until the request finishes to 
      //                                 continue.
      oReq.send();

  });
