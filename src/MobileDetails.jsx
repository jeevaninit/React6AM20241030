import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import axios from "axios";

function MobileDetails() {
  const { id } = useParams(); // Path parameter (from URL /home/:id)
  const [searchParams] = useSearchParams(); // Query parameter
  const mobileName = searchParams.get("name"); // Get 'name' from query params

  const [mobiledata, setMobiledata] = useState(null);
  const [error, setError] = useState(null); // Track errors

  // Fetch mobile details by ID
  useEffect(() => {
    axios
      .get(`http://localhost:4500/home/${id}`)
      .then((response) => {
        // Check if response data is an array and extract the first element
        const data = Array.isArray(response.data) ? response.data[0] : response.data;
        setMobiledata(data);
      })
      .catch((error) => {
        console.error("Error fetching mobile details:", error);
        setError("Failed to load mobile details. Please try again later.");
      });
  }, [id]);

  if (error) {
    return <div style={{ color: "red" }}>{error}</div>;
  }

  if (!mobiledata) {
    return <div>Loading...</div>; // Show loading state
  }

  return (
    <div>
      <h1>Mobile Details</h1>
      <p><strong>ID:</strong> {mobiledata.id}</p>
      <p><strong>Name:</strong> {mobileName || mobiledata.name}</p> {/* Fallback to API name */}
      <p><strong>Price:</strong> {mobiledata.price}</p>
      <p><strong>RAM:</strong> {mobiledata.ram}</p>
      <p><strong>Storage:</strong> {mobiledata.storage}</p>
    </div>
  );
}

export default MobileDetails;
