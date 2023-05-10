import { Link } from "react-router-dom";
import styles from "./header.module.scss";
import { ROUTES } from "consts/routes";
import { Favorite } from "components/UI/icons/favorite";
import { Cart } from "components/UI/icons/cart";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Link className={styles.logo} to={ROUTES.HOME}>
        QPICK
      </Link>
      <nav>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <div className={styles.counter}>2</div>
            <Link className={styles.link} to={ROUTES.HOME}>
              <Favorite />
            </Link>
          </li>
          <li className={styles.li}>
            <div className={styles.counter}>1</div>
            <Link className={styles.link} to={ROUTES.CART}>
              <Cart />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
