import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ROUTES } from "consts/routes";
import { Header } from "components/header/header";
import { Footer } from "components/footer/footer";
import { MainPage } from "pages/main/main";
import { CartPage } from "pages/cart/cart";
import { NotFoundPage } from "pages/not-found/not-found";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path={ROUTES.HOME} element={<MainPage />} />
        <Route path={ROUTES.CART} element={<CartPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
