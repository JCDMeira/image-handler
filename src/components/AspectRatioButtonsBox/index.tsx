import { editImageActions } from "../../FluxCore/actions/EditImage";
import { useEditImageStore } from "../../FluxCore/contexts/imageContext";
import { AspectRatioButton } from "../AspectRatioButton";
import styles from "./styles.module.scss";

interface AspectrationButtonsBoxprops {
  aspects: Record<string, number>;
  selectedAspect: string;
}

export function AspectrationButtonsBox({
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
        <AspectRatioButton
          key={aspectKey}
          selected={selectedAspect === aspectKey}
          label={aspectKey}
          aspect={aspects[aspectKey] || 1}
          onClick={() => handleSelectAspect(aspectKey)}
        />
      ))}
    </div>
  );
}
