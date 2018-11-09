import React from 'react';
import classNames from 'classnames';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

const style = theme => {
  const verticalPad = theme.spacing.unit * 10;
  const horizPad = theme.spacing.unit * 4;
  const pxToRem = theme.typography.pxToRem;

  return {
    dark: {
      backgroundColor: theme.palette.grey[100]
    },
    content: {
      maxWidth: theme.breakpoints.values.lg,
      width: '100%',
      marginLeft: 'auto',
      marginRight: 'auto',
      padding: `${pxToRem(verticalPad)} ${pxToRem(horizPad)}`
    },
    stacked: {
      paddingBottom: 0
    }
  };
};

const Band = ({ children, classes, dark, stacked, ...otherProps }) => (
  <section className={classNames({ [classes.dark]: dark })}>
    <Grid
      className={classNames(classes.content, { [classes.stacked]: stacked })}
      container
      spacing={24}
      justify="space-between"
      {...otherProps}
    >
      {children}
    </Grid>
  </section>
);

export default withStyles(style)(Band);
