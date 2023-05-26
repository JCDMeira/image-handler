import { editImageActions } from "../../FluxCore/actions/EditImage";
import { DownloadScreenHeader } from "../../components/DownloadScreenHeader";
import { PrimaryLinkButton } from "../../components/PrimaryButton/PrimaryLinkButton";
import { useEditImageStore } from "../../FluxCore/contexts/imageContext";
import styles from "./styles.module.scss";

export function Download() {
  const { state, dispatch } = useEditImageStore();

  function clearImagesData() {
    URL.revokeObjectURL(state.imageSrc);
    URL.revokeObjectURL(state.imageOut);

    dispatch(editImageActions.setImageSrc(""));
    dispatch(editImageActions.setImageOut(""));
  }

  return (
    <>
      <DownloadScreenHeader />
      <main className={styles.download_main}>
        <div className={styles.app_image_out}>
          <img src={state.imageOut} />
        </div>

        <PrimaryLinkButton
          href={state.imageOut}
          download={"imager_" + state.imageName}
        >
          Salvar imagem
        </PrimaryLinkButton>
      </main>
    </>
  );
}
