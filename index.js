 
var myvar=document.querySelector("#pid"); //first para select
function addstyle() //addstyle function
{

	
	
	myvar.classList.add("para");
}

function removestyle()//removestyle function
{

	var myvar=document.querySelector("#pid");
	myvar.classList.remove("para");//css class use
}


 var myvar2=document.querySelector("#pid2");//second para select
  myvar2.addEventListener("mouseover",function()// addlistener function & anonimas function

 {
 	myvar2.classList.add("para2");
 }

);

    myvar2.addEventListener("mouseout",function()

 {
 	myvar2.classList.remove("para2");
 }

);
var photos=["image/1.jpg","image/2.jpg", "image/3.jpg", "image/4.jpg","image/5.jpg","image/6.jpg","image/7.jpg","image/8.jpg","image/9.jpg","image/10.jpg","image/11.jpg","image/12.jpg","image/13.jpg"];
var imgTag=document.querySelector("img");//imag tag select

var count=0;

 function next()//next function
 {
  count++;
  if(count>=photos.length){
  	count=0;
  	imgTag.src=photos[count];
  }
  else{
  imgTag.src=photos[count];
 }
}

function prev()//previous function


{
count--;
  if(count<0){
  	count=photos.length-1;
  	imgTag.src=photos[count];
  }
  else{
  imgTag.src=photos[count];
 }
}