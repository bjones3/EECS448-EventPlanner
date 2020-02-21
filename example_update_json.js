var fs = require('fs');
/*
* In this example say we have only the first two(Superbowl and Superbilll) of the 3 events(stored in json_example_for_storing_events.json). Then we create a new event, add it to the new obj and it appears like the one below.
* Now we just need to update the json file using node and call update.js to handle it.
* Finally check the local(this should be in the same folder as your javascript files) json_example_for_storing_events.json and it will be udpated properly
* We need a way to pass the arr object directly to this file from our other javascript files but we also need node to be run from terminal
*/
let arr = [{
"event": "Superbowl",
"creator":"Michael",
"date":"12/12/2020",
"time-available":[ ["Michael" , "Brian"], [], ["Michael"], ["Michael"], [], [], [] ]
},
{
"event": "Superbilll",
"creator":"Michael",
"date":"12/20/2020",
"time-available":[ ["M" , "Brian"], [], ["Michael"], ["Michael"] ]
},
{
"event": "Superbilllsss",
"creator":"Michael",
"date":"12/21/2020",
"time-available":[ ["M" , "Brian"], [], ["Michael"], ["Michael"] ]
}]

let passjson = function(arr){
  //updating json is done in a single file to reduce syncronous problems use passjson to pass the json object and it should be updated automatically
  var d = require('./update.js')
  console.log(arr);

  d(arr);
  console.log("done");
}
//use this to load the json object and then it will call
passjson(arr);
