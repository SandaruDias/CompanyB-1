import React, { useState, useEffect } from "react";
import axios from "axios";
import "./../../Styles/SupplierManagement/SupplierReport.css";
import NavBar from "./NavBar";

function SupplierReport() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8090/supplier/report")
      .then(response => {
        setData(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.error("Error fetching report data:", error);
      });
  }, []);

  return (
    <><NavBar></NavBar>
    <div className="container">
      <h2>Supplier Management Report</h2>
      <ul className="responsive-table">
        <li className="table-header">
          <div className="col col-1">Id</div>
          <div className="col col-2">SupplierName</div>
          <div className="col col-3">Telephone</div>
          <div className="col col-4">address</div>
          <div className="col col-5">email</div>
          
        </li>
        {data.map((item, index) => (
          <li key={index} className="table-row">
            <div className="col col-1" data-label="Id">
              {item.id}
            </div>
            <div className="col col-2" data-label="Name">
              {item.suppliername}
            </div>
            <div className="col col-3" data-label="Units">
              {item.telephone}
            </div>
            <div className="col col-4" data-label="Supplier">
              {item.address}
            </div>
            <div className="col col-5" data-label="BaseValue">
              {item.email}
            </div>
           
            
          </li>
        ))}
      </ul>
    </div></>
  );
}

export default SupplierReport;
