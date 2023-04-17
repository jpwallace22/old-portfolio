import { useEffect, useRef, useState } from 'react';

import { Image } from 'quarks';

import { gradient } from 'atoms/colors/colors';

import Container from 'quarks/Container';
import Flex from 'quarks/Flex';
import Heading from 'quarks/Heading';

import StructuredTextParser from 'molecules/StructuredTextParser/StructuredTextParser';

import useWindowSize from 'utils/useWindowSize';

import type { StaticScrollerSwitchbackProps } from 'components/StaticScrollerSwitchback/StaticScrollerSwitchback';
import type { FC } from 'react';

const DynamicScroller: FC<StaticScrollerSwitchbackProps> = ({ switchbacks, ...props }) => {
  const [visibleIndexes, setVisibleIndexes] = useState<Set<number>>(new Set());
  const [maxVisibleIndex, setMaxVisibleIndex] = useState(0);

  const windowSize = useWindowSize();
  const paragraphsRef = useRef<Element[]>([]);
  const imagesRef = useRef<Element[]>([]);

  useEffect(() => {
    paragraphsRef.current = paragraphsRef.current.slice(0, switchbacks?.length);
    imagesRef.current = imagesRef.current.slice(0, switchbacks?.length);
  }, [switchbacks]);

  useEffect(() => {
    const tallComponent = window.innerHeight > 1080;
    const options = {
      root: null,
      threshold: 1,
      rootMargin: tallComponent ? '0px 0px -10% 0px' : '0px 0px -25% 0px',
    };
    const { current } = paragraphsRef;
    const observer = new IntersectionObserver(segments => {
      for (const switchback of segments) {
        const { isIntersecting, target } = switchback;
        const switchbackIndex = current.indexOf(target);
        const switchbackIsIncluded = visibleIndexes.has(switchbackIndex);

        if (isIntersecting && !switchbackIsIncluded) {
          setVisibleIndexes(prevRefs => new Set([...prevRefs, switchbackIndex]));
        } else if (!isIntersecting && switchbackIsIncluded) {
          setVisibleIndexes(prevRefs => new Set([...prevRefs].filter(id => id !== switchbackIndex)));
        }
      }
    }, options);

    current.forEach(switchback => {
      observer.observe(switchback);
    });

    return () => {
      current.forEach(switchback => {
        observer.unobserve(switchback);
      });
    };
  }, [paragraphsRef, imagesRef, visibleIndexes, windowSize]);

  useEffect(() => {
    const newMax = Math.max(...visibleIndexes);
    setMaxVisibleIndex(_ => (visibleIndexes.size > 0 ? newMax : 0));
  }, [visibleIndexes]);

  return (
    <Flex flexDirection="row" position="relative" marginTop={128} gap="100px" {...props}>
      <Container position="sticky" top="20vh" alignSelf="flex-start">
        {switchbacks?.map((segment, i) => (
          <Container
            ref={el => el && (imagesRef.current[i] = el)}
            key={`${segment?.id}-img`}
            width="400px"
            xl={{ width: '570px' }}
            display={i === maxVisibleIndex ? 'block' : 'none'}
          >
            <Container
              position="relative"
              width="100%"
              marginX="auto"
              aspectRatio={[segment?.image?.width, segment?.image?.height]}
            >
              <Image
                src={segment?.image?.url || ''}
                alt={segment?.image?.alt || ''}
                fill
                priority
                objectFit="contain"
                lg={{ marginX: 0 }}
              />
            </Container>
          </Container>
        ))}
      </Container>
      <Flex flexDirection="column" gap="132px" paddingBottom={256} transform="translateY(100px)">
        {switchbacks?.map((segment, i) => (
          <Flex
            position="relative"
            ref={el => el && (paragraphsRef.current[i] = el)}
            id={segment?.id}
            key={`${segment?.id}-p`}
            flexDirection="column"
            justifyContent="center"
            borderRadius="8px"
            paddingAll={40}
            gap="16px"
            border="5px solid transparent"
            boxShadow={i === maxVisibleIndex ? 'xl' : 'none'}
            backgroundColor={i === maxVisibleIndex && { dark: 'purple-800', light: 'gray-50' }}
            css={
              i === maxVisibleIndex &&
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
            {segment?.heading && <Heading textStyle="sm">{segment?.heading}</Heading>}
            {segment?.body && <StructuredTextParser text={segment?.body} textStyle="md" />}
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};

export default DynamicScroller;
