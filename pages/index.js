import Link from "next/link";
import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Weird Game</title>
        <meta name="description" content="Sebuah Game tentang Rindu" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Hello Kiki 💗</h1>
        <br />
        <h2 className={styles.title}>Welcome to The Game 🎮</h2>
        <br />
        <br />

        <p className={styles.title}>
          Game ini dapat berpotensi membuat kamu senyum-senyum, baper, ngakak,
          dan mungkin merasa cringe wkwk 😂
        </p>

        <br />
        <br />
        <p className={styles.title}>Siap?</p>
        <br />
        <Link href="/intro">
          <button type="button" className="btn btn-danger">
            Gasss lah
          </button>
        </Link>
      </main>

      <footer className={styles.footer}>
        <p className={styles.footerTxt}>dibuat dengan ❤️ oleh @panjiggm</p>
      </footer>
    </div>
  );
}
