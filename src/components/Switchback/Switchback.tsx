import { lazy } from 'react';

import { useMediaQuery } from '@mui/material';
import { useRouter } from 'next/router';
import { Container, Dots, Flex, Heading, Image } from 'quarks';

import { media } from 'atoms/breakpoints/breakpoints';
import container from 'atoms/spacing/containers';

import Section from 'molecules/Section/Section';

import { emailObfuscator } from 'utils/functions';

import type { ButtonRecord, SwitchbackRecord } from 'graphql/generatedTypes';
import type { FlexProps } from 'quarks/interpolations/flex';
import type { HeadingTypes } from 'quarks/styleProps/heading';
import type { FC } from 'react';
import type { CleanDato } from 'utils/typeUtils';

const Button = lazy(() => import('molecules/Button/Button'));
const StructuredTextParser = lazy(() => import('molecules/StructuredTextParser/StructuredTextParser'));

interface SwitchbackProps extends FlexProps, Omit<CleanDato<SwitchbackRecord>, 'buttons'> {
  buttons?: ButtonRecord[] | null;
  showDots?: boolean;
}

const Switchback: FC<SwitchbackProps> = ({ headingAs, image, heading, reverse, body, buttons, showDots, ...props }) => {
  const isDesktop = useMediaQuery(media.lg);
  const router = useRouter();

  const renderButtons = () =>
    buttons &&
    buttons?.length > 0 && (
      <Flex
        gap="24px"
        justifyContent="center"
        flexDirection="column"
        lg={{ flexDirection: 'row', justifyContent: 'flex-start' }}
      >
        {buttons.map((button, i) => {
          const navigation =
            button.url === 'https://contact'
              ? ({
                  href: '',
                  onClick: () => emailObfuscator(router),
                } as const)
              : ({ href: button.url || '' } as const);

          return (
            <Button
              key={button.internalName}
              {...navigation}
              variant={i === 0 ? 'contained' : 'outlined'}
              size="large"
              width="100%"
              md={{ width: '100%' }}
            >
              {button.title}
            </Button>
          );
        })}
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
          <Heading as={(headingAs as HeadingTypes) || 'h3'} lg={{ textStyle: 'xl' }}>
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
