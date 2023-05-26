import { FaArrowLeft } from "react-icons/fa";

import { editImageActions } from "../../actions/EditImage";
import { useEditImageStore } from "../../contexts/imageContext";
import { IconButton } from "../IconButton";
import styles from "./styles.module.scss";

export function DownloadScreenHeader() {
  const { dispatch } = useEditImageStore();

  function handleReturn() {
    dispatch(editImageActions.setStep("edit"));
  }

  return (
    <header className={styles.app_header}>
      <div className={styles.app_header_container}>
        <IconButton icon={FaArrowLeft} onClick={handleReturn} />
      </div>
    </header>
  );
}
