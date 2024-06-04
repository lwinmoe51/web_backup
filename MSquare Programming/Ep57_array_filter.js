const customers = [
    { name: "customers1", email: "customer1@gmail.com", gender: "female", age: 20},
    { name: "customers2", email: "customer2@gmail.com", gender: "male", age: 25},
    { name: "customers3", email: "customer3@gmail.com", gender: "female", age: 30},
    { name: "customers4", email: "customer4@gmail.com", gender: "male", age: 35},
]

const isMale = (arrayElement) => {
  // Check if gender is equal to the desired value (replace "male" with your target gender)
  return arrayElement.gender === "male"; 
}

//ပိုတိုအောင် ရေးနည််း
//const isMale = arrayElement => arrayElement.gender == "male" && arrayElement.age > 25;


let result = customers.filter(isMale);
console.log(result); // Array containing only male customers
