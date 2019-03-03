import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import MediaQuery from 'react-responsive';
import { withStyles } from '@material-ui/core/styles'

import SearchBar from '../search-bar/SearchBar';

function Index({classes}) {
  return (
        <Grid className={classes.indexComponent} container justify="center" alignContent="center" alignItems="center">      
          
          <MediaQuery query="(min-width: 760px)">
            <Grid item className={classes.headerLogo}>
              <Typography className={classes.headerLogo} variant="display4">
                <span className={classes.headerLogoYouTube}>
                  YouTube
                </span>
                <span className={classes.headerLogoSearch}>
                  Search
                </span>
              </Typography>
            </Grid>
            <Grid container justify="center">
              <Grid item xs={5}>
                <SearchBar />
              </Grid>
            </Grid>
          </MediaQuery>

          <MediaQuery query="(max-width: 759px)">
            <Grid item className={classes.headerLogo}>
              <Typography className={classes.headerLogo} variant="display3">
                <span className={classes.headerLogoYouTube}>
                  YouTube
                </span>
                <span className={classes.headerLogoSearch}>
                  Search
                </span>
              </Typography>
            </Grid>
            <Grid container alignItems="center" justify="center">
              <Grid item xs={10}>
                <SearchBar />
              </Grid>
            </Grid> 
          </MediaQuery>
    
        </Grid>
  )
}

Index.propTypes = {
  classes: PropTypes.objectOf(PropTypes.shape).isRequired,
};

export default withStyles(() => ({
  indexComponent: {
    // height: '100vh',
    marginTop: '20vh',
  },
  headerLogo: {
    textAlign: 'center',
  },
  headerLogoYouTube: {
    color: '#f70000'
  },
  headerLogoSearch: {
    color: '#282828',
  },
}))(Index)