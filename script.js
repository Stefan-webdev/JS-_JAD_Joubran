// Chapter 2. Basic strings 
/* function getCharCount(str) {
    return str.length
}
console.log(getCharCount(`happy`)) 

*/ 

/* function shoutMyName(name) {
    return name.toUpperCase()

}

console.log(shoutMyName(`ALex`))

*/

/* function lowerName(name) {
    return name.toLowerCase()
}

console.log(lowerName(`ALEX`))

*/

/* const language = `Javascript`;

console.log(language[1])

*/

/* You can also combine the character access with the .length property. So using the same 
language variable, here's how you get the second to last character from it:

*/

/* const language = `Javascript`

console.log([language.length - 2])


/* Primary use of .at() method is for negative indices eg .at(-1) 
/* const language = "JavaScript";
console.log(language.at(0)); // "J"
*/

/* Chapter 2 substring 


const language = "Javascript"
console.log(language.substring(1, 4)) // = `ava`

/*

Just Index start alone is fine don't need to add index end.

eg.

language.substring(4);



function skipFirstCharacter(text) {
    
    return text.substring(1)
}

console.log(skipFirstCharacter(`Javascript`))


Below code only returns the first 10 Characters

function getDescription(text) {
    return text.substring(0, 10)


}

console.log(getDescription(`JavaJavaJavaJavaJavaSCript`))

Using the Plus Operator




let prefix = `Mrs.`
let name = `Sam`
let string = prefix + " " + name;

console.log(string)

You can rewrite the name = name + in a shorter way using the += operator:


let name = "Sam";
name += " Blue";
console.log(name); // "Sam Blue"



function concatInitials(firstNameInitial, lastNameInitial) {
    return firstNameInitial.at(0) + " " + lastNameInitial.at(0)
}

console.log(concatInitials("Adrian", "Demiscus"))

the below code adds a space and then an elipsis after the first 10 characters.
 
function getDescription(text) {
    return `${text.substring(0, 10)} ...`
}

console.log(getDescription(`Javavavavavavavavavsciptttttt`))

Template Strings = `This is a template string`

Unlike single-quote and double-quote strings, template strings can span multiple lines. Here's an example:


let text = `This is a multiline
string that
just works!`

Template strings support interpolation! This means you could write a variable in your string, and get its value.

let language = "JavaScript";
`I am learning ${language}`; 

*/

