import React from "react";
//import {  } from "react-router-dom";
//import user_icon from "./../Images/User_Icon.png";
import "./../../Styles/NavBar.css";
import {changeSupplierPage} from "./SupplierMang";

function NavBar() {
  return (
    <div id="menu">
      <div className="navbar-list">
        <ul>
          <li>
            <button onClick={()=>changeSupplierPage("SupplierMang")} >Home</button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
