import { editImageActions } from "../../FluxCore/actions/EditImage";
import { useEditImageStore } from "../../FluxCore/contexts/imageContext";
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
        <button
          key={aspectKey}
          onClick={() => handleSelectAspect(aspectKey)}
          className={`${styles.app_aspect_ratio_buttom} ${
            selectedAspect === aspectKey &&
            styles.app_aspect_ratio_buttom_selected
          }`}
        >
          <span
            style={{ height: `calc(2.5rem / ${aspects[aspectKey] || 1})` }}
          />
          <label>{aspectKey}</label>
        </button>
      ))}
    </div>
  );
}
