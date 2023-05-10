import styles from "./not-found.module.scss";

export const NotFoundPage = () => {
  return (
    <div className={styles.container}>
      <p className={styles.code}>404</p>
      <p className={styles.message}>Страница не найдена</p>
    </div>
  );
};
