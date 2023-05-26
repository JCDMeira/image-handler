import { useEditImageStore } from "../../contexts/imageContext";
import { editImageActions } from "../../actions/EditImage";
import { AspectrationButtonsBox } from "../AspectRatioButtonsBox";
import { PrimaryButton } from "../PrimaryButton";
import { RotateSlider } from "../RotateSlider";
import styles from "./styles.module.scss";

export function EditingComands() {
  const { state, dispatch } = useEditImageStore();

  function handleSliderWeel(value: number) {
    dispatch(editImageActions.setRotate(value));
  }

  function handleSelectAspect(aspectKey: string) {
    dispatch(editImageActions.setAspect(aspectKey));
  }

  function handleApply() {
    dispatch(editImageActions.setStep("download"));
  }

  return (
    <div className={styles.comands_container}>
      <RotateSlider rotateValue={state.rotate} onChange={handleSliderWeel} />
      <AspectrationButtonsBox
        aspects={state.aspects}
        selectedAspect={state.selectedAspect}
        selectAspect={handleSelectAspect}
      />
      <PrimaryButton onClick={handleApply}>Apply</PrimaryButton>
    </div>
  );
}
