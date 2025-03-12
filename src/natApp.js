import React, { useState } from "react";
import NatProductList from "./components/NatProductList";
import NatProductAdd from "./components/NatProductAdd";

const NatApp = () => {
  const [Products, setProducts] = useState([
    { pid: "20310900111", pName: "Nhu Anh Tuan", pQuantity: "1000", pPrice: "1000" },
    { pid: "1", pName: "Nhu Tuan", pQuantity: "3000", pPrice: "3000" },
    { pid: "2", pName: "Anh Tuan", pQuantity: "2000", pPrice: "2000" },
  ]);

  const addProduct = (Product) => {
    setProducts([...Products, Product]);
  };

  const updateProduct = (updatedProduct) => {
    setProducts(Products.map(Product => (Product.pid === updatedProduct.pid ? updatedProduct : Product)));
  };

  return (
    <div className="container mt-3">
      <h1 className="text-center mb-4">Nhữ Anh Tuấn K23CNT3 Exam</h1>
      <div className="row">
        {/* danh sach */}
        <div className="col-md-6">
          <NatProductList Products={Products} updateProduct={updateProduct} />
        </div>
        {/* them moi */}
        <div className="col-md-6">
          <NatProductAdd addProduct={addProduct} />
        </div>
      </div>
    </div>
  );
};

export default NatApp;