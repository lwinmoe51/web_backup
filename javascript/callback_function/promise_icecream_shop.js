
// A Promise is made 
//         |
//         V
//      Pending
//         |
//         V
//      |=======|
//      |       |
//      V       V
//   Resolve  Reject 
//      |       |
//      V       |
//    .then     |
//      |       |
//      V       |
//    .then    .catch (if encounter error)
//      |       |
//      =========
//          |
//          V
//      .finally
//========================================
//We need to understand four more things first ->
//  *Relationship between time and work 
//  *Promise chaining
//  *Error handling
//  *The .finally handler
//=========================================
//Relationship between time and work
/* Time (seconds)
*   #1 plce order           => 2
*   #2 cut the fruit        => 2
*   #3 add water and ice    => 1
*   #4 start the machine    => 1
*   #5 select contatiner    => 2
*   #6 select toppings      => 3
*   #7 serve ice cream      => 2
*/

let stocks = {
    Fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid: ["wate", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "penuts"]
};

let is_shop_open = true;
//relationship between time and work
// u can also write like that (work , time)
let order = (time, work) => {
    //pending state
    return new Promise( (resolve, reject)=>{
        if(is_shop_open){

            setTimeout( ()=>{
                resolve( work() );
            },time );
            
        }
        else{
            reject(console.log("our shop is closed"));
        }
    } );
};

// u can't put ; at the end of order function call bcoz there are .then() functions. If u put ; ,.then() will not work
order(2000, ()=>{console.log(`${stocks.Fruits[0]} was selected.`)})
//method 2 {} doesn't need when there is one staement
//order(2000, ()=>consloe.log(`${stocks.Fruits[0]} was selected.`)) 

//promise chainging 
//return is important. if we don't return, it will not work proparly
.then(()=>{
    
    return order(0000, ()=>console.log("Production has started."));
})


.then(()=>{
    return order(2000, ()=>console.log("The fruit was chopped."));
})


.then(()=>{
    return order(1000,()=>{
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was selected.`)
    })
})


.then(()=>{
    return order(1000, ()=>console.log("start the machine"))
})

.then(()=>{
    return order(2000, ()=>{
        console.log(`ice cream placed on ${stocks.holder[0]}`)
    })
})

.then(()=>{
    return order(3000, ()=>{
        console.log(`${stocks.toppings[0]} was selected`)
    })
})

.then(()=>{
    return order(1000, ()=>console.log("ice cream was served."))
})

//error handling // if rejected, .catch will run pass over thorough .then fuctions above
.catch(()=>{
    console.log("Customer left.");
})

//.finally part //this will run wether resolve() or reject()
.finally(()=>{
    console.log("day ended, shop is shut down ")
})