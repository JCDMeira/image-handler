import { FaArrowLeft } from "react-icons/fa";
import { editImageActions } from "../../FluxCore/actions/EditImage";
import { useEditImageStore } from "../../FluxCore/contexts/imageContext";

import styles from "./styles.module.scss";
import { Button } from "../Button";

export function EditScreenHeader() {
  const { state, dispatch } = useEditImageStore();

  function handleReturn() {
    dispatch(editImageActions.setStep("selectImage"));
  }

  function clearImagesData() {
    URL.revokeObjectURL(state.imageSrc);
    URL.revokeObjectURL(state.imageOut);

    dispatch(editImageActions.setImageSrc(""));
    dispatch(editImageActions.setImageOut(""));
    dispatch(editImageActions.setStep("selectImage"));
  }
  return (
    <header className={styles.app_header}>
      <div className={styles.app_header_container}>
        <Button onClick={handleReturn} variant={"app_button_text"}>
          <FaArrowLeft />
        </Button>

        <Button onClick={clearImagesData} variant={"app_button_text"}>
          Reset
        </Button>
      </div>
    </header>
  );
}
