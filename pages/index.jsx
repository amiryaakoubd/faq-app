import React from 'react';
import PropTypes from 'prop-types';
import Accordion from '../components/Accordion/Accordion';
import ErrorMessage from '../components/ErrorMessage/ErrorMessage';
import client from '../lib/contentful';
import styles from '../styles/Home.module.scss';

export async function getStaticProps() {
  try {
    const response = await client.getEntries({
      content_type: 'accordion',
      include: 2,
    });
    const items = response.items;

    // If I wanted to fetch more than one content type, I could do something like this:
    // const otherResponse = await client.getEntries({
    //   content_type: 'otherContentType',
    //   include: 2,
    // });

    return {
      props: {
        items,
        error: false,
        // I could add otherResponse here as well if I wanted to fetch more than one content type
      },
    };
  } catch (error) {
    console.error('Error fetching data from Contentful:', error);

    return {
      props: {
        items: [],
        error: true,
      },
    };
  }
}

function Home({ items = [], error }) {
  const { fields = {} } = items && items.length > 0 ? items[0] : {};
  const { accordionItems = [] } = fields;

  const renderContent = () => {
    if (error) {
      return (
        <ErrorMessage message="Noe gikk galt under henting av data. Vennligst prøv igjen senere." />
      );
    } else {
      return accordionItems.length > 0 ? (
        <Accordion items={accordionItems} />
      ) : (
        <ErrorMessage
          message="Ingen spørsmål og svar er tilgjengelige for øyeblikket. Vennligst prøv
          igjen senere."
        />
      );
    }
  };

  return (
    <>
      <h1 className={styles.title}>Spørsmål og svar</h1>
      <p className={styles.description}>
        Har du noen spørsmål angående Novacare? Her finner du kanskje noen svar.
      </p>
      {renderContent()}
    </>
  );
}

Home.propTypes = {
  items: PropTypes.array.isRequired,
  error: PropTypes.bool,
};

export default Home;
