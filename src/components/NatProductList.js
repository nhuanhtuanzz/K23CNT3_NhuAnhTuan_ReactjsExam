import React, { useState } from "react";

const NatProductList = ({ Products, updateProduct }) => {
  const [editProduct, setEditProduct] = useState(null);
  const [updatedInfo, setUpdatedInfo] = useState({ natPid: "", natPName: "", natPQuantity: "", natPPrice: "" });

  const handleEdit = (Product) => {
    setEditProduct(Product.natPid);
    setUpdatedInfo({ natPid: Product.natPid, natPName: Product.natPName, natPQuantity: Product.natPQuantity, natPPrice: Product.natPPrice });
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
            <tr key={Product.natPid}>
              {editProduct === Product.natPid ? (
                <>
                  <td>{updatedInfo.natPid}</td>
                  <td><input type="text" className="form-control" value={updatedInfo.natPName} onChange={(e) => setUpdatedInfo({ ...updatedInfo, natPName: e.target.value })} /></td>
                  <td><input type="number" className="form-control" value={updatedInfo.natPQuantity} onChange={(e) => setUpdatedInfo({ ...updatedInfo, natPQuantity: e.target.value })} /></td>
                  <td><input type="number" className="form-control" value={updatedInfo.natPPrice} onChange={(e) => setUpdatedInfo({ ...updatedInfo, natPPrice: e.target.value })} /></td>
                  <td>
                    <button className="btn btn-success me-2" onClick={handleUpdate}>Lưu</button>
                    <button className="btn btn-secondary" onClick={() => setEditProduct(null)}>Hủy</button>
                  </td>
                </>
              ) : (
                <>
                  <td>{Product.natPid}</td>
                  <td>{Product.natPName}</td>
                  <td>{Product.natPQuantity}</td>
                  <td>{Product.natPPrice}đ</td>
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