import React from "react";
import PropTypes from "prop-types";
import InfoIcon from "../../icons/InfoIcon/InfoIcon";
import styles from "./ErrorMessage.module.scss";

const ErrorMessage = ({ message = "" }) => {
  return (
    <div className={styles.errorMessage}>
      <InfoIcon fill="#d43535" />
      {message}
    </div>
  );
};

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
};

// A better more modern alternative to this could also be to use typescript and define the prop types as an interface instead
// but I did this in normal javascript just for simplicity and speed's sake

export default ErrorMessage;
