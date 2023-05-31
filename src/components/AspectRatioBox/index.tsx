import { editImageActions } from "../../FluxCore/actions/EditImage";
import { useEditImageStore } from "../../FluxCore/contexts/imageContext";
import { Button } from "../Button";
import styles from "./styles.module.scss";

export function AspectRatioBox() {
  const { state, dispatch } = useEditImageStore();
  const aspectsList = Object.keys(state.aspects);

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
              state.selectedAspect === aspectKey && styles.aspect_span_selected
            }`}
            style={{
              height: `calc(2.5rem / ${state.aspects[aspectKey] || 1})`,
            }}
          />
          <label className={`${styles.aspect_label}`}>{aspectKey}</label>
        </Button>
      ))}
    </div>
  );
}
