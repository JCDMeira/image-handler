import { EditImageprovider } from "./FluxCore/contexts/imageContext";
import { Header } from "./components/Header";
import "./styles/global.scss";
import styles from "./app.module.scss";
import { EditSteps } from "./components/EditSteps";

function App() {
  return (
    <EditImageprovider>
      <Header />
      <main className={styles.app_main}>
        <EditSteps />
      </main>
    </EditImageprovider>
  );
}

export default App;
