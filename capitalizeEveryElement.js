/*Exercise - Capitalize every element
1. Write a short function to capitalize every element of the array.
2. You must use the Array#map function and the String#uppercase function
*/

var element = ['hello', 'hey', 'hi'];

capitalize = function(i){   
    //using the string#uppercase function
    return i.toUpperCase();
};
//array#map function replaces original array with new "produced array" in the function
element = element.map(capitalize);
console.log(element)

