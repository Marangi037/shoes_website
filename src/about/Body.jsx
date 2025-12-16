import React, { useState } from "react";
import styles from './Body.module.css';
import { images, shoeSlider } from '../assets/images.js';

export const Body = () => {
    const [imgSrc, setImageSrc] = useState(images.redShoes1)
    return (
        <div className={styles.aboutContainer}>
        <div className={styles.aboutTextContainer}>
                <p className={styles.text}>Introducing the latest edition of the Nike Air Max series, the Air Max Fusion. This innovative shoe blends classic design with cutting-edge technology for ultimate comfort and style. Featuring a sleek, breathable mesh upper, the Fusion provides a lightweight feel perfect for both sports and casual wear. The enhanced Air Max cushioning ensures superior impact absorption, while the durable rubber outsole offers excellent traction on various surfaces. Available in a range of vibrant colorways, the Air Max Fusion caters to diverse tastes, making it a standout addition to any sneaker collection.</p>
                <button className={styles.aboutButton}>shop now</button>
            </div>
        <div className={styles.shoeContainer}>
            <div className={styles.slideShowContainer}>
                <img className={styles.image} src={images.redShoes1} onMouseEnter={() => setImageSrc(images.redShoes1)} alt="shoes image1" />
                <img className={styles.image} src={images.redShoes2} onMouseEnter={() => setImageSrc(images.redShoes2)} alt="shoes image2" />
                <img className={styles.image} src={images.redShoes3} onMouseEnter={() => setImageSrc(images.redShoes3)} alt="shoes image3" />
                <img className={styles.image} src={images.redShoes4} onMouseEnter={() => setImageSrc(images.redShoes4)} alt="shoes image4" />
            </div>
            <div className={styles.displayContainer}>
                <img className={styles.displayImage} src={imgSrc} alt="shoes image1" />
            </div>
        </div>
        </div>
    )
}
