import React from "react";
import { useState, useEffect } from "react";
//import Select from "react-dropdown-select";
import "./../../Styles/InventoryManagement/DeleteProduct.css";
import axios from "axios";
import Modal from "./Modal";
import NavBar from "./NavBar";
//import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function DeleteProduct() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  //const history = useHistory();

  // Fetch products from API on component mount
  useEffect(() => {
    axios
      .get("http://localhost:8090/product/all")
      .then((response) => {
        setProducts(response.data);
        setSelectedProduct(response.data[0].id);
        console.log("Fetched products: ", response);
      })
      .catch((error) => {
        console.error("Failed to fetch products:", error);
      });
  }, []);

  const handleDelete = async () => {
    try {
      // Make a POST request to delete the selected product
      const response = await axios.post(
        `http://localhost:8090/product/delete`,
        {
          id: selectedProduct,
        }
      );

      console.log("Product deleted successfully", response.data);

      // Update state to show the modal and display the response message
      setResponseMessage(response.data);
      setModalVisible(true);
    } catch (error) {
      console.error("Failed to delete product:", error);
      setResponseMessage("Failed to delete product!");
      setModalVisible(true);
    }
  };
  const handleModalClose = () => {
    setModalVisible(false);
  };

  return (
    <>
      <NavBar></NavBar>
      <div className={`delete-product-container ${modalVisible ? "blur" : ""}`}>
        <h1>Delete Product</h1>
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

        <button onClick={handleDelete} className="delete-button">
          Delete Product
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

export default DeleteProduct;
