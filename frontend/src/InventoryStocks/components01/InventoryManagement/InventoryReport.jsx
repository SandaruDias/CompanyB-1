import React, { useState, useEffect } from "react";
import axios from "axios";
import "./../../Styles/InventoryManagement/GenerateReport.css";
import NavBar from "./NavBar";

function GenerateReport() {
  const [products, setProducts] = useState([]);

  // Fetch products from API
  useEffect(() => {
    axios
      .get("http://localhost:8090/product/all")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Failed to fetch products:", error);
      });
  }, []);

  // Function to format date string into a readable format
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString();
  };

  return (
    <>
      <NavBar></NavBar>
      <div className="container">
        <h2>Product Management Report</h2>
        <ul className="responsive-table">
          <li className="table-header">
            <div className="col col-2">Name</div>
            <div className="col col-3">Units</div>
            <div className="col col-7">CreatedDate</div>
            <div className="col col-8">UpdatedDate</div>
          </li>
          {products.map((item, index) => (
            <li key={index} className="table-row">
              <div
                className="col col-2"
                data-label="Name"
                style={{ textAlign: "left" }}
              >
                {item.name}
              </div>
              <div
                className="col col-3"
                data-label="Units"
                style={{ textAlign: "left", marginLeft: "30px" }}
              >
                {item.units}
              </div>
              <div
                className="col col-6"
                data-label="Created Date"
                style={{ marginLeft: "30px", textAlign: "left" }}
              >
                {formatDate(item.createdDate)}
              </div>
              <div
                className="col col-7"
                data-label="Updated Date"
                style={{ marginLeft: "30px", textAlign: "left" }}
              >
                {formatDate(item.updatedDate)}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default GenerateReport;
