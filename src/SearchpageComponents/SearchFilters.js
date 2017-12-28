import React from 'react';
import Paper from 'material-ui/Paper';
import './SearchFilters.css';

const SearchFilters = () => {
  return(
    <Paper zDepth = {1} className = "SearchFiltersPaper">
    <br />
      <span className = "paper-title">Search filters   </span>· <span className = "show"> Show </span>
      <br />
      <br />
    </Paper>
  );
}

export default SearchFilters;
