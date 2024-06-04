const customers = [
    { name: "customers1", email: "customer1@gmail.com", gender: "female"},
    { name: "customers2", email: "customer2@gmail.com", gender: "male"},
    { name: "customers3", email: "customer3@gmail.com", gender: "female"},
    { name: "customers4", email: "customer4@gmail.com", gender: "male"},
]

//ရိုးရိုး for loop သုံးပြီး array ရဲ့ element တစ်ခုချင်းစီတိုင်းက obj တစ်ခုစီတိုင်းမှာ  bookings ဆိုတဲ့ empty array တစ်ခုထပ်ထည့်တာ
/*for (let i=0; i<customers.length; i++){
    customers[i].bookings = [];
}

console.log(customers);*/

//map သုံးရေမယ်
const result = customers.map(element =>{
    element.bookings = [];
    return element;
}); 

console.log(result);

//eg2
let nums = [1,2,3,4,5];

const result2 = nums.map(num => num*2);
console.log(result2);