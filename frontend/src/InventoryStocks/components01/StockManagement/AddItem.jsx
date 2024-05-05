import "./../../Styles/StockManagement/AddItem.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "./NavBar";
//import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const AddItem = () => {
  const [stock, setStock] = useState({
    name: "",
    units: 0,
    baseValue: 0,
    suppliername: "",
    // Add other properties as needed
  });
  //const history = useHistory();
  const [supplierId, setSupplierId] = useState("");
  const [supplierOptions, setSupplierOptions] = useState([]);

  useEffect(() => {
    // Fetch supplier options when component mounts
    fetchSupplierOptions();
  }, []);

  const fetchSupplierOptions = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8090/stock/get_suppliers"
      );
      setSupplierOptions(response.data);
    } catch (error) {
      console.error("Error fetching supplier options:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStock({ ...stock, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8090/stock/add",
        stock,
        {
          params: {
            id: supplierId,
          },
        }
      );
      console.log("Stock added successfully:", response.data);
      // Optionally, you can add logic to handle success (e.g., show a success message)
      history.push("/");
    } catch (error) {
      console.error("Error adding stock:", error);
      // Optionally, you can add logic to handle errors (e.g., show an error message)
    }
  };
  return (
    <><NavBar></NavBar>
      <div className="add-item-container">
        <h1>Add Items</h1>
        <div className="inputs">
          <label>
            Stock Name
            <input
              type="text"
              name="name"
              value={stock.name}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="inputs">
          <label>
            Quantity
            <input
              type="number"
              name="units"
              value={stock.units}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="inputs">
          <label>
            Base value
            <input
              type="number"
              name="baseValue"
              value={stock.baseValue}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="inputs">
          <label>
            Supplier ID
            <select
              value={supplierId}
              onChange={(e) => setSupplierId(e.target.value)}
            >
              <option value="">Select Supplier</option>
              {supplierOptions.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.suppliername}
                </option>
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
};

export default AddItem;