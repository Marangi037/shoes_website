import React, {useState} from 'react'
import { images } from '../assets/images.js'
import styles from "./Auth.module.css";


export const Sign = () => {
  const [move, setMove] = useState(false);
  
  return (
    <div className={styles.signContainer}>
        <form className={`${styles.login} ${move ? styles.moveRight : styles.moveLeft}`} action="sumbit">
            <h1 style={{"--i": 1}} className={styles.loginHeader}>Welcome Back</h1>
            <div className={styles.inputContainer}>
              <label style={{"--i": 2}} className={styles.label}>Username</label>
              <input style={{"--i": 3}} className={styles.input} type="text" />
            </div>
            <div className={styles.inputContainer}>
              <label style={{"--i": 4}} className={styles.label}>Password</label>
              <input style={{"--i": 5}} className={styles.input} type="text" />
            </div>
            <a style={{"--i": 6}} className={styles.link} href="#forgot_password">forgot password?</a>
            <button style={{"--i": 7}} className={styles.loginButton}>Login</button>
           <div style={{"--i": 8}} className={styles.logoContainer}>
              <span className='w-max h-max'>
                  <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="24" 
                      height="24" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="#c72092" 
                      stroke-width="2" 
                      stroke-linecap="round" 
                      stroke-linejoin="round" 
                      >
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
              </span>
              <span className='w-max h-max'>
                  <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 24 24" 
                      width="24" 
                      height="24"
                      fill="#c72092"
                      >
                      <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"/>
                  </svg>
              </span>
              <span className='w-max h-max'>
                  <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="24" 
                      height="24" 
                      viewBox="0 0 24 24" 
                      fill="#c72092"
                      >
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
              </span>
              <span className='w-max h-max'>
                  <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 24 24" 
                      width="24" 
                      height="24" 
                      fill="#c72092"
                      >
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91 0 .08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.82-1.35 3.96-1.07 1.51-2.88 2.38-4.71 2.36-1.84-.02-3.66-.87-4.75-2.36-1.09-1.48-1.46-3.4-1.01-5.18.45-1.78 1.75-3.35 3.51-4.04 1.76-.69 3.82-.44 5.37.58v4.25c-.27-.22-.57-.4-.88-.55-.65-.3-1.39-.41-2.11-.26-.72.15-1.39.54-1.86 1.09-.47.55-.66 1.28-.55 1.99.11.71.51 1.36 1.11 1.77.6.41 1.36.56 2.08.38.72-.18 1.35-.63 1.72-1.25.37-.62.53-1.36.43-2.08-.09-4.8-.02-9.61-.03-14.41z"/>
                  </svg>
              </span>
          </div>
            <p className='tracking-wider font-sans text-base font-extralight' style={{"--i": 9}}>Don't have an account, <a onClick={() => setMove(!move)} className={styles.link}>sign up</a></p>
        </form>
        <form className={`${styles.signup} ${move ? styles.moveRight : styles.moveLeft}`} action="submit">
            <h1 style={{"--i": 1}} className={styles.signupHeader}>Welcome</h1>
            <div className={styles.inputContainer}>
              <label style={{"--i": 2}} className={styles.label}>Fullnames</label>
              <input style={{"--i": 3}} className={styles.input} type="text" />
            </div>
            <div className={styles.inputContainer}>
              <label style={{"--i": 4}} className={styles.label}>Email</label>
              <input style={{"--i": 5}} className={styles.input} type="email" />
            </div>
            <div className={styles.inputContainer}>
              <label style={{"--i": 6}} className={styles.label}>Password</label>
              <input style={{"--i": 7}} className={styles.input} type="password" />
            </div>
            <button style={{"--i": 8}} className={styles.signupButton}>Sign Up</button>
            <div style={{"--i": 9}} className={styles.logoContainer}>
                    <span className='w-max h-max'>
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            width="24" 
                            height="24" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            stroke="#c72092" 
                            stroke-width="2" 
                            stroke-linecap="round" 
                            stroke-linejoin="round" 
                            >
                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                        </svg>
                    </span>
                    <span className='w-max h-max'>
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            viewBox="0 0 24 24" 
                            width="24" 
                            height="24"
                            fill="#c72092"
                            >
                            <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"/>
                        </svg>
                    </span>
                    <span className='w-max h-max'>
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            width="24" 
                            height="24" 
                            viewBox="0 0 24 24" 
                            fill="#c72092"
                            >
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                        </svg>
                    </span>
                    <span className='w-max h-max'>
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            viewBox="0 0 24 24" 
                            width="24" 
                            height="24" 
                            fill="#c72092"
                            >
                            <path d="M12.525.02c1.31-.02 2.61-.01 3.91 0 .08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.82-1.35 3.96-1.07 1.51-2.88 2.38-4.71 2.36-1.84-.02-3.66-.87-4.75-2.36-1.09-1.48-1.46-3.4-1.01-5.18.45-1.78 1.75-3.35 3.51-4.04 1.76-.69 3.82-.44 5.37.58v4.25c-.27-.22-.57-.4-.88-.55-.65-.3-1.39-.41-2.11-.26-.72.15-1.39.54-1.86 1.09-.47.55-.66 1.28-.55 1.99.11.71.51 1.36 1.11 1.77.6.41 1.36.56 2.08.38.72-.18 1.35-.63 1.72-1.25.37-.62.53-1.36.43-2.08-.09-4.8-.02-9.61-.03-14.41z"/>
                        </svg>
                    </span>
                </div>
            <p className='tracking-wider font-sans text-base font-extralight' style={{"--i": 10}}>Already have an account, <a className={styles.link} onClick={() => setMove(!move)}>log up</a></p>
        </form>
    </div>
  )
}
