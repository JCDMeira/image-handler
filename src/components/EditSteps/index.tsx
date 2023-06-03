import React from "react";

import { SelectImage } from "./SelectImage";
import { Download } from "./Download";
import { Edit } from "./Edit";
import { EditingImageStep, useImageStore } from "../../Store/useImageStore";

const getStep = (step: EditingImageStep) => {
  return {
    selectImage: <SelectImage />,
    edit: <Edit />,
    download: <Download />,
  }[step];
};

export const EditSteps: React.FC = () => {
  const { step } = useImageStore((store) => store.state);

  return getStep(step);
};
