
  
function number1()
{
	return 60;
}

console.log(number1());

//Es6 fat arrow function
let number2=()=>
{
	return 50;
}

console.log(number2());

//return one element
let number3=()=> 40;
console.log(number3());


let number4=()=> {
	console.log(30);
}
number4();

//return n element
let number5=(n)=> 20;
console.log(number5());

//return multi n element
let number6=(a,b)=> a*b;
console.log(number6(2,5));


//practice one

let number7=()=> {
	return " Number is 60";
}

console.log(number7());

let number8=()=> "Number is 50";
console.log(number8());

let number9=(n)=> n;
console.log(number9("Number is 40"));

let number10=()=> {
console.log("Number is 30");
}
number10();

let number11=()=> "Number is 20";
console.log(number11());

let number12=()=>"Number is 10";
console.log(number12());

//practice two

let num=(a,b)=>a*b;
console.log(num(1,1));
console.log(num(1,2));
console.log(num(1,3));
console.log(num(1,4));
console.log(num(1,5));
console.log(num(1,6));
console.log(num(1,7));
console.log(num(1,8));
console.log(num(1,9));
console.log(num(1,10));

//practice three

let num1=(a,b)=>a*b;
console.log("Multiply by 2:"+num1(2,1));
console.log("Multiply by 2:"+num1(2,2));
console.log("Multiply by 2:"+num1(2,3));
console.log("Multiply by 2:"+num1(2,4));
console.log("Multiply by 2:"+num1(2,5));
console.log("Multiply by 2:"+num1(2,6));
console.log("Multiply by 2:"+num1(2,7));
console.log("Multiply by 2:"+num1(2,8));
console.log("Multiply by 2:"+num1(2,9));
console.log("Multiply by 2:"+num1(2,10));

//practice four
let num2=()=>{

	add=10+5;
	sub=40-20;
	multi=60-30;
	div=40/5;

	return {add,
		sub, multi, div};
}

console.log(num2());

let num3=(a,b)=>{

	add=a+b;
	sub=a-b;
	multi=a*b;
	div=a/b;

	return {add,
		sub, multi, div};
}

console.log(num3(2,4));
console.log(num3(7,5));
console.log(num3(9,4));
console.log(num3(20,5));
console.log(num3(60,4));
document.write(num3(9,4));






















