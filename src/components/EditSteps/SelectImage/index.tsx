import { editImageActions } from "../../../FluxCore/actions/EditImage";
import { useEditImageStore } from "../../../FluxCore/contexts/imageContext";
import { Button } from "../../Button";
import { ImageInput } from "../../ImageInput";
import styles from "./styles.module.scss";

export function SelectImage() {
  const { state, dispatch } = useEditImageStore();
  return (
    <>
      <div className={styles.app_select_image}>
        <ImageInput />

        <div className={styles.app_original_image_view}>
          {state.imageSrc && <img src={state.imageSrc} />}
        </div>
      </div>

      <div className={styles.app_buttons_box}>
        <Button
          disabled={!state.imageName}
          onClick={() => {
            dispatch(editImageActions.setStep("edit"));
          }}
          variant={"primary_button"}
        >
          Edit
        </Button>
      </div>
    </>
  );
}
