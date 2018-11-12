import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    textDecoration: 'none'
  },
  circle: {
    display: 'flex',
    flexDirection: 'column',
    color: theme.palette.common.white,
    backgroundColor: theme.palette.primary.main,
    alignItems: 'center',
    justifyContent: 'center',
    height: 350,
    width: 350,
    borderRadius: '50%',
    '&:hover': {
      boxShadow: theme.shadows[5]
    }
  }
});

const CTACircle = ({ href, classes, children }) => (
  <a href={href} className={classes.root}>
    <div className={classes.circle}>{children}</div>
  </a>
);

export default withStyles(styles)(CTACircle);
