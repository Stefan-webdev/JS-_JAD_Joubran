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

function sayHello(name) {
   
    return `Hello ${name}`
}



console.log(sayHello(`Bob`))