/* function sayHello(name) {
   
    return `Hello ${name}`
}



console.log(sayHello(`Bob`))

Or capitalise just the first letter of a word using string interpolation.

function capitalize(word) {
    return `${word.at(0).toUpperCase()}${word.substring(1).toLowerCase()}`

}

numerical seperator 1_000;
or
1_000_000

How to convert a number to a string (RARELY USED)

let answer = 42;

answer.toString(); 

(Expressed as a function)

function convertNumberToString(number) {
    return number.toString()

}
More commonly used is converting a string to a number using the Number.parseInt(str, raddix) method
let str = "42":
Number.parseInt(str, 10); (10 most common daix as represents standard decimal system)

CHAPTER #3--------------------------------------------------------------------------------------

HOW DIVISION REMAINDERS WORK>
8 / 2 = 4
4 / 2 = 2
=> division remainder is 0 because 8 = 4 * 2 + 0

Where as for 7 % 2:

We start by dividing 7 by 2: 7 / 2 = 3.5. 
Then, you take the integer number of this number and get rid of the decimal: 3.

Then, we need to multiply this number by 2 (this 2 comes from % 2): 3 * 2 = 6. 
Finally, the division remainder is 7 - 6 = 1.

In other ways, you can write 7 as 3 * 2 + 1. That 1 at the end is the division remainder.

NUMBER METHODS>>>

Math.round(2.1); // 2
Math.round(2.6); // 3
Math.round(2.5); // 3

Math.floor(2.1); // 2
Math.floor(2.6); // 2
Math.floor(2.5); // 2

Math.ceil(2.1); // 3
Math.ceil(2.6); // 3
Math.ceil(2.5); // 3

Chapter Recap
Convert from a number to a string: value.toString()
NaN stands for Not a Number
NaN is often a sign of a bug.
Convert from string to number Number.parseInt(value, 10).
Number.parseInt() is the name of the function you're calling.

10 is the radix which you should specify.
Make sure to always specify the radix to avoid unpleasant surprises.
The remainder operator (%) returns the division remainder between 2 numbers.

Chapter Recap Cont: When you use a variable for the first time in JavaScript, you need to declare it with either let or const.
Use let for variables that you will need to re-assign later on (as in changing their value)
Use const for variables that you won't need to re-assign later on.
Variables declared with const are not constant. We will see why later in this course.
Variables declared with const cannot be re-assigned so you cannot have the = next to that variable name after declaring it.
If you see var, it's from the old version of JavaScript. You can convert it to let (sometimes const if the variable is not re-assigned).


When you use a variable for the first time in JavaScript, you need to declare it with either let or const.
Use let for variables that you will need to re-assign later on (as in changing their value)
Use const for variables that you won't need to re-assign later on.
Variables declared with const are not constant. We will see why later in this course.
Variables declared with const cannot be re-assigned so you cannot have the = next to that variable name after declaring it.
If you see var, it's from the old version of JavaScript. You can convert it to let (sometimes const if the variable is not re-assigned).

CHAPTER # 5 -----------------------------------------------------------------------------------------

IF CONDITIONS

Several conditions can be checked sequentially using else if. For example:


const grade = 10;

if (grade > 10) {
    console.log("Passing grade");
} else if (grade === 10) {
    console.log("Passing on the limit");
} else {
    console.log("Failing grade");
}

It is possible sometimes to drop the else. Let's take a look at an example:


function canVote(age) {
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
}
Since this function is performing two different actions based on the result of the if condition and its opposite (else), then we can rewrite it by dropping the else keyword:


function canVote(age) {
    if (age >= 18) {
        return true;
    }
    return false;
}

export function getNextAge(age) {
     if (age === "") {
        return 0;
        
     }
     
    return Number.parseInt(age, 10) + 1
}

(Important to remember that "" for empty text box cannot be " " as will result will be NAN )


Returning Booleans....!!

Instead of ...
function isPassing(grade) {
    if (grade >= 10) {
        return true;
    } else {
        return false;
    }
}

isPassing(12);

Can instead use:

function isPassing(grade) {
    return grade >= 10;
}

(without using if/else which will always return a boolean!

This only works whenever you're returning a boolean from a function.)

TERNARY OPERATOR ---------------------------------------------------------------------------------------

Let's go back to the solution of the previous challenge:


function evenOrOdd(number) {
    if (number % 2 === 0) {
        return "even";
    }
    return "odd";
}

It can be written using the ternary operator as follows:


function evenOrOdd(number) {
    return (number % 2 === 0) ? "even" : "odd";
}
The ternary operator has the following syntax:


-------condition ? expressionWhenTrue : expressionWhenFalse---------


While the ternary operator can make your code more concise, 
it can also make it less readable. 
We generally recommend you avoid it and opt for more readable code.

CHAPTER RECAP:
Chapter Recap
Using an if condition, you can run a piece of code when the condition evaluates to true
The syntax is if (condition) and then curly braces {} wrap the lines of code that correspond to this condition
The else keyword can be used to perform some other code based on all the other conditions not satisfied with the if.
When you have an if/else condition that returns two different results, it is possible to drop the else keyword.
Always use triple equals (===) when comparing 2 values in JavaScript.


CHAPTER #6 ------------------------------------------------------------------------------------------

Arrays in JavaScript allow you to store multiple elements in the same variable. You can store numbers, strings, booleans, arrays, objects & more. These can be mixed within the same array.
Here are some examples:


const users = []; // empty array
const grades = [10, 8, 13, 15]; // array of numbers
const attendees = ["Sam", "Alex"]; // array of strings
const values = [10, false, "John"]; // mixed

.length property
You can get the number of elements in an array by using the .length property. For example:


[].length; // 0

const grades = [10, 8, 13, 15];
grades.length; // 4

You can also use the .at(index) method, which accepts negative indices making it easier to find the last element of the array. Here are some examples with .at():


const users = ["Sam", "Alex", "Charley"];
users.at(1); //"Alex"
users.at(-2); //"Alex"

You can add an element to an array by using the .push() method.


const numbers = [10, 8, 13, 15];
numbers.push(20); // returns 5 (the new length of the array)
console.log(numbers); // [10, 8, 13, 15, 20];

As you can see, numbers.push(20) returns 5 which is the length of the array. This is often confusing for a lot of developers which is why we're highlighting it here.
 .push() will add an item to the array but also return the new length of the array.


Recap
const data = [1, 2, 3] is an array containing 3 numbers.
array.length returns the number of elements inside the array.
array.push(x) allows you to add the variable x to the end of the array.
 It also returns the new length of the array (after the push has been made).
Arrays defined with const are not constants because you can change the elements inside of it.
 However, you cannot re-assign them to another value thus they will always be an array.

 Array forEach

Last updated April 2024
Array iteration is one of the most important concepts that you will use in JavaScript.

Let's say we have an array of grades and you'd like to loop (or iterate)
 over every item in this array.
 Here's how you do that in JavaScript:

const grades = [10, 8, 13];

grades.forEach(function(grade) {
    // do something with individual grade
    console.log(grade);
}
    This callback function receives a grade and then logs it to the console. 
    This is a function definition because it's not being executed.
     It only defines the behavior of the function. 
     However, this function definition is passed as an argument to the .forEach() method:
     
// this is the callback
function(grade) {
console.log(grade);

Recap
.forEach(callback) iterates over every item in an array.
A callback is a function definition passed as a parameter to another function.
Always start with a console.log() inside the .forEach() to visualize the shift from array to 
array item (you can skip that when you become used to it).
The .forEach() method will take your function definition and call it for every item of the
 array. Every time the callback is called, the first parameter will represent the 
corresponding array item.
    
Naming variables with a clear name makes it much easier for you and others to understand
 the code. This is especially true with iteration.

Thus, it's always a good idea to use the plural for the array and singular for the item of the
 array.



Chapter # 7. ---------------------------------------------------------------------------------

A common array method is the .filter() method.
 When you call this method on an array, you will get back another array that contains some of 
 the items from the original array, based on the condition you specify. 
Let's take an example:
Array .Filter const numbers = [9, 5, 14, 3, 11];

const numbersAboveTen = numbers.filter(function(number) {
    return number > 10;
});
console.log(numbersAboveTen); // [14, 11]

Recap
The .filter() method returns a new array that contains some of the items from the original array, based on the condition you specify.
JavaScript will take your callback function and call it for every single item in the array.
For the .filter() method, the result of the callback function matters. When it's true, the item will be included in the resulting array. Otherwise, it won't.
JavaScript cannot make a smart guess that the numbers array becomes the number parameter in your callback function. What it does is that it calls your callback function while giving a value for the first parameter that you specified.
Use the plural -> singular naming convention when using the .filter() method.

Array find


We learned in the previous lesson about the Array .filter() method. In this lesson, we'll explore the .find() method which is a little bit similar in the way it works.

Let's start with an example, this time with an array of strings:


const names = ["Sam", "Alex", "Charlie"];

const result = names.find(function(name) {
  return name === "Alex";
});
console.log(result); // "Alex"

In our example above, here's the callback:


function(name) {
  return name === "Alex";
}

So the .find(callback) method will call the callback that you provided for every item 
in the array until one of the callbacks returns true. When this happens, it will stop calling the remaining callbacks and return to you the
 item for which the callback returned true.

 Recap
The .find() method returns the first item which matches the condition that you specify. 
If no items were found, you will get back undefined.
The .filter() method always returns an array. Even if it's empty.

****Array .map***

Array map
The .map(callback) method allows you to transform an array into another one. Here are some common examples:

[4, 2, 5, 8] transformed to [8, 4, 10, 16]. We doubled every item in the original array.
["sam", "Alex"] transformed to ["SAM", "ALEX"]. We upper cased every item in the original array.

const numbers = [4, 2, 5, 8];

const doubled = numbers.map(function(number) {
    return number * 2;
});
console.log(doubled); // [8, 4, 10, 16]
const names = ["sam", "Alex"];
const upperNames = names.map(function(name) {
    return name.toUpperCase();
});


If you forget to return from inside the callback function, you will end up with the following 
array: [undefined, undefined]. That's because, for every item in the original array 
(["sam", "Alex"]), 
you're returning undefined so the end result will be [undefined, undefined].

Array includes(item)
The array .includes(item) method is one of the simplest array methods as it takes an item rather than a callback and returns true when that item exists in the array and false otherwise. Here's an example:


const groceries = ["Apple", "Peach", "Tomato"];

groceries.includes("Tomato"); // true
groceries.includes("Bread"); // false

Array join(glue)
When you have an array and you render this array to a web page (as we'll see later on in the 
DOM section of the course), the array will be automatically converted to a string. 
JavaScript will automatically invoke the .toString() method of the array which 
returns a string of the array elements separated by commas. Here's how it works:


const groceries = ["Apple", "Peach", "Tomato"];
groceries.toString(); // "Apple,Peach,Tomato"
But there's a downside, which is that you cannot customize the glue that gets inserted 
in between the array items, which is the comma , character.

If you'd like to customize the glue, then you can use the .join(glue) method:


const groceries = ["Apple", "Peach", "Tomato"];
groceries.join("; "); // "Apple; Peach; Tomato"
groceries.join(" . "); // "Apple . Peach . Tomato"

Recap
The array .map(callback) method allows you to transform an array into another one.
The array .includes(item) method takes an item and returns true when that item exists in the array and false otherwise.
The array .join(glue) method returns a string of the array elements separated by the glue.

CHAPTER # 8 ------------------------------------------------------------------------------------------

An object is a data type that allows you to group several variables together into one variable that contains keys and values. This is often used to represent or describe an entity. For example, a person, a user, a product, etc.

Here's how you can create an object:


const user = {
    id: 1,
    firstName: "Sam",
    lastName: "Doe",
    age: 20
};
Best practice icon

Read the value of a property
To read the value of a property in an object, you can use the dot notation as follows:


const user = {
    id: 1,
    firstName: "Sam",
    lastName: "Doe",
    age: 20
};

user.id; // 1
user.firstName; // "Sam"
user.isAdmin; // undefined (property does not exist)

Updating property value
You can also update a property value using the same dot notation followed by an equal sign:


const user = {
    id: 1,
    firstName: "Sam",
    lastName: "Doe",
    age: 20
};

user.lastName = "Blue";
user.age = user.age + 1;
console.log(user); // {id: 1, firstName: "Sam", lastName: "Blue", age: 21}

Recap
An object is a data type that allows you to group several variables together into one variable that contains keys and values.
In JavaScript, the recommended convention is camelCase for property names (for example firstName instead of first_name).
To read or update the value of a property, you can use the dot notation.

***An object is a data type that allows you to group several variables together into one 
variable that contains keys and values.
In JavaScript, the recommended convention is camelCase for property names 
(for example firstName instead of first_name).
To read or update the value of a property, you can use the dot notation.

CHAPTER 9 Arrow Functions ------------------------------------------------------------------------

Before we learn about arrow functions, let's take a look at a small but useful feature.

Say we've got the following code:


function addOne(number) {
    return number + 1;
}

addOne(2); // 3
addOne(5); // 6
addOne(); // what is returned?
What do you think will happen if you call addOne() (without any argument)? In some programming 
languages this would fail. But, in JavaScript, it won't fail and your code will continue executing.

The number parameter will receive a value of undefined so the function will return undefined + 1
which results in NaN. We've seen in a previous chapter that we can prevent this by adding an if 
condition.
However, there's an easier way. Let's take a look at default parameters.

Note: if you're confused by the difference between parameters and arguments, here's a short 
definition: A parameter is a variable in a function definition. When a function is called, 
the arguments are the data you pass into the method's parameters.

*/