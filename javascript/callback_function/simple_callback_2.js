console.log("Callback function");
console.log("Example 3");
//we will make this code to callback function
//from start here
function one(){
    console.log("step 1");
}
function two(){
    console.log("step 2");
}

one();
two();
//end here
//making above two funtion as callback

function three(call_four){
    console.log("step 3 complete. please call step 4");
    call_four();
}

function four(){
    console.log("step 4");
}

three(four);