import React from 'react'
import { images } from '../assets/images.js';
import styles from "./Auth.module.css";

export const Image = () => {
  return (
    <div className={styles.shoeContainer}>
        <img className={styles.logShoes} src={images.logShoes} alt="shoes" />
    </div>
  )
}
