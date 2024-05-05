import React from "react";
import "./../../Styles/SupplierManagement/SupplierMang.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import AddSupplier from "./AddSupplier";
import SupplierReport from "./SupplierReport";


export function changeSupplierPage(page){
  
}

export function SupplierMang() {

  const [selectedPage, setSelectedPage] = useState("SupplierMang");
  changeSupplierPage=setSelectedPage;
  const SupplierMangHome = () => (
    <div className="stock-container">
      <div className="header">
        <h1>Supplier Managment System</h1>
        <div className="buttons">
          <button onClick={() => setSelectedPage("SupplierReport")} >Supplier Report</button>
          <button onClick={() => setSelectedPage("AddSupplier")} >Add Supplier</button>
        </div>
      </div>
    </div>
  );


  const renderSelectedPage = () => {
    switch (selectedPage) {
      case "SupplierMang":
        return <SupplierMangHome />;
      case "AddSupplier":
        return <AddSupplier />;
      case "SupplierReport":
        return <SupplierReport />;
      default:
        return <SupplierMangHome />;
    }
  }

  return (renderSelectedPage());
}

