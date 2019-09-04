import React from 'react';
import Container from 'share-we-go-ui/Container';
import Typography from 'share-we-go-ui/Typography';
import Box from 'share-we-go-ui/Box';
import MuiLink from 'share-we-go-ui/Link';
import Button from 'share-we-go-ui/Button';
import ProTip from '../src/ProTip';
import Link from '../src/Link';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <MuiLink color="inherit" href="https://material-ui.com/">
        Your Website
      </MuiLink>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function About() {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Next.js example
        </Typography>
        <Button variant="contained" color="primary" component={Link} naked href="/">
          Go to the main page
        </Button>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
}
