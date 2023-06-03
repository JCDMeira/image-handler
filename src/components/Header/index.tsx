import { FaArrowLeft } from "react-icons/fa";
import { Button } from "../";

import styles from "./styles.module.scss";
import { useImageStore } from "../../Store/useImageStore";
import { ImageActions } from "../../actions/ImageActions.action";

export function Header() {
  const state = useImageStore((store) => store.state);
  const dispatch = useImageStore((store) => store.dispatch);

  const isFirstStep = state.step === "selectImage";
  const isEditStep = state.step === "edit";

  function handleReturn() {
    const stepToGoBack = isEditStep ? "selectImage" : "edit";
    dispatch(ImageActions.setStep(stepToGoBack));
  }

  function clearImagesData() {
    dispatch(ImageActions.reset());
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
