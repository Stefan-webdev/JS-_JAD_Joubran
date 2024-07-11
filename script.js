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
Recap
A parameter is a variable in a function definition. When a function is called, the arguments are the data you pass into the method's
 parameters.
When you call a function without providing a value for an expected argument, the latter will
 default to undefined.
Default parameters allow you to give a default value for one or more parameters that have not been
 provided when the function is called.

 INTRODUCTION TO ARROW FUNCTIONS



Last updated February 2022
In this lesson, we'll get to know how to write arrow functions. An arrow function has 
3 main benefits:

It's shorter to write.
It uses lexical scope (this will be explained in a later chapter as we need to learn about 
classes first).
It can benefit from implicit return (covered in the next chapter).
Here's an example of an arrow function:


const sum = (a, b) => {
    return a + b;

    There are multiple ways of writing a function in JavaScript.
You could either define a function and give it a name, or you could define a variable and assign it to an anonymous function.

So the following function:


function sum(a, b) {
    return a + b;
}
Can be written as:


const sum = function(a, b) {
    return a + b;
}

Now, let's convert that function into an arrow function.

You can do that in 2 steps:

remove the function keyword
add an arrow (= and >) between the parameters (a, b) and the opening curly brace {
This is what it will look like:


const sum = (a, b) => {
    return a + b;
}

Recap
Arrow functions are shorter to write.
Arrow functions always start with the parameters, followed by the arrow => and then the 
function body.

Array forEach
Here's the .forEach example we saw a few chapters ago:


const grades = [10, 8, 13];

grades.forEach(function(grade) {
    console.log(grade);
});
The iteration can be rewritten using arrow functions as follows:


grades.forEach((grade) => {
    console.log(grade);
});
Also, because the arrow function has one parameter (without a default value), you are allowed
 to drop the parentheses () surrounding the parameter:


grades.forEach(grade => {
    console.log(grade);
});
This is only the case when you have one parameter. Multiple parameters have to be wrapped 
in parentheses ().

Array filter()
The same thing applies to .filter().


const numbers = [9, 5, 14, 3, 11];

const numbersAboveTen = numbers.filter(function(number) {
    return number > 10;
});
console.log(numbersAboveTen); // [14, 11]
The .filter(callback) can be rewritten as:


const numbersAboveTen = numbers.filter((number) => {
    return number > 10;
});
You can also drop the parentheses around number because there's only one parameter.
 This example will become even shorter in the next chapter, as we learn about implicit return 
 in arrow functions!

Recap
When an arrow function has one parameter without a default value, you are allowed to drop 
the parentheses around that parameter.
Nice work! In the next chapter, we'll learn about implicit return in arrow functions which will 
allow us to write code like this:


let numbers = [-4, 3, -2, 5];
numbers.filter(number => number >= 0); // [3, 5]
Chapter Recap
A parameter is a variable in a function definition. When a function is called, the arguments are
 the data you pass into the method's parameters.
When you call a function without providing a value for an expected argument, the latter will
default to undefined.
Default parameters allow you to give a default value for one or more parameters that have not been
 provided when the function is called.
Arrow functions are shorter to write.
Arrow functions always start with the parameters, followed by the arrow => and then the function 
body.
When an arrow function has one parameter without a default value, you are allowed to drop the
parentheses around that parameter.

CHAPTER # 10 ----------------------------------------------------------------------------------------

Implicit Return*

However, with arrow functions, you can implicitly return the result of the function on some very specific conditions. Let's start with an example and then we'll explain how we got there:


// this works 👍 (implicit return)
const sum = (a, b) => a + b;

sum(1, 3); // 4
So, how come this example works and the previous one doesn't? Neither include the return keyword.
 One of them works and the other one returns undefined. This is because, for the implicit return to work, you must have all the following conditions:

Your function must be an arrow function.
The function body must be only one statement. This means you must remove the curly braces.
You must remove the return keyword because the function body is one statement.
When all these conditions are met, the arrow function will implicitly return the result of its
 function body (which is only one line). Let's take another example:


const isLegal = (age) => {
    return age >= 18;
}
Now let's make use of implicit return by:

removing the curly braces
removing the return keyword

const isLegal = (age) => age >= 18;

As mentioned in the previous chapter, when you have only one parameter, you are able to drop the
 parentheses around the parameter. The code above becomes:


const isLegal = age => age >= 18;
This is the shortest possible (yet clear) way you can write this function.
Recap
Here are the conditions for implicit return:
Your function must be an arrow function.
The function body must be only one statement. This means you must remove the curly braces.
You must remove the return keyword because the function body is one statement.
Only use implicit return when the function body is one line and short. Never sacrifice code 
readability and clarity in order 
to use a certain feature.
Implicit return only works when there's single statement inside the function (and the curly
 braces and return keyword are omitted).

 Array methods revisited


Let's revisit some of the array methods that we learned about and see how we can write the callback
 with arrow functions and implicit return (when possible). 
We'll be using the same examples from previous lessons and then re-writing them.

Array filter(callback)

const numbers = [9, 5, 14, 3, 11];

const numbersAboveTen = numbers.filter(function(number) {
    return number > 10;
});
console.log(numbersAboveTen); // [14, 11]

The .filter(callback) can be re-written as follows:


--***** const numbersAboveTen = numbers.filter(number => number > 10); *****--

Not only is it much shorter, but arguably it's much clearer (at least when you get used to the 
syntax).
Here's how you can read it: We filter the numbers where the number is bigger than 10.

A common mistake here is writing numbers.filter(number > 10) but this does not work because you
need to pass the parameter first number and then the arrow function => and then finally specify the
function body which is number > 10.


Array find(callback)

const names = ["Sam", "Alex", "Charlie"];

const result = names.find(function(name) {
  return name === "Alex";
});
console.log(result); // "Alex"
The .find(callback) can be re-written as follows:


const result = names.find(name => name === "Alex");
This can be read as: From the names array, find the name that is equal to the string "Alex".

Array map(callback)

const numbers = [4, 2, 5, 8];

const doubled = numbers.map(function(number) {
    return number * 2;
});
console.log(doubled); // [8, 4, 10, 16]
The .map(callback) can be re-written as follows:


