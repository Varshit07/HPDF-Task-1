import React from 'react';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
const FirstButtonStyle = {
  marginLeft: '40px'
}
const LastButtonStyle = {
  marginBottom: '-3px',
  marginLeft: '610px'
}
const SubNavBar = () => {
  return(
    <Paper className = "subnavbar-paper" zDepth = {1}>
      <FlatButton className = "nav-buttons" label="Top" hoverColor = '#0084b4' style = {FirstButtonStyle} />
      <FlatButton className = "nav-buttons" label="Latest" hoverColor = '#0084b4' />
      <FlatButton className = "nav-buttons" label="People" hoverColor = '#0084b4' />
      <FlatButton className = "nav-buttons" label="Photos" hoverColor = '#0084b4' />
      <FlatButton className = "nav-buttons" label="Videos" hoverColor = '#0084b4' />
      <FlatButton className = "nav-buttons" label="News" hoverColor = '#0084b4' />
      <FlatButton className = "nav-buttons" label="Brodcasts" hoverColor = '#0084b4' />
      <IconMenu
      iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
      anchorOrigin={{horizontal: 'right', vertical: 'top'}}
      targetOrigin={{horizontal: 'right', vertical: 'bottom'}}
      style = {LastButtonStyle}
    >
      <MenuItem primaryText="Search Settings" />
      <MenuItem primaryText="Save this search" />
      <MenuItem primaryText="Embed this search" />
    </IconMenu>
    </Paper>
  );
}
export default SubNavBar;
