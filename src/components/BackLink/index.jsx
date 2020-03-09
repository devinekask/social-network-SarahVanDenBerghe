import React from "react";
import styles from "./BackLink.module.css";
import { useHistory } from "react-router-dom";

const BackLink = () => {
    const history = useHistory();
    return (
        <button
            className={styles.back}
            onClick={() => {
                history.goBack();
            }}
        >
            &larr; Keer terug
    </button>
    );
};

export default BackLink;