const doubled = numbers.map(number => number * 2);
This can be read as: Create a new array based on the numbers array, where every number is
multiplied by 2.

If we take a look at the answer of the Classroom project:


const getRaisedGrades = grades => {
    return grades.map(function(grade) {
        if (grade + 1 > 20) {
            return 20;
        }
        return grade + 1;
    }).join(", ");
}
Can you use implicit return here?

The function body is more than one line so you cannot use implicit return. 
If you'd like, you can re-write it with arrow functions:


const getRaisedGrades = grades => {
    return grades.map(grade => {
        if (grade + 1 > 20) {
            return 20;
        }
        return grade + 1;
    }).join(", ");
}

Recap
Here are the conditions for implicit return:
Your function must be an arrow function.
The function body must be only one statement. This means you must remove the curly braces.
You must remove the return keyword because the function body is one statement.
Only use implicit return when the function body is one line and short. Never sacrifice code readability and clarity in order to 
use a certain feature.
Implicit return only works when there's single statement inside the function
 (and the curly braces and return keyword are omitted).

 CHAPTER # 11 STRING METHODS ---------------------------------------------------------------------------

 String .trim()
This one is especially useful when working with the DOM (we'll learn about the DOM in chapter 48),
 and you expect the user to enter some text. Users will sometimes, by accident, enter an empty space character at the beginning or the end of a text box.

Say, for example, you ask the user for their name, and they enter " Sam" instead of "Sam". 
This could cause issues in some scenarios (for example, email addresses).

The solution for that is using the .trim() method which removes all leading (at the beginning)
 and trailing (at the end) space characters.


const name = "  Sam Blue ";
name.trim(); // "Sam Blue"

String .startsWith() and .endsWith()
The .startsWith(substring) method returns true when the substring is found at the beginning of 
the string and false otherwise.
The .endsWith(substring) works the same but for the end of the string.


const sentence = "Hello there. Welcome!";

sentence.startsWith("H"); // true
sentence.startsWith("Hello"); // true
sentence.startsWith("Hey"); // false
sentence.startsWith("Sam"); // false

sentence.endsWith("."); // false
sentence.endsWith("!"); // true
sentence.endsWith("Welcome!"); // true
sentence.endsWith("Welcome"); // false

String .includes(substring)
The .includes(substring) method returns true when the substring can be found anywhere in the string and false
 otherwise.


const sentence = "Hello there. Welcome!";

sentence.includes("there"); // true
sentence.includes("W"); // true
sentence.includes("Hello"); // true
sentence.includes("Hey"); // false
sentence.includes("Sam"); // false
sentence.includes("."); // true
sentence.includes("!"); // true
sentence.includes("Welcome"); // true
MDN logostring.includes() on MDN


Recap
String .trim() removes all leading and trailing space characters.
String .startsWith(substring) returns true when the substring is found at the beginning of the
 string, and false otherwise.
String .endsWith(substring) works the same but for the end of the string.
String .includes(substring) returns true when the substring can be found anywhere in the string, 
and false otherwise.

String .split(separator)
The .split(separator) method divides the string into an array of substrings based on the separator
 you provide. For example:


let apps = "Calculator,Phone,Contacts";
let appsArray = apps.split(",");
console.log(appsArray); // ["Calculator", "Phone", "Contacts"]
This is especially useful to convert from CSV (Comma Separated Values) back to an array. Reminder that the opposite of String.split(separator) would be Array.join(glue).

MDN logoString.split() on MDN


String.replace(search, replace)
The .replace(search, replace) method returns a new string where the first occurrence of the search
 parameter you provide is replaced by the replace parameter, for example:


const message = "You are welcome.";
message.replace(" ", "_"); // "You_are welcome."; (only the first occurrence has been replaced)
console.log(message); // "You are welcome." (original string is not changed)
In this example, we search for the " " (space character) and replace it with an "_" (underscore 
character). Notice how it only replaces the first match.

If you'd like to replace all the occurrences, then you can use the .replaceAll() method explained
 below. It is also possible to pass a regular expression as a first parameter (which can be used to match more than one item. Though, generally, using .replaceAll() is easier).

MDN logoString.replace() on MDN


String.replaceAll(search, replace)
This method works like the one above, except that it will replace all occurrences.


const message = "You are welcome.";
message.replaceAll(" ", "_"); // "You_are_welcome";
console.log(message); // "You are welcome" (original string is not changed)
MDN logoString.replaceAll() on MDN


Recap
String.split(separator) divides the string into an array by splitting it with the separator you 
provide.
String.replace(search, replace) replaces the first occurrence of search by replace.
String.replaceAll(search, replace) is similar to the .replace() method except that it replaces all
 occurrences.
 Chapter recap

Last updated April 2024
Great job!

While learning, it's very important to get a good amount of sleep in between chapters.
Sleep has been proven to consolidate new knowledge as it moves it from short-term memory to 
long-term memory. Moreover, REM sleep (and dreams) helps you make new connections from the things that you just learned with your existing knowledge.

So, make sure to use sleep to your advantage, and you can always click on the Remind me button 
that shows up on challenge pages after your first incorrect attempt. The button shows up on the bottom right of the screen.

Chapter Recap
String .trim() removes all leading and trailing space characters.
String .startsWith(substring) returns true when the substring is found at the beginning of the 
string, and false otherwise.
String .endsWith(substring) works the same but for the end of the string.
String .includes(substring) returns true when the substring can be found anywhere in the string, 
and false otherwise.
String.split(separator) divides the string into an array by splitting it with the separator you 
provide.
String.replace(search, replace) replaces the first occurrence of search by replace.
String.replaceAll(search, replace) is similar to the .replace() method except that it replaces 
all occurrences.

Chapter # 12 Array.toString -----------------------------------------------------------------------------

Array to string

Last updated May 2022
Here's a neat trick: Let's say you have an array of users, and you'd like to get the name of each user separated by a comma. Like a CSV (Comma Separated Values) export. How would you do that?

You already know the 2 methods that you need for such operations:
First, you start with a .map() call to extract the name from the users array , and then you use .join() to join the array elements into one string.


const users = [{
    id: 1,
    name: "Sam Doe"
}, {
    id: 2,
    name: "Alex Blue"
}];

const userNamesArray = users.map(user => user.name);
console.log(userNamesArray); // ["Sam Doe", "Alex Blue"];

const csv = userNamesArray.join(", ");
console.log(csv); // "Sam Doe, Alex Blue"
You can also chain these 2 commands and write it on one line:


const csv = users.map(user => user.name).join(", ");
console.log(csv); // "Sam Doe, Alex Blue"
Pretty neat right? ✨

Applying it to HTML
The above trick is often used to generate an HTML string from an array. Let's say we'd like to 
return an unordered list (a ul with li items) from the users array above. Instead of writing it 
with .forEach, you can use the above trick as follows:


const html = `<ul>
    ${users.map(user => `<li>${user.name}</li>`).join("")}
    </ul>`;
console.log(html); // <ul> <li>Sam Doe</li><li>Alex Blue</li> </ul>
Notice how for every user, we return an <li>...</li> with the user's name inside.
What's very important here is the .join(""). If you forget this, you will get the following HTML:


<ul><li>Sam Doe</li>,<li>Alex Blue</li></ul>
That's because the array returned from .map() will automatically be converted to a string by the 
browser. It will automatically call the .toString() method which will insert a comma after every 
array item.

Instead, you want to convert the array into a string yourself. You can do that by calling .join("") with an empty string as glue.

Finally, you have to wrap the whole string with the opening <ul> and the closing </ul>.

You don't necessarily have to use this approach, but we do recommend that you get used to it as it (or a very similar adaptation) is very frequently used in front-end libraries/frameworks (React, Angular, lit-element, etc)!

Array.every(callback)
The Array .every(callback) method returns true when every item in the array satisfies the condition provided in the callback.

Here's an example:


const numbers = [15, 10, 20];

const allAbove10 = numbers.every(number => number >= 10); // true
const allAbove15 = numbers.every(number => number >= 15); // false

Array.some(callback)
Similarly, the Array .some(callback) method returns true when at least one item in the array satisfies the condition provided in the callback.


const numbers = [15, 10, 20];

const someOver18 = numbers.some(number => number >= 18); // true
const someUnder10 = numbers.some(number => number < 10); // false
Notice how someOver18 evaluates to true because at least one of the items in the numbers array returned true for the condition number >= 18.
Whereas someUnder10 evaluates to false because none of the items in the numbers array returned true.

Recap
The Array .every(callback) method returns true when every item in the array satisfies the condition 
provided in the callback.
The Array .some(callback) method returns true when at least one item in the array satisfies the 
condition provided in the callback.

Deleting items

Last updated April 2024
Say you've got an array and you'd like to empty it; you can do that by setting its length to 0:


const items = ["Pen", "Paper"];
items.length = 0;

console.log(items); // []
This works even though we're using const because we're not re-assigning items but rather changing
 its length to 0, which ends up removing all the items inside of it. The const here guarantees that 
 we will always have an array
 (but its content can change).

 Array.splice()
You can also delete specific items from an array using the splice(start[, deleteCount]) method.

Warning sign
Do not confuse splice with another method called slice.

Did you notice the [, deleteCount] syntax? You will often see this syntax in documentation, which means that the deleteCount parameter is optional.

The .splice(start[, deleteCount]) method removes items from the array starting from the start index 
that you specify. If no deleteCount is provided, it will remove all the remaining items as of the start index.
When you specify a deleteCount, then it will remove as many items as you provided in the deleteCount 
from the start index.
The definition is more complicated than the example, so we recommend you take a look at the examples
 below:

To delete the 1st element of an array, you call .splice(0, 1).
To delete 3 elements starting from the 2nd position, you call .splice(1, 3).
If you call .splice(1), then it will remove all the items starting from the 2nd position (index 1).

Recap
You can empty an array by setting its length to 0.
.splice(start[, deleteCount]) removes items from the array from the start index. The number of items it will remove is specified by deleteCount.
If you omit deleteCount, it will remove all the items as of the start index.

Great work! In the next chapter, we'll learn about the array .reduce() method!

Chapter Recap
The Array .every(callback) method returns true when every item in the array satisfies the condition 
provided in the callback.
The Array .some(callback) method returns true when at least one item in the array satisfies the 
condition provided in the callback.
You can empty an array by setting its length to 0.
.splice(start[, deleteCount]) removes items from the array from the start index. The number of 
items it will remove is specified by deleteCount.
If you omit deleteCount, it will remove all the items as of the start index.

CHAPTER # 13 --------------------------------------------------------------------------------------------

Array.reduce

What is reduce?

Note: Most developers find reduce a tough concept to understand, so this chapter is taken from the
 Learn Programming course. If you've already taken that course, we recommend that you read the chapter again here as a review. We will have another more advanced reduce chapter once we learn about arrays of objects.

The reduce() method is a little bit complicated but we'll break it down step by step. 
Don't worry if you don't understand it the first time.

The reduce() method is used to calculate a single value from an array. In other terms, you reduce 
an array into a single value.

Reduce example: sum
We can reduce the array [5, 10, 5] to the number 20.
We can reduce the array [2, 4, 3] to the number 9.

You may have noticed that both of these examples have summed up the items in the array. 
5 + 10 + 5 = 20 and 2 + 4 + 3 = 9.

This is one of the most common use cases of reduce(), which is summing the array items.

Reduce example: multiplication
Another example is multiplication. For example:

We can reduce the array [10, 2, 2] to the number 40 (10 * 2 * 2 = 40).

So is the reduce method a sum or a multiplication?
It's neither. That's because the reduce() method accepts the reducer which is a 
callback that you have to write. That callback can be sum, multiplication, or some other logic that you may think of.

So reduce is a generic function that will reduce an array into a single value.
 The way it will reduce that array into a single value is configurable by you, the developer. You can configure that in the reducer callback.

We don't expect things to be clear yet as we have not shown you the code, but below you can 
find the recap of the most important concepts covered so far.

Recap
The reduce() method is used to calculate a single value from an array.
In other terms, the reduce() method reduces an array into a single value.
The most common use cases of reduce (when working with arrays of numbers) are sum & multiplication.
The reduce() method takes a reducer which allows you to configure the logic of how the array will 
be reduced into a single number.

Time to take a look at the code! In this lesson, we'll focus on one use case of reduce: calculating the sum. Thus, reducing an array of numbers into its sum.

Assuming the grades array below:


const grades = [10, 15, 5];
Here's how we can calculate its sum with reduce:


const sum = grades.reduce((total, current) => { 
    return total + current;
}, 0);
There's a lot of things happening here, let's break them down:

We call the .reduce() method on the grades array.
We assign the result of grades.reduce() to a new variable called sum.
The reduce method is taking 2 parameters: The reducer and the initial value.
Reducer
The reducer in this example is:


(total, current) => { 
    return total + current;
}
This is the callback that is applied for every item in the array, however, this callback takes 2 parameters: total and current.

The total is always referring to the last computed value by the reduce function. You may often see this called as accumulator in documentation which is a more correct name. And the current is referring to a single item in the array. Let's see what this means by showing the value of total and current for every step:


// code that we run
const grades = [10, 15, 5];

const sum = grades.reduce((total, current) => { 
    return total + current;
}, 0);
The first time the callback runs, total is assigned 0 (because of the initial value that we'll 
explain in a bit) and current will be assigned to the first item of the array. So total = 0 and
 current = 10.
Then we return total + current which is 0 + 10 = 10. Now the new value of total becomes 10.
The callback runs the second time and this time current = 15 (second item of the array) 
and total = 10. We return total + current which is 10 + 15 = 25. The current value of total
 becomes 25.
The callback runs the third time and this time current = 5 (third item of the array) and total = 25.
 We return total + current which is 25 + 5 = 30.
There are no more items in the array, so the result of the reduce is the final value of total which 
is 30.
Thus the sum is 30.
Initial Value
The .reduce() method accepts 2 parameters: reducer and initialValue (not to be confused by the 2
 parameters of the reducer which are total and current). We explained the reducer above. The initialValue is the value we give to the total (or accumulator) the first time the callback runs.

Passing 0 as initialValue is the same as declaring let sum = 0 when using .forEach() to calculate 
the sum.
It's the starting value that we use to be able to calculate the sum.

JavaScript will automatically take your initialValue and pass it to the total argument in the reducer the first time that callback runs.

So is the initialValue always 0? When calculating the sum yes. We'll discuss other values in the next lesson.

Recap
The reduce() method takes 2 parameters: reducer and initialValue. .reduce(reducer, initialValue).
The initialValue is always 0 for sum.
The reducer is a callback function that receives 2 parameters: total and current.
The total (also called accumulator) keeps track of the result of the reduce method. For example, when calculating the sum, it keeps track of the sum, step by step.
The current represents one item of the array.
The reducer is called for every item in the array.

Array reduce: multiplication--------------------------------------**************


In this lesson, we'll explore another example for array reduce which is multiplication.

Let's say we've got the following numbers and we'd like to multiply them all:


const numbers = [5, 2, 10];
We can use .reduce() here because we're reducing the entire array into a single number 
(which is the multiplication of all these numbers).


const result = numbers.reduce((total, current) => {
    return total * current;
}, 1);
console.log(result); // 100
Starting value for multiplication
Before we explain the code step by step, let's talk about the startingValue which has a value of
 1 here.

When doing multiplication, we can't have a starting value of 0. That's because any number 
multiplied by 0 will result in 0. 5 * 0 = 0. We need a number that is neutral in multiplication, and that number is 1 because any number multiplied by 1 will be that same number. For example, 1 * 5 = 5.

This is why in multiplication we use a starting value of 1 and in sum, we use a starting value of 0.

Step by step explanation
Going back to the code, here's how it runs step by step:


const numbers = [5, 2, 10];

const result = numbers.reduce((total, current) => {
    return total * current;
}, 1);
The first time .reduce() callback runs, total will have a value of 1 
(coming from the starting value) and current will have a value of 5 (which is the first item of 
the array).
Then we return total * current which is 1 * 5 = 5 so the next time the callback runs, total will
 have a value of 5.
The second time the callback runs, total is 5 and current is 2 (second item of the array).
 We compute 5 * 2 = 10. We return 10.
The third time the callback runs, total is 10 and current is 10 (third item of the array). 
We compute 10 * 10 = 100. We return 100.
The result of the .reduce() is 100 which is stored in the variable result.
Common mistakes
When it comes to .reduce(), there are 3 common mistakes:

Syntax errors
Due to the number of parentheses and curly braces, it can get quite messy. Re-write the code from 
scratch and write it on pen and paper.

Forgetting to return
Forgetting to return will lead to undefined values which will most likely end up giving you a 
result of NaN.
Make sure that you return from inside the .reduce() callback.

Wrong initialValue
The last common mistake is forgetting the initialValue or providing a wrong initialValue.
If you provide an initialValue of 0 for a multiplication, you will end up with a 0 at the end
 which should be a cue that the initialValue was wrong.

Recap
For multiplication, we use an initialValue of 1.
Reduce common mistakes:
Syntax errors
Forgetting to return
Wrong initialValue

Chapter recap

Last updated October 2022
In a future chapter, we'll learn how to reduce an array of objects into a single value, using the concepts that you learned in this chapter.

The concept of reduce is a tough one even for intermediate developers so don't sweat it if it wasn't 100% clear and feel free to revisit it a couple of weeks from now.
It's also okay for you to continue using .forEach to calculate the sum rather than reduce. That's perfectly fine.

We'd like to show you the code to calculate the sum using .forEach and .reduce so you can see the similarities and differences:

Using .forEach

let sum = 0
numbers.forEach(number => {
    sum = sum + number
});
Using .reduce

const sum = numbers.reduce((total, current) => {
    return total + current
}, 0);
One of the similarities is that the initialValue was let sum = 0 but now it's the second argument 
passed to .reduce().
One of the differences is that .forEach does not return anything whereas reduce returns a result
 (in this case the sum).

The .reduce example can be written on one line using implicit return:


const sum = numbers.reduce((total, current) => total + current, 0);
I've also published a YouTube video about array reduce. Note that the last part of the video spoils 
some of the answers from Chapter 22 (reducing arrays of objects).

Chapter Recap
The reduce() method is used to calculate a single value from an array.
In other terms, the reduce() method reduces an array into a single value.
The most common use cases of reduce (when working with arrays of numbers) are sum & multiplication.
The reduce() method takes a reducer which allows you to configure the logic of how the array will be
 reduced into a single number.
The reduce() method takes 2 parameters: reducer and initialValue. .reduce(reducer, initialValue).
The initialValue is always 0 for sum.
The reducer is a callback function that receives 2 parameters: total and current.
The total (also called accumulator) keeps track of the result of the reduce method. For example, 
when calculating the sum, it keeps track of the sum, step by step.
The current represents one item of the array.
The reducer is called for every item in the array.
For multiplication, we use an initialValue of 1.
Reduce common mistakes:
Syntax errors
Forgetting to return
Wrong initialValue

CHAPTER # 14 --------------------------------------------------------------------------------------------

Array destructuring

Last updated February 2023
Array destructuring is a relatively new feature of the JavaScript language and is considered syntactic sugar, meaning that it makes your code easier to read.

Say you've got the following array containing the width and height of an item and you'd like to create variables for the width and height:


const dimensions = [20, 5]

// create variables
const width = dimensions[0];
const height = dimensions[1];

// log them
console.log(width); //20
console.log(height); //5
The above code can be rewritten using the new array destructuring syntax as follows:


const dimensions = [20, 5]

// create variables
const [width, height] = dimensions;

// log them
console.log(width); //20
console.log(height); //5
The 2 variable declarations were replaced with one line: const [width, height] = dimensions. The end 
result is the same.

We are pulling the first entry of dimensions into a new variable width, and we're pulling the second
 entry of dimensions into a new variable height.
So the order in the [] matters for array destructuring as the first variable name will correspond to 
the first item in the array (index 0), the second variable name will correspond to the second item in the array (index 1), and so on...

You can identify destructuring when you see the square brackets [] on the left side of the equal sign.

As with most features, you may dislike the syntax at first, but it's very elegant once you get used to it.

MDN logoArray destructuring on MDN


Examples in React hooks
React (library) is outside the scope of this course, but in case you've seen some React hooks code 
that looks like this:


function App() {
    const [counter, setCounter] = useState(0);
}
The const [counter, setCounter] = useState(0) is array destructuring.

The function useState(0) returns an array of 2 items and we destructure them into 2 variables counter and setCounter.

If you've never seen this code above, then don't worry about it.

Recap
Array destructuring is syntactic sugar (meaning that it makes your code easier to read).
The order in array destructuring matters, as every variable will be matched to the corresponding array item.
You can identify destructuring when you see the square brackets [] on the left side of the equal sign.


-------- ************

Array concatenation


You can concatenate/merge several arrays' content into a new array using the ... spread syntax.
Here's an example:


const lat = [5.234];
const lng = [1.412];
const point = [...lat, ...lng];
console.log(point); // [5.234, 1.412];
The new array contains the elements of both arrays.

Here's another example where we create a new array based on the old one and add new items to it:


const items = ["Tissues", "Oranges"];

const otherItems = [...items, "Tomatoes"];
console.log(otherItems); // ["Tissues", "Oranges", "Tomatoes"]
We will revisit array concatenation once we learn about immutability which is an important concept in JavaScript.

MDN logoSpread syntax on MDN


Recap
You can concatenate/merge several arrays into a new array using the ... concatenation syntax.


***Chapter recap***-----------

Last updated January 2023
Nice work!

In the next chapter, we'll learn more about objects. See you there!

Chapter Recap
Array destructuring is syntactic sugar (meaning that it makes your code easier to read).
The order in array destructuring matters, as every variable will be matched to the corresponding array item.
You can identify destructuring when you see the square brackets [] on the left side of the equal sign.
You can concatenate/merge several arrays into a new array using the ... spread syntax.


CHAPTER 15 OBJECTS -------------------------------------------------------------------------------------

const user = {
   id: 1,
   name: "Sam Green"
};

const key = "id"; // the name of the property that we want to access on the user object

// ❌ this does NOT work
user.key; // undefined

We cannot use the dot syntax here because the property is dynamic. When you write user.key, 
JavaScript will then look for a property called key which is not the case here. Instead, we need 
to get the value of the variable key, which is "id".

For that, you have to use the square brackets as follows:

const user = {
    id: 1,
    name: "Sam Green",
    age: 20
};

const key = "id";
user[key]; // 1

This works because [key] will evaluate the expression inside the square brackets. In this case, key evaluates to "id". So we end up reading the property id which returns 1 (because user.id is 1).

You're probably thinking that this is overcomplicated and we could have just accessed user.id. That's true, however, there are cases where the key will be stored in a variable. For example, take the function below:


const getValue = (user, keyToRead) => {
    return user[keyToRead];
}

// Sample usage
getValue({id: 2, name: "Sam"}, "name"); // "Sam"
getValue({id: 2, name: "Sam"}, "id"); // 2
In this case, getValue accepts an object user and then the keyToRead. So, to be able to implement the function, we had to access the property dynamically with user[keyToRead].
This allows the function to be dynamic and accept any key on the user object, and its value will be returned!

Don't worry if the concept is still not clear, this is a tough one. We'll have a challenge with some DOM with it so that you can better visualize it.

Object.keys()
The Object.keys(obj) method returns an array of all the keys in the obj that you provide.
Note that we have Object here, which is a global variable available in JavaScript. It is similar to
Number on which we called Number.parseInt() before.

The Object global variable contains methods that are relevant to objects. One of them is the keys()
 which accepts any object. For example:


const user = {
    id: 1,
    name: "Sam Green",
    age: 20
};

const keys = Object.keys(user);
console.log(keys); // ["id", "name", "age"]
Notice how it returns an array containing every single key from the user object.

Remember to pass the object whose keys you want into the .keys() method. It's often confusing 
for developers to see this Object (with a capital O in the beginning). 
You can remember it as if the name of the function is Object.keys() and then it receives whatever 
object you want as a parameter.

MDN logoObject.keys() on MDN


Putting it all together
Since Object.keys() returns an array, you can use it to loop through every key in the object and get its value dynamically:


const settings = {
    theme: "Dark",
    version: "2.4.1",
    beta: false
};

const keys = Object.keys(settings);
console.log(keys); // ["theme", "version", "beta"]
keys.forEach(key => {
    // log the value of every key dynamically
    console.log(settings[key]);
});
The console.log(settings[key]) will log the value of every key. So you will see the following in the
 console:


"Dark"
"2.4.1"
false


Recap
You cannot use the dot syntax when the property you're trying to read is stored in a variable or the
 result of an expression (dynamic).
Instead, you should use square brackets with the name of the variable inside. For example [key].
object[key] will evaluate the key expression first and then read the property based on its result.
The Object.keys(obj) method returns an array of all the keys in the obj that you provide.

Object methods

Last updated January 2023
In this lesson, we'll learn about 2 object methods. But first, let's take a look at what happens when you access a property that does not exist on an object.


const person = {
    id: 1,
    firstName: "Sam"
};

person.firstname; // undefined (firstname instead of firstName)
person.age; // undefined
Notice how when we access a property that does not exist (such as age or the misspelled firstname), then we get undefined.

This is not an error but this may often lead to an error if you try to access another property or method on it. For example:


person.age.toUpperCase(); // ❌ Uncaught TypeError: Cannot read property 'toUpperCase' of undefined
This is one of the most common errors that you will see in JavaScript. TypeScript does a great job at preventing these kind of errors, though it comes with its own overhead.

It's important to be able to read this error message and understand that the issue is not .toUpperCase() but instead, the expression that came before it person.age.
That's because you end up calling undefined.toUpperCase() which does not exist.

[object Object]
Another note worth mentioning is that when you see [object Object] it means that the .toString() method has been automatically called on an object which will result in [object Object].

So if you see [object Object], it means you tried to use an object in a context that expects a string. For example:


const person = {
    id: 1,
    firstName: "Sam"
};

console.log(`Hello ${person}`); // "Hello [object Object]"
In this case, we should probably replace ${person} with ${person.firstName}.

Object.values()
In the previous lesson, we saw that we can access the values of an object by looping through the keys and
 then dynamically accessing the keys. This works if you need to access both the keys and the values.
However, if you only need to access the values, then you can use Object.values() which returns an array 
of the values:


const user = {
    id: 1,
    name: "Sam Green",
    age: 20
};

const values = Object.values(user);
console.log(values); // [1, "Sam Green", 20]
MDN logoObject.values() on MDN


Object.entries()
The Object.entries() method returns an array of arrays representing every key/value pair. 
Let's visualize it:


const user = {
    id: 1,
    name: "Sam Green",
    age: 20
};

const entries = Object.entries(user);
The entries variable will return the following array of arrays:


[
    ["id", 1],
    ["name", "Sam Green"],
    ["age", 20]
]
This is especially useful in combination with array destructuring and for..in (which is covered in a later chapter).

MDN logoObject.entries() on MDN


Recap
When you access a property that does not exist on an object, you will get undefined.
When you try to access a property or call a method on undefined (or an expression that evaluates to
 undefined), you will get an error Uncaught TypeError: Cannot read property 'X' of undefined.
When you see [object Object], it means that an object was used in a context that was expecting a string.
 So the .toString() method has been called automatically on the object.
The Object.values() method returns an array of the values of an object.
The Object.entries() method returns an array of arrays representing every key/value pair.
We will revisit Object.entries() later in this course.

Great job!

We will continue working with objects in the next chapter. See you there!

Chapter Recap
You cannot use the dot syntax when the property you're trying to read is stored in a variable or the result of an expression (dynamic).
Instead, you should use square brackets with the name of the variable inside. For example [key].
object[key] will evaluate the key expression first and then read the property based on its result.
The Object.keys(obj) method returns an array of all the keys in the obj that you provide.
When you access a property that does not exist on an object, you will get undefined.
When you try to access a property or call a method on undefined (or an expression that evaluates to 
undefined), you will get an error Uncaught TypeError: Cannot read property 'X' of undefined.
When you see [object Object], it means that an object was used in a context that was expecting a string.
So, the .toString() method has been called automatically on the object.
The Object.values() method returns an array of the values of an object.
The Object.entries() method returns an array of arrays representing every key/value pair.
We will revisit Object.entries() later in this course.

CHAPTER 16 OBJECTS --------------------------------------------------------------------------------

Destructuring & Concatenation


Just like array destructuring, you can destructure key/value pairs (or nested objects) from an object. The concept is similar, except that you have to use {} instead of [] on the left side of the = operator and you should have an object on the right side of the = operator.

Let's take a look at some examples. Assuming the following object:


const config = {
    id: 1,
    isAdmin: false,
    theme: {
        dark: false,
        accessibility: true
    }
};
Here's how you access some of its properties and create variables out of them:


const id = config.id;
const isAdmin = config.isAdmin;
const theme = config.theme;
This can be refactored with object destructuring as follows:


const {id, isAdmin, theme} = config;
The new id variable is created from config.id. So, the variable names should match the key names.
 We'll cover destructuring and renaming in a section below.

You can also decide to only destructure the variables you need, for example:


const {isAdmin, theme} = config;
Object destructuring is considered syntactic sugar meaning it makes reading the code easier 
(once you get used to it).

MDN logoObject destructuring on MDN


Destructuring with default value
It's also possible to destructure with a default value, meaning that you can assign a default value 
to a property if it does not exist in the object you're destructuring from. For example:


const user = {
    id: 1,
    name: "Sam"
};

const {name, isAdmin = false} = user;
console.log(isAdmin); // false
As you can see, isAdmin defaulted to false because it does not exist on user.


const user = {
    id: 1,
    name: "Sam",
    isAdmin: true
};

const {name, isAdmin = false} = user;
console.log(isAdmin); // true
Whereas, in this example, it did not default to false because it exists on user so it just gets 
destructured.

Destructure and rename
It's also possible to destructure and rename from an object. For example, let's say you already have a 
name variable so you'd like to destructure user.name and assign it to a variable called userName. Here's how you can do it:


const name = "Document title"; // name variable is already declared

const user = {
    id: 1,
    name: "Sam",
    isAdmin: true
};

// destructure user.name into variable userName
const {name: userName, isAdmin} = user;
console.log(userName); // "Sam"
Here's another example where we destructure user.isAdmin into a new variable admin (note that we
 destructure it and rename it):


