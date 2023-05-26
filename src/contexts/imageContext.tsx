import React, { createContext, useContext, useReducer } from "react";
import { EditImageAction } from "../actions/EditImage";
import { editImageReducer, EditImageState } from "../reducers/EditImage";

interface EditImageStore {
  state: EditImageState;
  dispatch: React.Dispatch<EditImageAction>;
}
const initialState: EditImageState = {
  step: "selectImage",
  imageName: "",
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

const EditImageStore = createContext<EditImageStore>({} as EditImageStore);

export function EditImageprovider(props: React.PropsWithChildren) {
  const [state, dispatch] = useReducer(editImageReducer, initialState);

  return <EditImageStore.Provider value={{ state, dispatch }}>{props.children}</EditImageStore.Provider>;
}

export const useEditImageStore = () => useContext(EditImageStore);
