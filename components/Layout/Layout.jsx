// components/Layout.js
import React from "react";
import Head from "next/head";
import styles from "./Layout.module.scss"; // Import your SCSS module

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>FAQ App</title>
        <link rel="icon" href="/favicon.ico" />
        {/* Add SEO elements here */}
      </Head>
      {/* <header className={styles.header}>
        
      </header> */}
      <main className={styles.main}>
        <div className={styles.wrapper}>{children}</div>
      </main>
      {/* <footer className={styles.footer}></footer> */}
    </div>
  );
};

export default Layout;
