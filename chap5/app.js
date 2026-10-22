// question 1

let a = 1
let b = 8


var sum = a + ++b
document.write("Ans is" + "<br>" + sum )

// question 2
let c = 1
let d = 8


var sum = c - ++d
document.write( "<br>" + "<br>" + "Ans is" + "<br>" + sum );

// question 2
let e = 1
let f = 8


var sum = e * --f
document.write( "<br>" + "<br>" + "Ans is" + "<br>" + sum );

// question2
var sum = e / ++f
document.write( "<br>" + "<br>" + "Ans is" + "<br>" + sum )

// question3
document.write( "<br>" + "<br>");
var num;
document.write("Value after variable declaration is: " + num + "<br>");

num = 5;
document.write("Initial value: " + num + "<br>");

num++;
document.write("Value after increment is: " + num + "<br>");

num = num + 7;
document.write("Value after addition is: " + num + "<br>");

num--;
document.write("Value after decrement is: " + num + "<br>");

var remainder = num % 3;
document.write("The remainder is : " + remainder);

// question4
var ticketPrice = 600;
var totalCost = ticketPrice * 5;
document.write( "<br>" + "<br>");document.write( "<br>" + "<br>");
document.write("Total cost to buy 5 tickets is " + totalCost + " PKR");



// question5
document.write( "<br>" + "<br>");
document.write( "<br>" + "<br>");
var num = 4;

document.write("Table of " + num + "<br><br>");

for(var i = 1; i <= 10; i++){
    document.write(num + "x" + i + "=" + (num*i) + "<br>");
}

// question10
var num = 5;

var result = ((num + 5) * 10) / 2;
document.write( "<br>" + "<br>");document.write( "<br>" + "<br>");document.write( "<br>" + "<br>");
document.write(result);
