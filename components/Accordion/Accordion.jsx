import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./Accordion.module.scss";
import AccordionItem from "../AccordionItem/AccordionItem";

const Accordion = ({ items = [] }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  // You could also move the active logic inside the AccordionItem component so
  // that each item can manage its own state. This would make the Accordion component
  // more of a container component that only passes down props to the AccordionItem component.

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className={styles.accordion}>
      {items.map((item, index) => {
        const { name = "", text = "" } = item?.fields;
        return (
          <AccordionItem
            key={`accordion-item-${index}`}
            index={index}
            isActive={activeIndex === index}
            onToggle={handleToggle}
            title={name}
            content={text}
          />
        );
      })}
    </section>
  );
};

Accordion.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      fields: PropTypes.shape({
        name: PropTypes.string,
        text: PropTypes.string,
      }),
    }),
  ),
};

// A better more modern alternative to this could also be to use typescript and define the prop types as an interface instead
// but I did this in normal javascript just for simplicity and speed's sake

export default Accordion;
