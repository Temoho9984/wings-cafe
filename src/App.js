import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import UserManagement from './components/UserManagement/UserManagement';
import ProductManagement from './components/ProductManagement/ProductManagement';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <header>
          <h1>Temoo_The_Plug Management System</h1>
          <nav>
            <Link to="/">User Management</Link>
            <Link to="/products">Product Management</Link>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<UserManagement />} />
            <Route path="/products" element={<ProductManagement />} />
          </Routes>
        </main>
        <footer>
          <p>&copy; 2025 Temoo_The_Plug. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
