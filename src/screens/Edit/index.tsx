import { EditScreenHeader } from "../../components/EditScreenHeader";
import { EditingImage } from "../../components/EditingImage";
import { EditingComands } from "../../components/EditingComands";
import styles from "./styles.module.scss";

export function Edit() {
  return (
    <>
      <EditScreenHeader />

      <main className={styles.editing_main}>
        <EditingImage />
        <EditingComands />
      </main>
    </>
  );
}
