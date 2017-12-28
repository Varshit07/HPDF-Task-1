import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavBarH from './HomepageComponents/AppbarH';
import CardH from './HomepageComponents/CardH';
import TweetBarH from './HomepageComponents/TweetBarH';
import TweetH from './HomepageComponents/TweetH';
import FollowSuggestionH from './HomepageComponents/FollowSuggestionH';
import TrendH from './HomepageComponents/TrendH';
import PolicyH from './HomepageComponents/PolicyH';
class App extends Component {


  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <NavBarH />
          <CardH />
          <FollowSuggestionH />
          <TrendH />
          <PolicyH />
          <TweetBarH />
          <TweetH />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
