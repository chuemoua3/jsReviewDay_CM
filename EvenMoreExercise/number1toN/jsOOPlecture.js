function Teacher(name, subject, tenure){        
    this.name = name
    this.subject = subject
    this.tenure = tenure
}

//calling the constructor function which  is the "new" Teacher
var teacher1 = new Teacher("Sharon", "History", 13)
var teacher2 = new Teacher("jon", "web dev", 2)
var teacher3 = new Teacher()
var teacher4 = new Teacher()
var teacher5 = new Teacher()
var teacher6 = new Teacher()



console.log(teacher1.name)              //can also do console.log(teacher1['name'],which is throwing it as a string)
console.log(teacher2.tenure)