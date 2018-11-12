import React from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import { ms } from '../theme';

const styles = theme => {
  const fontSizeEm = ms(11);

  return {
    root: {
      position: 'relative',
      [theme.breakpoints.up('md')]: {
        marginLeft: `${(100 / 12) * 2}%`
      }
    },
    underlayText: {
      top: '-.4em',
      position: 'absolute',
      fontSize: `${fontSizeEm}em`,
      fontWeight: 600,
      fontFamily: theme.typography.fontFamily,
      color: theme.palette.grey[200],
      zIndex: -1
    }
  };
};

const InfoText = ({ children, classes, underlayText }) => (
  <Grid item xs={12} md={9} lg={7} className={classes.root}>
    {underlayText && (
      <span className={classes.underlayText}>{underlayText}</span>
    )}
    {children}
  </Grid>
);

export default withStyles(styles)(InfoText);
