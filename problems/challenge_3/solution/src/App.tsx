import * as React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import UserCard from "./components/userCard/UserCard";

export interface User {
  id: number;
  name: string;
}

const App = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((json) => {
        setUsers(json);
      })
      .catch((err) => console.log(err));
  }, []);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = (
    _event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    id: number
  ) => {
    setUsers(users.filter((user) => user.id != id));
  };

  return (
    <div className="users">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {filteredUsers?.map((user) => (
        <UserCard
          key={user.id}
          name={user.name}
          id={user.id}
          onClick={handleDelete}
        />
      ))}
    </div>
  );
};

export default App;
