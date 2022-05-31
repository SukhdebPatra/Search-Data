import React, { useState } from "react";
import "./Search.css";
const USERS = [
  { id: 1, name: "Andy", age: 32 },
  { id: 2, name: "Bob", age: 32 },
  { id: 3, name: "Tom Hulk", age: 40 },
  { id: 4, name: "Tom Hank", age: 50 },
  { id: 5, name: "Audra", age: 30 },
  { id: 6, name: "Anna", age: 68 },
  { id: 7, name: "Tom", age: 34 },
  { id: 8, name: "Tom Riddle", age: 28 },
  { id: 9, name: "suraj", age: 23 },
];

const Search = () => {
  const [name, setName] = useState("");
  const [foundUsers, setFoundUsers] = useState(USERS);

  const filter = (e) => {
    const keyword = e.target.value;
    console.log(keyword);

    if (keyword !== "") {
      let results = USERS.filter((user) => {
        return user.name.toLowerCase().startsWith(keyword.toLowerCase());
      });
      setFoundUsers(results);
    }
    setName(keyword);
  };

  return (
    <>



      <div className="container">
        <input
          type="search"
          value={name}
          onChange={filter}
          placeholder="Search Data" className="input"
        />
      </div>
      <div className="user-list">
        {foundUsers && foundUsers.length > 0 ? (
          foundUsers.map((user) => (
            <li key={user.id} className="user">
              <span className="user-id">{user.id}</span>
              <span className="user-name">{user.name}</span>
              <span className="user-age">{user.age} year old</span>
            </li>
          ))
        ) : (
          <h1>No results found!</h1>
        )}
      </div>
  
    </>
  );
};

export default Search;
