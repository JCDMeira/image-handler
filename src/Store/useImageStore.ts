import { create } from "zustand";

export interface ImageStore {
  step: EditingImageStep;
  imageName: string;
  imageSrc: string;
  rotate: number;
  scale: number;
  selectedAspect: string;
  aspects: Record<string, number>;
  imageOut: string;
  setStep: (step: EditingImageStep) => void;
  setRotate: (rotate: number) => void;
  setScale: (scale: number) => void;
  setAspect: (aspect: string) => void;
  setImageName: (imageName: string) => void;
  setImageSrc: (imageSrc: string) => void;
  setImageOut: (imageOut: string) => void;
  reset: () => void;
}

export type EditingImageStep = "selectImage" | "edit" | "download";

export const useImageStore = create<ImageStore>((set) => ({
  step: "selectImage",
  imageName: "Selecione ou arraste uma imagem",
  imageSrc: "",
  rotate: 0,
  scale: 1,
  selectedAspect: "16 x 9",
  aspects: {
    Free: 0,
    "1 x 1": 1 / 1,
    "2 x 3": 2 / 3,
    "3 x 2": 3 / 2,
    "3 x 4": 3 / 4,
    "4 x 3": 4 / 3,
    "16 x 9": 16 / 9,
    "21 x 9": 21 / 9,
  },
  imageOut: "",
  setStep: (step: EditingImageStep) =>
    set((state) => ({
      ...state,
      step,
    })),
  setRotate: (rotate: number) =>
    set((state) => ({
      ...state,
      rotate,
    })),
  setScale: (scale: number) =>
    set((state) => ({
      ...state,
      scale,
    })),
  setAspect: (aspect: string) =>
    set((state) => ({
      ...state,
      selectedAspect: aspect,
    })),
  setImageName: (imageName: string) =>
    set((state) => ({
      ...state,
      imageName,
    })),
  setImageSrc: (imageSrc: string) =>
    set((state) => ({
      ...state,
      imageSrc,
    })),
  setImageOut: (imageOut: string) =>
    set((state) => ({
      ...state,
      imageOut,
    })),
  reset: () =>
    set((state) => ({
      ...state,
      step: "selectImage",
      imageName: "Selecione ou arraste uma imagem",
      imageSrc: "",
      rotate: 0,
      scale: 1,
      selectedAspect: "16 x 9",
      aspects: {
        Free: 0,
        "1 x 1": 1 / 1,
        "2 x 3": 2 / 3,
        "3 x 2": 3 / 2,
        "3 x 4": 3 / 4,
        "4 x 3": 4 / 3,
        "16 x 9": 16 / 9,
        "21 x 9": 21 / 9,
      },
      imageOut: "",
    })),
}));
