import { Card } from "components/UI/card/card";
import { headphones } from "consts/data";
import styles from "./main.module.scss";

export const MainPage = ({
  onAddClick,
}: {
  onAddClick: (id: string) => void;
}) => {
  return (
    <main>
      <h3 className={styles.h3}>Наушники</h3>
      <ul className={styles.ul}>
        {headphones
          .filter((h) => h.category === "Наушники")
          .map((h) => (
            <Card key={h.id} item={h} onAddClick={onAddClick} />
          ))}
      </ul>
      <h3 className={styles.h3}>Беспроводные наушники</h3>
      <ul className={styles.ul}>
        {headphones
          .filter((h) => h.category === "Беспроводные наушники")
          .map((h) => (
            <Card key={h.id} item={h} onAddClick={onAddClick} />
          ))}
      </ul>
    </main>
  );
};
