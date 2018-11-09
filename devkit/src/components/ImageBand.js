import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const style = () => {
  return {
    image: {
      width: '100%'
    }
  };
};

const Band = ({ src, alt, classes }) => (
  <section>
    <img className={classes.image} src={src} alt={alt} />
  </section>
);

export default withStyles(style)(Band);
