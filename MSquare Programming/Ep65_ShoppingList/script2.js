const inputTag = document.getElementsByClassName("form-control")[0];
const shoppingListContainerTag = document.getElementsByClassName("shoppingListContainer")[0];
let productId = 1;

const changeHandler = (event) => {
  const inputValue = event.target.value;

  // Create elements for product information
  const productIdTag = document.createElement("span");
  productIdTag.classList.add("productIdTag");
  productIdTag.textContent = productId;

  const productText = document.createElement("span");
  productText.classList.add("productText");
  productText.textContent = ". " + inputValue;

  const productName = document.createElement("span");
  productName.classList.add("productName");
  productName.append(productIdTag, productText);

  // Create product wrapper and trash icon
  const productWrapper = document.createElement("div");
  productWrapper.classList.add("productWrapper");
  productWrapper.append(productName);

  const trashIconTag = document.createElement("i");
  trashIconTag.classList.add("fa-regular", "fa-trash-can");

  // Combine product and trash icon in a parent element
  const trashAndListParent = document.createElement("div");
  trashAndListParent.classList.add("count"); // Assuming this class is used for counting items
  trashAndListParent.append(productWrapper, trashIconTag);

  // Add functionality to toggle "purchased" class on click
  productWrapper.addEventListener("click", () => {
    productWrapper.classList.toggle("purchased");
  });

  // Add functionality to delete item and update numbering
  trashIconTag.addEventListener("click", () => {
    shoppingListContainerTag.removeChild(trashAndListParent);

    // Update numbering for remaining items
    const remainingItems = shoppingListContainerTag.querySelectorAll(".count");
    for (let i = 0; i < remainingItems.length; i++) {
      const remainingProductIdTag = remainingItems[i].querySelector(".productIdTag");
      remainingProductIdTag.textContent = i + 1; // Update textContent with new number (starting from 1)
    }

    productId = remainingItems.length + 1; // Update productId for next item
    console.log("inside:", productId);
  });

  // Append the new item to the shopping list
  shoppingListContainerTag.append(trashAndListParent);
  
  console.log("hah1:",productId);
  inputTag.value = "";
  productId++;
  console.log("hah2:",productId);
};

inputTag.addEventListener("change", changeHandler);
