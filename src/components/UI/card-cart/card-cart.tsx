import { TData } from "consts/types";
import styles from "./card-cart.module.scss";
import { Trash } from "../icons/trash";
import { Minus } from "../icons/minus";
import { Plus } from "../icons/plus";

type TCardCartProps = {
  item: TData;
  cart: {
    [k: string]: number;
  };
  onAddClick: (id: string) => void;
  onRemoveClick: (id: string) => void;
  onClearClick: (id: string) => void;
};

export const CardCart = ({
  item,
  cart,
  onAddClick,
  onRemoveClick,
  onClearClick,
}: TCardCartProps) => {
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
        <button className={styles.btn} onClick={() => onClearClick(item.id)}>
          <Trash />
        </button>
      </div>
      <div className={styles.bottom}>
        <div className={styles.count}>
          <button className={styles.btn} onClick={() => onRemoveClick(item.id)}>
            <Minus />
          </button>
          {cart[item.id]}
          <button className={styles.btn} onClick={() => onAddClick(item.id)}>
            <Plus />
          </button>
        </div>
        <span>{item.price * cart[item.id]} ₽</span>
      </div>
    </div>
  );
};
