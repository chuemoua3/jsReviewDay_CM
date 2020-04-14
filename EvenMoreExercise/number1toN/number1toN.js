/*Exercise
Write a program that asks the user for a number n and prints the sum of the
numbers 1 to n
*/
var input = prompt('Type it in a number and I will add it')
var addSum = 0;
for (let i =1; i <= input; i++){
    addSum += i;
}

console.log(addSum)

