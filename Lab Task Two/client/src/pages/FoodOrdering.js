import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import Pagination from "../components/layouts/Pagination";
import "../styles/FoodOrderingStyle.css";
import DeleteProduct from "../components/layouts/DeleteProduct";
import AddProduct from "../components/layouts/AddProduct";
import UpdateProduct from "../components/layouts/UpdateProduct";

const FoodOrdering = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProductId, setSelectedProductId] = useState(null);

  const fetchProducts = async () => {
    try {
      const res = await axios.get(
        `http://localhost:4000/api/products?page=${currentPage}&search=${searchTerm}`
      );
      console.log("API Response:", res.data);

      setProducts(res.data);
      setLoading(false);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [currentPage, searchTerm, setLoading]);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const pageParam = params.get("page");
    const searchParam = params.get("search");

    if (pageParam) {
      setCurrentPage(Number(pageParam));
    }

    if (searchParam) {
      setSearchTerm(searchParam);
    }
  }, [location.search]);

  const handleSearch = () => {
    setCurrentPage(1);
    fetchProducts();
  };

  const handlePagination = (newPage) => {
    setCurrentPage(newPage);
    navigate(`${location.pathname}?page=${newPage}&search=${searchTerm}`);
  };

  const openUpdateModal = (productId) => {
    setSelectedProductId(productId);
  };

  const closeUpdateModal = () => {
    setSelectedProductId(null);
  };

  return (
    <div className="container-sm mt-5">
      <h1 className="mb-2">Food Ordering</h1>
      <AddProduct />
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search for products"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          className="mx-3 btn-search"
          type="button"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {products.length === 0 ? (
            <p>No products found</p>
          ) : (
            products.map((product) => (
              <div key={product._id} className="mb-4">
                <div className="row align-items-center">
                  <div className="col-md-4">
                    <img
                      src={product.photo}
                      alt={product.name}
                      className="img-fluid rounded"
                      style={{ maxWidth: "100%", height: "auto" }}
                    />
                  </div>
                  <div className="col-md-8">
                    <h2>{product.name}</h2>
                    <p className="lead">
                      <strong>Price:</strong> <strong>Rs</strong>{" "}
                      <strong>{product.price}</strong>
                    </p>
                    <p>
                      <strong>Category:</strong> {product.category}
                    </p>
                    <p>
                      <strong>Description:</strong> {product.description}
                    </p>
                    <p>
                      <strong>Ingredients:</strong>{" "}
                      {product.ingredients.join(", ")}
                    </p>
                    <div className="d-flex justify-content-end mt-2">
                      <button
                        className="btn btn-primary me-2"
                        style={{
                          backgroundColor: "rgb(191, 62, 62)",
                          border: "1px solid black",
                        }}
                        onClick={() => openUpdateModal(product._id)}
                      >
                        Update
                      </button>
                      <DeleteProduct delID={product._id} />
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
          <Pagination
            handlePagination={handlePagination}
            currentPage={currentPage}
          />
        </div>
      )}

      {selectedProductId && (
        <UpdateProduct
          productId={selectedProductId}
          onClose={closeUpdateModal}
          onUpdate={fetchProducts}
        />
      )}
    </div>
  );
};

export default FoodOrdering;
