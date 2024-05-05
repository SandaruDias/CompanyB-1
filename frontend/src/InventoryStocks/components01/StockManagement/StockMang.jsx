/*import React from "react";
import "./../../Styles/StockManagement/stockManag.css";
import { Link } from "react-router-dom";
// import NavBar from "../Components/NavBar";
export function StockManag() {
  return (
    <div className="stock-container">
      {/* <NavBar /> *//*}
      <div className="header">
        <h1>Stock Managment System.</h1>
        <div className="buttons">
          <Link to="/generatereport">
            <button>Generate Report</button>
          </Link>
          <Link to="/AddItem">
            <button>Add Item</button>
          </Link>
          <Link to="/updatestock">
            <button>Update Stock</button>
          </Link>
          <Link to="/Addorder">
            <button>Add Order</button>
          </Link>
          <Link to="/ReleaseStock">
            <button>Release Stock</button>
          </Link>
        </div>
      </div>
    </div>
  );
}*/
import React from "react";
import "./../../Styles/StockManagement/StockMang.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import AddItem from "./AddItem";
import AddOrder from "./AddOrder";
import UpdateStock from "./UpdateStock";
import ReleaseStock from "./ReleaseStock";
import GenerateReport from "./GenerateReport";

export function changeStockPage(page){
  
}

export function StockMang() {

  const [selectedPage, setSelectedPage] = useState("StockMang");
  changeStockPage=setSelectedPage;
  const StockMangHome = () => (
    <div className="stock-container">
      <div className="header">
        <h1>Stock Managment System</h1>
        <div className="buttons">
          <button onClick={() => setSelectedPage("GenerateReport")} >Stock Report</button>
          <button onClick={() => setSelectedPage("AddItem")} >Add Item</button>
          <button onClick={() => setSelectedPage("UpdateStock")} >Update Units</button>
          <button onClick={() => setSelectedPage("ReleaseStock")} >Release Units</button>
          <button onClick={() => setSelectedPage("AddOrder")} >Place Order</button>
        </div>
      </div>
    </div>
  );


  const renderSelectedPage = () => {
    switch (selectedPage) {
      case "StockMang":
        return <StockMangHome />;
      case "AddItem":
        return <AddItem />;
      case "GenerateReport":
        return <GenerateReport />;
      case "AddOrder":
        return <AddOrder />;
      case "UpdateStock":
        return <UpdateStock />;
      case "ReleaseStock":
        return <ReleaseStock />; 
      default:
        return <StockMangHome />;
    }
  }

  return (renderSelectedPage());
}