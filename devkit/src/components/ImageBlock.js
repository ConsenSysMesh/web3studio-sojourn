import React from 'react';
import Grid from '@material-ui/core/Grid';

const ImageBlock = ({ children, size = 5 }) => (
  <Grid item xs={12} md={size}>
    {children}
  </Grid>
);

export default ImageBlock;
