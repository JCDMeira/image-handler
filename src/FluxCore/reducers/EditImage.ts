import { EditImageAction, EditImageActionsType } from "../actions/EditImage";

type EditingImageStep = "selectImage" | "edit" | "download";

export interface EditImageState {
  step: EditingImageStep;
  imageName: string;
  imageSrc: string;
  rotate: number;
  scale: number;
  selectedAspect: string;
  aspects: Record<string, number>;
  imageOut: string;
}

const actionsExecutors: Record<
  EditImageActionsType,
  (state: EditImageState, payload?: any) => EditImageState
> = {
  setStep: (state: EditImageState, payload: EditingImageStep) => {
    return {
      ...state,
      step: payload,
    };
  },
  setAspect: (state: EditImageState, payload: string) => {
    return {
      ...state,
      selectedAspect: payload,
    };
  },
  setScale: (state: EditImageState, payload: number) => {
    return {
      ...state,
      scale: payload,
    };
  },
  setRotate: (state: EditImageState, payload: number) => {
    return {
      ...state,
      rotate: payload,
    };
  },
  setImageName: (state: EditImageState, payload: string) => {
    return {
      ...state,
      imageName: payload,
    };
  },
  setImageSrc: (state: EditImageState, payload: string) => {
    return {
      ...state,
      imageSrc: payload,
    };
  },
  setImageOut: (state: EditImageState, payload: string) => {
    return {
      ...state,
      imageOut: payload,
    };
  },
};

export function editImageReducer(
  state: EditImageState,
  action: EditImageAction
) {
  if (action.type in actionsExecutors) {
    return actionsExecutors[action.type](state, action.payload);
  }

  return state;
}
