import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import SignInPage from './pages/SignInPage'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={HomePage} />
          <Route path="/login" Component={LoginPage} />
          <Route path="/product" Component={ProductPage} />
          <Route path="/cart" Component={CartPage} />
          <Route path="/sign-in" Component={SignInPage} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
