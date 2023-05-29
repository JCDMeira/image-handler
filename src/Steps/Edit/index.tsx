import { EditingImage } from "../../components/EditingImage";
import { EditingComands } from "../../components/EditingComands";
import styles from "./styles.module.scss";

export function Edit() {
  return (
    <>
      <main className={styles.editing_main}>
        <EditingImage />
        <EditingComands />
      </main>
    </>
  );
}
