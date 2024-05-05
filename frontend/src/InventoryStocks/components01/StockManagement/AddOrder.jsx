import "./../../Styles/StockManagement/UpdateStock.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "./NavBar";
//import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const AddOrder = () => {
  const [productId, setProductId] = useState("");
  const [amount, setAmount] = useState("");
  const [productOptions, setProductOptions] = useState([]);
  //const history = useHistory();

  useEffect(() => {
    // Fetch product IDs from your backend API
    axios
      .get("http://localhost:8090/stock/get_stocklist")
      .then((response) => {
        // Assuming response.data is an array of product objects
        const productIds = response.data.map((product) => product);
        setProductOptions(productIds); // Set product IDs as options
      })
      .catch((error) => {
        console.error("Error fetching product IDs:", error);
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const orderDetail = {
      productId: productId,
      units: amount,
    };

    // Send order details to your backend API
    axios
      .post("http://localhost:8090/stock/order", orderDetail)
      .then((response) => {
        console.log("Order placed successfully:", response.data);
        // Optionally, you can show a success message or redirect the user
        history.push("/");
      })
      .catch((error) => {
        console.error("Error placing order:", error);
        // Optionally, you can show an error message to the user
      });
  };

  return (
    <><NavBar></NavBar>
    <div className="update-stock-container">
      <form onSubmit={handleSubmit}>
        <h1
          style={{
            textAlign: "center",
            marginTop: 0,
            fontSize: "3rem",
          }}
        >
          Place Order
        </h1>

        <div>
          <label htmlFor="productId">Product Name:</label>
          <select
            id="productId"
            value={productId}
            onChange={(e) => setProductId(e.target.value)}
            style={
              ({ width: "100%" },
              { fontSize: "20px" },
              { backgroundColor: "white" },
              { fontSize: "20px" })
            }
          >
            <option value="">Select Product Name</option>
            {productOptions.map((option, index) => (
              <option key={index} value={option.id}>
                {option.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="amount">Units:</label>
          <input
            className="update-stock-input"
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <br />
        <button className="update-stock-button" type="submit">
          Order Rawmaterial 
        </button>
      </form>
    </div>
    </>
  );
};

export default AddOrder;
