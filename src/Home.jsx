import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Home() {
  const [users, setUsers] = useState([]);

  const [mobiledata,setMobiledata]=useState([]);


  // Fetch users from JSONPlaceholder
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then((response) => setUsers(response.data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  useEffect(() => {
    axios.get("http://localhost:4500/home")
      .then((response) => setMobiledata(response.data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);


  return (
    <div>
      <h1>List of Mobiles</h1>
    <ul>
        {mobiledata.map((mobile) => (
          <li key={mobile.id}>
            {/* Link to UserDetails with Path and Query Parameters */}
            <Link to={`/mobile/${mobile.id}?name=${mobile.name}`}>
              {mobile.name}
            </Link>
          </li>
        ))}
      </ul>

      <h1>List of Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {/* Link to UserDetails with Path and Query Parameters */}
            <Link to={`/user/${user.id}?name=${user.name}`}>
              {user.name}
            </Link>
          </li>
        ))}
      </ul>

    </div>
  );
}

export default Home;
