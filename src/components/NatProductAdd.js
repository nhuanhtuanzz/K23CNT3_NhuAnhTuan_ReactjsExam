import React, { useState } from "react";

const NatProductAdd = ({ addProduct }) => {
  const [newProduct, setNewProduct] = useState({ natPid: "", natPName: "", natPQuantity: "", natPPrice: "" });

  const handleChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newProduct.natPid && newProduct.natPName && newProduct.natPQuantity && newProduct.natPPrice) {
      addProduct(newProduct);
      setNewProduct({ natPid: "", natPName: "", natPQuantity: "", natPPrice: "" });
    }
  };

  return (
    <div className="card p-3 mt-3">
      <h2 className="text-secondary">Thêm sản phẩm</h2>
      <form onSubmit={handleSubmit} className="d-flex flex-column gap-2">
        <input type="text" name="natPid" className="form-control" placeholder="ID" value={newProduct.natPid} onChange={handleChange} required />
        <input type="text" name="natPName" className="form-control" placeholder="Tên sản phẩm" value={newProduct.natPName} onChange={handleChange} required />
        <input type="number" name="natPQuantity" className="form-control" placeholder="Số lượng" value={newProduct.natPQuantity} onChange={handleChange} required />
        <input type="number" name="natPPrice" className="form-control" placeholder="Giá" value={newProduct.natPPrice} onChange={handleChange} required />
        <button type="submit" className="btn btn-success">Thêm</button>
      </form>
    </div>
  );
};

export default NatProductAdd;