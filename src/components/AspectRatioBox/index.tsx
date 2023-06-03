import { Button } from "../";
import { useImageStore } from "../../Store/useImageStore";
import styles from "./styles.module.scss";

export function AspectRatioBox() {
  const aspects = useImageStore((state) => state.aspects);
  const setAspect = useImageStore((state) => state.setAspect);
  const selectedAspect = useImageStore((state) => state.selectedAspect);

  const aspectsList = Object.keys(aspects);

  function handleSelectAspect(aspectKey: string) {
    setAspect(aspectKey);
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
            style={{
              height: `calc(2.5rem / ${aspects[aspectKey] || 1})`,
            }}
          />
          <label className={`${styles.aspect_label}`}>{aspectKey}</label>
        </Button>
      ))}
    </div>
  );
}
