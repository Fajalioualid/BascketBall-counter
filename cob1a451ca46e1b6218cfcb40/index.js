let count = 0;
let scr1 = document.getElementById("screen1");
 
function add1(){
    count  =  count + 1;
    scr1.textContent = count;
    if(count === 12){
    console.log("winner")
}
    
    
}
let scr2 = document.getElementById("screen1");

function add2(){
    count  = count + 2
    scr2.textContent = count;
    if(count === 12){
    console.log("winner")
}
    
    
}
let scr3 = document.getElementById("screen1");
function add3(){
    count  = count + 3
    scr3.textContent = count;
    if(count === 12){
    document.getElementById("winner").textContent += "Home"
}
    
}
let count2 = 0;
let scr4 = document.getElementById("screen2");
 
function add12(){
    count2  =  count2 + 1;
    scr4.textContent = count2;
    if(count2 === 12){
    document.getElementById("winner").textContent += "Guest"
    }
}
let scr5 = document.getElementById("screen2");

function add22(){
    count2  = count2 + 2
    scr5.textContent = count2;
    
    
}
let scr6 = document.getElementById("screen2");
function add32(){
    count2  = count2 + 3
    scr6.textContent = count2;
    if(count2 === 12){
    document.getElementById("winner").textContent += "Guest"
    }
    
}
