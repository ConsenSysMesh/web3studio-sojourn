import React from 'react';
import Grid from '@material-ui/core/Grid';

const AsideText = ({ children, size = 6 }) => (
  <Grid item xs={12} sm={9} md={7} lg={size}>
    {children}
  </Grid>
);

export default AsideText;
