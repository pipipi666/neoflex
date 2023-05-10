import { TData } from "consts/types";
import styles from "./card-cart.module.scss";
import { Trash } from "../icons/trash";
import { Minus } from "../icons/minus";
import { Plus } from "../icons/plus";

export const CardCart = ({ item }: { item: TData }) => {
  return (
    <div className={styles.card}>
      <div className={styles.top}>
        <div className={styles.img__wrapper}>
          <img className={styles.img} src={item.img} alt={item.title} />
        </div>
        <div className={styles.info}>
          <span>{item.title}</span>
          <span className={styles.price}>{item.price} ₽</span>
        </div>
        <button className={styles.btn}>
          <Trash />
        </button>
      </div>
      <div className={styles.bottom}>
        <div className={styles.count}>
          <button className={styles.btn}>
            <Minus />
          </button>
          1
          <button className={styles.btn}>
            <Plus />
          </button>
        </div>
        <span>{item.price} ₽</span>
      </div>
    </div>
  );
};
