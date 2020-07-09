import React, { useState } from "react";
import AddProductForm from "./Forms/AddProductForm";
import EditQuantityForm from "./Forms/EditQuantityForm";
import DeleteProductForm from "./Forms/DeleteProductForm";
import ListProduct from "./ListProduct/ListProduct";

const Products = () => {
  const [productList, setProductList] = useState([]);

  const addProduct = product => {
    setProductList([...productList, product]);
  };

  const editQuantity = (selectEditProduct, productNewQuantity) => {
    setProductList(
      productList.map(product => {
        if (product.name === selectEditProduct) {
          return {
            ...product,
            quantity: productNewQuantity
          };
        } else {
          return product;
        }
      })
    );
  };

  const deleteProduct = selectDeleteProdcut => {
    setProductList(
      productList.filter(product => product.name !== selectDeleteProdcut)
    );
  };

  return (
    <React.Fragment>
      <div>
        <AddProductForm
          onSubmitAddProduct={addProduct}
          productList={productList}
        />
      </div>
      <br />
      <div>
        <EditQuantityForm
          productList={productList}
          onSubmitEditQuantity={editQuantity}
        />
      </div>
      <br />
      <div>
        <DeleteProductForm
          productList={productList}
          onSubmitDeleteProduct={deleteProduct}
        />
      </div>
      <br />
      {productList.map(product => (
        <ListProduct
          key={product.name}
          productName={product.name}
          productQuantity={product.quantity}
          productType={product.type}
        />
      ))}
    </React.Fragment>
  );
};

export default Products;
