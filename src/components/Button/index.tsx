import styles from "./styles.module.scss";

type ButtonProps = {
  variant: "app_button_text" | "primary_button";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: React.FC<ButtonProps> = ({
  children,
  variant,
  ...restProps
}) => {
  return (
    <button className={styles[variant]} {...restProps}>
      {children}
    </button>
  );
};
