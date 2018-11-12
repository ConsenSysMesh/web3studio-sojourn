import React from 'react';
import GithubIcon from 'react-feather/dist/icons/github';
import ExternalIcon from 'react-feather/dist/icons/external-link';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    color: theme.palette.primary.main,
    fontFamily: theme.typography.fontFamily,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline'
    }
  },
  icon: {
    height: theme.typography.fontSize,
    width: theme.typography.fontSize
  }
});

const iconProps = {
  size: '1rem'
};

const Anchor = ({ children, classes, href, external, ...props }) => {
  const isGithub = href.startsWith('https://github.com');
  const isExternal = isGithub || external;

  return (
    <a
      href={href}
      className={classes.root}
      target={isExternal ? '_blank' : ''}
      {...props}
    >
      {children}
      {isExternal ? (
        <>
          {' '}
          {isGithub ? (
            <GithubIcon {...iconProps} />
          ) : (
            <ExternalIcon {...iconProps} />
          )}
        </>
      ) : null}
    </a>
  );
};

export default withStyles(styles)(Anchor);
