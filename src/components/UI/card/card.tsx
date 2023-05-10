import { TData } from "consts/types";
import styles from "./card.module.scss";
import { Star } from "../icons/star";
import { Button } from "../button/button";

export const Card = ({
  item,
  onAddClick,
}: {
  item: TData;
  onAddClick: (id: string) => void;
}) => {
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
          <Button onAddClick={() => onAddClick(item.id)}>Купить</Button>
        </div>
      </div>
    </div>
  );
};
