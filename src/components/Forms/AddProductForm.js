import React, { useState } from "react";

const AddProductForm = props => {
  const [productName, setProductName] = useState("");
  const [productQunatity, setProductQunatity] = useState("");
  const [productType, setProductType] = useState("");

  const valString = text => {
    if (!isNaN(text) || text === "") {
      alert("Please enter valid product name/type");
    } else {
      return true;
    }
  };

  const valDuplicate = productD => {
    for (let i = 0; i < props.productList.length; i++) {
      if (productD === props.productList[i].name) {
        alert(`Product already exists!`);
        return true;
      } else {
        return false;
      }
    }
  };

  const handleAddProductSubmit = event => {
    event.preventDefault();
    if (!valDuplicate(productName)) {
      if (valString(productName) && valString(productType)) {
        props.onSubmitAddProduct({
          name: productName,
          quantity: productQunatity,
          type: productType
        });

        setProductName("");
        setProductQunatity("");
        setProductType("");
      }
    }
  };

  return (
    <React.Fragment>
      <div>
        <form onSubmit={handleAddProductSubmit}>
          Add Product:
          <input
            type="text"
            name="productName"
            value={productName}
            onChange={event => setProductName(event.target.value)}
            placeholder="Product Name"
          />
          <input
            type="number"
            name="productQunatity"
            value={productQunatity}
            onChange={event => setProductQunatity(event.target.value)}
            placeholder="Product Quantity"
          />
          <input
            type="text"
            name="productType"
            value={productType}
            onChange={event => setProductType(event.target.value)}
            placeholder="Product Type"
          />
          <button type="submit" onClick={handleAddProductSubmit}>
            Add Product
          </button>
        </form>
      </div>
    </React.Fragment>
  );
};

export default AddProductForm;
