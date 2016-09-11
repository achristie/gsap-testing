import React from 'react';
import styles from './search.css';
import Search from './search';

const SearchContainer = () => {
  return (
    <div className={styles.container}>
      <Search />
      <h4> Test.. </h4>
    </div>
  );
};

export default SearchContainer;