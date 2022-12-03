import { useMediaQuery } from '@mui/material';
import { Container, Flex, Heading, Image } from 'quarks';
import { lazy } from 'react';

import { media } from 'atoms/breakpoints/breakpoints';

import type { FlexProps } from 'quarks/interpolations/flex';
import type { HeadingTypes } from 'quarks/styleProps/heading';

import type { CleanDato } from 'utils/typeUtils';

import type { ButtonRecord, SwitchbackRecord } from 'graphql/generatedTypes';
import type { FC, MouseEvent } from 'react';

const Button = lazy(() => import('molecules/Button/Button'));
const StructuredTextParser = lazy(() => import('molecules/StructuredTextParser/StructuredTextParser'));

interface SwitchbackProps extends FlexProps, Omit<CleanDato<SwitchbackRecord>, 'buttons'> {
  buttons?: ButtonRecord[] | null;
  cta1Action?: (e?: MouseEvent<Element, globalThis.MouseEvent>) => void;
  cta2Action?: (e?: MouseEvent<Element, globalThis.MouseEvent>) => void;
}

const Switchback: FC<SwitchbackProps> = ({
  headingAs,
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

  const renderButtons = () =>
    buttons &&
    buttons?.length > 0 && (
      <Flex
        marginY={24}
        gap="24px"
        justifyContent="center"
        flexDirection="column"
        sm={{ flexDirection: 'row' }}
        lg={{ justifyContent: 'flex-start' }}
      >
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
      </Flex>
    );

  return (
    <Flex
      flexDirection={reverse ? 'column-reverse' : 'column'}
      justifyContent="center"
      maxWidth="1280px"
      marginX="auto"
      gap="24px"
      lg={{ flexDirection: reverse ? 'row-reverse' : 'row', gap: '64px', flexBasis: '500px' }}
      {...props}
    >
      <Container lg={{ maxWidth: '50%' }}>
        <Heading
          as={headingAs as HeadingTypes}
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
        {isDesktop && renderButtons()}
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
      {!isDesktop && renderButtons()}
    </Flex>
  );
};

export default Switchback;
