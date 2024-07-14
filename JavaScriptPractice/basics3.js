var marks =  Array(6)

var marks = new Array(20,34,23,45,26,70)

//or

var marks = [20,34,23,45,26,70]

console.log(marks[2]) //23
//re assign
marks[3]= 20

console.log(marks) //[20,34,23,45,26,70]

console.log("****************")
//5th position will not print 
marks.slice(2,5)
console.log(marks.length) //6

//want to add oneelement 
marks.push(100)
console.log(marks) //[20,34,23,45,26,70,100]




//delete element
marks.pop()
console.log(marks) 

marks.unshift(45)
console.log(marks)

//index of element
console.log(marks.indexOf(34))

//120 is in teh array or not
console.log(marks.includes(120))


//loop
    //sum of all elements
var sum = 0
for(let i = 0; i <marks.length; i++)
    {
       // console.log(marks[i])
sum = sum +marks[i]

    }
    console.log(sum)


    //another way
    //Array stream function
    //reduce is an method which will taek 2 arguments

   let totalsum = marks.reduce((sum, mark)=>sum+mark, 0)
   console.log(totalsum)

   //create a new array with even array of scores array[12,13,14,146,15]
   var scores= [12,13,14,146,15]
   var evenScores=[]
   for(let i = 0; i <scores.length; i++)
    {
        if(scores[i]%2==0)
            {
                evenScores.push(scores[i])
            }
    }
    console.log(evenScores)

    //but 2nd way

    let newFilterEvenScores = scores.filter(score=>score%2==0)

    console.log(newFilterEvenScores)

      //create a new array with even array of scores array[12,13,14,146,15] andmultiply with 3 ans sum those

      //with map means one value to new value

      let mapArrayScore = newFilterEvenScores.map(score=>score*3)
      console.log(mapArrayScore)

      let totalsumval= mapArrayScore.reduce((sum, val)=>sum+val,0)
     console.log(totalsumval)


     //------------

    // chaining 

    var scores1= [12,13,14,146,15]

    let sumVal = scores1.filter(score=>score%2==0).map(score=>score*3).reduce((sum, val)=>sum+val,0)

    console.log("stream chaining")
    console.log(sumVal)

    //sorting on array

    let fruits = ["jackfruit", "apple", "mango", "banana"]

    fruits.sort()
    console.log(fruits)
    //descending
    console.log(fruits.reverse())

    var scores1= [12, 13,14,146,15]

    //scores1.sort(function(a,b)
   // {
   //     return a+b;
   // })


   console.log(scores1.sort((a,b)=>a-b))




    


