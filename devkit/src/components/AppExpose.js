import Grid from '@material-ui/core/Grid/Grid';
import Typography from '@material-ui/core/Typography/Typography';
import React from 'react';

export const AppExposeColumn = ({ children }) => (
  <Grid container item xs md={3} direction="column">
    {children}
  </Grid>
);

export const AppExposeItem = ({ title, body }) => (
  <Grid item>
    <Typography variant="h6" align="center" color="primary" gutterBottom>
      {title.toUpperCase()}
    </Typography>
    <Typography variant="body1" align="center">
      {body}
    </Typography>
  </Grid>
);

const AppExpose = ({ title, subtitle, children }) => (
  <>
    <Grid container item xs={12} justify="center">
      <Grid item xs md={8}>
        <Typography variant="h2" gutterBottom align="center">
          {title}
        </Typography>
        <Typography variant="body1" align="center" gutterBottom>
          {subtitle}
        </Typography>
      </Grid>
    </Grid>

    <Grid container item xs={12} justify="center">
      {children}
    </Grid>
  </>
);

export default AppExpose;
