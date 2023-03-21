import { useState } from "react";
import { useSelector } from "react-redux";
import "./ProductModal.css";

const AddProductModel = ({ closeModal, fetchProducts }) => {
  console.log("hello");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const user = useSelector((state) => state.user.user);
  const [description, setDescription] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/product/`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
      body: JSON.stringify({
        name,
        description,
        image,
        price,
      }),
    });
    await fetchProducts();
    setIsLoading(false);
    closeModal();
  };

  return (
    <>
      <div className="modal">
        <div className="modal-content">
          <h2 className="mb-3">Add Product Details</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input
              required
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <label htmlFor="price">Price:</label>
            <input
              required
              min={0}
              type="number"
              step="0.01"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.valueAsNumber)}
            />
            <label htmlFor="description">Description:</label>
            <input
              type="text"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />

            <label htmlFor="image">Image URL:</label>
            <input
              required
              type="text"
              id="image"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />

            <div className="modal-buttons mt-3">
              <button
                className="btn btn-primary"
                disabled={isLoading}
                type="submit"
              >
                {isLoading ? "Loading" : "Add"}
              </button>
              <button
                className="btn btn-danger mt-2"
                disabled={isLoading}
                type="button"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddProductModel;
