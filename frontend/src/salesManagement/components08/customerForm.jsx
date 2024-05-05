import React, { useState, useEffect } from 'react';
import "./customerForm.css";

function CustomerForm() {
    const [formData, setFormData] = useState({
        name: ''
    });

    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState('');
    const [quantity, setQuantity] = useState(0);
    const [selectedProductsList, setSelectedProductsList] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('http://localhost:8090/inventory/allInventory');
                if (!response.ok) {
                    throw new Error('Failed to fetch products');
                }
                const fetchedProducts = await response.json();
                setProducts(fetchedProducts);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };
        fetchProducts();
    }, []);

    const handleCustomerInfoChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleProductChange = (e) => {
        setSelectedProduct(e.target.value);
    };

    const handleQuantityChange = (e) => {
        setQuantity(parseInt(e.target.value));
    };

    const handleAddToList = () => {
        const selected = products.find(product => product._id === selectedProduct._id);
        if (selected && selected.quantity_available >= quantity) {
            setSelectedProductsList([...selectedProductsList, { ...selected, quantity }]);
        } else {
            alert('Quantity is not sufficient');
        }
    };




    const handleSubmit = (e) => {
        e.preventDefault();
        // Combine customer information with selected products
        const data = {
            ...formData,
            selectedProducts: selectedProductsList
        };
        console.log('Customer Info:', data);
    };

    return (
            <div >
                {console.log('products:', products)}
                <h1 className='order-header' >Order Placement</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        className='name-input'
                        type="text"
                        name="name"
                        placeholder="Enter Your Name"
                        value={formData.name}
                        onChange={handleCustomerInfoChange}
                    />
                    <div>
                        <select value={selectedProduct} onChange={handleProductChange} className='custom-select'>
                            <option value="">Select a product</option>
                            {products.map(product => (
                                <option key={product.id} value={product.id}>{product.name}</option>
                            ))}
                        </select>
                        <input className='cutom-input-quantity' type="number" value={quantity} onChange={handleQuantityChange} />
                        <button className='custom-select-button' onClick={handleAddToList}>Add to List</button>
                        <div className="selected-products">
                            <h3>Selected Products</h3>
                            <ul>
                                {selectedProductsList.map((product, index) => (
                                    <li key={index}>{product.name} ----------- Quantity: {product.quantity}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <button className='submit-button' type="submit">Submit</button>
                </form>
            </div>
    );
}

export default CustomerForm;