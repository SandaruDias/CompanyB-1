/*import React from "react";
import "./../../Styles/InventoryManagement/InventoryMang.css";
import { Link } from "react-router-dom";

//import { useHistory } from "react-router-dom/cjs/react-router-dom.min";



function InventoryMang() {
  return (
    <>
      
      <div className="inventory-container">
        <div className="inventory-header">
          <h1>Inventory Managment System</h1>
          <div className="buttons">
            <Link to={"/addproduct"}>
              <button>Add Product</button>
            </Link>
            <Link to={"/updateproduct"}>
              <button>Update Product</button>
            </Link>
            <Link to={"/addUnits"}>
              <button>Add Product Units</button>
            </Link>
            <Link to={"/releaseproduct"}>
              <button>Release Product</button>
            </Link>
            <Link to={"/deleteproduct"}>
              <button>Delete Product</button>
            </Link>
            <Link to={"/inventoryReport"}>
              <button>Generate Report</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default InventoryMang;*/
import React from "react";
import "./../../Styles/InventoryManagement/InventoryMang.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import AddProduct from "./AddProduct";
import AddProductUnits from "./AddProductUnits";
import UpdateProduct from "./UpdateProduct";
import ReleaseProduct from "./ReleaseProduct";
import DeleteProduct from "./DeleteProduct";
import InventoryReport from "./InventoryReport";

export function changeInventoryPage(page){
  
}

export function InventoryMang() {
  
  const [selectedPage, setSelectedPage] = useState("InventoryMang");
  changeInventoryPage=setSelectedPage;
  const InventoryMangHome = () => (
    <div className="stock-container">
      <div className="header">
        <h1>Inventory Managment System</h1>
        <div className="buttons">
          <button onClick={() => setSelectedPage("InventoryReport")} >Generate Report</button>
          <button onClick={() => setSelectedPage("AddProduct")} >Add Product</button>
          <button onClick={() => setSelectedPage("AddProductUnits")} >Add Product Units</button>
          <button onClick={() => setSelectedPage("UpdateProduct")} >Update Product</button>
          <button onClick={() => setSelectedPage("ReleaseProduct")} >Release Product</button>
          <button onClick={() => setSelectedPage("DeleteProduct")} >Delete Product</button>
        </div>
      </div>
    </div>
  );



  const renderSelectedPage = () => {
    switch (selectedPage) {
      case "InventoryMang":
        return <InventoryMangHome />;
      case "AddProduct":
        return <AddProduct />;
      case "InventoryReport":
        return <InventoryReport />;
      case "AddProductUnits":
        return <AddProductUnits />;
      case "UpdateProduct":
        return <UpdateProduct />;
      case "ReleaseProduct":
        return <ReleaseProduct />; 
      case "DeleteProduct":
        return <DeleteProduct />; 
      default:
        return <InventoryMangHome />;
    }
  }

  return (renderSelectedPage());
}

