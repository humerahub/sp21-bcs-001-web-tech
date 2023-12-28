import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from "react-modal";
import "bootstrap/dist/css/bootstrap.min.css";

const UpdateProduct = ({ productId, onClose, onUpdate }) => {
  const [product, setProduct] = useState({
    id: "",
    name: "",
    price: "",
    photo: "",
    category: "",
    description: "",
    ingredients: [],
  });
  const [isModalOpen, setIsModalOpen] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(
          `http://localhost:4000/api/products/${productId}`,
          { withCredentials: true }
        );
        setProduct(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchProduct();
  }, [productId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.put(
        `http://localhost:4000/api/products/${productId}`,
        product,
        {
          withCredentials: true,
        }
      );
      console.log(res.data);
      alert("Product updated successfully");

      setIsModalOpen(false);

      onUpdate();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={() => {
        setIsModalOpen(false);
        onClose();
      }}
      contentLabel="Update Product Modal"
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        },
        content: {
          width: "400px",
          margin: "auto",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
          borderRadius: "8px",
          padding: "20px",
        },
      }}
    >
      <h1 className="mb-4" style={{ fontSize: "24px" }}>
        Update Product
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Product ID:</label>
          <input
            type="text"
            className="form-control"
            name="id"
            value={product.id}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Product Name:</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={product.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Price:</label>
          <input
            type="text"
            className="form-control"
            name="price"
            value={product.price}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Photo URL:</label>
          <input
            type="text"
            className="form-control"
            name="photo"
            value={product.photo}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Category:</label>
          <input
            type="text"
            className="form-control"
            name="category"
            value={product.category}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Description:</label>
          <textarea
            className="form-control"
            name="description"
            value={product.description}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Ingredients:</label>
          <input
            type="text"
            className="form-control"
            name="ingredients"
            value={product.ingredients}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <button
            type="submit"
            className="btn btn-primary"
            style={{
              backgroundColor: "rgb(191, 62, 62)",
              border: "1px solid black",
            }}
          >
            Update Product
          </button>
          <button
            type="button"
            className="btn btn-secondary ms-2"
            onClick={() => {
              onUpdate();
              onClose();
            }}
          >
            Cancel
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default UpdateProduct;
