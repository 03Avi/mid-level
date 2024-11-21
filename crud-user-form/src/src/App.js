import React, { useState } from "react";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
import "./styles.css";

function App() {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  // Add a new user
  const addUser = (user) => {
    setUsers((prev) => [...prev, { ...user, id: Date.now().toString() }]);
  };

  // Update an existing user
  const updateUser = (updatedUser) => {
    setUsers((prev) =>
      prev.map((user) => (user.id === updatedUser.id ? updatedUser : user))
    );
    setEditingUser(null);
  };

  // Delete a user
  const deleteUser = (id) => {
    setUsers((prev) => prev.filter((user) => user.id !== id));
  };

  return (
    <div className="app">
      <h1>User Management</h1>
      <UserForm
        onAddUser={addUser}
        onUpdateUser={updateUser}
        editingUser={editingUser}
        setEditingUser={setEditingUser}
      />
      <UserList
        users={users}
        onEditUser={setEditingUser}
        onDeleteUser={deleteUser}
      />
    </div>
  );
}

export default App;
