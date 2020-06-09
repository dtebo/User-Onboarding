import React, {useState, useEffect} from 'react';

import './App.css';

import Form from './components/Form/Form';
import Users from './components/Users/Users';

function App() {
  const [users, setUsers] = useState([]);

  const getUser = (user) => {
    // update our list of users with the new user
    setUsers([
      ...users,
      {...user}
    ]);
  };

  return (
    <div className="App">
      <Form getUser={getUser} />
      <Users userList={users} />
    </div>
  );
}

export default App;