const user = {
    id: 1,
    name: "Sam",
    isAdmin: true
};

const {id, name, isAdmin: admin} = user;
// We've renamed isAdmin to admin while destructuring
console.log(admin); // true
Concatenate objects
In some scenarios, you'd like to merge 2 objects together. You can do that using the ... spread operator.


const firstPerson = {
    name: "Sam",
    age: 18
}

const secondPerson = {
    age: 25,
    type: "admin"
}

const mergedObjects = {...firstPerson, ...secondPerson};
console.log(mergedObjects); // {name: "Sam", age: 25, type: "admin"}
Notice how the new object ended up with the name and type from both objects. However, regarding the 
age, since it exists in both objects, only the 2nd one persisted.
This is why the order of the objects matters when spreading them.

Recap
Just like array destructuring, you can destructure key/value pairs (or nested objects) from an object.
It's also possible to destructure with a default value, meaning that you can assign a default value to a
property if it does not exist in the object you're destructuring from.
You can merge objects together with the ... operator. The order of objects matters (for duplicate keys).

Nice work!

It's also possible to check if a key exists in an object using the in operator. The in operator returns true if the specified property is found in the specified object, otherwise it returns false.

Here's an example:


const person = {
    name: "Alex",
    age: 35
};

if ("name" in person) {
    console.log(person.name);
}
Notice that the property name should be given as a string.

