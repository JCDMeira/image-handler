import { editImageActions } from "../../FluxCore/actions/EditImage";
import { useEditImageStore } from "../../FluxCore/contexts/imageContext";
import { Button } from "../Button";
import styles from "./styles.module.scss";

interface AspectrationButtonsBoxprops {
  aspects: Record<string, number>;
  selectedAspect: string;
}

export function AspectRatioBox({
  aspects,
  selectedAspect,
}: AspectrationButtonsBoxprops) {
  const { dispatch } = useEditImageStore();
  const aspectsList = Object.keys(aspects);

  function handleSelectAspect(aspectKey: string) {
    dispatch(editImageActions.setAspect(aspectKey));
  }

  return (
    <div className={styles.app_aspect_ratio_buttons_box}>
      {aspectsList.map((aspectKey) => (
        <Button
          key={aspectKey}
          onClick={() => handleSelectAspect(aspectKey)}
          variant={"aspect_ratio_buttom"}
        >
          <span
            className={`${styles.aspect_span} ${
              selectedAspect === aspectKey && styles.aspect_span_selected
            }`}
            style={{ height: `calc(2.5rem / ${aspects[aspectKey] || 1})` }}
          />
          <label className={`${styles.aspect_label}`}>{aspectKey}</label>
        </Button>
      ))}
    </div>
  );
}
