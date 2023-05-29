import { EditingComands } from "../../EditingComands";
import { ImageCrop } from "../../ImageCrop";
import styles from "./styles.module.scss";

export function Edit() {
  return (
    <>
      <div className={styles.app_editing_image}>
        <ImageCrop />
      </div>
      <EditingComands />
    </>
  );
}
