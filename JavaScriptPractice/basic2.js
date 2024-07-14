const flag = true
if(!flag)
    {
console.log("Condition satisfied")
    }
    else
    {
        console.log(flag)
        console.log("Condition not satisfied")
    }


//while loop is used when it is true , it will continue keep executing 

   /* while(true)
        {
          
            console.log("I am inside loop")
         
        }*/

        let i = 0;
   // while(i<10)
       // {
         //   i++
            //i = i+1
          //  console.log(i)
       // }

        //In do while , one round of loop will run before check condition

        do
        {
        i++
        }
        while(i>10);

            {
           console.log(i)
            }


//for loop

console.log("############################")
let n = 0
for(let k = 1; k <=100; k++)

    if(k%2==0 && k%5==0)
    {
        n++
        console.log(k)
        if(n==3)
            break
    }