import styles from "./button.module.scss";

type TButtonProps = {
  children: string;
  size?: "s" | "m";
  type?: "active" | "default";
  onClick?: void;
};

export const Button = ({
  children,
  size = "m",
  type = "default",
}: TButtonProps) => {
  return (
    <button
      className={`${styles.btn} ${
        size === "s" ? styles.size__s : styles.size__m
      } ${type === "active" ? styles.active : ""}`}
    >
      {children}
    </button>
  );
};
