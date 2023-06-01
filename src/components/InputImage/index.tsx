import { editImageActions } from "../../FluxCore/actions/EditImage";
import { useDropzone } from "react-dropzone";
import { useEditImageStore } from "../../FluxCore/contexts/imageContext";
import styles from "./styles.module.scss";
import { useEffect, useState } from "react";

//@ adicionar drag full
export function InputImage() {
  const { state, dispatch } = useEditImageStore();

  const { getRootProps, getInputProps } = useDropzone({
    accept: { "image/*": [] },
    onDrop: (acceptedFiles) => {
      const imageFile = acceptedFiles[0];
      const imageUrl = URL.createObjectURL(imageFile);
      dispatch(editImageActions.setImageName(imageFile.name));
      dispatch(editImageActions.setImageSrc(imageUrl));
      setIsVisible(false);
    },
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    document.addEventListener("dragover", () => {
      setIsVisible(true);
    });

    document.addEventListener("dragleave", () => {
      setIsVisible(false);
    });

    return () => {
      document.removeEventListener("dragover", () => {
        setIsVisible(true);
      });
      document.removeEventListener("dragleave", () => {
        setIsVisible(false);
      });
    };
  }, []);

  return (
    <div className={styles.container_image_input}>
      {isVisible && (
        <div className={styles.dragfull} {...getRootProps()}>
          <h1>Solte seu arquivo em qualquer lugar</h1>
        </div>
      )}

      <div className={styles.image_input} {...getRootProps()}>
        <input id="image_input" {...getInputProps()} />
      </div>
      <label htmlFor="image_input">{state.imageName}</label>
    </div>
  );
}
