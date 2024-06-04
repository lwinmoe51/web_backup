const myButton = document.getElementById("myButton");
const image = document.getElementsByClassName("pokemon")[0];
const imageArray = [
    "https://i.pinimg.com/564x/0e/45/45/0e45456fc06caebe6add53c756b6836e.jpg",
    "https://i.pinimg.com/564x/29/72/c8/2972c84826e4609f2e2876d98916034f.jpg",
    "https://i.pinimg.com/564x/38/61/6f/38616f4a0f45ba196a176620cd564e87.jpg",
    "https://i.pinimg.com/564x/94/48/31/9448314add914df1237d538394bfa6d2.jpg",
    "https://i.pinimg.com/564x/a8/69/91/a869915fdb507d7de8f23739aa989535.jpg"
];

let counter = 0;
const myFunction = () => {
    counter += 1;
    if(counter == 5){
        counter = 0
    }
    image.src = imageArray[counter];
    console.log(counter);
}

myButton.addEventListener("click",myFunction);