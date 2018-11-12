import Grid from '@material-ui/core/Grid/Grid';
import Typography from '@material-ui/core/Typography/Typography';
import { withTheme } from '@material-ui/core/styles';
import React from 'react';

const IconBlob = ({ title, body, icon, theme }) => (
  <Grid item xs={6}>
    {React.cloneElement(icon, {
      color: theme.palette.primary.main,
      size: theme.spacing.unit * 6
    })}
    <Typography variant="h6" gutterBottom>
      {title.toUpperCase()}
    </Typography>
    <Typography variant="body1">{body}</Typography>
  </Grid>
);

export default withTheme()(IconBlob);
