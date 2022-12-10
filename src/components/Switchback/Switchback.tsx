import { lazy } from 'react';

import { useMediaQuery } from '@mui/material';
import { Container, Flex, Heading, Image } from 'quarks';

import { media } from 'atoms/breakpoints/breakpoints';

import type { ButtonRecord, SwitchbackRecord } from 'graphql/generatedTypes';
import type { FlexProps } from 'quarks/interpolations/flex';
import type { HeadingTypes } from 'quarks/styleProps/heading';
import type { FC, MouseEvent } from 'react';
import type { CleanDato } from 'utils/typeUtils';

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
        lg={{ flexDirection: 'row', justifyContent: 'flex-start' }}
      >
        {buttons[0] && (
          <Button
            variant="contained"
            cursor="pointer"
            size="large"
            width="100%"
            md={{ width: 'unset' }}
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
            cursor="pointer"
            width="100%"
            md={{ width: 'unset' }}
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
        <Container position="relative" width="100%" flex="1 1 50%" maxWidth="550px" marginX="auto" aspectRatio={[1, 1]}>
          <Image src={image.url} alt={image.alt || ''} fill lg={{ marginX: 0 }} objectFit="contain" />
        </Container>
      )}
      {!isDesktop && renderButtons()}
    </Flex>
  );
};

export default Switchback;
