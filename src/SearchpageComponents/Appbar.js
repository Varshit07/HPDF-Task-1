import React from 'react';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import ActionHome from 'material-ui/svg-icons/action/home';
import SocialNotification from 'material-ui/svg-icons/social/notifications';
import CommunicationMessage from 'material-ui/svg-icons/communication/message';
import SocialVerySatisfied from 'material-ui/svg-icons/social/sentiment-very-satisfied';
import ActionSearch from 'material-ui/svg-icons/action/search';
import Avatar from 'material-ui/Avatar';
import {white} from 'material-ui/styles/colors';
import TextField from 'material-ui/TextField';
import TwitterIcon from 'react-icons/lib/fa/twitter';
import './Appbar.css';
const style = {
  width: '100%',
  height: '50px',
  display: 'flex',
  flexDirection: 'row',
  padding: '5px 30px',
  marginTop: '0px',
  backgroundColor: 'white',
  opacity: '1',
  position: 'fixed'
};

const faviconStyle = {
  // marginTop: '5px',
  // height: 30,
  marginLeft: '140px',
  color: '#0084b4'
}
const profile = {
  // marginTop: '5px',
  // height: 30,
  marginLeft: '20px',
  paddingTop: '5px'
}
const searchBox = {
  borderRadius: '18px',
  border: '1px solid grey',
  marginLeft: '90px'
}
const buttonStyle = {
  borderRadius: '20px',
  backgroundColor: '#0084b4',
  marginLeft: '20px',
  color: 'white'
};

const NavBar = () => (
      <div className = "toolbar-container">
      <div>
    <Paper style={style} zDepth={1} className = "NavBar-paper">
      <a href = "../"><FlatButton className = "nav-buttons" label="Home" hoverColor = '#0084b4' icon={<ActionHome hoverColor = "white"/>}></FlatButton></a>
      <FlatButton className = "nav-buttons" label="Moments" hoverColor = '#0084b4' icon = {<SocialVerySatisfied hoverColor = "white"/>}></FlatButton>
      <FlatButton className = "nav-buttons" label="Notifications" hoverColor = '#0084b4' icon = {<SocialNotification hoverColor = "white"/>}></FlatButton>
      <FlatButton className = "nav-buttons" label="Messages" hoverColor = '#0084b4' icon = {<CommunicationMessage hoverColor = "white"/>}></FlatButton>
      {/*<Avatar src= "https://www.shareicon.net/download/2016/08/01/639808_media.svg" size={30} backgroundColor={white} style = {faviconStyle}/>
*/}
      <a href = "../"><TwitterIcon size= {30} style = {faviconStyle}/></a>
      <div className = "search-field" style = {searchBox}>
        <TextField hintText = "Search Twitter" underlineShow  = {false}></TextField><ActionSearch />
      </div>

      <Avatar src= "http://res.cloudinary.com/ddskvkjzs/image/upload/v1514225611/6TY0EjQh_400x400_rqcbun.jpg" size={30} backgroundColor={white} style = {profile}/>

      <div>
        <FlatButton label="Tweet" style = {buttonStyle}/>
      </div>
    </Paper>
    </div>
    </div>
);

export default NavBar;
