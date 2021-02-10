 
function addstyle()
{

	var myvar=document.querySelector("#pid");
	
	myvar.classList.add("para");
}

function removestyle()
{

	var myvar=document.querySelector("#pid");
	myvar.classList.remove("para");
}


var photos=["image/1.jpg","image/2.jpg", "image/3.jpg", "image/4.jpg","image/5.jpg","image/6.jpg","image/7.jpg","image/8.jpg","image/9.jpg","image/10.jpg","image/11.jpg","image/12.jpg","image/13.jpg"];
var imgTag=document.querySelector("img");

var count=0;

 function next()
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

function prev()


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