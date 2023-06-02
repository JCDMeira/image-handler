import { create } from "zustand";

export interface ImageStore {
  state: ImageStoreState;
  reset: () => void;
}
export interface ImageStoreState {
  step: EditingImageStep;
  imageName: string;
  imageSrc: string;
  rotate: number;
  scale: number;
  selectedAspect: string;
  aspects: Record<string, number>;
  imageOut: string;
}

type EditingImageStep = "selectImage" | "edit" | "download";

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
};

export const useImageStore = create<ImageStore>((set) => ({
  state: initialState as ImageStoreState,
  reset: () => set((state) => ({ ...state })),
}));
