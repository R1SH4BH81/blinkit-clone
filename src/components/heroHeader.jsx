import React from "react";
import { userIcon } from "../utils/IconHelper";
import styles from "./styles/heroHeader.module.css";
export const heroHeader = ({ time, location }) => {
  return (
    <div>
      <div className={styles.header}>
        <div className={styles.left}>
          <div className={styles.title}>Delivered In</div>
          <div className={styles.delTime}>{time} minutes</div>
          <div className={styles.location}>{location}</div>
        </div>
        <div className={styles.right}>
          <span className={styles.userIcon}>
            <userIcon />
          </span>
        </div>
      </div>
    </div>
  );
};
