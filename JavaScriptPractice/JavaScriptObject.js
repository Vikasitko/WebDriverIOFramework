//object is collect of properties
//person is properties holding two values

let person = {
    firstName : 'Tim',
    lastName  : 'Joe',
    age : 24, 
    fullname : function()
    {
      console.log(this.firstName+this.lastName)
    }
}


console.log(person.fullname())  //because it is function so given as fullname()
console.log(person.firstName)
//2nd way
console.log(person['lastName'])

//re assign 
person.firstName= 'Vikas'
console.log(person.firstName)
person.gender = 'male'
console.log(person.gender)
//can be deleted 
delete person.gender
console.log(person)

//property exist,  peron is object

console.log('geneder' in person)

//if u want to print all properties

for(let key in person)
    {
        //console.log(key) 
          console.log(person[key])
    }