You will learn in the following chapter about optional chaining, which makes this use case less relevant.
 On the other hand, the in operator is more commonly used to look up if a key exists in the window object. Here's a common use case:


if ("ontouchstart" in window) {
    // using a touchscreen
} else {
    // not using a touchscreen
}
Please note that there are many concepts yet to be explained (notably: the window object and event 
handlers). The ontouchstart is an event handler that's only present when the user is browsing from a 
device with a touchscreen. So, by checking the existence of this key in window ("ontouchstart" in window), we're able to know whether the user is using a touchscreen or not.

In the next chapter, we'll learn about optional chaining!

Chapter Recap
Assuming a variable name, here's an example of object shorthand: const user = {name}.
const user = {age} is equivalent to const user = {age: age}.
When you have several console.log calls, wrap the values with {} so that you use object shorthand. 
The benefit is that you will be able to see the name of the variable that you were trying to log, 
alongside its value.
Just like array destructuring, you can destructure key/value pairs (or nested objects) from an object.
It's also possible to destructure with a default value, meaning that you can assign a default value to a
 property if it does not exist in the object you're destructuring from.
You can merge objects together with the ... operator. The order of objects matters (for duplicate keys).

CHAPTER 17 OBJECT CHAINING. -----------------------------------------------------------------------------------

