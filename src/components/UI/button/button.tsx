import styles from "./button.module.scss";

type TButtonProps = {
  children: string;
  size?: "s" | "m";
  type?: "active" | "default";
  onAddClick?: () => void;
};

export const Button = ({
  onAddClick,
  children,
  size = "m",
  type = "default",
}: TButtonProps) => {
  const handleClick: React.MouseEventHandler<
    HTMLButtonElement | HTMLAnchorElement
  > = () => {
    onAddClick?.(); // works
  };
  return (
    <button
      className={`${styles.btn} ${
        size === "s" ? styles.size__s : styles.size__m
      } ${type === "active" ? styles.active : ""}`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};
