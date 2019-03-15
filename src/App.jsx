import React, { Fragment } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';

import index from './pages/index'
import list from './pages/list'

import './App.css';


const theme = createMuiTheme();

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Fragment>
        <CssBaseline />
        <Router>
          <Switch>
            <Route exact path="/" component={index} />
            <Route path="/list" component={list} />
          </Switch>
        </Router>
      </Fragment>
    </MuiThemeProvider>
  )
}
export default App;
