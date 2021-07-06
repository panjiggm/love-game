import { useState } from "react";
import Link from "next/link";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Love5 = () => {
  let answer = "barat";

  const [like, setLike] = useState(null);
  const [isTrue, setIsTrue] = useState(false);

  const handleQuestion = (e) => {
    const val = e.target.value.toLowerCase();

    if (val === answer) {
      setIsTrue(true);
    } else {
      setIsTrue(false);
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Love 5 | Weird Game</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>#5</h1>
        <br />
        <br />

        <h2 className={styles.quotes}>
          “ Kamu tidak pernah meninggalkan pikiranku, bahkan ketika aku memiliki
          sejuta hal untuk dipikirkan.”
        </h2>
        <br />

        <div className="row">
          <button
            className="col col-md-4 btn btn-danger"
            onClick={() => setLike(false)}>
            👎
          </button>
          <button className="col col-md-4" style={{ opacity: 0 }}></button>
          <button
            className="col col-md-4 btn btn-success"
            onClick={() => setLike(true)}>
            👍
          </button>
        </div>

        <div>
          {!like && like !== null && (
            <>
              <br />
              <p className="text-danger">
                Kamu ga suka ungkapan perasaanku 😔 ?
              </p>
            </>
          )}
        </div>

        <div>
          {like && like !== null && (
            <>
              <br />
              <br />
              <p className={styles.title}>
                Apakah arah yang berlawanan dengan <b>Timur</b>?
              </p>
              <br />
              <input
                className="form-control"
                onChange={handleQuestion}
                placeholder="boleh kok buka gugel :p"
              />
              <br />
              {isTrue && (
                <Link href="/love6">
                  <button type="button" className="btn btn-primary">
                    Jawaban kamu benar! lanjut
                  </button>
                </Link>
              )}
            </>
          )}
        </div>
      </main>

      <footer className={styles.footer}>
        <p className={styles.footerTxt}>dibuat dengan ❤️ oleh @panjiggm</p>
      </footer>
    </div>
  );
};

export default Love5;