import Link from "next/link";
import styles from "../styles/Home.module.css";

const BoynPage = () => {
  return (
    <div className={styles.container}>
      <div className="grid grid-cols-12 gap-12 pt-2">
        <p>🧘‍♂️ AboutMe</p>
        <p>🧘‍♂️ Posts</p>
        <p className="col-span-2 col-end-13"> Connect Wallet</p>
        {/* <div className="flex-row-reverse">
          <p className="px-2"> Connect Wallet</p>
        </div> */}
      </div>
      <main className={styles.main}>
        <h1 className="text-5xl font-bold">Welcome to Boyn Coin Lab!</h1>
        <div>
          <h2 className="underline">⬇️ What you can find here ⬇️</h2>
        </div>

        <div className={styles.grid}>
          <Link href="/faucet" className={styles.card}>
            <h2>Boyn Coin Faucet&rarr;</h2>
            <p>A faucet about my own ERC20 coins</p>
          </Link>

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

export default BoynPage;
