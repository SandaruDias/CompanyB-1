import React from "react";
//import Select from "react-dropdown-select";
import { useState, useEffect } from "react";
import "./../../Styles/InventoryManagement/UpdateProduct.css";
//import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";
import Modal from "./Modal";
import NavBar from "./NavBar";


function UpdateProduct() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState("");
  const [productDetails, setProductDetails] = useState({
    productName: "",
    description: "",
    units: "",
  });
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

  // Fetch product details when product selection changes
  useEffect(() => {
    if (selectedProduct) {
      axios
        .get(`http://localhost:8090/product/${selectedProduct}`)
        .then((response) => {
          setProductDetails(response.data);
          console.log("Fetched products: ", response);
        })
        .catch((error) => {
          console.error("Failed to fetch product details:", error);
        });
    }
  }, [selectedProduct]);

  const handleChange = (event) => {
    setProductDetails((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to update the selected product
      const response = await axios.post(
        `http://localhost:8090/product/update`,
        productDetails
      );

      console.log("Product updated successfully", response.data);

      // Update state to show the modal and display the response message
      setResponseMessage(response.data);
      setModalVisible(true);
    } catch (error) {
      console.error("Failed to update product:", error);
      setResponseMessage("Failed to update product!");
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
        <div
          className={`update-product-container ${modalVisible ? "blur" : ""}`}
        >
          <h1>Update Product</h1>
          <div className="inputs">
            {" "}
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
            {" "}
            Product Name:
            <input
              type="text"
              name="name"
              onChange={handleChange}
              value={productDetails.name}
              required
            />
          </div>
          <div className="inputs">
            Description:
            <input
              type="text"
              name="description"
              onChange={handleChange}
              value={productDetails.description}
              required
            />
          </div>
          <div className="inputs">
            Units:
            <input
              type="number"
              name="units"
              onChange={handleChange}
              value={productDetails.units}
              required
            />
          </div>
          <button type="submit" className="update-button">
            Update Product
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

export default UpdateProduct;
