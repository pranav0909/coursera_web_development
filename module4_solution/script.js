(function (){
    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
for (var i=0; i < 10; i++) {
   var name = names[i].toLowerCase();
   var firstLetter = name.charAt(0);
   if (firstLetter=="j") {
      byeSpeaker.speak(names[i]);
  }
   else {
    helloSpeaker.speak(names[i]);
  }
 }
})();
