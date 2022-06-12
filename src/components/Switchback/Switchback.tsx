import { useMediaQuery } from '@mui/material';
import { FC } from 'react';

// Quarks
import { media } from 'atoms/breakpoints/breakpoints';

import Container from 'quarks/Container';
import Flex from 'quarks/Flex';
import Heading from 'quarks/Heading';
import Image from 'quarks/Image';
import Paragraph from 'quarks/Paragraph';
import { FlexProps } from 'quarks/interpolations/flex';

import Button from 'molecules/Button/Button';

type SwitchbackProps = FlexProps & {
  heading?: string;
  image?: {
    url: string;
    alt: string;
  };
  reverse?: boolean;
  bio?: string[];
  cta1: {
    url: string;
    text: string;
  };
  cta2: {
    url: string;
    text: string;
  };
};

const Switchback: FC<SwitchbackProps> = ({ image, heading, reverse, bio, cta1, cta2, ...props }) => {
  const isDesktop = useMediaQuery(media.lg);

  return (
    <Flex
      flexDirection={reverse ? 'column-reverse' : 'column'}
      justifyContent="center"
      maxWidth="1280px"
      marginX="auto"
      lg={{ flexDirection: reverse ? 'row-reverse' : 'row', gap: '64px', flexBasis: '500px' }}
      {...props}
    >
      <Container lg={{ maxWidth: '50%' }}>
        <Heading
          as="h3"
          textStyle="lg"
          position="relative"
          alignSelf="flex-start"
          marginBottom={24}
          lg={{ textStyle: 'xl' }}
          after={{
            content: '',
            height: '5px',
            marginX: 'auto',
            width: '100%',
            left: '0',
            bottom: '-25px',
            position: 'absolute',
          }}
        >
          {heading}
        </Heading>
        {bio && bio.map(paragraph => <Paragraph key={paragraph.substring(0, 10)}>{paragraph}</Paragraph>)}
        {isDesktop && (cta1 || cta2) && (
          <Flex marginY={24} gap="24px" justifyContent="flex-start">
            {cta1 && (
              <Button variant="contained" size="large" href={cta1?.url}>
                {cta1?.text}
              </Button>
            )}
            {cta2 && (
              <Button variant="outlined" size="large" href={cta2?.url}>
                {cta2?.text}
              </Button>
            )}
          </Flex>
        )}
      </Container>
      {image && (
        <Image
          maxWidth="70%"
          marginX="auto"
          src={image?.url}
          alt={image?.alt}
          width={500}
          height={500}
          lg={{ marginX: 0 }}
        />
      )}
      {!isDesktop && (cta1 || cta2) && (
        <Flex marginY={24} gap="24px" justifyContent="center">
          {cta1 && (
            <Button variant="contained" size="large" href={cta1?.url}>
              {cta1?.text}
            </Button>
          )}
          {cta2 && (
            <Button variant="outlined" size="large" href={cta2?.url}>
              {cta2?.text}
            </Button>
          )}
        </Flex>
      )}
    </Flex>
  );
};

export default Switchback;

Switchback.defaultProps = {};
