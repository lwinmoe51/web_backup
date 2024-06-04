//example 3
const main = document.getElementById('main');

//===========section 1==============
//uncomment section 1 and comment section 2 to test section 1 code
//that will not work example
//const scriptHTML = '<script>alert("Alert from innerHTML");</script>'; //that alert will not execute
// main.innerHTML = scriptHTML;
//===========section 1================

//===========section 2================
//uncomment section 2 and comment section 1 to test section 2 code
const externalHTML = `<img src='1' onerror='alert("Error loading image")'>`;
//show the alert
main.innerHTML= externalHTML;