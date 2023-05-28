import { FaArrowLeft } from "react-icons/fa";

import { editImageActions } from "../../FluxCore/actions/EditImage";
import { useEditImageStore } from "../../FluxCore/contexts/imageContext";
import styles from "./styles.module.scss";
import { Button } from "../Button";

export function DownloadScreenHeader() {
  const { dispatch } = useEditImageStore();

  function handleReturn() {
    dispatch(editImageActions.setStep("edit"));
  }

  return (
    <header className={styles.app_header}>
      <div className={styles.app_header_container}>
        <Button onClick={handleReturn} variant={"app_button_text"}>
          <FaArrowLeft />
        </Button>
      </div>
    </header>
  );
}
