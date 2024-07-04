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

*/



