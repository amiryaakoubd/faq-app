import React from "react";
import styles from "./AccordionItem.module.scss";
import CaretIcon from "../../icons/CaretIcon/CaretIcon";

const AccordionItem = ({ index, isActive, onToggle, title, content }) => {
  // TODO: Add aria attributes to the accordion

  const headerId = `accordion-header-${index}`;
  const panelId = `accordion-panel-${index}`;

  return (
    <div className={styles.item}>
      <h3 className={styles.headerContainer}>
        <button
          id={headerId}
          aria-controls={panelId}
          aria-expanded={isActive}
          className={`${styles.header} ${isActive ? styles.active : ""}`}
          onClick={() => onToggle(index)}
        >
          {title}
          <CaretIcon
            className={`${styles.icon} ${isActive ? styles.activeIcon : ""}`}
          />
        </button>
      </h3>
      <p
        id={panelId}
        role="region"
        aria-labelledby={headerId}
        className={`${styles.content} ${isActive ? styles.activeContent : ""}`}
      >
        {content}
      </p>
    </div>
  );
};

export default AccordionItem;
