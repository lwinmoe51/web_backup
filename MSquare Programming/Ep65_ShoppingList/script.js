const inputTag = document.getElementsByClassName("form-control")[0];
const shoppingListContainerTag = document.getElementsByClassName("shoppingListContainer")[0];
let productId = 1;

const changeHandler = (event) =>{

    const inputValue = event.target.value;
    //<span class="productName">
    //  <span class="productIdTag">productID</span>
    //  <span class="productText">product</span>
    //</span>

    //create productIdTag and give class
    const productIdTag = document.createElement("span");
    productIdTag.classList.add("productIdTag");
    // <span class="productIdTag">productID</span>
    productIdTag.append(productId);
    

    const product = ". " + inputValue;
    const productText = document.createElement("span");
    productText.classList.add("productText");
    //<span class="productText">product</span>
    productText.append(product);
    
    const productName = document.createElement("span");
    productName.classList.add("productName");
    productName.append(productIdTag,productText);

    // <div class="productWrapper">
    //     <span class="productName">poduct</span>
    // </div>
    const productWrapper = document.createElement("div");
    productWrapper.classList.add("productWrapper");
    productWrapper.append(productName);

    //<i class="fa-regular fa-trash-can"></i>
    const trashIconTag = document.createElement("i");
    trashIconTag.classList.add("fa-regular","fa-trash-can");

    const trashAndListParent = document.createElement("div");
    trashAndListParent.classList.add("count");
    /*
    <div>//trashAndListParentDiv
        <div class="productWrapper">
            <span class="productName">poduct</span>
        </div>
        <i class="fa-regular fa-trash-can"></i>
    </div>
    */
    trashAndListParent.append(productWrapper,trashIconTag);
    

    shoppingListContainerTag.append(trashAndListParent);

    productWrapper.addEventListener("click",()=>{
        const isPurchased = productWrapper.classList.contains("purchased");
        if(isPurchased){
            productWrapper.classList.remove("purchased");
        }else{
            productWrapper.classList.add("purchased");
        }
    });

    trashIconTag.addEventListener("click",()=>{
        trashAndListParent.remove();
        const numberOfList = document.getElementsByClassName("count").length;
        console.log(productIdTag.textContent);
        console.log(productText.textContent)
        let deleteId = 
        
        productId = 1;
        for (let i = 0; i < numberOfList.length; i++) {
            console.log('hi');
            productIdTag.textContent = productId;
            productId++;
        }
    });
    

    
    inputTag.value = "";
    productId += 1;
    
}
inputTag.addEventListener("change",changeHandler);