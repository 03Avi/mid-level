import React from "react";

function UserList({ users, onEditUser, onDeleteUser }) {
  return (
    <ul className="user-list">
      {users.map((user) => (
        <li key={user.id} className="user-item">
          <div>
            <strong>{user.name}</strong> - {user.email}
          </div>
          <div>
            <button onClick={() => onEditUser(user)} className="edit-btn">
              Edit
            </button>
            <button onClick={() => onDeleteUser(user.id)} className="delete-btn">
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default UserList;
