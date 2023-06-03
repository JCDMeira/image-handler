import React, { useState, useRef, useEffect } from "react";
import ReactCrop, {
  centerCrop,
  makeAspectCrop,
  Crop,
  PixelCrop,
} from "react-image-crop";

import "react-image-crop/dist/ReactCrop.css";
import { canvasPreview } from "./canvasPreview";
import { useImageStore } from "../../Store/useImageStore";

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

  const setImageOut = useImageStore((state) => state.setImageOut);
  const aspects = useImageStore((state) => state.aspects);
  const selectedAspect = useImageStore((state) => state.selectedAspect);
  const imageSrc = useImageStore((state) => state.imageSrc);
  const rotate = useImageStore((state) => state.rotate);
  const scale = useImageStore((state) => state.scale);

  const aspect = aspects[selectedAspect];

  useEffect(() => {
    if (!imgRef.current || !aspect) return;
    const { width, height } = imgRef.current;
    setCrop(centerAspectCrop(width, height, aspect));
  }, [imageSrc, rotate, scale, aspect]);

  useEffect(() => {
    function updateImageOut() {
      if (!completedCrop || !imgRef.current) return;

      const canvas = document.createElement("canvas");
      canvasPreview(imgRef.current, canvas, completedCrop, scale, rotate);
      const imageOut = canvas.toDataURL();
      setImageOut(imageOut);
    }

    setTimeout(updateImageOut, 200);
  }, [completedCrop, rotate, scale, setImageOut]);

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
      aspect={aspects[selectedAspect] || undefined}
    >
      <img
        ref={imgRef}
        alt="Crop me"
        src={imageSrc}
        style={{
          transform: `scale(${scale}) rotate(${rotate}deg)`,
          borderRadius: "0.5rem",
        }}
        onLoad={onImageLoad}
      />
    </ReactCrop>
  );
}
