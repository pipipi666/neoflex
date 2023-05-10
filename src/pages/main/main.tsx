import React from "react";
import { Card } from "components/UI/card/card";
import { headphones } from "consts/data";
import styles from "./main.module.scss";
import { TChangeCart } from "consts/types";

type TMainPageProps = {
  onAddClick: TChangeCart;
};

export const MainPage = ({ onAddClick }: TMainPageProps) => {
  const categories = Array.from(new Set(headphones.map((h) => h.category)));
  return (
    <main>
      {categories.map((category) => (
        <React.Fragment key={category}>
          <h3 className={styles.h3}>{category}</h3>
          <ul className={styles.ul}>
            {headphones
              .filter((h) => h.category === category)
              .map((h) => (
                <Card key={h.id} item={h} onAddClick={onAddClick} />
              ))}
          </ul>
        </React.Fragment>
      ))}
    </main>
  );
};
