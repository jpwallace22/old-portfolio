import { lazy } from 'react';

import { useMediaQuery } from '@mui/material';
import { Container, Dots, Flex, Heading, Image } from 'quarks';

import { media } from 'atoms/breakpoints/breakpoints';
import container from 'atoms/spacing/containers';

import Section from 'molecules/Section/Section';

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
  showDots?: boolean;
}

const buttonStyles = {
  size: 'large',
  width: '100%',
  md: { width: 'unset' },
} as const;

const Switchback: FC<SwitchbackProps> = ({
  headingAs,
  image,
  heading,
  reverse,
  body,
  buttons,
  cta1Action,
  cta2Action,
  showDots,
  ...props
}) => {
  const isDesktop = useMediaQuery(media.lg);

  const renderButtons = () =>
    buttons &&
    buttons?.length > 0 && (
      <Flex
        gap="24px"
        justifyContent="center"
        flexDirection="column"
        lg={{ flexDirection: 'row', justifyContent: 'flex-start' }}
      >
        {buttons[0] && (
          <Button {...buttonStyles} variant="contained" href={buttons[0]?.url || ''} onClick={cta1Action}>
            {buttons[0]?.title}
          </Button>
        )}
        {buttons[1] && (
          <Button {...buttonStyles} variant="outlined" href={buttons[1]?.url || ''} onClick={cta2Action}>
            {buttons[1]?.title}
          </Button>
        )}
      </Flex>
    );

  return (
    <Section>
      <Flex
        className="switchBack"
        width="100%"
        flexDirection={reverse ? 'column-reverse' : 'column'}
        gap="24px"
        lg={{ flexDirection: reverse ? 'row-reverse' : 'row', gap: '64px', alignItems: 'center' }}
        {...props}
      >
        <Flex flexDirection="column" gap="24px" lg={{ flex: '0 1 50%' }}>
          <Heading as={headingAs as HeadingTypes} lg={{ textStyle: 'xl' }}>
            {heading}
          </Heading>
          <StructuredTextParser text={body} textColor={{ dark: 'gray-500', light: 'purple-900' }} />
          {isDesktop && renderButtons()}
        </Flex>
        {image && (
          <Container
            position="relative"
            width="100%"
            marginX="auto"
            flex="0 0 50%"
            maxWidth={container.sm}
            aspectRatio={[image.width, image.height]}
          >
            <Image src={image.url} alt={image.alt || ''} fill objectFit="contain" sizes="50vw" lg={{ marginX: 0 }} />
          </Container>
        )}
        {!isDesktop && renderButtons()}
      </Flex>
      {showDots && <Dots position="absolute" bottom="0" left="45%" lg={{ bottom: '-50px', left: '60%' }} />}
    </Section>
  );
};

export default Switchback;
