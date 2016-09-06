import React from 'react';
import styles from './search.css';
import Search from './search';

const SearchContainer = () => {
  return (
    <div className={styles.container}>
      <Search />
      <div className='ipreo-alert-black'> Heyo </div>
    </div>
  );
};

export default SearchContainer;