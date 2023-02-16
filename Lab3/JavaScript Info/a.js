// working with variables
let admin;
let name;
name = "John";
admin = name;
alert(admin);

// Giving the right name
let ourPlanet = "Earth";
let currentUser = "Aigerim";

// Uppercase const?
// We should make BIRTHDAY uppercase, because our birthdate will never change.

// String quotes
let name = "Ilya";

alert( `hello ${1}` ); // hello 1

alert( `hello ${"name"}` ); // hello name

alert( `hello ${name}` ); // hello Ilya

// Create a web-page that asks for a name and outputs it.
let name = prompt("What is your name?");
alert(name)

// The postfix and prefix forms (What are the final values of all variables a, b, c and d after the code below?)
let a = 1, b = 1;

let c = ++a; //
let d = b++; //
// a = 2, b = 2, c = 2, d = 1;

// Assignment result (What are the values of a and x after the code below?)
let a = 2;

let x = 1 + (a *= 2);
// a = 4, x = 5

// Type conversions (What are results of these expressions?)
// "" + 1 + 0 = "10"
// "" - 1 + 0 = -1
// true + false = 1
// 6 / "3" = 2
// "2" * "3" = 6
// 4 + 5 + "px" = "9px"
// "$" + 4 + 5 = "$45"
// "4" - 2 = 2
// "4px" - 2 = NaN
// "  -9  " + 5 = "   -9   5"
// "  -9  " - 5 = -14
// null + 1 = 1
// undefined + 1 = NaN
// " \t \n" - 2 = -2

// Fix the addition
let a = prompt("First number?", 1);
let b = prompt("Second number?", 2);

alert(+a + +b); // 3

// Comparisons (What will be the result for these expressions?)
//// 5 > 4 = true
//// "apple" > "pineapple" = false
//// "2" > "12" = true
//// undefined == null = true
//// undefined === null = false
//// null == "\n0\n" = false
//// null === +"\n0\n" = false

// Will alert be shown?
if ("0") {
    alert( 'Hello' );
}
// Answer: Yes

// The name of JavaScript
let name = prompt("What is the “official” name of JavaScript?", "");
if(name == "ECMAScript"){
    alert("Right!");
}else{
    alert("You don’t know? ECMAScript!");
}

// Show the sign
let answer = prompt("Write a number", "");
if(answer > 0){
    alert(1);
}else if(answer < 0){
    alert(-1);
}else{
    alert(0);
}

// Rewrite 'if' into '?'
let result;

if (a + b < 4) {
    result = 'Below';
} else {
    result = 'Over';
}
// Answer:
let result = (a + b < 4) ? 'Below':'Over';

let message;

if (login == 'Employee') {
    message = 'Hello';
} else if (login == 'Director') {
    message = 'Greetings';
} else if (login == '') {
    message = 'No login';
} else {
    message = '';
}

let message = (login == 'Employee') ? 'Hello': (login == 'Director') ? 'Greetings': (login == '') ? 'No login': '';

// What is the code below going to output?
alert( null || 2 || undefined ); // 2

alert( alert(1) || 2 || alert(3) ); // 1, then 2

alert( 1 && null && 2 ); // null

alert( alert(1) && alert(2) ); // first 1, then undefined

alert( null || 2 && 3 || 4 ); // -> (null || 3 || 4) -> ans: 3

// Check the range between
let age = prompt("How old are you?", "");
if(age >= 14 && age <= 90){
    alert("Right!")
}

// Check the range between
//1
let age = prompt("How old are you?", "");
if(!(age >= 14 && age <= 90)){
    alert("Right!")
}
//2
let age = prompt("How old are you?", "");
if(age < 14 && age > 90){
    alert("Right!")
}

// A question about "if"
if (-1 || 0) alert( 'first' ); // -1
if (-1 && 0) alert( 'second' ); // doesn't work, because false
if (null || -1 && 1) alert( 'third' ); // 1 runs

// Check the login
let name = prompt("What is your name?", "");
if(name == "Admin"){
    let password = prompt("Write password", "");
    if(password == "TheMaster"){
        alert("Welcome!");
    }else if(password == "" || password == null){
        alert("Canceled");
    }else{
        alert("Wrong password");
    }
}else if(name == "" || name == null){
    alert("Canceled");
}else{
    alert("I don't know you!");
}

// What is the last value alerted by this code? Why?
let i = 3;

while (i) {
    alert( i-- );
}
// 1, because it stops, when it gets to 0

// Which values does the while loop show?
let i = 0;
while (++i < 5) alert( i );
// 1 2 3 4
let i = 0;
while (i++ < 5) alert( i );
// 1 2 3 4 5

// Which values get shown by the "for" loop?
for (let i = 0; i < 5; i++) alert( i );
for (let i = 0; i < 5; ++i) alert( i );
// in both cases 0 1 2 3 4

// Output even numbers in the loop
for(let i = 2; i <= 10; i+=2){
    alert(i)
}

// Replace "for" with "while"
for (let i = 0; i < 3; i++) {
    alert( `number ${i}!` );
}

let i = 0;
while(i != 3){
    alert(`number ${i}!`);
    i++;
}

// Repeat until the input is correct
let num;

do {
    num = prompt("Enter a number greater than 100?", 0);
} while (num <= 100 && num);

//Output prime numbers
let n = 10;

nextPrime:
    for (let i = 2; i <= n; i++) { // for each i...

        for (let j = 2; j < i; j++) { // look for a divisor..
            if (i % j == 0) continue nextPrime; // not a prime, go next i
        }

        alert(i); // a prime
    }

// Write the code using if..else which would correspond to the following switch:
switch (browser) {
    case 'Edge':
        alert( "You've got the Edge!" );
        break;

    case 'Chrome':
    case 'Firefox':
    case 'Safari':
    case 'Opera':
        alert( 'Okay we support these browsers too' );
        break;

    default:
        alert( 'We hope that this page looks ok!' );
}

let browser;
if(browser == "Edge"){
    alert( "You've got the Edge!" );
}else if(browser == "Chrome" ||browser == "FireFox" ||browser == "Safari" ||browser == "Opera"){
    alert( 'Okay we support these browsers too' );
}else{
    alert( 'We hope that this page looks ok!' );
}

// Rewrite "if" into "switch"
let a = +prompt('a?', '');

if (a == 0) {
    alert( 0 );
}
if (a == 1) {
    alert( 1 );
}

if (a == 2 || a == 3) {
    alert( '2,3' );
}

switch(a){
    case 0:
        alert(0);
        break;
    case 1:
        alert(1);
        break;
    case 2:
    case 3:
        alert("2,3");
        break;
}

// Is "else" required?
// No difference!
// In both cases, return confirm('Did parents allow you?') executes exactly when the if condition is falsy.

// Rewrite the function using '?' or '||'

function checkAge(age) {
    return (age > 18) ? true : confirm('Did parents allow you?');
}

function checkAge(age) {
    return (age > 18) || confirm('Did parents allow you?');
}

// Function min(a, b)
function min(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}

// Function pow(x,n)

function pow(x, n) {
    let result = x;

    for (let i = 1; i < n; i++) {
        result *= x;
    }

    return result;
}

let x = prompt("x?", '');
let n = prompt("n?", '');

if (n < 1) {
    alert(`Power ${n} is not supported, use a positive integer`);
} else {
    alert( pow(x, n) );
}

// Rewrite with arrow functions

function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
}

ask(
    "Do you agree?",
    function() { alert("You agreed."); },
    function() { alert("You canceled the execution."); }
);
// answer
ask(
    "Do you agree?",
    () => alert("You agreed."),
    () => alert("You canceled the execution.")
);

