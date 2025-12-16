import styles from './Body.module.css';
import { images } from '../../assets/images.js'

export const Body = () => {
  return (
    <section className={`${styles.headerContainer} bg-white`}>
        <div className={styles.shoeContainer}>
            <img className={styles.shoeImage} src={images.shoes} alt="shoes image" />
        </div>
        <div className={styles.textContainer}>
            <h1 className={styles.textContainerHeader}>Shoes Collection</h1>
            <p className={styles.textContainerDescription}>
                Explore our Nike Collection Shoes, where style and performance unite. As a leading retailer, we offer the latest and most iconic Nike footwear, perfect for athletes and fashion enthusiasts. Each pair embodies innovation, quality, and comfort, ensuring you excel in every stride.
            </p>
            <button className={styles.textContainerButton}>SHOP NOW</button>
        </div>
        
    </section>
  )
}
