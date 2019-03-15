import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Paper from '@material-ui/core/Paper';

import SimpleVideoListItem from './SimpleVideoListItem'


const SimpleVideoList = ({classes, titles}) => (
  // https://material-ui.com/demos/lists/#simple-list
  <Paper>
    <List component="nav" className={classes.simpleVideoList}> 
      {titles.map((item) => (
        <SimpleVideoListItem key={item.id} title={item.title} />
      ))}
    </List>
  </Paper>
) 


SimpleVideoList.propTypes = {
  classes: PropTypes.objectOf(PropTypes.shape).isRequired,
  titles: PropTypes.arrayOf(PropTypes.object),
};

SimpleVideoList.defaultProps = {
  titles: []
}

export default withStyles(() => ({
  simpleVideoList: {
    width: '100%',
    padding: '0px',
  },
}))(SimpleVideoList);