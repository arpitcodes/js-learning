/* 
In JS the variables can be declared by these three keywords
var
let
const

var & let create variables that can be assigned some other values as well. while const as the name suggests, it creates values such as constants.
devs do not use var anymore since it has been deprecated and not used any more. devs usually use let or const. If the value of variables is not going to change in the code then const should be used.

In case of var if the number is not declared and you want to print or use that number then it would be undefined while if you perform some operation on this number it would be NaN.


A variable declared with let can have local/global/block scope. Block scope is for variable declared in a block.

block in js - opening and closing of curly braces.

{
    //a block in js
}

blocks can be find in if, loop, switch and in couple of other statements. Any variables declared in such blocks with let keyword will have a block scope. also we can not access these variables outside of there blocks.


**Hoisting**: hoisting in js is a behaviour of moving all the declaration on the top of the current scope that means a variable can be used before it has been declared.
that means a variable can be declared later and used first.
var keywords can be hoisted but to hoist the let keyword you have to declare them first at the top of the scope.

*/


let apple = "red";
let banana = "yellow";
let orange = "orange";
let   age = 25; //numeric variable
let isStudent = true; //boolean variable
let fullName = "John Doe"; //String Variable


age = 26;
isStudent = false;
fullName = "Jane Doe";



var num;
// console.log(num)
num = 10;





function print_1(){
    var number;
    var square1 = number*number;
    console.log(square1)
    console.log(number)
    var number = 50;
    var square2 = number*number;
    console.log(square2)

}

// print_1()


// Variables with let keyword

let number = 50;

function print(){
    let square = number*number;
    if(number<60){
        var largeNumber = 80
        let anotherLargeNumber= 100
        console.log(square)
    }

    console.log(largeNumber)
    console.log(anotherLargeNumber)
}


// print()

/* Moral: var can be used outside of the scope while let can not be.
    also, var can be redeclared and reassigned but let can only be reassigned not redeclared.
    that means, 
    let number = 50;
    let number = 60;
    is not possible but 
    let number 50;
    number = 60
    is possible
*/


let  num_1 = 50;

//  let num_1 = 20;  //Identifier 'num_1' has already been declared
num_1 = 20;


// console.log(num_1)


/* Const: they always carry all the properties of let in regards to scope, they also can have scopes such as global/local/block. */ 

const num_2 = 50;

function print(){
    const square = number*number;
    if(number<60){
        var largeNumber = 80;
        const anotherLargeNumber = 100;
    console.log(square);

    }


    console.log(largeNumber);
    console.log(anotherLargeNumber);

}

print()

// as we have seen that there anotherLargeNumber will raise error that this variable is not defined.


/*
KEYWORD	       SCOPE	        REDECLARATION & REASSIGNMENT	HOISTING
var	        Global, Local	              yes & yes	            yes, with default value
let	        Global, Local, Block	       no & yes          	yes, without default value
const	    Global, Local, Block	       no & no	            yes, without default value
*/



/* Datatypes in JS 

there are 7 primitive data types in js 

Number
String
Boolean
Null
Undefined
Symbol
BigInt


there is another type which is object and which is reference type.


*/








