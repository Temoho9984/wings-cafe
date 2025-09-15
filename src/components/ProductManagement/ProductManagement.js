import React, { useState, useEffect } from 'react';
import './ProductManagement.css';

const ProductManagement = () => {
    const [products, setProducts] = useState([]);
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');
    const [editingIndex, setEditingIndex] = useState(null);

    useEffect(() => {
        const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
        setProducts(storedProducts);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newProduct = { name, category, price: parseFloat(price), quantity: parseInt(quantity) };

        if (editingIndex !== null) {
            products[editingIndex] = newProduct;
            setEditingIndex(null);
        } else {
            products.push(newProduct);
        }

        setProducts(products);
        localStorage.setItem('products', JSON.stringify(products));
        resetForm();
    };

    const handleEdit = (index) => {
        setName(products[index].name);
        setCategory(products[index].category);
        setPrice(products[index].price);
        setQuantity(products[index].quantity);
        setEditingIndex(index);
    };

    const handleDelete = (index) => {
        products.splice(index, 1);
        setProducts(products);
        localStorage.setItem('products', JSON.stringify(products));
    };

    const resetForm = () => {
        setName('');
        setCategory('');
        setPrice('');
        setQuantity('');
    };

    return (
        <div className="product-management">
            <h2>Product Management</h2>
            <form onSubmit={handleSubmit} className="product-form">
                <label>
                    Product Name:
                    <input 
                        type="text" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        required 
                    />
                </label>
                <label>
                    Category:
                    <input 
                        type="text" 
                        value={category} 
                        onChange={(e) => setCategory(e.target.value)} 
                        required 
                    />
                </label>
                <label>
                    Price:
                    <input 
                        type="number" 
                        value={price} 
                        onChange={(e) => setPrice(e.target.value)} 
                        required 
                    />
                </label>
                <label>
                    Quantity:
                    <input 
                        type="number" 
                        value={quantity} 
                        onChange={(e) => setQuantity(e.target.value)} 
                        required 
                    />
                </label>
                <button type="submit">{editingIndex !== null ? 'Update Product' : 'Add Product'}</button>
                <button type="button" onClick={resetForm}>Cancel</button>
            </form>
            <table className="product-table">
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index) => (
                        <tr key={index}>
                            <td>{product.name}</td>
                            <td>{product.category}</td>
                            <td>${product.price.toFixed(2)}</td>
                            <td>{product.quantity}</td>
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

export default ProductManagement;
