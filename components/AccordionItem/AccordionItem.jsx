import React from "react";
import PropTypes from "prop-types";
import styles from "./AccordionItem.module.scss";
import CaretIcon from "../../icons/CaretIcon/CaretIcon";

const AccordionItem = ({
  index,
  isActive,
  onToggle,
  title = "",
  content = "",
}) => {
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
      <div
        className={`${styles.content} ${isActive ? styles.activeContent : ""}`}
      >
        <p
          id={panelId}
          role="region"
          aria-labelledby={headerId}
          className={styles.contentParagraph}
        >
          {content}
        </p>
      </div>
    </div>
  );
};

AccordionItem.propTypes = {
  index: PropTypes.number.isRequired,
  isActive: PropTypes.bool,
  onToggle: PropTypes.func.isRequired,
  title: PropTypes.string,
  content: PropTypes.string,
};

// A better more modern alternative to this could also be to use typescript and define the prop types as an interface instead
// but I did this in normal javascript just for simplicity and speed's sake

export default AccordionItem;
