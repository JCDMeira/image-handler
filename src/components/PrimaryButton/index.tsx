import styles from "./styles.module.scss";

interface PrimaryButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export function PrimaryButton({ children, ...restProps }: PrimaryButton) {
  return (
    <button className={styles.primary_button} {...restProps}>
      {children}
    </button>
  );
}
