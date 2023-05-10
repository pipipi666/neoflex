import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ROUTES } from "consts/routes";
import { Header } from "components/header/header";
import { Footer } from "components/footer/footer";
import { MainPage } from "pages/main/main";
import { CartPage } from "pages/cart/cart";
import { NotFoundPage } from "pages/not-found/not-found";
import styles from "./App.module.scss";

type TCart = {
  [k: string]: number;
};

function App() {
  const [cart, setCart] = useState<TCart>({});
  const [count, setCount] = useState(0);

  const onAddClick = (id: string) => {
    setCart({ ...cart, [id]: (cart[id] || 0) + 1 });
    setCount((prev) => prev + 1);
  };

  const onRemoveClick = (id: string) => {
    setCart({ ...cart, [id]: cart[id] - 1 });
    setCount((prev) => prev - 1);
  };

  const onClearClick = (id: string) => {
    setCount((prev) => prev - cart[id]);
    setCart({ ...cart, [id]: 0 });
  };

  return (
    <BrowserRouter>
      <div className={styles.layout}>
        <Header count={count} />
        <div className={styles.container}>
          <Routes>
            <Route
              path={ROUTES.HOME}
              element={<MainPage onAddClick={onAddClick} />}
            />
            <Route
              path={ROUTES.CART}
              element={
                <CartPage
                  cart={cart}
                  onAddClick={onAddClick}
                  onClearClick={onClearClick}
                  onRemoveClick={onRemoveClick}
                />
              }
            />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
