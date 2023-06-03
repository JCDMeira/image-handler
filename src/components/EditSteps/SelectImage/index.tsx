import { Button } from "../../";
import { useImageStore } from "../../../Store/useImageStore";
import { InputImage } from "../../InputImage";
import styles from "./styles.module.scss";

export function SelectImage() {
  const imageSrc = useImageStore((state) => state.imageSrc);
  const setStep = useImageStore((state) => state.setStep);

  return (
    <>
      <div className={styles.app_select_image}>
        <InputImage />

        <div className={styles.app_original_image_view}>
          {imageSrc && <img src={imageSrc} />}
        </div>
      </div>

      <div className={styles.app_buttons_box}>
        <Button
          disabled={!imageSrc}
          onClick={() => setStep("edit")}
          variant={"primary_button"}
        >
          Edit
        </Button>
      </div>
    </>
  );
}
