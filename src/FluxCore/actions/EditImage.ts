export type EditImageActionsType =
  | "setStep"
  | "setRotate"
  | "setScale"
  | "setAspect"
  | "setImageName"
  | "setImageSrc"
  | "setImageOut"
  | "onReset";

export interface EditImageAction {
  type: EditImageActionsType;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload?: any;
}

export type StepsKeys = "selectImage" | "edit" | "download";

export const editImageActions = {
  setStep: (step: StepsKeys) =>
    ({ type: "setStep", payload: step } as EditImageAction),
  setRotate: (rotate: number) =>
    ({ type: "setRotate", payload: rotate } as EditImageAction),
  setScale: (scale: number) =>
    ({ type: "setScale", payload: scale } as EditImageAction),
  setAspect: (aspect: string) =>
    ({ type: "setAspect", payload: aspect } as EditImageAction),
  setImageName: (imageName: string) =>
    ({ type: "setImageName", payload: imageName } as EditImageAction),
  setImageSrc: (imageSrc: string) =>
    ({ type: "setImageSrc", payload: imageSrc } as EditImageAction),
  setImageOut: (imageOut: string) =>
    ({ type: "setImageOut", payload: imageOut } as EditImageAction),
  onReset: () => ({ type: "onReset" } as EditImageAction),
};
