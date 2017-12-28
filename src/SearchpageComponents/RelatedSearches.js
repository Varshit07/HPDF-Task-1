import React from 'react';
import Paper from 'material-ui/Paper';
import './RelatedSearches.css';

const RelatedSearches = () => {
  return(
    <Paper zDepth = {1} className = "RelatedSearchesPaper">
    <br />
      <span className = "paper-title">Related Searches   </span>
      <br />
      <div className = "searches">
        <p className = "search-text">narendra modi</p>
        <p className = "search-text">uidai</p>
        <p className = "search-text">#Aadhar</p>
        <p className = "search-text">#Gujarat</p>
      </div>
      <br />
    </Paper>
  );
}

export default RelatedSearches;
