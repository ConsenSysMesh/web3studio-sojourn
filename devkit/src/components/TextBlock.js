import React from 'react';
import Grid from '@material-ui/core/Grid';

const TextBlock = ({ children, size = 7 }) => (
  <Grid item xs={12} sm={8} md={size}>
    {children}
  </Grid>
);

export default TextBlock;
