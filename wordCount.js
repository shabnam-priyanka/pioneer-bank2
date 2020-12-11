// var speech = "I am a good girl and I don't snore at night";
// console.log(speech.length);
//on top is the example how you can do word count

var speech = "I am a good girl and I don't snore at night";
var count = 0;
for (var i = 0; i < speech.length; i++) {
   var char = speech[i];
   if (char ==" "){
       count++;
       
   }
    
}
console.log(count);