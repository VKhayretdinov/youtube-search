import React from 'react'
import PropTypes from 'prop-types';
import Input from '@material-ui/core/InputBase';
import { withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom'
import Paper from '@material-ui/core/Paper';

const SearchInput = ({classes, className, placeholder, id, autoFocus, value, onChange, link}) => (
  <Paper className={className}>

    <Input
      className={classes.input}
      placeholder={placeholder}
      id={id}
      autoFocus={autoFocus}
      value={value}
      onChange={onChange}
    />

    <Link to={link}>
      <IconButton aria-label="Search">
        <SearchIcon />
      </IconButton>
    </Link>

  </Paper>

)

SearchInput.propTypes = {
  classes: PropTypes.objectOf(PropTypes.shape).isRequired,
  className: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  autoFocus: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.PropTypes.func.isRequired,
  link: PropTypes.string.isRequired,
  
}

export default withStyles(() => ({
  input: {
    flex: 1,
    margin: '10px',
  },
}))(SearchInput)