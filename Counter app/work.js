
// console.log("Hello world");

// let first = 0;
// console.log(first)

// let add =(a,b) =>{    
//     return a + b;
// }

// console.log(add(2,3));

// console.log("What about you");

// let multiply = (c,d,e) =>{

//     return c*d*e;
// }

// console.log(multiply(4,5,6));


// let myAge =7;
// let humanDogRatio = 7;

// let myDogAge = (myAge,humanDogRatio) =>{

//     return myAge*humanDogRatio;
// }

//  console.log(myDogAge(myAge,humanDogRatio));


// let lap1 = 34;
// let lap2 = 33;
// let lap3 = 36;


// function myLogger (lap1,lap2,lap3){
    
//     return lap1+lap2+lap3;
// }

// console.log(myLogger(lap1,lap2,lap3));

// const adder =(lap1,lap2,lap3)=>{
//     return lap1+lap2+lap3;

// }
// console.log(adder(lap1,lap2,lap3));


// let count = 0;


//A function that increments the lapscompleted variable by one
// let lapsCompleted = 0

// function lapsIncrement(){
//     lapsCompleted = lapsCompleted+1;
//     console.log(lapsCompleted);

// }


//  lapsIncrement();
//  lapsIncrement();
//  lapsIncrement();



let counter = document.getElementById("count")
let saveEl = document.getElementById("save-el")
let count = 0

function incr (){

    count=count+1
    counter.textContent = count;
    
}   

function decr  (){
    count=count-1
    counter.textContent = count;
}


function save (){
    let countStr = count + " - "
    saveEl.textContent+=countStr;
    counter.textContent = 0;
    count = 0;
}

let welcomer = document.getElementById("welcome-el");

let fname= "Simon"
let greeting = "Hello there , and welcome back"

wholeGreeting = greeting + " " + fname;

welcomer.textContent = wholeGreeting;

welcomer.textContent +=  "😁";

let lname = "Jeff"
let greet = "Hi there";

function hello (){
    console.log(greet +" "+ lname +"!");

}

hello();

let myPoints = 3;

function add3Points(){

    myPoints=myPoints+ 3;
    console.log(myPoints);

}

function remove1Pont(){
    myPoints=myPoints-1;
    console.log(myPoints);

}

console.log(myPoints);
add3Points()
add3Points()
add3Points()
remove1Pont()
remove1Pont()

