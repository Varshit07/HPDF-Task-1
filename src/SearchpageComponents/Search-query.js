import React from 'react';
import Paper from 'material-ui/Paper';
import './Search-query.css';
const paperStyle = {
  backgroundColor: '#0084b4'
}
const SearchQuery = () => {
  return(
    <Paper className = "query-div" style = {paperStyle}>
      <p className = "query-name">aadhar</p>
    </Paper>
  );
}
export default SearchQuery;
