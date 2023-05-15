//Question #1.. Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your
// browser:

var a = prompt("Enter a number");
document.write("The value a is  " + a  +"<br>");

document.write("The value of ++a is :"+  ++a +"<br>" );
document.write("NOw The value of a is :" +  a  +"<br>" +"<br>");
document.write("The value of a++ is :"+ a++ +"<br>");
document.write("NOw The value of a is :" +  a  +"<br>" +"<br>");
document.write("The value of --a is :"+ --a +"<br>");
document.write("NOw The value of a is :" +  a  +"<br>" +"<br>");
document.write("The value of a-- is :"+ a-- +"<br>");
document.write("NOw The value of a is :" +  a  +"<br>" +"<br>");

//Question # 2. What will be the output in variables a, b & result after
// execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b;

// --a - --b + ++b + b--;


var a =2 ;
var b = 1;

document.write(" a is:  "+ a   + "<br>");
document.write(" b is:  "+ b   + "<br>");

document.write("Value of --a is:  "+  --a   + "<br>");
// // --a - --b;
document.write("Value of --a , --b is:  "+ --a +"  " + --b   + "<br>");
// --a - --b + ++b;
document.write("Value of --a, --b , ++b is:  "+  --a + " "+ --b +"  " + ++b   + "<br>");
// --a - --b + ++b + b--;
document.write("Value of --a, --b, ++b, b-- is:  "+  --a +"   " + --b  +"   " +  ++b +"   " +  b--   + "<br>");


//QUESTION#2. Write a program that takes input a name from user & 
// greet the user.
var userName = prompt("Enter your name");
document.write("Welcome "+ userName);






// 5. Write a program to take input a number from user & 
// display it’s multiplication table on your browser. If user 
// does not enter a new number, multiplication table of 5 
// should be displayed by default.

var num = prompt("Enter a number");
document.write(num +  "*" + " 1 " + " = " + num  + "<br>"+ num  + "*" + " 2 " + " = " + num*2 + "<br>" +
num  + "*" + " 3 " + " = " + num*3 + "<br>" +
num +  "*"  + " 4 " + " = " + num*4  + "<br>" +
num +  "*" + " 5 " + " = " + num*5  + "<br>" +
num +  "*"  + " 6 " + " = " + num*6  + "<br>" +
num +  "*" +  " 7 " + " = " + num*7  + "<br>" +
num +  "*"  + " 8 " + " = " + num*8  + "<br>" +
num +  "*"  + " 9 " + " = " + num*9  + "<br>" +
num +  "*"  + " 10 " + " = " + num*10  + "<br>"
);


//QUESTION 6 
// a) Take three subjects name from user and store them in 3 
// different variables.
// b) Total marks for each subject is 100, store it in another 
// variable.
// c) Take obtained marks for first subject from user and 
// stored it in different variable.
// d) Take obtained marks for remaining 2 subjects from user 
// and store them in variables.
// e) Now calculate total marks and percentage and show the 
// result in browser like this.(Hint: user table)

var subj1 = prompt("Enter Subject 1 ");
var subj2 = prompt("Enter Subject 2 ");
var subj3 = prompt("Enter Subject 3 ");
var totalMarks = 100;
var sum = totalMarks*3;
var mark1 = prompt("Enter Obtained marks for  Subject1 ");
var mark2 = prompt("Enter Obtained marks for  Subject2 ");
var mark3 = prompt("Enter Obtained marks for  Subject3 ");
var sum2 = mark1 + mark2 + mark3;
var per1 = (mark1/sum)*100;
var per2 = (mark1/sum)*100;
var per3 = (mark1/100)*100;
var T_per = per1 + per2 + per3;
document.write("Subjects" + "&nbsp" + "T-Marks" + "&nbsp" + "O-Marks" + "&nbsp"+ "Percentge%" + "<br>"); 
document.write("<br>" + subj1 + "&nbsp" + "&nbsp"  + totalMarks + "&nbsp" + mark1 +"&nbsp" + per1 + "<br>");
document.write(subj2 + "&nbsp" + "&nbsp" +totalMarks + "&nbsp"+ mark2 + " " +per2 + "<br>");
document.write(subj3 + "&nbsp"  + "&nbsp" +  totalMarks + "&nbsp" + mark3 + "&nbsp" +per3  + "<br>");
document.write( "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp"+ "&nbsp" +  sum + "&nbsp"  + sum2 + " " + T_per);
