/*Useful DOM Methods and Properties */

//script in <head> or <body> test
const bodyElement = document.getElementsByTagName("body")[0]; //HTMLCollection []
console.log("Body Element : ",bodyElement);

const parentDiv = document.getElementsByClassName("parent")[0] //HTMLCollection []

parentDiv.innerHTML = "";//removing all child element in the parent tag

//for test comment out each of following two line 
//parentDiv.innerHTML = "<h1> hello </h1>";
parentDiv.innerHTML = "lwin moe";
console.log(parentDiv);

const divWithID = document.getElementById("myID");
console.log("divWithID : ", divWithID); 
/*
return only one element wiht given ID (that's why id (in html) must be unique) 
*/


/* Let's create that template */
/*
    <div class="parent">
        <div class="child">Child 1</div>
        <div class="child">Child 2</div>
    </div>
*/

//dry မလိုက်နာပဲ သိတာနဲ့ရေးမယ်
const parentDivSec = document.createElement("div");

const childDivOne = document.createElement("div");
const textInChildDivOne = document.createTextNode("SecChild 1");
childDivOne.appendChild(textInChildDivOne);

const childDivTwo = document.createElement("div");
const textInChildDivTwo = document.createTextNode("SecChild 2");
childDivTwo.appendChild(textInChildDivTwo);

parentDivSec.appendChild(childDivOne);
parentDivSec.appendChild(childDivTwo);

bodyElement.appendChild(parentDivSec);

//let's dry
const parentDivTh = document.createElement("div");

const thChildDivOne = document.createElement("div");
thChildDivOne.append("Third Child One");

const thChildDivTwo = document.createElement("div");
thChildDivTwo.append("Third Child Two");

parentDivTh.append(thChildDivOne,thChildDivTwo);

bodyElement.appendChild(parentDivTh);

//let's add "class"
parentDivTh.classList.add("parentTh");
thChildDivOne.classList.add("childOneTh");
//for test comment out each of following two line 
thChildDivTwo.classList.add("childTwoTh","removeClass");
thChildDivTwo.classList.remove("removeClass");


//Style css reading and writing
const styleTestDiv = document.getElementsByClassName("styleTest")[0];

//ဒီလိုဆို inline style ကိုပဲ ယူလို့ရ
/*
console.log("styleTestDiv's width : ",styleTestDiv.style.width);
console.log("styleTestDiv's height : ",styleTestDiv.style.height);
console.log(
    "styleTestDiv's background color : ",
    styleTestDiv.style.backgroundColor
);
*/

console.log("styleTestDiv's width : ",getComputedStyle(styleTestDiv).width);
console.log("styleTestDiv's width : ",getComputedStyle(styleTestDiv).height);
console.log("styleTestDiv's width : ",getComputedStyle(styleTestDiv).backgroundColor);
