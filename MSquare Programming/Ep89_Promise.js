
const login =  ()=> {
    const loginPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("name");
        }, 3000);
    });

    return loginPromise;
    
}

const fetchData = ()=>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data from api");
        }, 5000);
    });
}

const updateNewFeed = (apiData) => {
    console.log("NewFeed is update :",apiData);
}

login()
    .then((LoginData) => {
        console.log("Finish Login: ", LoginData);
        fetchData()
            .then((data)=>{
                console.log("Data Arrive :", data);
                updateNewFeed(data);
            })
            .catch((fetchError)=>{
                console.log("Error fetching :", fetchError);
            })
    })
    .catch((loginError) => {
        console.log("Login Fail: ",loginError);
    })