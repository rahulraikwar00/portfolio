import Head from "next/head";
import styles from "../styles/Home.module.css";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Coming Soon...</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <motion.div
          className={styles.hero}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={styles.transition}
        >
          <h1 className={styles.title}>Coming Soon...</h1>
          {/* <p className={styles.animate}>This is a coming soon page.</p> */}
        </motion.div>
      </main>
    </div>
  );
}
