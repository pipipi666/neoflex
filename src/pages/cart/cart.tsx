import { CardCart } from "components/UI/card-cart/card-cart";
import styles from "./cart.module.scss";
import { headphones } from "consts/data";
import { TChangeCart } from "consts/types";
import { useMemo } from "react";

type TCartPageProps = {
  cart: {
    [k: string]: number;
  };
  onAddClick: TChangeCart;
  onRemoveClick: TChangeCart;
  onClearClick: TChangeCart;
};

export const CartPage = ({
  cart,
  onAddClick,
  onRemoveClick,
  onClearClick,
}: TCartPageProps) => {
  const items = useMemo(() => headphones.filter((h) => cart[h.id]), [cart]);
  const total = items.reduce(
    (acc, curr) => acc + curr.price * cart[curr.id],
    0
  );

  return (
    <main>
      <h3 className={styles.h3}>Корзина</h3>
      <div className={styles.content}>
        {Object.keys(cart).length ? (
          <>
            <ul className={styles.ul}>
              {items.map((h) => (
                <CardCart
                  key={h.id}
                  item={h}
                  cart={cart}
                  onAddClick={onAddClick}
                  onRemoveClick={onRemoveClick}
                  onClearClick={onClearClick}
                />
              ))}
            </ul>
            <div className={styles.total__wrapper}>
              <div className={styles.total}>
                <span>ИТОГО</span>
                <span>₽ {total}</span>
              </div>
              <button className={styles.order}>Перейти к оформлению</button>
            </div>
          </>
        ) : (
          <h3 className={styles.h3}>Ваша корзина пуста</h3>
        )}
      </div>
    </main>
  );
};
