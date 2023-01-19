import dynamic from "next/dynamic";
import Main from "../components/main";
import styles from "../styles/Home.module.css";
const TopBar = dynamic(() => import("../components/topbar"));

const BoynPage = () => {
  return (
    <div className={styles.container}>
      <TopBar />
      <Main />
    </div>
  );
};

export default BoynPage;
