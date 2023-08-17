// //Q1.1. Show an alert box on click on a link.

function box(){
    alert('Hii there!');
}

// //Q2. Display some Mobile images in browser. On click on an
// // image Show the message in alert to user.

function msg(){
    alert('Thanks for visiting us');
}


// // Q3.3. Display 10 student records in table and each row should contain a delete
// // button. If you click on a button to delete a record, entire row should be
// // deleted.

function remove(e){
    let p = e.parentNode.parentNode;
    p.parentNode.removeChild(p);
}


// //Q4. Display an image in browser. Change the picture on mouseover and set the
// // first picture on mouseout.

function mouseOver(a,img){
        a.src = img;
}
function mouseOut(b,img){
    b.src = img;
}



// //5. Show a counter in browser. Counter should increase on click on increase
// // button and decrease on click on decrease button. And show updated counter
// // value in browser.


let count = 0;
function increase(){
    let c = document.getElementById('counter');
    count++;
    c.innerText = count;
}
function decrease(){
    let c = document.getElementById('counter');
    count--;
    c.innerText = count;
}

