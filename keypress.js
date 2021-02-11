
var count=0;
document.querySelector("textarea").addEventListener("keypress", function(){
 count++;

 var text=event.key;


 document.querySelector("p").innerHTML="YOU HAVE PRESSED:"+count;

});