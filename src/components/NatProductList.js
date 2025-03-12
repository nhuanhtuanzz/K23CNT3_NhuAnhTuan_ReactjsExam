import React, { useState } from "react";

const NatProductList = ({ Products, updateProduct }) => {
  const [editProduct, setEditProduct] = useState(null);
  const [updatedInfo, setUpdatedInfo] = useState({ id: "", pName: "", pQuantity: "", pPrice: "" });

  const handleEdit = (Product) => {
    setEditProduct(Product.id);
    setUpdatedInfo({ id: Product.id, pName: Product.pName, pQuantity: Product.pQuantity, pPrice: Product.pPrice });
  };

  const handleUpdate = () => {
    updateProduct(updatedInfo);
    setEditProduct(null);
  };

  return (
    <div className="card p-3 mt-3">
      <h2 className="text-secondary">Danh sách sản phẩm</h2>
      <table className="table table-bordered">
        <thead className="table-light">
          <tr>
            <th>Mã Sản phẩm</th>
            <th>Tên sản phẩm</th>
            <th>Số lượng</th>
            <th>Giá</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {Products.map((Product) => (
            <tr key={Product.id}>
              {editProduct === Product.id ? (
                <>
                  <td>{updatedInfo.id}</td>
                  <td><input type="text" className="form-control" value={updatedInfo.pName} onChange={(e) => setUpdatedInfo({ ...updatedInfo, pName: e.target.value })} /></td>
                  <td><input type="number" className="form-control" value={updatedInfo.pQuantity} onChange={(e) => setUpdatedInfo({ ...updatedInfo, pQuantity: e.target.value })} /></td>
                  <td><input type="number" className="form-control" value={updatedInfo.pPrice} onChange={(e) => setUpdatedInfo({ ...updatedInfo, pPrice: e.target.value })} /></td>
                  <td>
                    <button className="btn btn-success me-2" onClick={handleUpdate}>Lưu</button>
                    <button className="btn btn-secondary" onClick={() => setEditProduct(null)}>Hủy</button>
                  </td>
                </>
              ) : (
                <>
                  <td>{Product.pid}</td>
                  <td>{Product.pName}</td>
                  <td>{Product.pQuantity}</td>
                  <td>{Product.pPrice}đ</td>
                  <td>
                    <button className="btn btn-warning me-2" onClick={() => handleEdit(Product)}>Sửa</button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NatProductList;