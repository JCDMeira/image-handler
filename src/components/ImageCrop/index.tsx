import React, { useState, useRef, useEffect } from "react";
import ReactCrop, {
  centerCrop,
  makeAspectCrop,
  Crop,
  PixelCrop,
} from "react-image-crop";

import "react-image-crop/dist/ReactCrop.css";
import { canvasPreview } from "./canvasPreview";
import { ImageActions, useImageStore } from "../../Store/useImageStore";

function centerAspectCrop(
  mediaWidth: number,
  mediaHeight: number,
  aspect: number
) {
  return centerCrop(
    makeAspectCrop(
      {
        unit: "%",
        width: 60,
      },
      aspect,
      mediaWidth,
      mediaHeight
    ),
    mediaWidth,
    mediaHeight
  );
}

export function ImageCrop() {
  const imgRef = useRef<HTMLImageElement>(null);
  const [crop, setCrop] = useState<Crop>();
  const [completedCrop, setCompletedCrop] = useState<PixelCrop>();

  const state = useImageStore((store) => store.state);
  const dispatch = useImageStore((store) => store.dispatch);

  const aspect = state.aspects[state.selectedAspect];

  useEffect(() => {
    if (!imgRef.current || !aspect) return;
    const { width, height } = imgRef.current;
    setCrop(centerAspectCrop(width, height, aspect));
  }, [aspect]);

  useEffect(() => {
    function updateImageOut() {
      if (!completedCrop || !imgRef.current) return;

      const canvas = document.createElement("canvas");
      canvasPreview(
        imgRef.current,
        canvas,
        completedCrop,
        state.scale,
        state.rotate
      );
      const imageOut = canvas.toDataURL();
      dispatch(ImageActions.setImageOut(imageOut));
    }

    setTimeout(updateImageOut, 200);
  }, [completedCrop, dispatch, state.rotate, state.scale]);

  function onImageLoad(e: React.SyntheticEvent<HTMLImageElement>) {
    const { width, height } = e.currentTarget;
    updateCrop(width, height);
  }

  function updateCrop(width: number, height: number) {
    if (!aspect) return;
    setCrop(centerAspectCrop(width, height, aspect));
  }

  return (
    <ReactCrop
      crop={crop}
      onChange={(_, percentCrop) => setCrop(percentCrop)}
      onComplete={(c) => setCompletedCrop(c)}
      aspect={state.aspects[state.selectedAspect] || undefined}
    >
      <img
        ref={imgRef}
        alt="Crop me"
        src={state.imageSrc}
        style={{
          transform: `scale(${state.scale}) rotate(${state.rotate}deg)`,
          borderRadius: "0.5rem",
        }}
        onLoad={onImageLoad}
      />
    </ReactCrop>
  );
}
