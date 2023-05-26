import styles from "./styles.module.scss";

export function PrimaryButton({
  children,
  ...restProps
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={styles.primary_button} {...restProps}>
      {children}
    </button>
  );
}
