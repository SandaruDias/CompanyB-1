import { useState } from "react";
import React from "react";
import axios from "axios";
//import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Modal from "./Modal";
import NavBar from "./NavBar";
import "./../../Styles/InventoryManagement/AddProduct.css";

function AddProduct() {
  const [productDetails, setProductDetails] = useState({
    name: "",
    description: "",
    units: "",
  });
  const [modalVisible, setModalVisible] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  //const history = useHistory();

  const handleChange = (event) => {
    setProductDetails((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to the backend
      const response = await axios.post(
        "http://localhost:8090/product/add",
        productDetails
      );

      console.log("Product has been successfully added!", productDetails);

      // Update state to show the modal and display the response message
      setResponseMessage(
        "Product " + productDetails.name + " has been successfully added!"
      );
      setModalVisible(true);
    } catch (error) {
      console.error("Failed to add product:", error);
      setResponseMessage("Failed to add product!");
      setModalVisible(true);
    }
  };

  const handleModalClose = () => {
    setModalVisible(false);
  };

  return (
    <>
      <NavBar></NavBar>
      <form onSubmit={handleSubmit}>
        <div className={`add-product-container ${modalVisible ? "blur" : ""}`}>
          <h1>Add Products</h1>

          <div className="inputs">
            <input
              type="text"
              placeholder="Product Name"
              name="name"
              onChange={handleChange}
              value={productDetails.name}
              required
            />
          </div>
          <div className="inputs">
            <input
              type="text"
              placeholder="Description"
              name="description"
              onChange={handleChange}
              value={productDetails.description}
              required
            />
          </div>
          <div className="inputs">
            <input
              type="number"
              placeholder="Units"
              name="units"
              onChange={handleChange}
              value={productDetails.units}
              required
            />
          </div>
          <button type="submit" className="add-button">
            Add Product
          </button>
        </div>
      </form>
      <Modal
        visible={modalVisible}
        onClose={handleModalClose}
        message={responseMessage}
      />
    </>
  );
}

export default AddProduct;
