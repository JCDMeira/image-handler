import { IconType } from "react-icons";

import styles from "./styles.module.scss";

interface IconButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "choldren"> {
  icon: IconType;
}

export function IconButton({ icon: Icon, ...restProps }: IconButtonProps) {
  return (
    <button className={styles.app_icon_button} {...restProps}>
      <Icon size={20} />
    </button>
  );
}
