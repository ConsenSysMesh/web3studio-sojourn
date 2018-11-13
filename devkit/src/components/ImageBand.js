import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';

const style = theme => {
  const verticalPad = theme.spacing.unit * 10;
  const horizPad = theme.spacing.unit * 4;
  const pxToRem = theme.typography.pxToRem;

  return {
    root: {
      backgroundColor: blue[50]
    },
    content: {
      maxWidth: theme.breakpoints.values.lg,
      width: '100%',
      marginLeft: 'auto',
      marginRight: 'auto',
      padding: `${pxToRem(verticalPad)} ${pxToRem(horizPad)}`
    }
  };
};

const Band = ({ children, classes }) => (
  <section className={classes.root}>
    <div className={classes.content}>{children}</div>
  </section>
);

export default withStyles(style)(Band);
