import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from "./Modal";
import NavBar from "./NavBar";
//import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import "./../../Styles/InventoryManagement/ReleaseProduct.css";

function ReleaseProduct() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState("");
  const [units, setUnits] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  //const history = useHistory();

  // Fetch products from API on component mount
  useEffect(() => {
    axios
      .get("http://localhost:8090/product/all")
      .then((response) => {
        setProducts(response.data);
        setSelectedProduct(response.data[0]?.id);
        console.log("Fetched products: ", response);
      })
      .catch((error) => {
        console.error("Failed to fetch products:", error);
      });
  }, []);

  const handleUpdateUnits = async () => {
    try {
      // POST request to release the units of the selected product
      const response = await axios.post(
        `http://localhost:8090/product/release-product`,
        {
          id: selectedProduct,
          units: parseInt(units),
        }
      );

      console.log("Units released successfully", response.data);

      // Update state to show the modal and display the response message
      setResponseMessage(response.data);
      setModalVisible(true);
    } catch (error) {
      console.error("Failed to release units:", error);
      setResponseMessage("Failed to release units!");
      setModalVisible(true);
    }
  };

  const handleModalClose = () => {
    setModalVisible(false);
  };

  return (
    <>
      <NavBar></NavBar>
      <div
        className={`release-product-container ${modalVisible ? "blur" : ""}`}
      >
        <h1>Release Products</h1>
        <div className="inputs">
          Select Product:
          <select
            className="select"
            value={selectedProduct}
            onChange={(e) => setSelectedProduct(e.target.value)}
            placeholder="Select Product Name"
          >
            {products.map((product) => (
              <option key={product.id} value={product.id}>
                {product.name}
              </option>
            ))}
          </select>
        </div>
        <div className="inputs">
          Enter Units:
          <input
            type="number"
            value={units}
            onChange={(e) => setUnits(e.target.value)}
            placeholder="Enter Units"
          />
        </div>
        <button onClick={handleUpdateUnits} className="release-button">
          Release Units
        </button>
      </div>
      <Modal
        visible={modalVisible}
        onClose={handleModalClose}
        message={responseMessage}
      />
    </>
  );
}

export default ReleaseProduct;
