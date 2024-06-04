// Function to fetch data
function fetchData() {
    return new Promise((resolve, reject) => {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => resolve(data))
        .catch(error => reject(error));
    });
  }
  
  // Using the function and handling the promise
  fetchData()
    .then(data => {
      console.log('Fetched Data:', data);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
  