Optional chaining

Last updated June 2023
We know from a previous chapter that if an object property returns undefined, then we should avoid 
accessing other
 properties on it (or calling methods on it) so that we don't get an error. This is why you often see 
 code that looks like this:


// assuming object `user`

let name = undefined;
if (user.details && user.details.name && user.details.name.firstName) {
    name = user.details.name.firstName;
}
We can't directly write let name = user.details.name.firstName if we suspect that, for some reason, 
user.details might be null or undefined. And the same for user.details.name.
This is why we use an if condition and check, step by step, that every property returns a value.

Enter optional chaining. It lets us refactor the entire code above into the following:


// assuming object `user`

const name = user.details?.name?.firstName;
So, yeah! All the code above can be replaced with this single line. Notice the ?. operator after
 user.details and then after user.details?.name.

This is called optional chaining which allows you to access a property deep within an object without 
risking an error if one of the properties is null or undefined.
In case one of the properties is null or undefined, then the ?. will short-circuit to undefined.
This means that it will stop reading the property you asked it to read and will result in undefined.

Let's take a look at some examples and see the result of optional chaining:


const user = {
    details: {
        name: {
            firstName: "Sam"
        }
    },
    data: null
}

user.details?.name?.firstName; // "Sam"
user.data?.id; // undefined
user.children?.names; // undefined
user.details?.parent?.firstName; // undefined
MDN logoOptional chaining on MDN


