/*
Problem 4:
Write a JavaScript program to remove duplicate items from an array.(Ignore case sensitivity).
(Example array: [1, 2, 2, 4, 5, 7, 8, 7, 3, 6]);
*/

/*method 1: In this method I am using Set and Array.from to remove duplicate items inside an Array;
            Set will let us to store unique values of any types inside a set and Array.form will allows us to log out our
            our value as an array. However, since only unique items can be stored inside a set, this method will be case sensitive;
*/
            
//code starts here

var myNumbers = [4, 2, 8 ,1, 5, 7, 2, 7, 3, 6];

var removeDuplicates = function(arr) {
    var newArray = new Set(arr);                             //using Set where it lets you store unique values of any types;
    return Array.from(newArray).sort(function(a, b){
        return a - b;                                        //use Array.from to log out our value as an array instead of a set, use .sort with a compare function to output our value in an ascending order;
    });                
}

console.log(removeDuplicates(myNumbers));                    //return [ 1, 2, 3, 4, 5, 6, 7, 8 ];


/*method 2: 
step 1: create an empty string and an empty object where we can store our value inside the object and then put those value into our empty string;
step 2: write a "for" loop element to compare each value inside our array and put them into our object for us to use later;
step 3: inside our "for" loop element, we increment our value as we move along the array so that we can skip dublicated items inside our array;
step 4: after putting everything inside our object variable, we use .push to add each objects back as a string inside an array so we can log out our output as a string inside an array;
*/

//code starts here

function removeDuplicates(num) {
    var output = [];                                        //create an empty array as output value;
    var arrayItems = {};                                    //create an empty object to store array values;

    for (var i= 0; i< num.length; i++) {                    //use "for" loop to move everything inside object variable. use i++ to skip dublicated items;
        arrayItems[num[i]] = 0;                             //putting items in object will automatically goes in the ascending sorted order beacuse array values are intergers;
    }

    for (i in arrayItems) {
        output.push(i);                                     //log out our stored value one by one using .push;
    }
    return output;
}

console.log(removeDuplicates(myNumbers));                   //return [ '1', '2', '3', '4', '5', '6', '7', '8' ];
