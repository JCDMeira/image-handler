import { useEditImageStore } from "../../FluxCore/contexts/imageContext";
import { editImageActions } from "../../FluxCore/actions/EditImage";
import { AspectRatioBox } from "../AspectRatioBox";
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
      <AspectRatioBox />
      <Button onClick={handleApply} variant={"primary_button"}>
        Apply
      </Button>
    </div>
  );
}
