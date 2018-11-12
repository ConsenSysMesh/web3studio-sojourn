import React from 'react';
import Typography from '@material-ui/core/Typography/Typography';
import { withTheme } from '@material-ui/core/styles';

const IconBlob = ({ title, children, icon, theme }) => (
  <>
    {React.cloneElement(icon, {
      color: theme.palette.primary.main,
      size: theme.spacing.unit * 6
    })}
    <Typography variant="button" gutterBottom>
      {title.toUpperCase()}
    </Typography>
    {children}
  </>
);

export default withTheme()(IconBlob);
