import { FaArrowLeft } from "react-icons/fa";
import { Button } from "../";

import styles from "./styles.module.scss";
import { useImageStore } from "../../Store/useImageStore";

export function Header() {
  const step = useImageStore((state) => state.step);
  const setStep = useImageStore((state) => state.setStep);
  const reset = useImageStore((state) => state.reset);
  const imageSrc = useImageStore((state) => state.imageSrc);

  const isFirstStep = step === "selectImage";
  const isEditStep = step === "edit";

  function handleReturn() {
    const stepToGoBack = isEditStep ? "selectImage" : "edit";
    setStep(stepToGoBack);
  }

  function clearImagesData() {
    reset();
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
      {!!imageSrc && (
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
