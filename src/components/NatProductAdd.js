import React, { useState } from "react";

const NatProductAdd = ({ addProduct }) => {
  const [newProduct, setNewProduct] = useState({ id: "", pName: "", pQuantity: "", pPrice: "" });

  const handleChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newProduct.id && newProduct.pName && newProduct.pQuantity && newProduct.pPrice) {
      addProduct(newProduct);
      setNewProduct({ id: "", pName: "", pQuantity: "", pPrice: "" });
    }
  };

  return (
    <div className="card p-3 mt-3">
  <h2 className="text-secondary">Thêm sản phẩm</h2>
  <form onSubmit={handleSubmit} className="d-flex flex-column gap-2">
    <input type="text" name="id" className="form-control" placeholder="ID" value={newProduct.id} onChange={handleChange} required />
    <input type="text" name="pName" className="form-control" placeholder="Tên sản phẩm" value={newProduct.pName} onChange={handleChange} required />
    <input type="number" name="pQuantity" className="form-control" placeholder="Số lượng" value={newProduct.pQuantity} onChange={handleChange} required />
    <input type="number" name="pPrice" className="form-control" placeholder="Giá" value={newProduct.pPrice} onChange={handleChange} required />
    <button type="submit" className="btn btn-success">Thêm</button>
  </form>
</div>

  );
};

export default NatProductAdd;
