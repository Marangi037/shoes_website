import React from 'react'
import { testimonials } from '../assets/images';
import styles from './Body.module.css';

export const Body = () => {
  return (
    <div className={styles.testimonialsContainer}>
        <div className={styles.symbolsContainer}>
            <div className={styles.symbol1}></div>
            <div className={styles.symbol2}></div>
        </div>
        <ul className={styles.testimonialContainer}>
            {testimonials.map((testimonial, index) => 
                <li key={index} className={styles.outerCard}>
                    <div className={styles.testimonialCard}>
                        <div className={styles.detailsContainer}>
                        <img className={styles.image} src={testimonial.imgUrl} alt="reviewer image" />
                        <h1 className={styles.username}>{testimonial.name}</h1>
                    </div>
                    <p className={styles.text}>{testimonial.reviewText}</p>
                    </div>
                    
                </li>
            )}
        </ul>
    </div>
  )
}
