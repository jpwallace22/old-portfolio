import { navbar } from 'data/data';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';

import { ReactComponent as LogoMark } from 'assets/svg/logomark-grad.svg';

// Quarks
import Container from 'quarks/Container';
import Flex from 'quarks/Flex';
import Grid from 'quarks/Grid';
import Heading from 'quarks/Heading';
import Logo from 'quarks/Logo';
import Paragraph from 'quarks/Paragraph';
import Text from 'quarks/Text';
import { BasicProps } from 'quarks/interpolations/basic';

import Socials from 'molecules/Socials/Socials';

import { underlineOnHover } from 'utils/css';
import { emailObfuscator } from 'utils/functions';

type FooterProps = BasicProps & {
  size?: number;
};
const date = new Date();
const Footer: FC<FooterProps> = ({ size = 100, ...props }) => {
  const router = useRouter();
  const height = size - 20;

  return (
    <>
      <Grid
        height={height + 'vh'}
        as="footer"
        backgroundColor={{ dark: 'purple-800', light: 'gray-100' }}
        position="relative"
        zIndex={1}
        placeItems="center"
        lg={{ height: height + 10 + 'vh' }}
        marginTop={32}
        paddingTop={32}
        {...props}
      >
        <Flex gap="16px" flexDirection="column" lg={{ flexDirection: 'row', alignItems: 'center', gap: '32px' }}>
          <Logo paddingTop={4} />
          <Container>
            <Paragraph
              textColor={{ dark: 'gray-500', light: 'common-black' }}
              marginAll={0}
              marginBottom={4}
              lg={{ marginBottom: 0, marginLeft: 4 }}
            >
              Well, what are you waiting for?
            </Paragraph>
            <Link href="mailto:hello@justinwallace.dev">
              <Heading
                as="h3"
                textStyle="xl"
                lg={{ textStyle: 'xxl' }}
                position="relative"
                cursor="pointer"
                css={underlineOnHover(-16)}
                onClick={() => emailObfuscator(router)}
              >
                Let&apos;s Chat
              </Heading>
            </Link>
          </Container>
        </Flex>
      </Grid>
      <Container backgroundColor={{ dark: 'purple-800', light: 'gray-100' }}>
        <Flex
          height="20vh"
          justifyContent="center"
          paddingX={16}
          flexDirection="column"
          alignItems="center"
          paddingBottom={8}
          lg={{
            paddingX: 32,
            maxWidth: '1280px',
            marginX: 'auto',
            flexDirection: 'row',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            height: '10vh',
          }}
        >
          <Container width="33%" display="none" lg={{ display: 'block' }}>
            <Link href="https://www.justinwallace.dev">
              <LogoMark width={50} cursor="pointer" />
            </Link>
          </Container>
          <Socials links={navbar.socials} width="33%" />
          <Text as="small" textColor="gray-900" verticalAlign="bottom" textAlign="right" lg={{ width: '33%' }}>
            ©JW Development {date.getFullYear()}
          </Text>
        </Flex>
      </Container>
    </>
  );
};

export default Footer;
