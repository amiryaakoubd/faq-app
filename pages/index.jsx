import Head from "next/head";
import styles from "../styles/Home.module.scss";
import client from "../lib/contentful";
import Accordion from "../components/Accordion/Accordion";

export async function getStaticProps() {
  const response = await client.getEntries({
    content_type: "accordion",
    include: 2,
  });
  const items = response.items;

  return {
    props: {
      items,
    },
  };
}

export default function Home({ items }) {
  console.log({ items });

  // TODO: Write fallback logic for when there are no items

  const { fields = {} } = items && items.length > 0 ? items[0] : {};
  const { accordionItems = [] } = fields;

  return (
    <>
      <h1 className={styles.title}>FAQ</h1>
      {accordionItems.length > 0 ? <Accordion items={accordionItems} /> : ""}
    </>
  );
}
