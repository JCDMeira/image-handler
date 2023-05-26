import { AspectRatioButton } from "../AspectRatioButton";
import styles from "./styles.module.scss";

interface AspectrationButtonsBoxprops {
  aspects: Record<string, number>;
  selectedAspect: string;
  selectAspect: (code: string) => void;
}

export function AspectrationButtonsBox({ aspects, selectedAspect, selectAspect }: AspectrationButtonsBoxprops) {
  const aspectsList = Object.keys(aspects);

  function handleSelectAspectRatio(aspect: string) {
    selectAspect(aspect);
  }

  return (
    <div className={styles.app_aspect_ratio_buttons_box}>
      {aspectsList.map((aspectKey) => (
        <AspectRatioButton
          key={aspectKey}
          selected={selectedAspect === aspectKey}
          label={aspectKey}
          aspect={aspects[aspectKey] || 1}
          onClick={() => handleSelectAspectRatio(aspectKey)}
        />
      ))}
    </div>
  );
}
