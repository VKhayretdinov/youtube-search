import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
// import Typography from '@material-ui/core/Typography';
import MediaQuery from 'react-responsive';
import { withStyles } from '@material-ui/core/styles'

import SearchBar from '../search-bar/SearchBar';

function List({classes}) {
  return (
    <Fragment>
      <MediaQuery query="(min-width: 999px)">
        <Grid container className={classes.listComponent} alignItems="center" justify="center">
          <Grid item xs={5}>
            <SearchBar />
          </Grid>
        </Grid>
      </MediaQuery>

      <MediaQuery query="(max-width: 999px)">
        <Grid container className={classes.listComponent} alignItems="center" justify="center">
          <Grid item xs={6}>
            <SearchBar />
          </Grid>
        </Grid>
      </MediaQuery>
    </Fragment>
  )
}

List.propTypes = {
  classes: PropTypes.objectOf(PropTypes.shape).isRequired,
};

export default withStyles(() => ({
  listComponent: {
    width: '100%',
    marginTop: '2%',
  }
}))(List)