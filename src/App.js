import React, { useState } from 'react';
import AddUser from './Components/Users/AddUser';
import UserList from './Components/Users/UserList';


function App() {
  const [userList, setUserList] = useState([]);
  const addUserHandler = (userName, userAge) => {
    setUserList((prevUser) => {
      return [...prevUser, { name: userName, age: userAge, id: Math.random().toString() }];
    });
  };
  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={userList} />
    </div>
  );
}

export default App;
