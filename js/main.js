$(document).ready(function () {

    $.getJSON('https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UC-xpsVOic6BgkII5AdJGHlw&key=AIzaSyC0qis5VyrtGNwYJtTIk3SaJvoayb3H41c', function(data) {
        $('.odometer__yt').html(data.items[0].statistics.subscriberCount);

        $('.odometer__tw').html(556);
    });
  });