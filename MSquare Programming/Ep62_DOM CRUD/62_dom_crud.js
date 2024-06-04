/*Document Object Model (DOM) CRUD */

//c = create
//creating <h1>Welcome to Yangon</h1>
const h1Element = document.createElement("h1");
const textNode = document.createTextNode("Welcom to Yangon");
h1Element.appendChild(textNode);
//putting into body tag
/*
    <body>
        <h1>Welcom to Yangon</h1>
    </body>
*/
const tagCollection = document.getElementsByTagName("body")// returm HTML collection array (not real array)
const bodyElement = tagCollection[0];
bodyElement.appendChild(h1Element);

//r = read
const readH1Element = document.getElementsByTagName("h1")[0];
console.log(
    "Text inside h1 element before update : ",readH1Element.textContent);

//u = update
readH1Element.textContent = "Welcome to Mandalay";
console.log("Text indsode h1 element ",readH1Element.textContent);

//d = delete
readH1Element.remove();