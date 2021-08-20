import React from 'react'
import styles from './Header.module.css'


const Header = () => {
  return ( 
    <div className={styles.header}>
      <img className={styles.image} src="https://fontmeme.com/permalink/210820/2e88eb48a7cffc328c3f10a3955c168f.png" alt="logo" />
      <img className={styles.heart} src="https://i.imgur.com/EQ3Zh3e.png" alt="heart" />
    </div>
   );
}
 
export default Header;