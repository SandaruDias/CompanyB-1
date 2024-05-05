import React, { useState, useEffect } from "react";
import axios from "axios";
import "./../../Styles/StockManagement/GenerateReport.css";
import NavBar from "./NavBar";

function GenerateReport() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8090/stock/report")
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
      <h2>Stock Management Report</h2>
      <ul className="responsive-table">
        <li className="table-header">
          <div className="col col-1">Id</div>
          <div className="col col-2">Name</div>
          <div className="col col-3">Units</div>
          <div className="col col-4">Supplier</div>
          <div className="col col-5">BaseValue</div>
          <div className="col col-6">CreatedDateTime</div>
          <div className="col col-7">UpdatedDateTime</div>
          <div className="col col-8">UpdatedUser</div>
        </li>
        {data.map((item, index) => (
          <li key={index} className={`table-row ${item.units < item.baseValue ? 'highlight-row' : ''}`}>
            <div className="col col-1" data-label="Id">
              {item.id}
            </div>
            <div className="col col-2" data-label="Name">
              {item.name}
            </div>
            <div className="col col-3" data-label="Units">
              {item.units}
            </div>
            <div className="col col-4" data-label="Supplier">
              {item.suppliername}
            </div>
            <div className="col col-5" data-label="BaseValue">
              {item.baseValue}
            </div>
            <div className="col col-6" data-label="CreatedDateTime">
              {item.createdDateTime}
            </div>
            <div className="col col-7" data-label="UpdatedDateTime">
              {item.updatedDateTime || "N/A"}
            </div>
            <div className="col col-8" data-label="UpdatedUser">
              {item.updatedUser}
            </div>
          </li>
        ))}
      </ul>
    </div>
    </>
  );
}

export default GenerateReport;