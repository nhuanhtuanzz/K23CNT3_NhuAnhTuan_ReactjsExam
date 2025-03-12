import React, { useState } from "react";
import NatProductList from "./components/NatProductList";
import NatProductAdd from "./components/NatProductAdd";

const NatApp = () => {
  const [Products, setProducts] = useState([
    { natPid: "20310900111", natPName: "Nhu Anh Tuan", natPQuantity: "1000", natPPrice: "1000" },
    { natPid: "1", natPName: "Nhu Tuan", natPQuantity: "3000", natPPrice: "3000" },
    { natPid: "2", natPName: "Anh Tuan", natPQuantity: "2000", natPPrice: "2000" },
  ]);

  const addProduct = (Product) => {
    setProducts([...Products, Product]);
  };

  const updateProduct = (updatedProduct) => {
    setProducts(Products.map(Product => (Product.natPid === updatedProduct.natPid ? updatedProduct : Product)));
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