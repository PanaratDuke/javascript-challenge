/*
 learned how to use the JavaScript Array filter() method to filter elements
in an array based on a test provided by a callback function.

*/

/*
The following example illustrates the use of the contextObject argument that 
specifies an object which can be referenced in the callback() function 
using 'this' keyword.
*/


function isInRange(value) {
    if (typeof value !== 'number') {
        return false;
    }
    return value >= this.lower && value <= this.upper;
}

let dataArray = [10, 20, "30", 1, 5, 'JavaScript filter', undefined, 'example'];

// defin the 'range' object with two properties lower and upper.
let range = {
    lower: 1,
    upper: 10
};

/* arrayObject.filter(callback, contextObject);
The contexObject argument of the filter() method is optional. If you pass 
the this value, you canreference it by using this keyword inside the callback function.

call filter() methods of the 'data' array and pass in he 'isInRange()' 
function and the 'range' object. 
Because we pass in the 'range' object, inside the isInRang() function,
the 'this' keyword references to the range object.
*/

let numberInRange = dataArray.filter(isInRange, range);

// console.log(numberInRange); // [10, 1, 5]

/* 

condition ? expression_1 : expression_2 

*/

// var isLoggedIn = "True";

// isLoggedIn ? console.log("Login") : console.log("Logout");
  
// add() function is called with arguments a, b 
// and callback, callback will be executed just  
// after ending of add() function 

// function add(a, b, callback){ 
//     console.log(`The sum of ${a} and ${b} is ${a+b}.` +"<br>"); 
//     callback(); 
// } 

//     // disp() function is called just 
//     // after the ending of add() function  
// function disp(){ 
//     console.log('This must be printed after addition'); 
// } 

// // Calling add() function 
// add(5,6,disp);     
    

