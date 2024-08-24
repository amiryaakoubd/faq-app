import React from "react";
import styles from "./AccordionItem.module.scss";
import CaretIcon from "../../icons/CaretIcon/CaretIcon";

const AccordionItem = ({ index, isActive, onToggle, title, content }) => {
  // TODO: Add aria attributes to the accordion
  return (
    <div className={styles.item}>
      <button
        className={`${styles.header} ${isActive ? styles.active : ""}`}
        onClick={() => onToggle(index)}
      >
        {title}
        <CaretIcon
          className={`${styles.icon} ${isActive ? styles.activeIcon : ""}`}
        />
      </button>
      {isActive && <div className={styles.content}>{content}</div>}
    </div>
  );
};

export default AccordionItem;
