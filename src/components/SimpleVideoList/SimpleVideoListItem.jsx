import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom'

const SimpleVideoListItem = ({classes, key, title}) => {
  
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
    <Link to="/list" className={classes.item}>
      <ListItem button key={key} divider>
        <ListItemText><div dangerouslySetInnerHTML={readble(title)} /></ListItemText>
      </ListItem>
    </Link>
  )
}

SimpleVideoListItem.propTypes = {
  classes: PropTypes.objectOf(PropTypes.shape).isRequired,
  key: PropTypes.string.isRequired,
  title: PropTypes.string,
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