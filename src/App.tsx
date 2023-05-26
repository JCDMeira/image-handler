import { EditImageprovider, useEditImageStore } from "./contexts/imageContext";
import { Download } from "./screens/Download";
import { Edit } from "./screens/Edit";
import { SelectImage } from "./screens/SelectImage";
import "./styles/global.scss";

function App() {
  return (
    <EditImageprovider>
      <GetStepScreen />
    </EditImageprovider>
  );
}

function GetStepScreen() {
  const { state } = useEditImageStore();

  switch (state.step) {
    case "selectImage":
      return <SelectImage />;
    case "edit":
      return <Edit />;
    case "download":
      return <Download />;
    default:
      return <>No step found</>;
  }
}

export default App;
