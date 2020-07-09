import React, { useState } from "react";

const DeleteProductForm = props => {
  const [selectDeleteProdcut, setSelectDeleteProdcut] = useState("selected");
  const [deleteButtonText, setDeleteButtonText] = useState("Delete Product");
  const [time, setTime] = useState("");

  const handleDeleteProductSubmit = event => {
    event.preventDefault();
    if (selectDeleteProdcut !== "selected") {
      setDeleteButtonText("Click Cancel to undo in 5 seconds!");
      setTime(
        setTimeout(() => {
          props.onSubmitDeleteProduct(selectDeleteProdcut);
          setDeleteButtonText("Delete Product");
          setSelectDeleteProdcut("selected");
        }, 5000)
      );
    }
  };

  const cancelDeleteSubmit = event => {
    event.preventDefault();
    if (time) {
      clearTimeout(time);
      setDeleteButtonText("Delete Product");
      setSelectDeleteProdcut("selected");
    }
  };

  return (
    <div>
      <form onSubmit={handleDeleteProductSubmit}>
        <select
          onChange={event => setSelectDeleteProdcut(event.target.value)}
          name="selectDeleteProdcut"
          value={selectDeleteProdcut}
        >
          <option value="selected" disabled>
            Choose product
          </option>
          {props.productList.map(product => (
            <option key={product.name}>{product.name}</option>
          ))}
        </select>

        <button type="submit" onClick={handleDeleteProductSubmit}>
          {deleteButtonText}
        </button>
        <button type="submit" onClick={cancelDeleteSubmit}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default DeleteProductForm;
