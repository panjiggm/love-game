import Image from "next/image";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Final = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Final | Weird Game</title>
        <meta name="description" content="My Feelings" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Image
          src="/kiki-black-white.jpg"
          width="200"
          height="200"
          className={styles.imgRounded}
        />

        <br />
        <br />

        <h1 className={styles.quotes} style={{ color: "#999" }}>
          I Love You ❤️
        </h1>
        <h1 className={styles.quotes} style={{ color: "#fd79a8" }}>
          Nurrizki Dwi Febriyanti
        </h1>
      </main>

      <footer className={styles.footer}>
        <p className={styles.footerTxt}>dibuat dengan ❤️ oleh @panjiggm</p>
      </footer>
    </div>
  );
};

export default Final;
