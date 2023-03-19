import "./App.css";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import SignInPage from "./pages/SignInPage";
import { useSelector, useDispatch } from "react-redux";
import { getUser } from "../src/features/userSlice";
import OrderPage from "./pages/OrderPage";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, []);
  const user = useSelector((state) => state.user.user);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/login"
            element={user === null ? <Navigate to="/" /> : <LoginPage />}
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
            element={user === null ? <Navigate to="/" /> : <SignInPage />}
          />
          <Route path="/orders/:id" element={user === null ? <Navigate to='/login'/> : <OrderPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
