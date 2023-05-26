import styles from "./styles.module.scss";

export function TextButton({
  children,
  ...restProps
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={styles.app_button_text} {...restProps}>
      {children}
    </button>
  );
}
