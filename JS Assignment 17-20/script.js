// Q1. Declare and initialize an empty multidimensional array.
// (Array of arrays)

let arr = [ ["apple",200], ["mango",250]];


// 2. Declare and initialize a multidimensional array 
// representing the following matrix:

let multiArr = [[0,1,2,3],
                [1,0,1,2],
                [2,1,0,1]];


//3. Write a program to print numeric counting from 1 to 10.

for(let i=1; i<=10;i++){
    document.write(i + "<br>");
}


//4. Write a program to print multiplication table of any 
// number using for loop. Table number & length should be 
// taken as an input from user.

let U_input = prompt("Enter NUmber of your choice");

let input2 = prompt("Enter lenght");
document.write("Table of " + U_input + " is" + "<br>");
for(let i =1; i<=input2 ; i++){

       document.write(U_input +" * "+  i + " = " + U_input*i + "<br>"   );
}

//5. Write a program to print items of the following array using for loop:
//fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”].

let fruits =["apple", "banana", "mango", "orange", "strawberry"];
document.write("Elements of Array:" + "<br>");
for(let i=0; i<fruits.length;i++){
   document.write(fruits[i] + "<br>");
}
document.write("<br>");
for(let i=0; i<fruits.length;i++){

    document.write("Element at index" + [i] + " is "+ fruits[i] + "<br>");
 }


//6. Generate the following series in your browser. See example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k.


document.write("Counting: ");
for (let i = 1; i <= 15; i++) {
    document.write(i + ", ");
}

document.write("<br>" + "Reverse Counting: ");
for (let i = 10; i >= 1; i--) {
    document.write(i + ", ");
}
document.write("<br>" + "Even: ");
for (let i = 0; i <= 20; i++) {
    if (i % 2 == 0) {
        document.write(i + ", ");
    }
}

document.write("<br>" + "Odd: ");
for (let i = 0; i <= 20; i++) {
    if (i % 2 !== 0) {
        document.write(i + ", ");
    }
}
document.write("<br>" + "Series: ");
for (let i = 2; i <= 20; i++) {
    if (i % 2 == 0) {
        document.write(i + "K, ");
    }
}

//7. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example:

let A = ["cake", "apple pie", "cookie", "chips", "patties"];

let input = prompt("Welcome to ABC bakery. What do you want to order sir/ma'am");
let index = A.indexOf(input);
if(index !== -1){
 document.write(input + " is available at index " + index + " in our bakery" );
}
else{
    document.write(input + " is not available  in our baker");
 
}




//8. Write a program to identify the largest number in the given array.
// B = [24, 53, 78, 91, 12].

let B = [24, 53, 78, 91, 12];
let max = 24;

document.write("Array Elements: " + B + "<br>") ;
for(let i=0; i<B.length;i++){
    if(B[i] >=  max){
        max = B[i];
    }

}
document.write("Largest of these elements is : " + max);


//9. Write a program to identify the smallest number in the given array.
//C= [24, 53, 78, 91, 12]

let C = [24, 53, 78, 91, 12];
let min = 24;
document.write("Array Elements: " + C + "<br>") ;
for(let i=0; i<C.length;i++){
    if(C[i] <=  min){
        min = C[i];
    }
}
document.write("Largest of these elements is : " + min);


//10. Write a program to print multiples of 5 ranging 1 to 100.

document.write("Multiple of 5:  ");
for (let i=5; i<=100; i++){
    
    if(i %5 ==0){
        document.write(i+", ");
    }
}