import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  ol: {
    fontFamily: theme.typography.fontFamily
  }
});

export const Ol = withStyles(styles)(({ children, classes }) => (
  <ol className={classes.ol}>{children}</ol>
));

export const Li = ({ children }) => <li>{children}</li>;
