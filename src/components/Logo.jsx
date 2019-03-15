import React from 'react'
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles'

const Logo = ({classes, variant, align}) => (
  <Typography variant={variant} align={align}>
    <span className={classes.YouTube}>
      YouTube
    </span>
    <span className={classes.Search}>
      Search
    </span>
  </Typography>
)

Logo.propTypes = {
  classes: PropTypes.objectOf(PropTypes.shape).isRequired,
  variant: PropTypes.string,
  align: PropTypes.string,
};

Logo.defaultProps = {
  variant: "display3",
  align: "center",
}

export default withStyles(() => ({
  YouTube: {
    color: '#f70000',
  },
  Search: {
    color: '#282828',
  },
}))(Logo)