import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    axios.get("http://localhost:5000/users")
      .then((response) => setUsers(response.data))
      .catch((error) => console.log("Error fetching users", error));
  };

  const deleteUser = (id) => {
    axios.delete(`http://localhost:5000/users/${id}`)
      .then(() => {
        alert("User deleted successfully!");
        setUsers(users.filter(user => user.id !== id));
      })
      .catch(error => console.log("Error deleting user", error));
  };

  return (
    <div>
      <h1>User List</h1>
      <Link to="/add"><button>Add User</button></Link>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name} - {user.email} 
            <Link to={`/edit/${user.id}`}> <button>Edit</button></Link>
            <button onClick={() => deleteUser(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
