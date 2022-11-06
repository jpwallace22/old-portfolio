import { useMediaQuery } from '@mui/material';
import { FC, MouseEvent } from 'react';

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
  cta1?: {
    url?: string;
    text?: string;
  };
  cta2?: {
    url?: string;
    text?: string;
  };
  cta1Action?: (e?: MouseEvent<Element, globalThis.MouseEvent>) => void;
  cta2Action?: (e?: MouseEvent<Element, globalThis.MouseEvent>) => void;
};

const Switchback: FC<SwitchbackProps> = ({
  image,
  heading,
  reverse,
  bio,
  cta1,
  cta2,
  cta1Action,
  cta2Action,
  ...props
}) => {
  const isDesktop = useMediaQuery(media.lg);

  const buttons = () => (
    <>
      {cta1 && (
        <Button
          variant="contained"
          size="large"
          width="100%"
          sm={{ width: 'unset' }}
          href={cta1?.url}
          onClick={cta1Action}
        >
          {cta1?.text}
        </Button>
      )}
      {cta2 && (
        <Button
          variant="outlined"
          size="large"
          width="100%"
          sm={{ width: 'unset' }}
          href={cta2?.url}
          onClick={cta2Action}
        >
          {cta2?.text}
        </Button>
      )}
    </>
  );

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
            {buttons()}
          </Flex>
        )}
      </Container>
      {image && (
        <Image
          maxWidth="70%"
          marginX="auto"
          src={image.url}
          alt={image.alt}
          width={500}
          height={500}
          lg={{ marginX: 0 }}
        />
      )}
      {!isDesktop && (cta1 || cta2) && (
        <Flex marginY={24} gap="24px" justifyContent="center" flexDirection="column" sm={{ flexDirection: 'row' }}>
          {buttons()}
        </Flex>
      )}
    </Flex>
  );
};

export default Switchback;
