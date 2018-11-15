import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
  root: {
    overflow: 'hidden',
    paddingBottom: '56.25%',
    position: 'relative',
    height: 0
  },
  iframe: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%'
  }
});

function YouTube({ classes, videoId }) {
  return (
    <div className={classes.root}>
      <iframe
        className={classes.iframe}
        width="500"
        height="294"
        src={`https://www.youtube.com/embed/${videoId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}

export default withStyles(styles)(YouTube);
