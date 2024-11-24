// Import the node-fetch package
const fetch = require('node-fetch');

// Function to fetch data from the API and process it
async function fetchAndProcessData() {
  try {
    // Fetch data from JSONPlaceholder API
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    
    // Check if the response is ok (status 200)
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    
    // Parse the JSON response
    const data = await response.json();
    
    // Extract the names and emails of users
    const extractedData = data.map(user => ({
      name: user.name,
      email: user.email
    }));

    // Filter out users
    const filteredData = extractedData.filter(user => user.name.includes('Leanne'));

    // Sort users alphabetically by name
    const sortedData = filteredData.sort((a, b) => a.name.localeCompare(b.name));

    // Display the data
    console.log('Processed Data:', sortedData);
  } catch (error) {
    console.error('There was an error fetching the data:', error);
  }
}

// Run the function to fetch and process the data
fetchAndProcessData();
