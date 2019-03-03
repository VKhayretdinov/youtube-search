import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom'

function SimpleVideoListItem({classes, id, title}) {
  
  // TODO: Better solution must be found (without dangerouslySetInnerHTML)
  /**
   * Make text readble with markup
   *
   * @param {string} str String for formating
   * @returns {Object} Formated string
   */
  const readble = (str) => ({__html: str});

  // const handleClick = () => {
  //   console.log('clickItem')
  // }

  return (
    <ListItem button key={id} divider>
      <Link to="/list" className={classes.item}>
        <ListItemText><div dangerouslySetInnerHTML={readble(title)} /></ListItemText>
      </Link>
    </ListItem>
  )
}

SimpleVideoListItem.propTypes = {
  classes: PropTypes.objectOf(PropTypes.shape).isRequired,
  title: PropTypes.string.isRequired,
};

SimpleVideoListItem.defaultProps = {
  title: ""
}

export default withStyles(() => ({
  item: {
    listStyleType: 'none',
    width: '100%',
    textDecoration: 'none'  
  }
}))(SimpleVideoListItem);