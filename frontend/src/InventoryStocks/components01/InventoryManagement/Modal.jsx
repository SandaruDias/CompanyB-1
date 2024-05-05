import React from "react";

import "./../../Styles/InventoryManagement/Modal.css";

function Modal({ visible, onClose, message }) {
  return (
    <>
      {visible && (
        <div className="modal">
          <div className="modal-content">
            <h3>{message}</h3>
            <button onClick={onClose}>Close</button>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
