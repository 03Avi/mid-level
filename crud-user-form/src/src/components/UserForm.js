import React, { useState, useEffect } from "react";

function UserForm({ onAddUser, onUpdateUser, editingUser, setEditingUser }) {
  const [formData, setFormData] = useState({ name: "", email: "" });

  // Load editing user data into form
  useEffect(() => {
    if (editingUser) {
      setFormData(editingUser);
    }
  }, [editingUser]);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingUser) {
      onUpdateUser(formData);
    } else {
      onAddUser(formData);
    }
    setFormData({ name: "", email: "" });
  };

  // Cancel editing
  const handleCancel = () => {
    setFormData({ name: "", email: "" });
    setEditingUser(null);
  };

  return (
    <form className="user-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <button type="submit">{editingUser ? "Update" : "Add"} User</button>
      {editingUser && (
        <button type="button" onClick={handleCancel} className="cancel-btn">
          Cancel
        </button>
      )}
    </form>
  );
}

export default UserForm;
