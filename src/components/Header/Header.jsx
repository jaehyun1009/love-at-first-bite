import React from 'react'
import styles from './Header.module.css'


const Header = () => {
  return ( 
    <div className={styles.header}>
      <img className={styles.image} src="https://i.imgur.com/aeqe3F9.png" alt="logo" />
    </div>
   );
}
 
export default Header;