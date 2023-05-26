import React from "react";
import styles from "./styles.module.scss";

interface AspectRatioButtomProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  aspect: number;
  selected?: boolean;
}

export function AspectRatioButton({ label, aspect, selected, ...restProps }: AspectRatioButtomProps) {
  return (
    <button
      className={`${styles.app_aspect_ratio_buttom} ${selected ? styles.app_aspect_ratio_buttom_selected : ""}`}
      {...restProps}
    >
      <span style={{ height: `calc(2.5rem / ${aspect})` }} />
      <label>{label}</label>
    </button>
  );
}
