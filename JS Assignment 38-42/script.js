// //Q1. Write a custom function power ( a, b ), to calculate the value of a raised to b.

function custom(a,b){

     return a**b;
}
let base = +prompt("Enter base value");
let power = +prompt("Enter power value");
let result = custom(base,power);
console.log("Power(a,b) = " + result);



// //Q2. Any year is entered through the keyboard. Write a function to
// // determine whether the year is a leap year or not.

function leap(y){
    if ((0 == y % 4) && (0 != y % 100) || (0 == y % 400)){
            console.log("leap year!");
    }
    else{
        console.log("Not a leap year!");
    }
}
let year = +prompt("Enter a year");
 leap(year);



// //Q3. If the lengths of the sides of a triangle are denoted by a, b, and
// // c, then area of triangle is given by
// // area = S(S − a)(S − b)(S − c)
// // where, S = ( a + b + c ) / 2
// // Calculate area of triangle using 2 functions.


function area(a,b,c,s){

         let area = s* (s-a)* (s-b)* (s-c);
         console.log("Area of triangle is: " + area.toFixed(0));
}

let s1 = +prompt("Enter side A");
let s2 = +prompt("Enter side B");
let s3 = +prompt("Enter side C");

function sides(a,b,c){
   let S = ( a + b + c) / 2;
   return S;
}
let s = sides(s1,s2,s3);
area(s1,s2,s3,s);


// Q4.4. Write a function that receives marks received by a student in 3
// subjects and returns the average and percentage of these
// marks. there should be 3 functions one is the mainFunction
// and other are for average and percentage. Call those functions
// from mainFunction and display result in mainFunction.

function mainFunc(m1, m2, m3) {

    function average(m1, m2, m3) {
        let avg = (m1 + m2 + m3) / 3;
        return avg;
    }
    function percentage(m1, m2, m3) {
        let per = ((m1 + m2 + m3)/300) *100;
        return per ;
    }
    let aver = average(m1, m2, m3);
    let percent = percentage(m1, m2, m3);

    console.log("Average "+ aver );
    console.log("percentage "+ percent );

}
let m1 = +prompt("Enter marks obtained in English");
let m2 = +prompt("Enter marks obtained in Urdu");
let m3 = +prompt("Enter marks obtained in Maths");

mainFunc(m1,m2,m3);


// Q5.5. You have learned the function indexOf. Code your own custom
// // function that will perform the same functionality. You can code
// // for single character as of now.



function indexOf(str, c) {
    let index = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === c) {
            index = i;
        } 
    }
    console.log("Index of " + char + " is: " + index);

}
let st = prompt("Enter any string");
let char = prompt("Enter character");
 indexOf(st, char);



// //Q6.Write a function to delete all vowels from a sentence. Assume
// // that the sentence is not more than 25 characters long.


function delVowel(s) {

    for(let i =0 ; i<s.length;i++){
      s = s.replace(/[AEIOUaeiou]/g, '');
console.log(s);
    }
}

let sentence = prompt("Write a sentence");
delVowel(sentence);


// //Q7.Write a function with switch statement to count the number of
// //occurrences of any two vowels in succession in a line of text.
// //For example, in the sentence

function switchfun(s) {
    s = s.toLowerCase();
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        let s1 = s[i];
        let s2 = s[i + 1];

        switch (s1 ) {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
                switch (s2) { 
                    case 'a':
                    case 'e':
                    case 'i':
                    case 'o':
                    case 'u':
                        count++; 
                        break;
                }
                
                break;
        }
    }
    return count;
}
let sen = prompt("Write a sentence");
let output = switchfun(sen);
console.log("No of vowel pairs " + output);


// //Q8. The distance between two cities (in km.) is input through the
// // keyboard. Write four functions to convert and print this
// // distance in meters, feet, inches and centimeters.



function meters(m){
  console.log("Kilometer to meter  " + m * 100);
}
function feet(f){
    // 1 km = 3280.84 ft.
    console.log("Kilometer to feet  " + f * 3280.84);
}
function inches(i){
    // 1 km = 39,370 in
    console.log("Kilometer to inches  " + i * 39370 );
}
function centimeters(c){
    // 1 Km = 100000;
    console.log("Kilometer to centimeter  " + c * 100000 );
     }

let distance = + prompt("Distance Between A To B in  KM");
meters(distance);
feet(distance);
inches(distance);
centimeters(distance);



// //Q9.Write a program to calculate overtime pay of employees.
// // Overtime is paid at the rate of Rs. 12.00 per hour for every hour
// // worked above 40 hours. Assume that employees do not work
// // for fractional part of an hour.


function overtimePay(e){


    let workingHr = 40;
    let overtimePayment = 12.00;

    if(e > workingHr ){
      let overtime =  e - workingHr;
      console.log("Overtime pay of employees = " + overtime * overtimePayment);
    }
}

let extraHr= +prompt("Enter Hours worked above 40 hours ");
overtimePay(extraHr);



 // // Q10.A cashier has currency notes of denominations 10, 50 and
 // // 100. If the amount to be withdrawn is input through the
 // // keyboard in hundreds, find the total number of currency notes
 // // of each denomination the cashier will have to give to the
// // withdrawer.

function currency(a){

console.log("Currency notes of 100 = " +  (a / 100),toFixed(0));
console.log("Currency notes of 50 = " +  ((a % 100) / 50).toFixed(0));
console.log("Currency notes of 10 = " +  ((a % 100) % 50) / 10);
}
let amount = + prompt("Enter amount to withdraw");
currency(amount);


