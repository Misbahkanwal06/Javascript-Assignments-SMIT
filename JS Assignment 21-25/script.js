//1. Write a program that takes two user inputs for first and last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.

let user1 = prompt("Enter your first name");
let user2 = prompt("Enter your last name");

let merge = user1 +  user2;
document.write("Welcome! " + merge);


//2. Write a program to take a user input about his favorite
// mobile phone model. Find and display the length of user
// input in your browser.

let input = prompt("Enter your fav Mobile model");
document.write("Length of " + input + " is " + input.length);

//3. Write a program to find the index of letter “n” in the word “Pakistani” and display the result in your browser .

let s = "Pakistani";
document.write("String: "+ s + "<br>" + "Index of 'n' is  " + s.indexOf("n"));

// 4. Write a program to find the last index of letter “l” in the
// word “Hello World” and display the result in your browser.

let word = "Hello World";
document.write("Last index of L in string " + word + " is " + word.lastIndexOf("l"));



//5. Write a program to find the character at 3rd index in the
// word “Pakistani” and display the result in your browser.

let word2 = "Pakistani";
document.write("String: "+ word2 + "<br>" + "Character at index 3 is " +  word2[3]);


//6.  Write a program that takes two user inputs for first and last name using prompt and merge them in a new variable
// // titled fullName. Greet the user using his full name. using string concat() method.


let user_1 = prompt("Enter your first name ");
let user_2 = prompt(" Enter your last name");

document.write(user_1.concat(" ",user_2));


//7. Write a program to replace the “Hyder” to “Islam” in the
// word “Hyderabad” and display the result in your browser.

let words = "Hyderabad";

// document.write(word.replace("H", "i"));
document.write("City: " + words + "<br>");
document.write("After Replacement: "+ words.replace(/Hyder/g, "Islam"));
//OR // document.write("After Replacement: "+ word.replace("Hyder", "Islam"));



// 8. Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.
// var message = “Ali and Sami are best friends. They play cricket and
// football together.”;

let message = "Ali and Sami are best friends. They play cricket and football together";
document.write("Before:  " + message + "<br>");
document.write("After:  " + message.replace(/and/g, "&") );


//9. Write a program that converts a string “472” to a number 472. Display the values & types in your browser.

let string1 = "472";
document.write("Value: " + string1 + "<br>" + "Type is " + typeof string1 + "<br>");
string1 = Number(string1);
document.write("Value: " + string1 + "<br>" + "Type is " + typeof string1 );


//10. Write a program that takes user input. Convert and show the input in capital letters.

let userInput = prompt("");
document.write("UserInput :" + userInput + "<br>");
let upperCase = userInput.toUpperCase();
document.write("Upper Case:" + upperCase);


//11. Write a program that takes user input. Convert and show the input in title case.
let userInput2 = prompt("");
document.write("UserInput :" + userInput2 + "<br>");
  let A1 = userInput2[0].toUpperCase();
  let B1 = userInput2.slice(1,userInput2.length);
 document.write(A1 + B1);




//12.Write aprogram that converts the variable num to string.
//var num = 35.36; remove the dot to display "3536" display in  your browser. 

let num = 35.36;
document.write(typeof(num)+ ": " + num + "<br>");
num = num.toString().replace(".", "");
document.write("Result: "+ typeof(num)+ num );


//14. You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array. After searching, prompt the user whether the given
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user
// enters cookie, Cookie, COOKIE or coOkIE, program
// should inform about its availability. 

let A = ["cake", "apple pie", "cookie", "chips", "patties"];
let input1 = prompt("Welcome!. What do you want to order?");
//  input   = input.toLocaleString();
let index = A.indexOf(input1);

if(index !== -1){
    document.write(input1 + " is available at index " + index + "<br>" );
}
else{
    document.write(input1 + " is not available" );
}



// 16. Write a program to convert the following string to an
// array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser.

 let  university = "University of Karachi";
console.log(university.split("") );
 

//17. Write a program to display the last character of a user input.

let  user = prompt("Enter String");
document.write("User Input: " + user + "<br>");
document.write("Last Index is: " + user.charAt(user.length-1));
//OR
// document.write("Last Index is: " + user1[user1.length-1]);



// 18.You have a string “The quick brown fox jumps over the
// lazy dog”. Write a program to count number of
// occurrences of word “the” in given string.

let B = "The quick brown fox jumps over the lazy dog";
let count = 0;

for(let i =0 ; i<B.length ;i++){
    if(B.slice(i,i+3) === "the" || B.slice(i,i+3) === "The"){
        count++;
    }
}
document.write("There are " + count + " occurances of word the ");


