import React from 'react';
import classNames from 'classnames';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  lastInSection: {
    marginBottom: theme.spacing.unit * 6
  }
});

const variantFactory = variant =>
  withStyles(styles)(({ children, lastInSection, classes, ...props }) => (
    <Typography
      className={classNames({ [classes.lastInSection]: lastInSection })}
      variant={variant}
      {...props}
    >
      {children}
    </Typography>
  ));

export const H1 = variantFactory('h1');
export const H2 = variantFactory('h2');
export const H3 = variantFactory('h3');
export const H4 = variantFactory('h4');
export const H5 = variantFactory('h5');
export const H6 = variantFactory('h6');
export const Subtitle = variantFactory('subtitle1');
export const P = variantFactory('body1');
