import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Loading from "../../Loading/Loading";
import "./ProductsTab.css";
import { useSelector } from "react-redux";
import ProductModal from "./ProductModal";
import AddProductModel from "./AddProductModel";

const ProductsTab = () => {
    const [products, setProducts] = useState([]);
    const [openEdit, setOpenEdit] = useState(false);
    const [openAdd, setOpenAdd] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [productLoading, setProductLoading] = useState(true);
    const user = useSelector((state) => state.user.user);

    const fetchProducts = async () => {
        setLoading(true);
        const res = await fetch("http://localhost:4000/product/");
        if (res.ok) {
            const json = await res.json();
            setProducts(json);
        }
        setLoading(false);
    };

    const closeEditModal = () => {
        setOpenEdit(false);
        setSelectedProduct(null);
    };
    const closeAddModal = () => {
        setOpenAdd(false);
    };

    const deleteProduct = async (id) => {
        setProductLoading(true);
        const res = await fetch(`http://localhost:4000/product/${id}`, {
            method: "DELETE",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${user.token}`,
            },
        });
        await fetchProducts();
        setProductLoading(false);
    };
    const handleEditClick = (product) => {
        setSelectedProduct(product);
        setOpenEdit(true);
    };
    useEffect(() => {
        fetchProducts();
    }, []);

    if (loading) return <Loading />;

    if (products.length === 0)
        return (
            <h2 className="mt-3 text-center text-lg text-danger">
                No Products Available
            </h2>
        );

    return (
        <div className="products_tab">
            <button onClick={() => setOpenAdd(true)} className="add-btn">
                Add Product
            </button>
            {products.map((product) => (
                <div key={product._id} className="card my-2 mx-4">
                    <img
                        src={product.image}
                        className="card-img-top product_img"
                        alt={product.image}
                    />
                    <div className="card-body">
                        <span>
                            Name:
                            <h3 className="card-title"> {product.name}</h3>
                        </span>
                        <p className="card-text">Price: {product.price}</p>
                        <div className="d-flex mt-3 justify-content-between">
                            <button
                                onClick={() => handleEditClick(product)}
                                className="btn btn-warning"
                            >
                                EDIT
                            </button>
                            <button
                                onClick={() => deleteProduct(product._id)}
                                className="btn btn-danger"
                            >
                                DELETE
                            </button>
                        </div>
                    </div>
                </div>
            ))}
            {selectedProduct && openEdit && (
                <ProductModal
                    product={selectedProduct}
                    closeModal={closeEditModal}
                    fetchProducts={fetchProducts}
                />
            )}
            {openAdd && (
                <AddProductModel
                    closeModal={closeAddModal}
                    fetchProducts={fetchProducts}
                />
            )}
        </div>
    );
};

export default ProductsTab;