Caveats
We decided to dedicate an entire chapter covering optional chaining because there are some edge cases 
that you need to be aware of. We will break them down so that you avoid having unexpected issues.

One important note is that you cannot use optional chaining on an object that may not exist. 
The object has to exist. Optional chaining is only used to access a property that may or may not exist.

This means when you access user.details?., you need to make sure that there is a variable (of any type)
 called user. Otherwise, you get an error.

You may have noticed that we've been writing user.details?.name instead of user?.details?.name that's 
because we know for sure that user is an object. So we don't necessarily need optional chaining for 
user.details.
In case you're not sure whether user is an object, then you can write user?.details?.name. 
However, you still have to make sure that there is a variable user defined, or else you will get an error.

Recap
Optional chaining allows you to access a property deep within an object without risking an error 
if one of the properties is null or undefined.
In case one of the properties is null or undefined, then the ?. will short-circuit to undefined.
You cannot use optional chaining on an object that may not exist. The object has to exist. 
Optional chaining is only used to access a property that may or may not exist.

Optional chaining usage with arrays
Assuming the code below, where the key temperatures might be undefined:


const data = {
    temperatures: [-3, 14, 4]
}

let firstValue = undefined;
if (data.temperatures) {
    firstValue = data.temperatures[0];
}
We can refactor it into:


