import React, { useState } from "react";
import styles from "./Accordion.module.scss";
import AccordionItem from "../AccordionItem/AccordionItem";

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={styles.accordion}>
      {items.map((item, index) => {
        const { name = "", text = "" } = item?.fields;
        return (
          <AccordionItem
            key={index}
            index={index}
            isActive={activeIndex === index}
            onToggle={handleToggle}
            title={name}
            content={text}
          />
        );
      })}
    </div>
  );
};

export default Accordion;
