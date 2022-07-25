# Variables

Variables are containers for bits of information.

You can stroe the info in the variable and then use that variable to refer to the information anywhere in your code.

This makes reusable. It reduces repetition of code, etc..


# var, let, const

var myName = 'Oliver';

Here I decalred a variable called myName and assigned a value of 'Oliver' to it.


# const

With const you don't reassign a value to the variable.

const myName = 'Oliver';

myName = 'Tom';



# let 

You can reassign values to the variable.

let myArray;

function addItem() {
   myArray = ['item', 'another', 'etc']
}

# Hoisting

Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope (to the top of the current script or the current function).


# Challenges

1. Create a variable that stores a string (you can write whatver you want).

Then add that string to the innerHTML of an element.

Advanced: add a button that changes the variable to a different string, then replaces the text in the HTML.

Think about which type of variable keyword to use.


2. Create a function that takes two numbers as arguments. The function should multiply the numbers together, and return the result. Store the result as a variable, then use the return keyword to return it from function.

Advanced: Try to output the result to your page.


