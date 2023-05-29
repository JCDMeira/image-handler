import React from "react";
import { editImageActions } from "../../FluxCore/actions/EditImage";
import { useEditImageStore } from "../../FluxCore/contexts/imageContext";
import styles from "./styles.module.scss";

export function ImageInput() {
  const { state, dispatch } = useEditImageStore();

  function handleSelectImage(event: React.ChangeEvent<HTMLInputElement>) {
    if (!event.target.files) return;
    const imageFile = event.target.files[0];
    const imageUrl = URL.createObjectURL(imageFile);
    dispatch(editImageActions.setImageName(imageFile.name));
    dispatch(editImageActions.setImageSrc(imageUrl));
  }

  return (
    <label htmlFor="image_input" className={styles.app_image_input}>
      <span>
        <input
          id="image_input"
          type="file"
          accept="image/*"
          onChange={handleSelectImage}
        />
      </span>
      {state.imageName}
    </label>
  );
}
