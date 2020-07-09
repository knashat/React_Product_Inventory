import React, { useState } from "react";

const EditQuantityForm = props => {
  const [selectEditProduct, setSelectEditProduct] = useState("selected");
  const [productNewQuantity, setProductNewQuantity] = useState("");

  const handleEditQuantitySubmit = event => {
    event.preventDefault();
    props.onSubmitEditQuantity(selectEditProduct, productNewQuantity);
    setSelectEditProduct("selected");
    setProductNewQuantity("");
  };

  return (
    <React.Fragment>
      <div>
        <form onSubmit={handleEditQuantitySubmit}>
          <select
            onChange={event => setSelectEditProduct(event.target.value)}
            name="selectEditProduct"
            value={selectEditProduct}
          >
            <option value="selected" disabled>
              Choose product
            </option>
            {props.productList.map(product => (
              <option key={product.name}>{product.name}</option>
            ))}
          </select>
          <input
            type="number"
            name="productNewQuantity"
            value={productNewQuantity}
            onChange={event => setProductNewQuantity(event.target.value)}
            placeholder="Product New Quantity"
          />
          <button type="submit" onClick={handleEditQuantitySubmit}>
            Edit Quantity
          </button>
        </form>
      </div>
    </React.Fragment>
  );
};

export default EditQuantityForm;
