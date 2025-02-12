import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    axios.get(`http://localhost:5000/users/${id}`)
      .then(response => {
        setName(response.data.name);
        setEmail(response.data.email);
      })
      .catch(error => console.log("Error fetching user details", error));
  }, [id]);

  const handleUpdate = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:5000/users/${id}`, { name, email })
      .then(() => {
        alert("User updated successfully!");
        navigate("/");
      })
      .catch(error => console.log("Error updating user", error));
  };

  return (
    <div>
      <h1>Edit User</h1>
      <form onSubmit={handleUpdate}>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default EditUser;
