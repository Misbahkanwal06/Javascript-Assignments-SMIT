//1. Write a program that displays current date and time in your browser.

let date = new Date();
let time = date.getTime();
document.write("Current Date : " + date);
document.write("Time : " + time);


//2. Write a program that alerts the current month in words.For example December.

let arr = ["Jan","fab","march","april","May","June","july","August","Sep","Oct","Dec"];
let date2 = new Date();
let month = date2.getMonth();
let monName = arr[month];
document.write("Current month: " + monName);


//3. Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show Sun.

let array = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let day3 = new Date().getDay();
let dayName = array[day3].slice(0,3);
// dayName = dayName.slice(0,3);
document.write("Today is: " + dayName);



// 4. Write a program that displays a message “It’s Fun day” if its Saturday or Sunday today.

let array2 = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let day2 = new Date().getDay();
let dayNames = array2[day2];
if(dayNames === "Sunday" || dayNames === "Saturday"){
    document.write(dayNames + "It's a Fun day");
}else{
    document.write("Today is : " + dayNames);
}


// 5. Write a program that shows the message “First fifteen
// days of the month” if the date is less than 16th of the month
// else shows “Last days of the month”.

let date5 = new Date();
let daysOfMonth = date5.getDate();
document.write("Current date of month: "+daysOfMonth+"th" + "<br>");
if(daysOfMonth < 16){
    document.write("First fifteen days of the month");
}else{
    document.write("Last days of the month");
}


// 6. Write a program that determines the minutes since
// midnight, Jan. 1, 1970 and assigns it to a variable that
// hasn't been declared beforehand. Use any variable you like
// to represent the Date object.

let todayDate = new Date();
let milli_sec = todayDate.getTime();
let minutes = milli_sec / (1000*60);
let accurateMin = Math.floor(minutes);

 document.write("Current Date: " + todayDate);
document.write("<br>" + " Elapsed milliseconds since midnight, Jan 1, 1970: " + milli_sec);
document.write("<br> " + " Elapsed minutes since midnight, Jan 1, 1970: " + accurateMin)



///7 7. Write a program that tests whether it's before noon and
// alert “Its AM” else “its PM”.

let dateObj2 = new Date();
let noon = dateObj2.getHours();
if(noon >=0 && noon <=12  ){
    document.write("Its Am ");
}else if (noon >=13 && noon <=23){
    alert(  " Its PM ");
 }
 

// 8. Write a program that creates a Date object for the last day
// of the last month of 2020 and assigns it to variable named laterDate.

let laterDate = new Date("December 31,2020");
document.write("Later Date: " +laterDate);
 

// 9. Create a date object of the starting date of this Ramadan
// and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015.

let newDate = new Date().getTime();
let customDate = new Date("June 18, 2015").getTime();
let diff = Math.floor((newDate - customDate) / (1000 * 60 * 60 * 24));
document.write(diff + "  days have passed since June 18, 2015");




// 10. Write a program that displays in your browser the
// seconds that elapsed between the reference date and the beginning of 2015.

let now1 = new Date().getTime();
let customDate2 = new Date("January 1, 2015").getTime();
let milliseconds = now1 - customDate2;
let converts = Math.floor((milliseconds / (1000)));
document.write("Reference date " + new Date() + ", <br>" + converts + " seconds have passed since beginning of 2015" );


//11. Create a Date object for the current date and time.
// Extract the hours, reset the date object an hour ahead and
// finally display the date object in your browser.

let curDate = new Date();
document.write("Current date : " + curDate );
let getHr =curDate.getHours();
//OR  let getHr = curDate.setHours(curDate.getHours() - 1);
curDate.setHours(getHr - 1);
document.write("<br>" + " 1 hour ago, it was" + curDate);




//12. Write a program that creates a date object and show the
// date in an alert box that is reset to 100 years back?

let dObject = new Date();
document.write("Current Date: " + dObject);
let getYr = dObject.getFullYear();
dObject.setFullYear(getYr - 100 );
document.write("<br>" + "100 years back, it was " + dObject );



//13. Write a program to ask the user about his age. Calculate
// and show his birth year in your browser.


let userAge = prompt("What's your age?");
let n = new Date();
let curYr = n.getFullYear();
let Calculate = curYr - userAge;
document.write("Your age is: " + userAge + "<br>" + "Your Birth year is: " + Calculate);


//14. Write a program to generate your K-Electric bill in your
// browser. All the amounts should be rounded off to 2
// decimal places. Display the following fields:
// a. Customer Name
// b. Current Month
//c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)
// Where, Net Amount Payable (within Due Date) = Number of units * Charges per unit
// & Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge


let ar =["January","Febrary","March","April","May","June","July","August","September","October","November","december"];
let userName = prompt("Enter your name");
let curMonth = new Date().getMonth();
let monthName = ar[curMonth];
let units = +prompt("Number of units");
let Charges = +prompt("Charges per unit");
let netAmount = units * Charges;
let lateSurcharge = prompt("Late Payment Surcharge");
let grossAmt = netAmount + lateSurcharge;
document.write("K-Electric Bill" + "<br>" + "Customer Name: " + userName + "<br>" + " Current Month: " + monthName );
document.write("<br>" + "Number of units: " + units +"<br>" + " Charges per unit: " + Charges + "<br>" + "<br>");
document.write("<br>" + "Net Amount Payable (within Due Date) " + netAmount );
document.write("<br>" + "Late Payment Surcharge: " + lateSurcharge + "<br>" + "Gross Amount Payable (after Due Date): "+ grossAmt);










