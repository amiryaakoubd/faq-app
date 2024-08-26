import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import styles from './Layout.module.scss';

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Spørsmål og svar</title>
        <meta lang="no" />
        <meta name="description" content="En nettside med spørsmål og svar om Novacare" />
        <link rel="icon" href="/logo_400x400.png" />
        {/* Add metatags for better SEO here */}
      </Head>
      <main className={styles.main}>
        <div className={styles.wrapper}>{children}</div>
      </main>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
