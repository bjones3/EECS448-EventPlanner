/*
  This works as if we launch node->choose mode -> open correct html -> load other js files 
  Type node loadnode.js to launch but you need node installed with all the 'requires' 
  Node asks what's your name and what mode you want
  Node launches a webpage which are just html files. If you select admin you goto the event.html page which runs event.js. If you select availibility you goto availibilty.html which isn't implemented yet
  We need node to output to files. We dont have to run node at the start but we need file io to save the new information. Either way node needs to run or we need another way to export information.
  (all the requires need to be installed so goto node npm and search for them)
*/

//needed for reading files
let fs = require('fs');
let url = require('url');
//handles opening an app or a url which opens in default browser
const open = require('open');
//allows you to use control + c to close the node program if it crashes
const prompt = require('prompt-sync')({sigint: true});


const name = prompt('Hello welcome to event planner , enter your name: ');

console.log('Hi ' + name);

var mode = prompt('Hit 1 for admin mode or 2 for availibility mode: ');
console.log('You selected ' + mode);

(async () => {

    console.log('A webpage will open in your default browser with Calendar events');
    // Opens the URL in the default browser.
    if (1 == mode){
    await open('./event.html', {wait: true});
    //How do i pass in a name here
  }
  else{
    await open('./availibility.html', {wait:true})
  }
})();
