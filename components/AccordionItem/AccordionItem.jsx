import React from "react";
import styles from "./AccordionItem.module.scss";

const AccordionItem = ({ index, isActive, onToggle, title, content }) => {
  return (
    <div className={styles.item}>
      <button
        className={`${styles.header} ${isActive ? styles.active : ""}`}
        onClick={() => onToggle(index)}
      >
        {title}
      </button>
      {isActive && <div className={styles.content}>{content}</div>}
    </div>
  );
};

export default AccordionItem;
