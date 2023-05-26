import React, { useState } from "react";
import { FaMinus } from "react-icons/fa";

import styles from "./styles.module.scss";

interface RotateSliderProps {
  rotateValue: number;
  onChange: (value: number) => void;
}

const itemsList = new Array(20).fill(null).map((_, index) => index);

export function RotateSlider({ rotateValue, onChange }: RotateSliderProps) {
  const [startPosition, setStartPosition] = useState(0);
  const [isMoving, setIsMoving] = useState(false);

  function changeRotate(value: number) {
    if (value < -180) {
      value = -180;
    }

    if (value > 180) {
      value = 180;
    }
    onChange(value);
  }

  function handleWeel(event: React.WheelEvent) {
    const position = event.deltaY;

    console.log(position);

    const currentValue = position < 0 ? rotateValue + 1 : rotateValue - 1;
    changeRotate(currentValue);
  }

  function handleMouseDown(event: React.MouseEvent) {
    const position = event.clientX;
    setStartPosition(position);
    setIsMoving(true);
  }

  function handleMouseUp(event: React.MouseEvent) {
    if (!isMoving) return;

    const position = event.clientX;

    const deltaX = position - startPosition;

    if (deltaX < 18 && !(deltaX < -18)) return;

    const currentValue = rotateValue + Math.trunc(deltaX / 18);
    console.log(deltaX, startPosition, position);
    changeRotate(currentValue);
  }

  return (
    <div className={styles.app_rotate_slider}>
      <span className={styles.app_rotate_slider_label}>{rotateValue}°</span>
      <span
        className={`${styles.app_rotate_slider_pipes} ${isMoving ? styles.app_rotate_slider_moving : ""}`}
        onWheel={handleWeel}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseUp}
        onMouseUp={() => setIsMoving(false)}
        onMouseLeave={() => setIsMoving(false)}
      >
        {itemsList.map((item) => (
          <span key={item} style={{}} className={`${styles.app_rotate_slider_item} `}>
            <FaMinus size={0 === rotateValue ? 22 : 18}></FaMinus>
          </span>
        ))}
      </span>
    </div>
  );
}
