import { Header } from "./components/Header";
import "./styles/global.scss";
import styles from "./app.module.scss";
import { EditSteps } from "./components";

function App() {
  return (
    <>
      <Header />
      <main className={styles.app_main}>
        <EditSteps />
      </main>
    </>
  );
}

export default App;