const firstValue = data.temperatures?.[0];
Notice how we used ?. in front of the [0] to access the first item of the array. The benefit of optional 
chaining here is that if data.temperatures returned null or undefined, your code won't break. 
It will short-circuit and return undefined. Which is why we were able to get rid of the if condition.

Optional chaining usage with functions
Similarly, we can use optional chaining to call functions by using the ?. operator. Here's the example 
before optional chaining:


******Optional chaining (advanced)-----

const person = {
    age: 43,
    name: "Sam"
};

let upperCasedName = person.name; // might be undefined
if (person.name) {
    upperCasedName = person.name.toUpperCase();
}
Which we can refactor into:


const upperCasedName = person.name?.toUpperCase();
This will only call the .toUpperCase() method if person.name does not evaluate to null or undefined.

If at any point the code above is not clear, then wait until the challenges, and try running your code
 without the if condition and without optional chaining and notice that it fails with errors such as
  Cannot read property 'toUpperCase' of undefined.

Optional chaining helps you avoid these errors by returning undefined.

So, in the case where person.name is null or undefined, person.name?.toUpperCase() will short-circuit and
 return undefined without calling the toUpperCase() method:


const person = {
    age: 43,
};

const upperCasedName = person.name?.toUpperCase(); // undefined
Do not overuse optional chaining
You might be tempted to start using optional chaining instead of every dot notation but you shouldn't. 
Over-using it may lead to unexpected bugs and poor code quality.
You can think of it as the following: When I (or other programmers) see ?. in the code, it means that
 there's a moderate chance that the value returns undefined. In turn, this means that we should be handling 
 the case when it returns undefined.

