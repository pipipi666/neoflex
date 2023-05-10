import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ROUTES } from "consts/routes";
import { Header } from "components/header/header";
import { Footer } from "components/footer/footer";
import { MainPage } from "pages/main/main";
import { CartPage } from "pages/cart/cart";
import { NotFoundPage } from "pages/not-found/not-found";
import styles from "./App.module.scss";

function App() {
  return (
    <BrowserRouter>
      <div className={styles.layout}>
        <Header />
        <div className={styles.container}>
          <Routes>
            <Route path={ROUTES.HOME} element={<MainPage />} />
            <Route path={ROUTES.CART} element={<CartPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
