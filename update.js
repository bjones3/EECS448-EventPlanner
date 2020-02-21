/* You will need node installed, I can load a node install instructions if you guys need it
arr = the json object with all new information passed in
require = a node package function that can only be used in node so we need some way to open this file in node instead of the browser, through the browser

*/
var updateJSON = function(arr){
  var fs = require('fs');
  //converts it back to proper format
  let q = JSON.stringify(arr);
  fs.writeFile('./jso.json', q, ()=>{console.log("logged");});

};
//allows using this function outside of this file..use require('./filename') in the other file to be used
 module.exports = updateJSON;
