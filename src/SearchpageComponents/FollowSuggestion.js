import React from 'react';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import Avatar from 'material-ui/Avatar';
import ActionVerifiedUser from 'material-ui/svg-icons/action/verified-user';
import './FollowSuggestion.css';
const FollowSuggestion = () => {
  const iconStyle = {
    height: '18px'
  }
  const buttonStyle = {
    marginLeft: '10px',
    borderRadius: '20px',
    backgroundColor: '#0084b4',
    height: '150%',
    position: 'relative',
    top: '2px',
    color: 'white'
  };
  return(
    <Paper zDepth = {1} className = "suggest-paper">
      <span className="paper-title">Who To Follow </span>  <span className = "status">· Refresh · View All</span>
      <br />
      <br />
      <br />
      <span className = "avatar-thumbnail">
      <Avatar src = "http://res.cloudinary.com/ddskvkjzs/image/upload/v1514227489/j9TSFfA5_400x400_p58wde.jpg" size = {60} />
      </span>
      <span className = "name">Pramod Varma</span>
      <span className = "username">@pramodkvarma</span>
      <span className = "follow-button">
      <FlatButton label="Follow" style = {buttonStyle} />
      </span>
      <br />
      <br />
      <span className = "avatar-thumbnail">
      <Avatar src = "http://res.cloudinary.com/ddskvkjzs/image/upload/v1514227581/0Xep_wgD_400x400_fhj1bh.png" size = {60} />
      </span>
      <span className = "name"> MyGovIndia <ActionVerifiedUser style = {iconStyle} color = '#0084b4'/> </span>
      <span className = "username"> @mygovindia</span>
      <FlatButton label="Follow" style = {buttonStyle} />
      <br />
      <br />
      <span className = "avatar-thumbnail">
      <Avatar src = "http://res.cloudinary.com/ddskvkjzs/image/upload/v1514227670/0ff5912fbf7660a14e2e6795e4a74549_400x400_vrhjqx.jpg" size = {60} />
      </span>
      <span className = "name"> MIB India <ActionVerifiedUser style = {iconStyle} color = '#0084b4'/> </span>
      <span className = "username"> @MIB_India</span>
      <FlatButton label="Follow" style = {buttonStyle} />
      <br />
      <br />
      <br />
    </Paper>
  );
}

export default FollowSuggestion;
