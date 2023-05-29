import React from "react";

import { SelectImage } from "./SelectImage";
import { Download } from "./Download";
import { Edit } from "./Edit";
import { useEditImageStore } from "../../FluxCore/contexts/imageContext";
import { StepsKeys } from "../../FluxCore/actions/EditImage";

const getStep = (step: StepsKeys) => {
  return {
    selectImage: <SelectImage />,
    edit: <Edit />,
    download: <Download />,
  }[step];
};

export const EditSteps: React.FC = () => {
  const { state } = useEditImageStore();

  return getStep(state.step);
};
