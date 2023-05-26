import styles from "./styles.module.scss";

interface TextButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export function TextButton({ children, ...restProps }: TextButtonProps) {
  return (
    <button className={styles.app_button_text} {...restProps}>
      {children}
    </button>
  );
}
