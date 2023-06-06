//Q1. Declare an empty array using JS literal notation to store
// student names in future.

let array = [];

//@2.Declare an empty array using JS object notation to store student names in future.

let arr = {};

// Q3. Declare and initialize a strings array.

let strArr = ["html", "CSS", "javascript"];

// Q4. Declare and initialize a numbers array.

let strArr2 = [1,2,3,4,5,6,8,23,43];

// Q5. Declare and initialize a boolean array.
let strArr3 = [true, false];

// Q6.Declare and initialize a mixed array.
let arrays = ["mango", 10, true,false];


// Q7. Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// BS, BCOM, MS, M. Phil., PhD). Show the listed
// qualifications in your browser like:

let store = ["SSC", "HSC","BCS","BS","BCOM","MS","M","M.Phil", "PhD"];
document.write("Qualifications" + "<br>" + "<br>");
for(let i=0; i<store.length; i++){
  document.write(store[i] + "<br>")
}

//Q8. Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students :
let nameArr = ["Michael","John","Tony"];
let scoreArr = [340,280,480];
let totalMarks = 500;
let per;
for (let i=0; i<scoreArr.length;i++){
    per = scoreArr[i]/totalMarks*100;
    document.write("Score of " + nameArr[i] + " is " + scoreArr[i] + " percentage is : " + per + " <br>");
}


 // Q9.Initialize an array with color names. Display the array elements in your browser.
// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.
let arrr = ["blue","pink","grey","white","black"];
for (let i=0; i<arrr.length;i++){
    document.write(  arrr[i] + "<br> "); 
 }
let users = prompt("Enter a color");
 arrr.unshift(users);
 for (let i=0; i<arrr.length;i++){
    document.write(  arrr[i] + "<br> "); 
 }

  
// b. Ask the user what color he/she wants to add to the end
// & add that color to the end of the array. Display the
// updated array in your browser.
let arr2 = ["blue","pink","grey","white","black"];
for (let i=0; i<arr2.length; i++) {
    document.write(  arr2[i] + "<br>"); 
 } 
 document.write("<br>");
let userInput = prompt("Enter a color");
 arr2.push(userInput);
 for (let i=0; i<arr2.length;i++) {
  
    document.write( arr2[i] + "<br> "); 
 }
 

//  c. Add two more color to the beginning of the array.
// Display the updated array in your browser.

let color = ["red", 'blue',"green"];
 console.log(color);
 color.unshift("yellow","musturd");
console.log(color);

 
//// d. Delete the first color in the array. Display the updated
// array in your browser.

let del = ["blue","pink","grey","white","black"];
console.log(del);
del.shift();
console.log(del);



// e. Delete the last color in the array. Display the updated
// array in your browser.

let delLast = ["blue","pink","grey","white","black"];
console.log(delLast);
delLast.pop();
console.log(delLast);

//// f. Ask the user at which index he/she wants to add a color
// & color name. Then add the color to desired position/index. 
//Display the updated array in your browser.

let mis= ["blue","pink","grey","white","black"];
console.log(mis);
let user_input = +prompt("Enter index No");
let colorName = prompt("Enter color name");
mis.splice(user_input,0, colorName);
console.log(mis);

 

//// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.

let colors = ["blue","pink","grey","white","black"];
console.log(colors);
let ask = +prompt("Enter index no");
let ask2 = prompt("how many colors he/she wants to delete");

colors.splice(ask,ask2);
console.log(colors);


// Q10. Write a program to store student scores in an array &
// sort the array in ascending order using Array’s sort
// method.

let newArr = [2,4,-2,0,44,10,20];
console.log(`Student Scores: ${newArr}`);
newArr.sort(function(a,b){     
   //Negative Value ( a < b) => a will be placed before b
  // zero value (a == b) => No Change
  // Positive Value (a > b ) => a will be placed after b
  
  return a-b;
})
console.log(`Ordered Scores : ${newArr}`);


//Q11. Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities
// array.

let city = ["karachi","istumbul","murree","islamabad","karachi"];
console.log(`Cities list: ${city}`);
let selected = city.slice(0,3);
console.log(`Selected Cities list: ${selected}`);



//Q12.Write a program to create a single string from the below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)

let  arr1 = ["This ","is ", "my ","cat"];
console.log(`Array: ${arr1}`);
console.log(arr1.join( "" ));
//OR 
console.log(arr1.join( ' ' ));


// Q13. Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they
// were stored. (FIFO-First In First Out)

let newarray = ["Keyboard","Mouse","Printer","Moniter"];
console.log(newarray);
for(let i=0; i<newarray.length;i++){
     console.log(newarray[i]);
       
}

//Q14. Create a new array. Store values one by one in such a way
// that you can access the values in reverse order. (Last InFirst Out)

let life = ["Keyboard","Mouse","Printer","Moniter"];
console.log(`Devices: ${life}`);
for(let i=life.length-1; i>=0;i--){
       console.log(life[i]);
         
  }

//Q15. Write a program to store phone manufacturers (Apple,
// Samsung, Motorola, Nokia, Sony & Haier) in an array.
// Display the following dropdown/select menu in your
// browser using document.write() method:

let mob = ["Apple", "Samsung", "Motorola", "Nokia", "Sony" , "Haier"];
for(let i=0; i<mob.length; i++){
  document.write(mob[i] + "<br>");
}
