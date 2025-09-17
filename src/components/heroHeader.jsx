import React from "react";
import { UserIcon } from "../utils/IconHelper";
import styles from "./styles/heroHeader.module.css";
export const HeroHeader = () => {
  return (
    <div className={styles.header}>
      <div className={styles.left}>
        <div className={styles.title}>Delivery in</div>
        <div className={styles.delTime}>8 minute</div>
        <div className={styles.location}>HOME • Sushant G, Star Homes</div>
      </div>
      <div className={styles.right}>
        <span className={styles.userIcon}>
          <UserIcon />
        </span>
      </div>
    </div>
  );
};
