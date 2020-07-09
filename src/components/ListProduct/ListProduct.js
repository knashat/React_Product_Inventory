import React from "react";

export default props => {
  return (
    <React.Fragment>
      <div>
        Product Name: {props.productName}
        <br />
        Product Quanitity: {props.productQuantity} <br />
        Product Type: {props.productType}
        <br />
        <br />
      </div>
    </React.Fragment>
  );
};
