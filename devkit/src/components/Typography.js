import React from 'react';
import Typography from '@material-ui/core/Typography';

const variantFactory = variant => ({ children, ...props }) => (
  <Typography variant={variant} {...props}>
    {children}
  </Typography>
);

export const H1 = variantFactory('h1');
export const H2 = variantFactory('h2');
export const H3 = variantFactory('h3');
export const H4 = variantFactory('h4');
export const H6 = variantFactory('h6');
export const P = variantFactory('body2');
