import {
  EditImageprovider,
  useEditImageStore,
} from "./FluxCore/contexts/imageContext";
import { Download } from "./Steps/Download";
import { Edit } from "./Steps/Edit";
import { SelectImage } from "./Steps/SelectImage";
import { Header } from "./components/Header";
import "./styles/global.scss";

function App() {
  return (
    <EditImageprovider>
      <Header />
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
