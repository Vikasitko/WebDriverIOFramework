let day = "Tuesday"
//let day = 'Tuesday'
console.log(day.length) //7
let subString = day.slice(0,4)

console.log(subString)

console.log(day[2])

//tue day

let splitDay = day.split("s")
console.log(splitDay[1].length)
console.log(splitDay[1].trim().length)

//string to number
let date = '23'
let nextDate= '28'
let diff = parseInt(nextDate)- parseInt(date) //parseInt used to convert from string to number
console.log(diff)

diff.toString() //number to string

//Concatenate 

let newQuote = day + " is Friday"
console.log(newQuote)

//index of 

let val = newQuote.indexOf("day") 
console.log(val)

//how many times day is occured

//if not found value will be -1
let count = 0
let value = newQuote.indexOf("day")
while(value!== -1)
    {
        count++
        value = newQuote.indexOf("day", value+1)
    } 
console.log(count)




