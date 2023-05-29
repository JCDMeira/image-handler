import { useEditImageStore } from "../../FluxCore/contexts/imageContext";
import { editImageActions } from "../../FluxCore/actions/EditImage";
import { AspectrationButtonsBox } from "../AspectRatioButtonsBox";
import { RotateSlider } from "../RotateSlider";
import styles from "./styles.module.scss";
import { Button } from "../Button";

export function EditingComands() {
  const { state, dispatch } = useEditImageStore();

  function handleSliderWeel(value: number) {
    dispatch(editImageActions.setRotate(value));
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
      />
      <Button onClick={handleApply} variant={"primary_button"}>
        Apply
      </Button>
    </div>
  );
}
