import { useEditImageStore } from "../../FluxCore/contexts/imageContext";
import styles from "./styles.module.scss";
import { Button } from "../../components/Button";

export function Download() {
  const { state } = useEditImageStore();

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
      <main className={styles.download_main}>
        <div className={styles.app_image_out}>
          <img src={state.imageOut} />
        </div>

        <Button onClick={handleDownload} variant={"primary_button"}>
          Salvar imagem
        </Button>
      </main>
    </>
  );
}
