import React, { useEffect, useState } from 'react';

const FetchApiData = () => {
  const [data, setData] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((json) => setPosts(json));
  }, []);

  const listItemStyle = {
    listStyleType: 'none',
    margin: '0px 50px',

  };

  return (
    <div>
      <h1>Fetch API Data</h1>

      <h2>Users:</h2>
      <ul style={{ textAlign: 'left',    display:'flex',
    flexDirection:'column',
    flexWrap:'wrap',gap:'20px' }}>
        {data.map((item) => (
          <li style={listItemStyle} key={item.id}>
            <p>{item.name} - {item.username}</p>
            <p style={{ background: '#ccc' }}>{item.address.city} - {item.address.zipcode}</p>
          </li>
        ))}
      </ul>

      <h2>Posts:</h2>
      <ul style={{ textAlign: 'left',display:'flex',
    flexDirection:'column',
    flexWrap:'wrap',gap:'20px' }}>
        {posts.map((postItem) => (
          <li style={listItemStyle} key={postItem.id}>
            <p>{postItem.title}</p>
            <p style={{ background: '#ccc' }}>{postItem.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FetchApiData;
