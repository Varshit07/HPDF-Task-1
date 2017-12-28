import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Appbar from './SearchpageComponents/Appbar';
import SearchQuery from './SearchpageComponents/Search-query';
import SubNavBar from './SearchpageComponents/SubNavBar';
import SearchFilters from './SearchpageComponents/SearchFilters';
import RelatedSearches from './SearchpageComponents/RelatedSearches';
import FollowSuggestion from './SearchpageComponents/FollowSuggestion';
import Trends from './SearchpageComponents/Trends';
import Policy from './SearchpageComponents/Policy';
import News from './SearchpageComponents/News';
import People from './SearchpageComponents/People';
import Tweet from './SearchpageComponents/Tweet';
import './Search.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <MuiThemeProvider>
        <Appbar />
        <SearchQuery />
        <SubNavBar />
        <SearchFilters />
        <RelatedSearches />
        <FollowSuggestion />
        <Trends />
        <Policy />
        <News />
        <People />
        <Tweet />
      </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
