//Arithmatic operations + - * / 

//Question1: Write a program that take two numbers & add them in a
//new variable. Show the result in your browser.
    var number1 = prompt("Enter a number 1");
    var number2 = prompt("Enter a number 2");
    var add = number1 + number2;
    document.write("Sum of " + number1 + " and " + number2 + " is" + add);

//Question2: . Repeat task1 for subtraction, multiplication, division & modulus. 
  var number1 = prompt("Enter a number 1");
var number2 = prompt("Enter a number 2");
var add = number1 - number2;
document.write("Subtraction of " + number1 + " and " + number2 + " is" + add + "<br>");
var add = number1 * number2;
document.write("Multiplication of " + number1 + " and " + number2 + " is" + add);
var add = number1 / number2;
document.write("Division of " + number1 + " and " + number2 + " is" + add);
var add = number1 % number2;
document.write("Modulus of " + number1 + " and " + number2 + " is" + add);


//Question4: Cost of one movie ticket is 600 PKR. Write a script to
// store ticket price in a variable & calculate the cost of buying 5 tickets to a movie. Example output:
var price = 600;
var cost = price * 5;
document.write("Total cost to buy 5 tickets to a movie is " + cost );

//Question5: Write a script to display multiplication table of any number in your browser.
var n = prompt("\n Enter any number ");
document.write("\n Table of " + n +"\n" ) ;
document.write(n + " * 1 = "+ n + "\n " +  n + " * 2 = " + n*2 + "\n" + n + " * 3 = " + 
n*3 + "\n" + n + " * 4 = " + n*4 + "\n"+  n + " * 5 = " + n*5);




//Question6: The Temperature Converter: It’s hot out! Let’s make a
// converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to

var Celsius_Tem = 36.68;
var fahrenheit_Tem = 98;
var convert_Into_F = (Celsius_Tem * 9/5) + 32;
console.log( Celsius_Tem + " C  is " + convert_Into_F + " F" );
var convert_Into_C = (fahrenheit_Tem - 32) * 5/9;
console.log( fahrenheit_Tem + " F  is " + convert_Into_C + " C ");

//Question7: Write a program to implement checkout process of a
// shopping cart system for an e-commerce website. Store
// the following in variables
// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges

var price_Of_Item1 = 650;
var price_Of_Item2 = 100;
var quantity_of_item1 = 3;
var quantity_of_item2 =7;
var charges = 100;

document.write("Price of item 1 is " + price_Of_Item1);
document.write("\nQuantity of item 1 is "+ quantity_of_item1 );
document.write("\nPrice of item 2 is " + price_Of_Item2  );
document.write("\nQuantity of item 2 is "+ quantity_of_item2 );
document.write("\nShipping charges "+ charges);
var total = price_Of_Item1 + price_Of_Item2 + quantity_of_item1 +quantity_of_item2 +charges;
document.write("\n\nTotal cost of your order is " + total);

//Question8: Store total marks & marks obtained by a student in 2
// variables. Compute the percentage & show the result in
// your browser.

var totalMarks = 500;
var marksObtained = 390;
var per =  marksObtained /totalMarks  * 100;
document.write("Total Marks " +totalMarks + "\n" );
document.write("\n Percentage "+ per + "%");

//Question9: Assume we have 10 US dollars & 25 Saudi Riyals. Write a
// script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
// and 1 Saudi Riyal = 28 Pakistani Rupee).

var US$ = 10;
var riyal = 25;
var uSToPk = US$ * 104.80;
var  riyalToPk = riyal * 28;
document.write(" Total Currency in PKR is "+ uSToPk + riyalToPk );

    
//Question 11: . The Age Calculator: Forgot how old someone is? Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored
// values.
// Output them to the screen like so: “They are either NN or NN
// years old”.

var currYear = "2023";
var birthYear = "2001";

var cal = currYear - birthYear;
document.write("Current Year: " + currYear + "<br>");
document.write("Birth Year: " + birthYear + "<br>");
document.write("Your age is: " + cal);


//QUESTION #12:
//The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.
// b. Calculate the circumference based on the radius, and
// output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The
// area is NN”. (Hint : Area of a circle = π r2, π = 3.142)

var radius = 5;

var circumference = 2*3.142*radius;
var area = 3.142*radius**2;
document.write("Radius of circle is " + radius + "<br>");
document.write("The Circumference  of circle is "+ circumference  + "<br>");
document.write("The Area of circle is "+ area );




//QUESTION # 13 .
// The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is? 
// Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of
// your life.
// Output the result to the screen like so: “You will need 
// NNNN to last y


var snack = "lays";
var age = 20;
var maxAge = 30;
var amount = 2;
var cal = (maxAge-age)*2;
document.write("Favourite Snack "+ snack + "<br>");
document.write("Current age "+ age + "<br>");
document.write("Maximum age "+ maxAge + "<br>");
document.write("Amount of snacks per day "+ amount + "<br>");
document.write("You will need "+ cal +" " + snack + " to last you untill the ripe old age of "+ maxAge);



