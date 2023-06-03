import { Button } from "../../";
import { useImageStore } from "../../../Store/useImageStore";
import styles from "./styles.module.scss";

export function Download() {
  const imageOut = useImageStore((state) => state.imageOut);
  const imageName = useImageStore((state) => state.imageName);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = imageOut;
    const name = "imager_" + imageName;
    link.setAttribute("download", name);
    document.body.appendChild(link);
    link.click();
  };

  return (
    <>
      <div className={styles.app_image_out}>
        <img src={imageOut} />
      </div>

      <Button onClick={handleDownload} variant={"primary_button"}>
        Salvar imagem
      </Button>
    </>
  );
}
