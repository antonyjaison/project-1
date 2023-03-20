import "./App.css";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import SignInPage from "./pages/SignInPage";
import AdminPage from "./pages/AdminPage";
import { useSelector, useDispatch } from "react-redux";
import { getUser } from "./features/userSlice";
import { useState } from "react";
import OrderPage from "./pages/OrderPage";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const isAdmin = () => {
    return user !== null && user?.userData.userType === "ADMIN";
  };

  useEffect(() => {
    setLoading(true);
    dispatch(getUser());
    setLoading(false);
  }, []);
  const user = useSelector((state) => state.user.user);
  if (loading) return <div>Loading</div>;
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/login"
            element={user === null ? <LoginPage /> : <Navigate to="/" />}
          />
          <Route
            path="/product/:id"
            element={user === null ? <Navigate to="/login" /> : <ProductPage />}
          />
          <Route
            path="/cart/:userId"
            element={user === null ? <Navigate to="/" /> : <CartPage />}
          />
          <Route
            path="/sign-in"
            element={user === null ? <SignInPage /> : <Navigate to="/" />}
          />
          <Route
            path="/admin"
            element={isAdmin() ? <AdminPage /> : <Navigate to="/" />}
          />
          <Route
            path="/order/:id"
            element={user === null ? <Navigate to="/" /> : <OrderPage />}
          />
          <Route />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
