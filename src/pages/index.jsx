import React from 'react';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import MediaQuery from 'react-responsive';
import { withStyles } from '@material-ui/core/styles'

import Logo from '../components/Logo'
import SearchBar from '../components/SearchBar/SearchBar';

const Index = ({classes}) => (
  <Grid className={classes.indexComponent} container justify="center" alignItems="flex-start" alignContent="flex-start">    
    
    <Grid item xs={12}>
      <Logo />
    </Grid>

    <MediaQuery query="(min-width: 680px)">
      <Grid item xs={7}>
        <SearchBar />
      </Grid>
    </MediaQuery>
    
    <MediaQuery query="(max-width: 679px)">
      <Grid item xs={11}>
        <SearchBar />
      </Grid>
    </MediaQuery>


  </Grid>
)

Index.propTypes = {
  classes: PropTypes.objectOf(PropTypes.shape).isRequired,
};

export default withStyles(() => ({
  indexComponent: {
    height: '100vh',
    paddingTop: '20vh',
  },
}))(Index)