// components/Layout.js
import React from "react";
import Head from "next/head";
import styles from "./Layout.module.scss"; // Import your SCSS module

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>FAQ App</title>
        <meta
          name="description"
          content="A simple FAQ application for questions about Novacare"
        />
        <link rel="icon" href="/logo_400x400.png" />
        {/* Add metatags for better SEO here */}
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
