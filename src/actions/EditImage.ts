export type EditImageActionsType =
  | "setStep"
  | "setRotate"
  | "setScale"
  | "setAspect"
  | "setImageName"
  | "setImageSrc"
  | "setImageOut";

export interface EditImageAction {
  type: EditImageActionsType;
  payload?: any;
}

export const editImageActions = {
  setStep: (step: string) => ({ type: "setStep", payload: step } as EditImageAction),
  setRotate: (rotate: number) => ({ type: "setRotate", payload: rotate } as EditImageAction),
  setScale: (scale: number) => ({ type: "setScale", payload: scale } as EditImageAction),
  setAspect: (aspect: string) => ({ type: "setAspect", payload: aspect } as EditImageAction),
  setImageName: (imageName: string) => ({ type: "setImageName", payload: imageName } as EditImageAction),
  setImageSrc: (imageSrc: string) => ({ type: "setImageSrc", payload: imageSrc } as EditImageAction),
  setImageOut: (imageOut: string) => ({ type: "setImageOut", payload: imageOut } as EditImageAction),
};
