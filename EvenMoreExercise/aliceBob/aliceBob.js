/*Exercise
Modify the previous program such that only the users Alice and Bob are greeted with their names.
*/

let name = prompt("What is your name?");
if(name == "Alice" || name == "Bob"){
    alert("Hello " + name)
}else{
    alert("Wrong Name! Goodbye!")
};
