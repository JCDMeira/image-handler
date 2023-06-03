import { useDropzone } from "react-dropzone";
import styles from "./styles.module.scss";
import { useEffect, useState } from "react";
import { editImageActions, useImageStore } from "../../Store/useImageStore";

export function InputImage() {
  const state = useImageStore((store) => store.state);
  const dispatch = useImageStore((store) => store.dispatch);

  const { getRootProps, getInputProps } = useDropzone({
    accept: { "image/*": [] },
    onDragLeave: () => setIsVisible(false),
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
    document.addEventListener("dragover", () => setIsVisible(true));

    return () => {
      document.removeEventListener("dragover", () => setIsVisible(true));
    };
  }, []);

  return (
    <div className={styles.container_image_input}>
      {isVisible && (
        <div className={styles.dragfull} id="draggable" {...getRootProps()}>
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
