import React, { Fragment } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';

import Index from '../index/Index'
import ListRouter from '../list-router/ListRouter'

import './App.css';


const theme = createMuiTheme();

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Fragment>
        <CssBaseline />
        <Router>
          <Switch>
            <Route exact path="/" component={Index} />
            <Route path="/list" component={ListRouter} />
          </Switch>
        </Router>
      </Fragment>
    </MuiThemeProvider>
  )
}
export default App;
