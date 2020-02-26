function test(){
  var i;
  var k = 0;

  for(i = 0; i < 100; i++) {
    k = i*20;
    if(k > 100){
      let j = k % 100;
      console.log( j + ":" + k);}
      else if(k<100){
  console.log(":" + k);}
}
}
test();
