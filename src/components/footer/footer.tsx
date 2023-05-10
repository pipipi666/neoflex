import { Link } from "react-router-dom";
import styles from "./footer.module.scss";
import { ROUTES } from "consts/routes";
import { Media } from "components/UI/icons/media";
import { Lang } from "components/UI/icons/lang";
import { Button } from "components/UI/button/button";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__item}>
        <Link className={styles.logo} to={ROUTES.HOME}>
          QPICK
        </Link>
      </div>
      <div className={styles.footer__item}>
        <nav>
          <ul className={styles.ul}>
            <li>
              <Link to={ROUTES.HOME}>Избранное</Link>
            </li>
            <li>
              <Link to={ROUTES.CART}>Корзина</Link>
            </li>
            <li>
              <Link to={ROUTES.HOME}>Контакты</Link>
            </li>
          </ul>
        </nav>
        <div className={styles.lang__wrapper}>
          <Link to={ROUTES.HOME}>Условия сервиса</Link>
          <div className={styles.lang}>
            <Lang />
            <Button size="s" type="active">
              Рус
            </Button>
            <Button size="s">Eng</Button>
          </div>
        </div>
      </div>
      <div className={`${styles.footer__item} ${styles.media__wrapper}`}>
        <ul className={styles.media}>
          <li className={styles.media__li}>
            <Link to="https://vk.com" target="_blank" rel="noreferrer">
              <Media type="vk" />
            </Link>
          </li>
          <li className={styles.media__li}>
            <Link to="https://t.me/piqwerty" target="_blank" rel="noreferrer">
              <Media type="telegram" />
            </Link>
          </li>
          <li className={styles.media__li}>
            <Link
              to="https://wa.me/74959842513"
              target="_blank"
              rel="noreferrer"
            >
              <Media type="whatsapp" />
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};
