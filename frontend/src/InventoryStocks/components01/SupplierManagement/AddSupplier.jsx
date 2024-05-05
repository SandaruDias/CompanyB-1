/*import "./../Styles/AddItem.css";
import React, { useState, useEffect } from 'react';
import axios from 'axios';



  const AddSupplier = () => {
    const [stock, setStock] = useState({
      suppliername: '',
      telephone: '',
      address:'',
      email:''
      // Add other properties as needed
    });
  
    const [supplierId, setSupplierId] = useState('');
    const [supplierOptions, setSupplierOptions] = useState([]);
  
    useEffect(() => {
      // Fetch supplier options when component mounts
      fetchSupplierOptions();
    }, []);
  
    const fetchSupplierOptions = async () => {
      try {
        const response = await axios.get('http://localhost:8082/stock/get_suppliers');
        setSupplierOptions(response.data);
      } catch (error) {
        console.error('Error fetching supplier options:', error);
      }
    };
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setStock({ ...stock, [name]: value });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post('http://localhost:8082/stock/add', stock, {
          params: {
            id: supplierId,
          },
        });
        console.log('Stock added successfully:', response.data);
        // Optionally, you can add logic to handle success (e.g., show a success message)
      } catch (error) {
        console.error('Error adding stock:', error);
        // Optionally, you can add logic to handle errors (e.g., show an error message)
      }
    };
  return (
    <>
      <div className="add-item-container">
        <h1>Add Items.</h1>
        <div className="inputs">
        <label>
          Stock Name:
          <input type="text" name="name" value={stock.name} onChange={handleChange} />
        </label>
        </div>
        <div className="inputs"> 
        <label>
          Quantity:
          <input type="number" name="units" value={stock.units} onChange={handleChange} />
        </label>
        </div>
        <div className="inputs">
        <label>
          Base value:
          <input type="number" name="baseValue" value={stock.baseValue} onChange={handleChange} />
        </label>
        </div>
        <div className="inputs">
        <label>
          Supplier ID:
          
          <select value={supplierId} onChange={(e) => setSupplierId(e.target.value)}>
            <option value="">Select Supplier</option>
            {supplierOptions.map(option => (
              <option key={option.id} value={option.id}>{option.suppliername}</option>
            ))}
          </select>
        </label>
        </div>
        <button onClick={handleSubmit} className="add-button">
          Submit
        </button>
      </div>
    </>
  );
}

export default AddSupplier;*/
import "./../../Styles/SupplierManagement/AddSupplier.css";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from "./NavBar";

const AddSupplier = () => {
  const [supplierList, setSupplierList] = useState([]);
  const [newSupplier, setNewSupplier] = useState({
    suppliername: '',
    telephone: '',
    address: '',
    email: ''
  });

  useEffect(() => {
    fetchSuppliers();
  }, []);

  const fetchSuppliers = async () => {
    try {
      const response = await axios.get('http://localhost:8090/stock/get_suppliers');
      setSupplierList(response.data);
    } catch (error) {
      console.error('Error fetching suppliers:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewSupplier({ ...newSupplier, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8090/supplier/add', newSupplier);
      console.log('New supplier added:', response.data);
      setNewSupplier({
        suppliername: '',
        telephone: '',
        address: '',
        email: ''
      });
      fetchSuppliers(); // Refresh the supplier list after adding
    } catch (error) {
      console.error('Error adding supplier:', error);
    }
  };

  return (
   <><NavBar></NavBar>
   <div>
      <h1>Suppliers</h1>
      <ul>
        {supplierList.map(supplier => (
          <li key={supplier.id}>
            {supplier.suppliername} - {supplier.email}
          </li>
        ))}
      </ul>
      <div className="add-item-container">
        <h1>Add Supplier.</h1>
        <div className="inputs">
        <label>
          Supplier Name:
          <input type="text" name="suppliername" value={newSupplier.suppliername} onChange={handleChange} />
        </label>
        </div>
        <div className="inputs"> 
        <label>
          Telephone no:
          <input type="text" name="telephone" value={newSupplier.telephone} onChange={handleChange} />
        </label></div>
        <div className="inputs"> 
        <label>
          Address:
          <input type="text" name="address" value={newSupplier.address} onChange={handleChange} />
        </label></div>
        <div className="inputs"> 
        <label>
          Email:
          <input type="text" name="email" value={newSupplier.email} onChange={handleChange} />
        </label></div>
        <button onClick={handleSubmit} className="add-button">
          Submit
        </button>
        </div> </div></>
      
    
  );
};

export default AddSupplier;