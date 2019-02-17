<?php

require "twitteroauth/autoload.php";

use Abraham\TwitterOAuth\TwitterOAuth;

$consumerKey = "Gmdl9l7uHQ3ZgFCeHqRViiEuA";

$consumerSecret = "76fO1AFOlhxhX11c7LS1TnZjiuRXnk3JLIlNMOMd4iOTu5xkxx";

$accessToken = "1055876369224212480-SQvvfgdi8A4Q9951WdEEJnrj6BEV1z";

$accessTokenSecret = "SA3OIiwtdMDs8qMDTa9rKHFL99HtYeVCAh0vDC3jdR1re";

$connection = new TwitterOAuth($consumerKey, $consumerSecret, $accessToken, $accessTokenSecret);

$statuses = $connection->get("users/lookup", ["screen_name" => "teammajln"]);

$userInfoJson = json_encode((array) $statuses[0]->followers_count);

$result = preg_replace('/\D/', '', $userInfoJson);

echo  $result;

?>
