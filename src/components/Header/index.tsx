import { FaArrowLeft } from "react-icons/fa";
import { editImageActions } from "../../FluxCore/actions/EditImage";
import { useEditImageStore } from "../../FluxCore/contexts/imageContext";
import { Button } from "../Button";

import styles from "./styles.module.scss";

export function Header() {
  const { state, dispatch } = useEditImageStore();

  const isFirstStep = state.step === "selectImage";
  const isEditStep = state.step === "edit";

  function handleReturn() {
    const stepToGoBack = isEditStep ? "selectImage" : "edit";
    dispatch(editImageActions.setStep(stepToGoBack));
  }

  function clearImagesData() {
    dispatch(editImageActions.onReset());
  }

  return (
    <header className={styles.app_header}>
      <div>
        {!isFirstStep && (
          <Button onClick={handleReturn} variant={"app_button_text"}>
            <FaArrowLeft />
          </Button>
        )}
      </div>
      {!!state.imageSrc && (
        <Button
          onClick={clearImagesData}
          variant={"app_button_text"}
          id="teste"
        >
          Reset
        </Button>
      )}
    </header>
  );
}
