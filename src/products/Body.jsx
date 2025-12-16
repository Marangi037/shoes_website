import React from 'react';
import styles from './Body.module.css';
import { products } from '../assets/images.js'

export const Body = () => {
  return (
        <ul className={styles.productsContainer}>
            {products.map((product, index) => 
            <li className={styles.productCard} key={index}>
              <div className={`w-full h-[70%] flex justify-center items-center ${styles.productImageDiv}`}>
                <span className='w-max h-max absolute top-4 right-4'>
                   <svg 
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-heart text-[#c72092] hover:text-[#610343] duration-500 transition-all w-2 h-2 md:w-4 md:h-4"
                  >
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                  </svg>
                  
                </span>
               
                <img className={styles.productImage} src={product.imgUrl} alt="product image" />
              </div>
                
                <div className='w-full h-[20%] flex flex-col font-sans'>
                  <h1 className={styles.productTitle}>{product.title}</h1>
                  {/* <h2 className={styles.productDesc}>{product.desc}</h2> */}
                  <h1 className='font-normal font-base tracking-wider text-black'> ksh.{product.price}</h1>
                </div>

            </li> 
            )}
        </ul>
  )
}
