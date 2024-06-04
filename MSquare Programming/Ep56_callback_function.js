const fetchData = (callback) => {
    console.log("fetching data from server ...");
    // asynchronous code
    // asynchronous code
    // asynchronous code
    console.log("Finishing fetching data...");
    callback();
}

//ယခုလို scope မတူတဲ့ function တွေကို callback function သုံးပြီးတာခေါ်တာမှာ အသုံးဝင်
//global scope
const outerfunction = () => {
    //local scope funcion\
    const showUserProfile = () => {
        console.log("Code show user profile here...");
    }
    //callback function ကို parameter အနေနဲ့ ထည့်တာမို့ () မထည့်မိဖို့ သတိပြု
    //() ထည့်မိရင် function ကို call တာဖြစ်သွားမယ်
    fetchData(showUserProfile); //callback function 
}

outerfunction();