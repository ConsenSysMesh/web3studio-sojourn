import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 20
  }
});

const Index = ({ classes }) => (
  <div className={classes.root}>
    <Typography variant="h4" gutterBottom>
      What is this developer kit
    </Typography>
    <Typography variant="subtitle1" gutterBottom>
      and why is it free?
    </Typography>
  </div>
);

Index.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Index);
