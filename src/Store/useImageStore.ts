import { create } from "zustand";
import { dispatchAction } from "../actions/ImageActions.action";

export interface ImageStore {
  state: ImageStoreState;
  dispatch: (action: dispatchAction) => void;
}

type ImageStoreState = {
  step: EditingImageStep;
  imageName: string;
  imageSrc: string;
  rotate: number;
  scale: number;
  selectedAspect: string;
  aspects: Record<string, number>;
  imageOut: string;
};

export type EditingImageStep = "selectImage" | "edit" | "download";

const initialState = {
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
} as ImageStoreState;

export const useImageStore = create<ImageStore>((set) => ({
  state: initialState,
  dispatch: (action: dispatchAction) => {
    switch (action.type) {
      case "setStep":
        set((store) => ({
          ...store,
          state: { ...store.state, step: action.payload },
        }));
        break;

      case "setRotate":
        set((store) => ({
          ...store,
          state: { ...store.state, rotate: action.payload },
        }));
        break;

      case "setScale":
        set((store) => ({
          ...store,
          state: { ...store.state, scale: action.payload },
        }));
        break;

      case "setAspect":
        set((store) => ({
          ...store,
          state: { ...store.state, selectedAspect: action.payload },
        }));
        break;

      case "setImageName":
        set((store) => ({
          ...store,
          state: { ...store.state, imageName: action.payload },
        }));
        break;

      case "setImageSrc":
        set((store) => ({
          ...store,
          state: { ...store.state, imageSrc: action.payload },
        }));
        break;

      case "setImageOut":
        set((store) => ({
          ...store,
          state: { ...store.state, imageOut: action.payload },
        }));
        break;

      case "reset":
        set((store) => ({
          ...store,
          state: initialState,
        }));
        break;

      default:
        break;
    }
  },
}));
