import { Button } from "../../";
import { ImageActions, useImageStore } from "../../../Store/useImageStore";
import { InputImage } from "../../InputImage";
import styles from "./styles.module.scss";

export function SelectImage() {
  const state = useImageStore((store) => store.state);
  const dispatch = useImageStore((store) => store.dispatch);

  return (
    <>
      <div className={styles.app_select_image}>
        <InputImage />

        <div className={styles.app_original_image_view}>
          {state.imageSrc && <img src={state.imageSrc} />}
        </div>
      </div>

      <div className={styles.app_buttons_box}>
        <Button
          disabled={!state.imageSrc}
          onClick={() => dispatch(ImageActions.setStep("edit"))}
          variant={"primary_button"}
        >
          Edit
        </Button>
      </div>
    </>
  );
}
