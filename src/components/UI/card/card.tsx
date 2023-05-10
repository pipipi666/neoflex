import { TData } from "consts/types";
import styles from "./card.module.scss";
import { Star } from "../icons/star";
import { Button } from "../button/button";

export const Card = ({ item }: { item: TData }) => {
  return (
    <div className={styles.card}>
      <div className={styles.img__wrapper}>
        <img className={styles.img} src={item.img} alt={item.title} />
      </div>
      <div className={styles.info}>
        <div>
          <div className={styles.title}>
            <span>{item.title}</span>
            <span className={styles.price}>{item.price} ₽</span>
          </div>
          {item.oldPrice && (
            <div className={styles.price__old}>{item.oldPrice} ₽</div>
          )}
        </div>
        <div className={styles.buy}>
          <div className={styles.rate}>
            <Star />
            <span>{item.rate}</span>
          </div>
          <Button>Купить</Button>
        </div>
      </div>
    </div>
  );
};
