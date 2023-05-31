import { editImageActions } from "../../FluxCore/actions/EditImage";
import { useEditImageStore } from "../../FluxCore/contexts/imageContext";
import styles from "./styles.module.scss";
import { useDropzone } from "react-dropzone";

//@ adicionar drag full
export function ImageInput() {
  const { state, dispatch } = useEditImageStore();

  const { getRootProps, getInputProps } = useDropzone({
    accept: { "image/*": [] },
    onDrop: (acceptedFiles) => {
      const imageFile = acceptedFiles[0];
      const imageUrl = URL.createObjectURL(imageFile);
      dispatch(editImageActions.setImageName(imageFile.name));
      dispatch(editImageActions.setImageSrc(imageUrl));
    },
  });

  return (
    <div className={styles.container_image_input}>
      <div className={styles.image_input} {...getRootProps()}>
        <input id="image_input" {...getInputProps()} />
      </div>
      <label htmlFor="image_input">{state.imageName}</label>
    </div>
  );
}
