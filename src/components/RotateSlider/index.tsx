import React, { useState } from "react";
import { FaMinus } from "react-icons/fa";
import styles from "./styles.module.scss";
import { useImageStore } from "../../Store/useImageStore";

const itemsList = new Array(20).fill(null).map((_, index) => index);

export function RotateSlider() {
  const rotate = useImageStore((state) => state.rotate);
  const setRotate = useImageStore((state) => state.setRotate);

  const [startPosition, setStartPosition] = useState(0);
  const [isMoving, setIsMoving] = useState(false);

  function handleSliderWeel(value: number) {
    setRotate(value);
  }

  function changeRotate(value: number) {
    if (value < -180) {
      value = -180;
    } else if (value > 180) {
      value = 180;
    }
    handleSliderWeel(value);
  }

  function handleWeel(event: React.WheelEvent) {
    const position = event.deltaY;

    const currentValue = position < 0 ? rotate + 1 : rotate - 1;
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

    const currentValue = rotate + Math.trunc(deltaX / 18);
    changeRotate(currentValue);
  }

  return (
    <div className={styles.app_rotate_slider}>
      <span className={styles.app_rotate_slider_label}>{rotate}°</span>
      <span
        className={`${styles.app_rotate_slider_pipes} ${
          isMoving && styles.app_rotate_slider_moving
        }`}
        onWheel={handleWeel}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseUp}
        onMouseUp={() => setIsMoving(false)}
        onMouseLeave={() => setIsMoving(false)}
      >
        {itemsList.map((item) => (
          <span key={item} className={`${styles.app_rotate_slider_item} `}>
            <FaMinus size={0 === rotate ? 22 : 18} />
          </span>
        ))}
      </span>
    </div>
  );
}
