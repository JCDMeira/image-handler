import { AspectRatioBox, Button, ImageCrop, RotateSlider } from "../../";
import { useImageStore } from "../../../Store/useImageStore.store";
import { ImageActions } from "../../../actions/ImageActions.action";
import styles from "./styles.module.scss";

export function Edit() {
  const dispatch = useImageStore((store) => store.dispatch);

  function handleApply() {
    dispatch(ImageActions.setStep("download"));
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
