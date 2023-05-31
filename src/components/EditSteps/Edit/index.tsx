import { editImageActions } from "../../../FluxCore/actions/EditImage";
import { useEditImageStore } from "../../../FluxCore/contexts/imageContext";
import { AspectRatioBox, Button, ImageCrop, RotateSlider } from "../../";
import styles from "./styles.module.scss";

export function Edit() {
  const { dispatch } = useEditImageStore();

  function handleApply() {
    dispatch(editImageActions.setStep("download"));
  }

  return (
    <>
      <div className={styles.app_editing_image}>
        <ImageCrop />
      </div>
      <div className={styles.comands_container}>
        <RotateSlider />
        <AspectRatioBox />
        <Button onClick={handleApply} variant={"primary_button"}>
          Apply
        </Button>
      </div>
    </>
  );
}
