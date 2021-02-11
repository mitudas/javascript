
 //Event Listeners with multiple elements
for(var i=0; i<3; i++){
 document.querySelectorAll(".one")[i].addEventListener("click",function(){
 	var text=this.innerHTML;
  console.log(text);
playAnimation(text);

  
  
switch(text){

  	case "Music1":
  	             var audio=new Audio("sounds/musicOne.mp3");
  	             audio.play();
  	             break;
    case "Music2":
  	             var audio=new Audio("sounds/musicTwo.mp3");
  	             audio.play();
  	             break;
     case "Music3":
  	             var audio=new Audio("sounds/musicthree.mp3");
  	             audio.play();
  	             break;


  }

 });
}

function playAnimation(text)
{
	var selectedButton=document.querySelector("."+text);
	selectedButton.classList.add("anim");

	setTimeout(function(){
		selectedButton.classList.remove("anim");
	} ,2000);
}

