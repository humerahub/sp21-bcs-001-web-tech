import React, { useState } from "react";
import axios from "axios";
import Modal from "react-modal";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

const AddProduct = () => {
  const [product, setProduct] = useState({
    id: "",
    name: "",
    price: "",
    photo: "",
    category: "",
    description: "",
    ingredients: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

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
      const res = await axios.post(
        "http://localhost:4000/api/products/create",
        product,
        {
          withCredentials: true,
        }
      );
      console.log(res.data);
      alert("Product added successfully");

      setProduct({
        id: "",
        name: "",
        price: "",
        photo: "",
        category: "",
        description: "",
        ingredients: "",
      });

      setIsModalOpen(false);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="ml-2 mt-5">
      <h1 className="mb-4" style={{ fontSize: "24px", marginTop: "-20px" }}>
        Add Product
      </h1>
      <button
        className="btn btn-primary mb-3"
        style={{
          backgroundColor: "rgb(191, 62, 62)",
          border: "1px solid black",
        }}
        onClick={() => setIsModalOpen(true)}
      >
        Open Modal
      </button>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        contentLabel="Add Product Modal"
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            marginleft: -100,
          },
          content: {
            width: "400px",
            margin: "auto",
            left: 0,
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
            borderRadius: "8px",
            padding: "20px",
          },
        }}
      >
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
          <button
            type="submit"
            className="btn btn-primary"
            style={{
              backgroundColor: "rgb(191, 62, 62)",
              border: "1px solid black",
            }}
          >
            Add Product
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default AddProduct;
