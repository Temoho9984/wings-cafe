<<<<<<< HEAD
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Logo.jpeg';

const Header = () => {
    return (
        <header>
            <div className="logo-container">
                <Link to="/">
                    <img src={logo} alt="Wings Cafe Logo" className="logo" />
                </Link>
            </div>
            <h1>Wings Cafe Inventory</h1>
            <nav>
                <Link to="/">Dashboard</Link>
                <Link to="/products">Product Management</Link>
                <Link to="/users">User Management</Link>
            </nav>
        </header>
    );
};

export default Header;
=======
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Logo.jpeg';

const Header = () => {
    return (
        <header>
            <div className="logo-container">
                <Link to="/">
                    <img src={logo} alt="Wings Cafe Logo" className="logo" />
                </Link>
            </div>
            <h1>Wings Cafe Inventory</h1>
            <nav>
                <Link to="/">Dashboard</Link>
                <Link to="/products">Product Management</Link>
                <Link to="/users">User Management</Link>
            </nav>
        </header>
    );
};

export default Header;
>>>>>>> fadfbcfd47d69f98d1de0cad7da1c81bd99c9262
