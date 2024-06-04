// A callback function is a function passed into another function as an argument, which is invoked the outer function to complete some kind of routine or OfflineAudioCompletionEvent.

console.log("Example 1")
//this function will become as callback function
function greeting(name){
    console.log(`Hello, ${name}`);
}

//main function....
//callback parameter(function type) of processUserInput
function processUserInput(callback){
    const name = "Lwin Moe";
    callback(name);
}

//greeting function passed into processUserInput function as an argument
processUserInput(greeting);

console.log("Example 2");

//we need to understand synchronous and Asynchronous to better understand callback
console.log("Example 2.1 Synchronous");

//javascript run top to bottom
//Synchronous
console.log("I");
console.log("eat");
console.log("ice cream");
console.log("with a");
console.log("spoon");

console.log("Example 2.2 Asynchronous");

//Asynchronous
console.log("I");
console.log("eat");

//this setTimeout function is asynchronous function bcuz this fun will execute after given time
//javascript run top to the bottom but
//javascript will run through over this function . 
//I
//eat
// ||     =====> wait 4 sec
// V                 ||
//with a             ||
//spoon              ||
//                   V
//ice cream     <======
setTimeout(()=>{
    console.log("ice cream");
},4000);


console.log("with a");
console.log("spoon");
