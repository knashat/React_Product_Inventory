import React, { useState, useEffect } from "react";
import axios from "axios";
import AddProductForm from "./Forms/AddProductForm";
import EditQuantityForm from "./Forms/EditQuantityForm";
import DeleteProductForm from "./Forms/DeleteProductForm";
import ListProduct from "./ListProduct/ListProduct";

const Products = () => {
  const [productList, setProductList] = useState([]);
  useEffect(()=> {
    axios.get("http://localhost:3000/products")
    .then(res => setProductList(res.data));
  }, []);

  

  const addProduct = product => {
    setProductList([...productList, product]);
    axios.post("http://localhost:3000/products", product)
    //.then(res => console.log(res))
  };

  const editQuantity = (selectEditProduct, productNewQuantity) => {
    setProductList(
      productList.map(product => {
        if (product.name === selectEditProduct) {
          axios.put(`http://localhost:3000/products/${product.id}`, {...product, quantity: productNewQuantity})
          //.then(res => console.log(res));
          
          return {
            ...product,
            quantity: productNewQuantity
          }       
        
        } else {
          return product;
        }
        
      })
    );
    
  };

  const deleteProduct = selectDeleteProdcut => {
    productList.map(product => {
      if (product.name === selectDeleteProdcut){
        axios.delete(`http://localhost:3000/products/${product.id}`)
         // .then(res => console.log(res));
         return setProductList(
            productList.filter(product => product.name !== selectDeleteProdcut)
          );
      }
      else {
        return product;
      }
    });
    
    
    
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
