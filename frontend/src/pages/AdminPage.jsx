import { useState } from "react";
import ProductsTab from "../components/Admin/ProductsTab/ProductsTab";
import UsersTab from "../components/Admin/UsersTab/UsersTab";
import OrdersTab from "../components/Admin/OrdersTab/OrdersTab";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

const divStyles = {
    height: "30rem",
    margin: "0 10vw",
    backgroundColor: "#f0f0f0",
    borderRadius: "0.5em",
    // outline: "1px red solid",
};

const AdminPage = () => {
    const [currTab, setCurrTab] = useState("USERS");
    const tabs = ["USERS", "ORDERS", "PRODUCTS"];
    return (
        <div>
            <Navbar isDark={true} />
            <div style={divStyles} className="d-flex flex-column my-2">
                <ul className="nav nav-tabs nav-fill">
                    {tabs.map((tab) => (
                        <li key={tab} className="nav-item">
                            <a
                                onClick={(e) => {
                                    e.preventDefault();
                                    setCurrTab(tab);
                                }}
                                className={`nav-link ${
                                    currTab === tab ? "active" : ""
                                }`}
                                aria-current={
                                    currTab === tab ? "page" : undefined
                                }
                                href="#"
                            >
                                {tab}
                            </a>
                        </li>
                    ))}
                </ul>
                {currTab === "USERS" && <UsersTab />}
                {currTab === "PRODUCTS" && <ProductsTab />}
                {currTab === "ORDERS" && <OrdersTab />}
            </div>
            <Footer />
        </div>
    );
};

export default AdminPage;
