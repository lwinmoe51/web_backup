/*
*       order from customer
*               |     
*               v
*       fetch ingredients
*               |
*               v
*       start production
*               |
*               V
*           Serve
*   ===========================================
*       store room  ===> back end
*       kitchen     ===> front end
*   ===========================================
*   Time (seconds)
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

let order = (Fruits_name,call_production) => {
    setTimeout(()=>{
        console.log(`${stocks.Fruits[Fruits_name]} was selected`);

        call_production();
    },2000);

    //if u call this function here that will run first bcuz this take 0 sec to run
    //we need to order first and then production
    //so move into fruit selected function inside
    //call_production();
};

// this code writing design is called callback_hell
//callback make relationship between function 
//like her childer=>parent=>grand childern=>grand grand children=>grand grand grand chidren...etc
let production = () => {
    setTimeout(()=>{
        console.log("production has started");

        setTimeout(()=>{
            console.log("the fruit has been chopped");

            setTimeout(()=>{
                console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);

                setTimeout(()=>{
                    console.log("the machine was started");

                    setTimeout(()=>{
                        console.log(`icecream was placed on ${stocks.holder[0]}`);

                        setTimeout(()=>{
                            console.log(`${stocks.toppings[0]} was added as topping`);

                            setTimeout(()=>{
                                console.log("serve icecream");
                            },2000);
                        },3000);
                    },2000);
                },1000);
            },1000);
        },2000);
    },0000);
    
};

order(0,production); //0 is index of array(Fruits) in stocks object