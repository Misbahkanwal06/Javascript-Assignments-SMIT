// //Q1. Write a function that displays current date & time in your browser.

function display(){
   document.write(new Date());
}
display();

// // Q2. Write a function that takes first & last name and then it
// // greets the user using his full name.

function fullName(a,b){
     document.write("Welcome " + a + " " + b);
}
fullName("misbah","kanwal");


//Q3. Write a function that adds two numbers (input by user)
// and returns the sum of two numbers.

function add(){

var n1 = +prompt("enter n1 ");
var n2 = +prompt("enter n2 ");
return n1 + n2;

}
var user = add();
document.write("Sum is: " + user);


// Q4. Write a function that takes three arguments num1, num2
//& operator & compute the desired operation. Return and
//show the desired result in your browser.

function calculator(x,y,z){
    if(y === '+'){
     return x + z;
    }
   else if(y === '-'){
        return x - z;  
    }
   else if(y === '*'){
        return x * z;  
    }
   else if(y === '/'){
        return x / z;  
    }
   else if(y === '%'){
        return x % z;  
    }
}
let n1 = + prompt("Enter n1");
let o = prompt("Enter operator");
let n2 = + prompt("Enter n2");
let resultss = calculator(n1,o,n2);
document.write(resultss);



 // Q5. Write a function that squares its argument.

function square( x){

 return x*x;

} 
let a = +prompt("Enter a number");
let result = square(a)
document.write(result);


// Q6. Write a function that computes factorial of a number.

function factorial(m){
    let f=1;
         for(let i = 1 ; i<=m ;i++){ 
          f = f*i;
         }
         return f 
  }
  let user = +prompt("Enter a number");
  let res = factorial(user);
  document.write(res);


//Q7. Write a function that take start and end number as inputs
// & display counting in your browser.

function counting(n,m){

     for(let i =n; i<=m ;i++){
  document.write(i + "<br>");
   }
}
let sNo = +prompt("Enter a start number");
let eNo = +prompt("Enter a end number");

 counting(sNo,eNo);

//Q8. Write a nested function that computes hypotenuse of a
// right angle triangle.
// Hypotenuse2 = Base2 + Perpendicular2
// Take base and perpendicular as inputs.
// Outer function : calculateHypotenuse()
// Inner function: calculateSquare()

function calculateHypotenuse(){

    function calculateSquare(a,b){
        let hypotenues = a + b;
        return hypotenues;
    }
}
let input1 = +prompt("enter base");
    let input2 = +prompt("enter perpendicular");

let ans= calculateHypotenuse(calculateSquare(input1,input2));
document.write(ans);

function calculateHypotenuse(b,p)
{    
     function calculateSquare(x)
     { 
         return (x*x);
     }
     var hypotenuse = calculateSquare(b) + calculateSquare(p);
        hypotenuse = Math.sqrt(hypotenuse).toFixed(2);
   return hypotenuse;
}
var base=+prompt("Enter Base Number");
var perpendicular=+prompt("Enter perpendicular Number");
var hypotenuse = calculateHypotenuse(base,perpendicular);
document.write("The hypotenuse of a right triangle with base " +base+ " and perpendicular " +perpendicular+ " is " +hypotenuse);


// //Q9. Write a function that calculates the area of a rectangle.
// // A = width * height
// // Pass width and height in following manner:
// // i. Arguments as value
// // ii. Arguments as variables

function area(a,b){
      let A = a * b;
return A;
}
let width = +prompt("Enter width");
let height = +prompt("Enter height");

let r1 = area(width,height);
let r2 = area(5,10);
document.write("Area of rectangle " + r1 + "<br>" + r2);


// Q10. Write a JavaScript function that checks whether a passed
// string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as
// forward, e.g., madam.

function palindrom(e){
let rev = e.split('').reverse().join('');
if(e === rev){
    document.write("Palindrom");
}
else{
    document.write("not a palindrom");
}
}
let enter = prompt("Enter a string");
palindrom(enter);

// or

function palindrom(e){
    let len = e.length - 1 ;

   for(let i=0; i<len; i++){
    if(e[i] === e[len - i ]){
        document.write("palindrom" + "<br>");
    }
    else{
        document.write("Not" + "<br>");
    }

   }
    }
    let enters = prompt("Enter a string");
    palindrom(enters); 



// Q11. Write a JavaScript function that accepts a string as a
// parameter and converts the first letter of each word of the
// string in upper case.
// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox'

function uppercase(str)
{
  var array1 = str.split(' ');
  var newarray1 = [];
    
  for(var x = 0; x < array1.length; x++){
      newarray1.push(array1[x].charAt(0).toUpperCase() + array1[x].slice(1));
  }
  return newarray1.join(' ');
}
console.log(uppercase("the quick brown fox"));



//Q12. Write a JavaScript function that accepts a string as a
// parameter and find the longest word within the string.
// EXAMPLE STRING : 'Web Development Tutorial'
// EXPECTED OUTPUT : 'Development'

function largestStr(s) {

    let match = s.match(/\w[a-z]{0,}/gi);
    let arr = match[0];

    for (let i = 0; i < match.length; i++) {
        if (arr.length < match[i].length){
            arr = match[i];
        }
}
    return arr;
}

let str = prompt("Enter a string");
console.log(largestStr(str));


// Q13. Write a JavaScript function that accepts two arguments, a
// string and a letter and the function will count the number of
// occurrences of the specified letter within the string.
// Sample arguments : 'JSResourceS.com', 'o'.

function occurance(str , l){
let  count = 0;
for(let i =0; i<str.length;i++){
    if(str[i] === l){
        count +=1;
    }
}
return count;
}
let string = prompt("Enter a string");
let length = prompt("Enter a letter");
let results = occurance(string,length);
console.log(results);



//Q14. The Geometrizer
// Create 2 functions that calculate properties of a circle, using the definitions here.
// Create a function called calcCircumference:
// • Pass the radius to the function.
// • Calculate the circumference based on the radius, and output "The circumference is NN".
// Create a function called calcArea:
// • Pass the radius to the function.
// • Calculate the area based on the radius, and output "The area is NN".

function  calcCircumference(r){
    let cir = (2 * Math.PI * r).toFixed(2);
    console.log("The circumference is:" + cir);
}
function calcArea(r){
    let area = (Math.PI * r * r).toFixed(2);
    console.log("The area is:" + area);
}
calcCircumference(2);
calcArea(3);
  
