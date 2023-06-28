//Q1.. Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

let userInput = Number(prompt("Enter positive integer"));
let roundOff = Math.round(userInput);
let floorVal = Math.floor(userInput);
let ceilVal = Math.ceil(userInput);
document.write("User Entered Number: " + userInput + "<br>");
document.write("Round off value of the number: " + roundOff  + "<br>");
document.write("Floor value of the number: " + floorVal  + "<br>");
document.write ( " Ceil value of the number: "+ ceilVal); 


//Q2.. 2. Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number


let user = parseFloat( prompt("Enter negative floating number: ") );
let round = Math.round(user);
let floor = Math.floor(user);
let ceil = Math.ceil(user);
document.write("User Entered Number: " + user + "<br>");
document.write("Round off value of the number: " + round  + "<br>");
document.write("Floor value of the number: " + floor  + "<br>");
document.write ( " Ceil value of the number: "+ ceil); 


// //Q3..3. Write a program that displays the absolute value of a
// number. E.g. absolute value of -4 is 4 & absolute value of 5 is

let num = + prompt("Enter any value");
document.write("The absolute value of: " + num + " is " + Math.abs(num));

// //Q4...4. Write a program that simulates a dice using random()
// method of JS Math class. Display the value of dice in your browser.:

let ranNUM = Math.random();
let convert = (ranNUM * 6) + 1;
let floorNo = Math.floor(convert);
document.write("Random Dice Value : " + floorNo );


// //Q5...5. Write a program that simulates a coin toss using random()
//  method of JS Math class. Display the value of coin in your browser

let No = Math.random();
let coin = Math.floor((No * 2) + 1);
if(coin === 2){
    document.write(coin + " Random Coin value: Heads"  );

}else{
    document.write(coin + " Random Coin value: Tails"  );
 
}

// // Q6...6. Write a program that shows a random number between 1 and 100 in your browser.

 let ranNumber = Math.random();
 let floorValue = Math.floor((ranNumber * 100) + 1);
 document.write("Random number Between 1 and 100: " + floorValue);


// // Q7.... Write a program that asks the user about his weight. Parse
// the user input and display his weight in your browser.
// Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms

let ask = prompt("Enter your weight in kilograms ");
document.write("Weight of user is " + ask +  " kilograms ");


// // Q8...8. Write a program that stores a random secret number from
// 1 to 10 in a variable. Ask the user to input a number
// between 1 and 10. If the user input equals the secret
// number, congratulate the user.

let random = Math.floor((Math.random() * 10) + 1 );
document.write("Random number: " + random + "<br>")
let input = + prompt("Enter a number between 1 and 10"); 
document.write("User's secret no: " + input  + "<br>");
if(random === input){
    document.write("Congratulations!");
}
else{
    document.write("No Match. Try Again");
}

















