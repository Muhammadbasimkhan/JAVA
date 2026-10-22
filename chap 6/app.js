// question1
var a = 10;

document.write("Result:<br><br>");

document.write("The value of a is: " + a + "<br>");
document.write("------------------------------<br><br>");

document.write("The value of ++a is: " + (++a) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

document.write("The value of a++ is: " + (a++) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

document.write("The value of --a is: " + (--a) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

document.write("The value of a-- is: " + (a--) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

// question2
var a = 2;
var b = 1;

var result = --a - --b + ++b + b--;

document.write("a is: " + a + "<br>");
document.write("b is: " + b + "<br>");
document.write("result is: " + result + "<br><br>");
// --a = 1 
// --a - --b = 1 
// --a - --b + ++b = 2 
// --a - --b + ++b + b-- = 3 

// question3
var userName = prompt("Hi ! whats up? enter your name:");
document.write("Hello " + userName + "! Welcome.");

// question4
// sir mujhse na ho payega 