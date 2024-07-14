//import Person from "./jsclass"

import Person from './jsclass'

class Pet extends Person
{
    //get location() //overriden method
    //{
       // return "BlueCross"
    //}

    constructor(firstName, lastName)
    {
        //call parent class contructor
        super(firstName, lastName)
    }

}

let pet = new Pet("Sam", "JulieCat")
console.log(pet.fullName())
