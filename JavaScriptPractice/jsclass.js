export default class Person //means exporting and available for public use
{
age = 28
//location = "Canada"
//we can create properties with getter method  and we can create page as properties

get location() //getter
{
    return "Canada"
}
//Constructor is method which executes by default when you create object of the class
//instance variable
constructor(firstName, lastName)
 
{
    this.firstName= firstName
    this.lastName= lastName

}
//method
fullName()
{
    console.log(  this.firstName + this.lastName)
}

}

//object creation with help of new operator

let person1 = new Person("Tim", "Jone")

let person2 = new Person("Krish", "Alexa")

console.log(person1.age)

console.log(person1.location)

console.log(person1.fullName())

//let person3 = new Person("Vikas", "Singh")
//console.log(person3.fullName())


let person = new Person("Vikas", "Singh")
console.log(person.fullName())


