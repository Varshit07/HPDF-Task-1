import React, { Component } from 'react';
import Home from './Home';
import Search from './Search';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <MuiThemeProvider>
                <div>
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route exact path='/search' component={Search}/>
                    </Switch>
                </div>
            </MuiThemeProvider>
        </BrowserRouter>
  );
  }
}

export default App;
