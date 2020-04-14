/* Exercise 5
Modify the previous program such that only multiples of three or five are
considered in the sum, e.g. 3, 5, 6, 9, 10, 12, 15 for n=17
*/

var input = prompt('Type a number and multiple of three or five are in the sum')
var addSum = 0;

for (let i=1; i <= input; i++){
    
    if(i % 3 == 0 || i % 5 == 0){
        addSum += i;
    }
}

console.log(addSum)

/* Exercise 6
 Write a program that asks the user for a number n and gives them the possibility
to choose between computing the sum and computing the product of 1,…,n.
*/
var input = prompt('Type a number');
var input2 = prompt('Choose to add or multiply');
