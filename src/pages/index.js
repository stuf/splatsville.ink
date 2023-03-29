import Head from 'next/head';
import Image from 'next/image';
import clsx from 'clsx';

import styles from '@/styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Splatsville</title>
        <meta name="description" content="Splatsville" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={clsx(styles.main)}>
        <header className={clsx(styles.header)}>
          <div className={styles.headerContent}>
            Welcome to the
            <br />
            <span className={clsx(styles.gradient, 'font-extrabold')}>
              City of Chaos
            </span>
          </div>
        </header>
      </main>
    </>
  );
}
