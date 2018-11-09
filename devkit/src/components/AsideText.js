import React from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import { ms } from '../theme';

const styles = theme => {
  const fontSizeEm = ms(11);

  return {
    root: {
      position: 'relative'
    },
    order: {
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

const AsideText = ({ children, size = 6, order, classes }) => (
  <Grid item xs={12} sm={9} md={8} lg={size} className={classes.root}>
    {order && <span className={classes.order}>{order}</span>}
    {children}
  </Grid>
);

export default withStyles(styles)(AsideText);
