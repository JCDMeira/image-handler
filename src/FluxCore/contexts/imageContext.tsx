import React, { createContext, useContext, useReducer } from "react";
import { EditImageAction } from "../actions/EditImage";
import { editImageReducer, EditImageState } from "../reducers/EditImage";

interface EditImageStore {
  state: EditImageState;
  dispatch: React.Dispatch<EditImageAction>;
}
// eslint-disable-next-line react-refresh/only-export-components
export const initialState: EditImageState = {
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

const EditImageStore = createContext<EditImageStore>({} as EditImageStore);

function EditImageprovider({ children }: React.PropsWithChildren) {
  const [state, dispatch] = useReducer(editImageReducer, initialState);

  return (
    <EditImageStore.Provider value={{ state, dispatch }}>
      {children}
    </EditImageStore.Provider>
  );
}

const useEditImageStore = () => useContext(EditImageStore);

// eslint-disable-next-line react-refresh/only-export-components
export { EditImageprovider, useEditImageStore };
