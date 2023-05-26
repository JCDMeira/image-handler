import styles from "./styles.module.scss";

interface PrimaryLinkButton extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}

export function PrimaryLinkButton({ children, ...restProps }: PrimaryLinkButton) {
  return (
    <a className={styles.primary_button} {...restProps}>
      {children}
    </a>
  );
}
