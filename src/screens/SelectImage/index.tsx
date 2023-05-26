import { editImageActions } from "../../actions/EditImage";
import { ImageInput } from "../../components/ImageInput";
import { PrimaryButton } from "../../components/PrimaryButton";
import { useEditImageStore } from "../../contexts/imageContext";
import styles from "./styles.module.scss";

export function SelectImage() {
  const { state, dispatch } = useEditImageStore();
  return (
    <main className={styles.app_main}>
      <div className={styles.app_select_image}>
        <ImageInput />

        <div className={styles.app_original_image_view}>{state.imageSrc && <img src={state.imageSrc} />}</div>
      </div>

      <div className={styles.app_buttons_box}>
        <PrimaryButton
          disabled={!state.imageName}
          onClick={() => {
            dispatch(editImageActions.setStep("edit"));
          }}
        >
          Edit
        </PrimaryButton>
      </div>
    </main>
  );
}
