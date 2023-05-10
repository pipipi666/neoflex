import { CardCart } from "components/UI/card-cart/card-cart";
import styles from "./cart.module.scss";
import { headphones } from "consts/data";

export const CartPage = () => {
  return (
    <main>
      <h3 className={styles.h3}>Корзина</h3>
      <div className={styles.content}>
        <ul className={styles.ul}>
          {headphones
            .filter((h) => h.category === "Наушники")
            .map((h) => (
              <CardCart key={h.id} item={h} />
            ))}
        </ul>
        <div className={styles.total__wrapper}>
          <div className={styles.total}>
            <span>ИТОГО</span>
            <span>₽ 2 927</span>
          </div>
          <button className={styles.order}>Перейти к оформлению</button>
        </div>
      </div>
    </main>
  );
};
