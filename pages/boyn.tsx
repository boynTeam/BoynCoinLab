import styles from "../styles/Home.module.css";

export const BoynPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.topbar}>
        <p>🧘‍♂️ AboutMe</p>
        <p>🧘‍♂️ Posts</p>
      </div>
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Boyn Coin Lab!</h1>
        <div>
          <h2 className={styles.description}>⬇️ What you can find here ⬇️</h2>
        </div>

        <div className={styles.grid}>
          <a href="" className={styles.card}>
            <h2>Boyn Coin Faucet&rarr;</h2>
            <p>A faucet about my own ERC20 coins</p>
          </a>

          <a href="" className={styles.card}>
            <h2>ERC721 NFT Collections &rarr;</h2>
            <p>I will publish some nft collections not regularlly.</p>
          </a>

          <a href="" className={styles.card}>
            <h2>Posts &rarr;</h2>
            <p>Here's my lastest posts</p>
          </a>
          <a href="" className={styles.card}>
            <h2>More &rarr;</h2>
            <p>...</p>
          </a>
        </div>
      </main>
    </div>
  );
};
