import React, { lazy } from 'react';

import { ReactComponent as Arrow } from 'assets/svg/drawn-arrow.svg';

import Container from 'quarks/Container';
import Grid from 'quarks/Grid';
import Link from 'quarks/Link';
import Paragraph from 'quarks/Paragraph';
import Text from 'quarks/Text';

import { underlineOnHover } from 'utils/css';

const Footer = lazy(() => import('components/Footer/Footer'));

const fourOhFour = () => (
  <>
    <Grid placeItems="center" height="50vh" fontSize={20} contain="content">
      <Container width="340px" marginX="auto" position="relative" top="-10%">
        <Paragraph textColor={{ dark: 'gray-900', light: 'purple-900' }}>
          {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
          <em>// 404 page not found</em>
        </Paragraph>
        <Text textColor={{ dark: 'purple-300', light: 'purple-500' }}>if </Text>( !
        <Text textColor="primary-300">page</Text> ) {'{'}
        <br />
        &nbsp; &nbsp;
        <Text textColor={{ dark: 'danger-300', light: 'danger-500' }}>
          {' '}
          <em>throw </em>
        </Text>{' '}
        &apos;Oops! There was a problem&apos;;
        <br />
        {'}'}
        <br />
        <br />
        <Text textColor={{ dark: 'purple-300', light: 'purple-500' }}>
          <em>return </em>
        </Text>
        <Text position="relative" css={underlineOnHover(-5)}>
          <Link href="https://www.justinwallace.dev">&apos;path/to/home&apos;</Link>
        </Text>
        <Container
          position="absolute"
          bottom="-50%"
          left="200px"
          width="300px"
          transform="rotate(130deg)"
          lg={{ width: '400px', bottom: '-70%' }}
        >
          <Arrow />
        </Container>
      </Container>
    </Grid>
    <Footer />
  </>
);

export default fourOhFour;
