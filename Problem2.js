/*
Problem 2:
Write a simple JavaScript program to join all elements of the following array into a string.
(Example: array: var myColor=["Red", "Green", "White", "Black"]);
*/

/*
2 ways:
No.1: using .toString() to join the items inside an array to a single string;
No.2: using .join() to join the items inside the array together;
*/
//Code starts here

var myColor = ["Red", "Green", "White", "Black"];           //example array;
console.log(myColor.toString());                            //use .toString() to join the items inside our array as one string;
console.log(myColor.join(","));                             //use .join() to join the items inside our array as one string, need to provide separator;
console.log(myColor.join("-"));                             //defalut means no separator which will connect everything inside the array together;