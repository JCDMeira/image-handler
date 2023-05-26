import { ImageCrop } from "./ImageCrop";
import styles from "./styles.module.scss";

export function EditingImage() {
  return (
    <div className={styles.app_editing_image}>
      <ImageCrop />
    </div>
  );
}
