import React from 'react';
import Paper from 'material-ui/Paper';
import './Policy.css';

const Policy = () => {
  return(
    <div className = "policy-container">
    <Paper zDepth = {1} className = "policy-paper">
      <p className = "policies"> © 2017  Twitter  About  Help Center  Terms </p>
      <p className = "policies">Privacy  Policy  Cookies  Ads  Info</p>
      <br />
      </Paper>
      </div>
  );
}
export default Policy;
