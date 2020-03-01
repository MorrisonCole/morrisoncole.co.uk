import { Typography } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/core/styles/makeStyles';
import classNames from 'classnames';
import React from 'react';

function currentYear() {
  return new Date().getFullYear();
}

const useStyles = makeStyles({
  container: {
    padding: 0,
  },
  footer: {
    backgroundColor: '#f5f5f5',
    fontSize: '0.9em',
    flexShrink: 0,
    marginTop: '45px',
    padding: '35px 0 36px',
    borderTop: '1px solid #e5e5e5',
  },
  footerText: {
    paddingLeft: '5%',
  },
  fade: {
    opacity: 0.6,
  },
});

export default function Footer() {
  const classes = useStyles();

  return (
    <footer>
      <Container maxWidth={false} className={classes.container}>
        <Grid item xs className={classes.footer}>
          <Typography variant="body2" className={classes.footerText}>
            Handcrafted with TS, React and a bunch of other useful technologies
            ♥
          </Typography>
          <Typography
            variant="caption"
            className={classNames(classes.footerText, classes.fade)}
          >
            &copy; Morrison Cole
            {' '}
            {currentYear()}
          </Typography>
        </Grid>
      </Container>
    </footer>
  );
}
