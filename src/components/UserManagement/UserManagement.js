import React, { useState, useEffect } from 'react';
import './UserManagement.css';

const UserManagement = () => {
    const [users, setUsers] = useState([]);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [editingIndex, setEditingIndex] = useState(null);

    useEffect(() => {
        const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
        setUsers(storedUsers);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newUser = { username, password };

        if (editingIndex !== null) {
            users[editingIndex] = newUser;
            setEditingIndex(null);
        } else {
            users.push(newUser);
        }

        setUsers(users);
        localStorage.setItem('users', JSON.stringify(users));
        resetForm();
    };

    const handleEdit = (index) => {
        setUsername(users[index].username);
        setPassword(users[index].password);
        setEditingIndex(index);
    };

    const handleDelete = (index) => {
        users.splice(index, 1);
        setUsers(users);
        localStorage.setItem('users', JSON.stringify(users));
    };

    const resetForm = () => {
        setUsername('');
        setPassword('');
    };

    return (
        <div className="user-management">
            <h2>User Management</h2>
            <form onSubmit={handleSubmit} className="user-form">
                <label>
                    Username:
                    <input 
                        type="text" 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                        required 
                    />
                </label>
                <label>
                    Password:
                    <input 
                        type="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                    />
                </label>
                <button type="submit">{editingIndex !== null ? 'Update User' : 'Add User'}</button>
                <button type="button" onClick={resetForm}>Cancel</button>
            </form>
            <table className="user-table">
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={index}>
                            <td>{user.username}</td>
                            <td>
                                <button onClick={() => handleEdit(index)}>Edit</button>
                                <button onClick={() => handleDelete(index)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserManagement;
