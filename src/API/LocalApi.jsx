import React, { useEffect, useState } from 'react';

const ApiList = () => {
  // State to hold the API data
  const [data, setData] = useState([]);

  useEffect(() => {
    // Function to fetch API data
    const fetchData = async () => {
      try {
        // Fetch data from the API
        const response = await fetch('http://localhost:4500/home');

        // Check if the response is successful
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Parse the response JSON
        const json = await response.json();

        // Update the state with the fetched data
        setData(json);
      } catch (error) {
        // Log any errors that occur during the fetch
        console.error('Error fetching data:', error.message);
        // You may also want to set an error state for UI feedback
      }
    };

    // Call the fetchData function when the component mounts
    fetchData();
  }, []); // The empty dependency array ensures this effect runs once after the initial render

  return (
    <div className='container'>
      <h1>Welcome to Local API </h1>
      {/* Render the data */}
      {data.map((item) => (
        <p key={item.id}>{item.name} - {item.price} - {item.ram} - {item.storage}</p>
      
      ))}
    </div>
  );
};

export default ApiList;
