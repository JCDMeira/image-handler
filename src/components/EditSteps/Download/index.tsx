import { Button } from "../../";
import { useImageStore } from "../../../Store/useImageStore";
import styles from "./styles.module.scss";

export function Download() {
  const state = useImageStore((store) => store.state);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = state.imageOut;
    const name = "imager_" + state.imageName;
    link.setAttribute("download", name);
    document.body.appendChild(link);
    link.click();
  };

  return (
    <>
      <div className={styles.app_image_out}>
        <img src={state.imageOut} />
      </div>

      <Button onClick={handleDownload} variant={"primary_button"}>
        Salvar imagem
      </Button>
    </>
  );
}
