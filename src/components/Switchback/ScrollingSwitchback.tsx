import { lazy, useRef } from 'react';

import { Container, Flex, Heading, Image } from 'quarks';
import { useIntersection } from 'react-use';

import { gradient } from 'atoms/colors/colors';
import container from 'atoms/spacing/containers';

import type { SwitchbackRecord } from 'graphql/types.gen';
import type { FlexProps } from 'quarks/interpolations/flex';
import type { HeadingTypes } from 'quarks/styleProps/heading';
import type { FC, MutableRefObject } from 'react';
import type { CleanDato } from 'utils/typeUtils';

const StructuredTextParser = lazy(() => import('molecules/StructuredTextParser/StructuredTextParser'));

interface SwitchbackProps extends FlexProps, Omit<CleanDato<SwitchbackRecord>, 'buttons'> {
  ref?: MutableRefObject<HTMLDivElement>;
}

const Switchback: FC<SwitchbackProps> = ({ headingAs, image, heading, reverse, body, ...rest }) => {
  const ref = useRef<HTMLDivElement>(null);
  const observer = useIntersection(ref, {
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
  });

  return (
    <>
      <Flex
        className="switchBack"
        width="100%"
        flexDirection={reverse ? 'column-reverse' : 'column'}
        gap="24px"
        lg={{ flexDirection: reverse ? 'row-reverse' : 'row', gap: '64px', alignItems: 'center' }}
        {...rest}
      >
        <Flex
          ref={ref}
          flexDirection="column"
          position="relative"
          gap="24px"
          borderRadius="8px"
          paddingAll={40}
          border="5px solid transparent"
          boxShadow={observer?.isIntersecting ? 'xl' : 'none'}
          backgroundColor={observer?.isIntersecting && { dark: 'purple-800', light: 'gray-50' }}
          css={
            observer?.isIntersecting &&
            `
            background-clip: padding-box;
            border: solid 5px transparent;
            border-radius: 32px;
            &:before {
              content: '';
              position: absolute;
              top: 0;
              right: 0;
              bottom: 0;
              left: 0;
              z-index: -1;
              margin: -3px;
              border-radius: inherit;
              background: ${gradient.purpleLeft};
            }
          `
          }
        >
          <Heading as={(headingAs as HeadingTypes) || 'h3'} lg={{ textStyle: 'xl' }}>
            {heading}
          </Heading>
          <StructuredTextParser text={body} textColor={{ dark: 'gray-500', light: 'purple-900' }} />
        </Flex>
        {image && (
          <Container
            position="relative"
            width="100%"
            marginX="auto"
            flex="0 0 40%"
            xl={{ flex: '0 0 50%' }}
            maxWidth={container.sm}
            aspectRatio={[image.width, image.height]}
          >
            <Image src={image.url} alt={image.alt || ''} fill objectFit="contain" sizes="50vw" lg={{ marginX: 0 }} />
          </Container>
        )}
      </Flex>
    </>
  );
};

export default Switchback;
