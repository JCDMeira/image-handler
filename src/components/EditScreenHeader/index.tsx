import { FaArrowLeft } from "react-icons/fa";
import { editImageActions } from "../../FluxCore/actions/EditImage";
import { useEditImageStore } from "../../FluxCore/contexts/imageContext";

import { IconButton } from "../IconButton";
import { TextButton } from "../TextButton";
import styles from "./styles.module.scss";

export function EditScreenHeader() {
  const { dispatch } = useEditImageStore();

  function handleReturn() {
    dispatch(editImageActions.setStep("selectImage"));
  }

  return (
    <header className={styles.app_header}>
      <div className={styles.app_header_container}>
        <IconButton icon={FaArrowLeft} onClick={handleReturn} />
        <TextButton>Reset</TextButton>
      </div>
    </header>
  );
}
