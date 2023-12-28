// DeleteProduct.jsx
import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const DeleteProduct = ({ delID }) => {
  const handleDelete = async () => {
    try {
      const res = await axios.delete(
        `http://localhost:4000/api/products/${delID}`,
        { withCredentials: true }
      );
      console.log(res.data, res.status);
      alert("Product deleted successfully");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <button
        className="btn btn-primary mr-2 ml-2"
        style={{
          backgroundColor: "rgb(191, 62, 62)",
          border: "1px solid black",
        }}
        onClick={handleDelete}
      >
        Delete
      </button>
    </div>
  );
};

export default DeleteProduct;
