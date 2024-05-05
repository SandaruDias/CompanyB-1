import React from "react";
//import {  } from "react-router-dom";
//import user_icon from "./../Images/User_Icon.png";
import "./../../Styles/NavBar.css";
import {changeStockPage} from "./StockMang";

function NavBar() {
  return (
    <div id="menu">
      <div className="navbar-list">
        <ul>
          <li>
            <button onClick={()=>changeStockPage("StockMang")} >Home</button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
