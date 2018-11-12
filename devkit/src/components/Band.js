import React from 'react';
import classNames from 'classnames';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

const style = theme => {
  const verticalPad = theme.spacing.unit * 10;
  const horizPad = theme.spacing.unit * 4;

  return {
    dark: {
      backgroundColor: theme.palette.grey[100]
    },
    content: {
      maxWidth: theme.breakpoints.values.lg,
      width: '100%',
      marginLeft: 'auto',
      marginRight: 'auto',
      padding: `${verticalPad}px ${horizPad}px`
    }
  };
};

const Band = ({ children, classes, dark, ...otherProps }) => (
  <section className={classNames({ [classes.dark]: dark })}>
    <Grid className={classes.content} container spacing={24} {...otherProps}>
      {children}
    </Grid>
  </section>
);

export default withStyles(style)(Band);
