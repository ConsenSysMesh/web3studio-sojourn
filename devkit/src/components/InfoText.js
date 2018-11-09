import React from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => {
  return {
    root: {
      [theme.breakpoints.up('md')]: {
        marginLeft: `${(100 / 12) * 2}%`
      }
    }
  };
};

const InfoText = ({ children, classes }) => (
  <Grid item xs={12} md={9} lg={7} className={classes.root}>
    {children}
  </Grid>
);

export default withStyles(styles)(InfoText);
