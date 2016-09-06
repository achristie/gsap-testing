import React from 'react';
import styles from './nav-bar.css';

const Navbar = () => {
  return (
    <div className={styles.nav}>
      <h1> IPREO </h1>
      <h3> Digital Style Framework </h3>
      <h5> Version 1.0.0 </h5>
    </div>
  );
};

export default Navbar;