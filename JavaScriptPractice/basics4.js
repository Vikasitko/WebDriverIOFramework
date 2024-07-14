//function - block of code

function add(a,b)
{
return a+b
}

let sum = add(2,3) ///here we retun a+b in sum variable and printing
console.log(sum)

//2nd way
//do not have name => Anyonymus function --function expression 

let sumOfInteger =  function(c,d)
{
    return c+d
}

console.log(sumOfInteger(4,5))

//another shortcut
//=> is called fat file
let sumOfNumber =  (c,d)=>c+d

//assign variable
console.log(sumOfNumber(8, 9))

//var - global if declared globally/function level

var greet = "Evening"
if(1==1)
    {
        var greet = "afternoon"
    }
function add1(a,b)
{
    var greet = "Morning"
return a+b
}

let sum1 = add(2,3) ///here we retun a+b in sum variable and printing
console.log(sum1)
console.log(greet)


//let - global level /block level {}

let greet1 = "Evening"
if(1==1)
    {
        let greet1 = "afternoon"
    }
function add2(a,b)
{
    let greet1 = "Morning"
return a+b
}

let sum2 = add(2,3) ///here we retun a+b in sum variable and printing
console.log(sum2)
console.log(greet1)
//difference
//let can not be re declared but var can be
//scope level
//var and let can be re initialize 
//cont - can not re initialize