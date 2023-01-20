import dynamic from "next/dynamic";
import styles from "../styles/Home.module.css";

const Main = dynamic(() => import("../components/main"));

const BoynPage = () => {
  return (
    <div className={styles.container}>
      <Main />
    </div>
  );
};

export default BoynPage;
