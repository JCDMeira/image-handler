import { EditingImageStep } from "../Store/useImageStore.store";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type dispatchAction = { type: keyof typeof ImageActions; payload?: any };

export const ImageActions = {
  setStep: (step: EditingImageStep): dispatchAction => ({
    type: "setStep",
    payload: step,
  }),
  setRotate: (rotate: number): dispatchAction => ({
    type: "setRotate",
    payload: rotate,
  }),
  setScale: (scale: number): dispatchAction => ({
    type: "setScale",
    payload: scale,
  }),
  setAspect: (aspect: string): dispatchAction => ({
    type: "setAspect",
    payload: aspect,
  }),
  setImageName: (imageName: string): dispatchAction => ({
    type: "setImageName",
    payload: imageName,
  }),
  setImageSrc: (imageSrc: string): dispatchAction => ({
    type: "setImageSrc",
    payload: imageSrc,
  }),
  setImageOut: (imageOut: string): dispatchAction => ({
    type: "setImageOut",
    payload: imageOut,
  }),
  reset: (): dispatchAction => ({ type: "reset" }),
};
