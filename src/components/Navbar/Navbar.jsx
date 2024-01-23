import React from 'react'
import styles from './Navbar.module.css'
import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
        <ul className={styles.list}>
          <li><Link to="/" className={styles.link}>Home</Link></li>
          <li><Link to="/game" className={styles.link}>Play</Link></li>
          <li><Link to="/hard" className={styles.link}>Hard Mode</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar