import { editImageActions } from "../../FluxCore/actions/EditImage";
import { ImageInput } from "../../components/ImageInput";
import { useEditImageStore } from "../../FluxCore/contexts/imageContext";
import styles from "./styles.module.scss";
import { Button } from "../../components/Button";

export function SelectImage() {
  const { state, dispatch } = useEditImageStore();
  return (
    <main className={styles.app_main}>
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
    </main>
  );
}
