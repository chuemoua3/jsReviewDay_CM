/*Exercise
Write a program that asks the user for a number n and prints the sum of the
numbers 1 to n
*/
function addSum(){
    var n = prompt("Enter a number!")
    var sum = 0;

    for(var i = 0; i <= n; i++){
        sum = sum + i;
        console.log(sum);
    }

}
addSum()