For example, the below code does not handle many cases, such as an empty array:


const sum = values => {
    return values?.[0] + values?.[1];
}

sum([2, 3]); // 5
sum([]); // NaN
As you can see, even though our code doesn't break, sum([]) returns NaN which in turn might cause unexpected 
issues later on.

The above code can be fixed by adding an if condition that checks whether we have 2 entries in the values 
array, otherwise, we return 0.

If we go back to the example from the previous section, we didn't need ?.toUpperCase?.() here:


const upperCasedName = person.name?.toUpperCase();
This is because we assume that if the person.name exists, it will be a string. If it's a string, then 
we'll have the toUpperCase() method. If you think that assumption doesn't make sense in your case, for
 example, the name might exist but be a number, then you can use toUpperCase?.().

Ideally, TypeScript can be used to handle these issues and enforce types in your code base.

No optional chaining for assignment
Optional chaining is only used for reading. It cannot be used for assignments.

This means that the code below is invalid and will throw a syntax error:


const settings = {};

// ❌ Syntax Error
settings?.theme = "dark";
Instead, you could use the following syntax which combines optional chaining and the && logical operator:


const settings = {};

settings?.theme && (settings.theme = "dark");
console.log(settings); // {}
We're checking whether settings?.theme exists. This either returns undefined when it doesn't exist or the 
value of settings.theme (which could be anything). The && will then force that value to be converted to a
 boolean.

If it's true, the right side of the expression will execute, setting the settings.theme to "dark". 
Otherwise, when settings?.theme is undefined or null, the && operator will short-circuit and not run
the right-side of its expression.

This makes the settings?.theme && (settings.theme = "dark"); line of code safe regardless of the settings.
theme value. Here's the opposite example where settings?.theme returns a truthy value:


const settings = {
     theme: "light"
};

settings?.theme && (settings.theme = "dark");
console.log(settings); // {theme: "dark"}
For this syntax to work, you have to specify the () around the right side of the operation; otherwise,
 you will get an error because of the operator precedence order. So, without (), your code will execute as
 if it was written like so:


(settings?.theme && settings.theme) = "dark"; // ❌ this fails
Recap
Optional chaining can be used for arrays. The syntax is ?.[index]
Optional chaining can be used for functions. The syntax is functionName?.()
Optional chaining cannot be used for assignment. It's only used for reading.

Chapter recap

Last updated October 2022
Great job! In the next chapter, we'll learn about the new nullish coalescing operator and then, we'll 
use it in combination with optional chaining!

Chapter Recap
Optional chaining allows you to access a property deep within an object without risking an error if one of 
the properties is null or undefined.
In case one of the properties is null or undefined, then the ?. will short-circuit to undefined.
You cannot use optional chaining on an object that may not exist. The object has to exist. Optional chaining 
is only used to access a property that may or may not exist.
Optional chaining can be used for arrays. The syntax is ?.[index]
Optional chaining can be used for functions. The syntax is functionName?.()
Optional chaining cannot be used for assignment. It's only used for reading.

Nullish coalescing

Last updated March 2022
The nullish coalescing ?? operator is a new operator introduced in JavaScript that allows you to default to a certain value when the left-hand side is a nullish value.

A nullish value is a value that is either null or undefined.

Here's an example:


const getName = name => {
    return name ?? "N/A";
}

console.log(getName("Sam")); // "Sam"
console.log(getName(undefined)); // "N/A"
console.log(getName(null)); // "N/A"
Notice how when name is a nullish value (either null or undefined), then the right-hand side of the
 operator is executed. In this case, "N/A".

This operator is useful to avoid showing undefined or null to the User Interface, which are often signs of bugs.
Whenever possible, if you can provide a default value, you can use the nullish coalescing operator ?? to
 show that default value.

Some common examples include:

Showing an empty string "" instead of undefined or null.
Showing a string such as "Deleted user" instead of nullish value (undefined or null).
Showing "N/A" (Not Applicable) instead of a nullish value.
Short circuit
The nullish coalescing operator will short-circuit if the left-hand side returns a non-nullish value.
 This means that it will not execute the right-hand side. For example:


const getPlaceholder = () => {
    console.log("getPlaceholder called");
    return "N/A";
}

const sayHello = name => {
    return `Hello ${name ?? getPlaceholder()}`;
}

console.log(sayHello("Sam")); // "Hello Sam"
In this example, name is a non-nullish value so the name ?? getPlaceholder() will short-circuit meaning 
the getPlaceholder() function will not run. Thus, you won't see anything logged to the console.

On the other hand, if we call sayHello() (where name is undefined), then the name ?? getPlaceholder()
 will not short-circuit and the getPlaceholder() function will execute. Thus, you will see 
 "getPlaceholder called" logged to the console.

Variable must be defined
Similar to optional chaining, you can only use nullish coalescing when the variable is defined.
So, the variable name (or whatever variable you use to the left-hand side of the operator) has to be defined.

MDN logoNullish coalescing operator on MDN


Recap
The nullish coalescing ?? operator is a new operator introduced in JavaScript that allows you to default
 to a certain value when the left-hand side is a nullish value.
A nullish value is a value that is either null or undefined.
The nullish coalescing operator will short-circuit if the left-hand side returns a non-nullish value. 
This means that it will not execute the right-hand side.
You can only use nullish coalescing when the variable is defined.



*/ 

