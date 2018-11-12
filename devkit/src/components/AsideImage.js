import React from 'react';
import Grid from '@material-ui/core/Grid';

const AsideImage = ({ children, size = 4 }) => (
  <Grid item xs={4} sm={3} md={3} lg={size}>
    {children}
  </Grid>
);

export default AsideImage;
