import { useMediaQuery } from '@mui/material';
import { SwitchbackRecord } from 'graphql/generatedTypes';
import { FC, MouseEvent } from 'react';

// Quarks
import { media } from 'atoms/breakpoints/breakpoints';

import Container from 'quarks/Container';
import Flex from 'quarks/Flex';
import Heading from 'quarks/Heading';
import Image from 'quarks/Image';
import { FlexProps } from 'quarks/interpolations/flex';

import Button from 'molecules/Button/Button';
import StructuredTextParser from 'molecules/StructuredTextParser/StructuredTextParser';

interface SwitchbackProps extends FlexProps, SwitchbackRecord {
  cta1Action?: (e?: MouseEvent<Element, globalThis.MouseEvent>) => void;
  cta2Action?: (e?: MouseEvent<Element, globalThis.MouseEvent>) => void;
}

const Switchback: FC<SwitchbackProps> = ({
  image,
  heading,
  reverse,
  body,
  buttons,
  cta1Action,
  cta2Action,
  ...props
}) => {
  const isDesktop = useMediaQuery(media.lg);

  const renderButtons = () => (
    <>
      {buttons[0] && (
        <Button
          variant="contained"
          size="large"
          width="100%"
          sm={{ width: 'unset' }}
          href={buttons[0]?.url || ''}
          onClick={cta1Action}
        >
          {buttons[0]?.title}
        </Button>
      )}
      {buttons[1] && (
        <Button
          variant="outlined"
          size="large"
          width="100%"
          sm={{ width: 'unset' }}
          href={buttons[1]?.url || ''}
          onClick={cta2Action}
        >
          {buttons[1]?.title}
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
        <StructuredTextParser text={body} textColor={{ dark: 'gray-500', light: 'purple-900' }} />
        {isDesktop && buttons.length > 0 && (
          <Flex marginY={24} gap="24px" justifyContent="flex-start">
            {renderButtons()}
          </Flex>
        )}
      </Container>
      {image && (
        <Image
          maxWidth="70%"
          marginX="auto"
          src={image.url}
          alt={image.alt || ''}
          width={500}
          height={500}
          lg={{ marginX: 0 }}
        />
      )}
      {!isDesktop && buttons.length > 0 && (
        <Flex marginY={24} gap="24px" justifyContent="center" flexDirection="column" sm={{ flexDirection: 'row' }}>
          {renderButtons()}
        </Flex>
      )}
    </Flex>
  );
};

export default Switchback;
