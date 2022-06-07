import { WorksType } from 'data/data';
import { FC } from 'react';

// Quarks
import Container from 'quarks/Container';
import Flex from 'quarks/Flex';
import Heading from 'quarks/Heading';
import Image from 'quarks/Image';
import Link from 'quarks/Link';
import { BasicProps } from 'quarks/interpolations/basic';

import useDarkMode from 'contexts/ThemeProvider';

type AlternatingSwitchbacksProps = BasicProps & {
  works: WorksType;
};

const AlternatingSwitchbacks: FC<AlternatingSwitchbacksProps> = ({ works, ...props }) => {
  const [isDarkMode] = useDarkMode();

  return (
    <Flex flexDirection="column" gap="64px" {...props}>
      {works.map((work, i) => {
        const isEven = i % 2 === 0;

        return (
          <Link href={work.url} key={work.id}>
            <Flex
              justifyContent="flex-end"
              alignItems="center"
              flexDirection={isEven ? 'row-reverse' : 'row'}
              position="relative"
              cursor="pointer"
              className="switchback"
              css={`
                :hover h4 {
                  ${!isEven ? 'right: 30%' : 'left: 30%'};
                  transform: scale(1.2);
                }
                :hover .image-wrapper {
                  transform: rotate(${isEven ? '5deg' : '-5deg'});
                }
              `}
            >
              <Heading
                as="h4"
                textAlign="center"
                textStyle="lg"
                position="absolute"
                left={isEven ? '20%' : '0'}
                right={isEven ? '0' : '20%'}
                transition="all 1s ease"
                zIndex={2}
                textShadow={isDarkMode ? '5px 5px 10px #110e2d' : undefined}
                lg={{ textStyle: 'xxl' }}
                after={{
                  content: '',
                  position: 'absolute',
                  top: '150%',
                  height: '5px',
                  backgroundColor: 'purple-500',
                  left: isEven ? '15%' : 0,
                  right: isEven ? 0 : '15%',
                  marginX: 'auto',
                  width: '30%',
                }}
              >
                {work.title}
              </Heading>
              <Container width="50%" className="image-wrapper" transition="all 1s ease">
                <Image src={work.bannerImage.src} height={650} width={650} alt={work.bannerImage.alt} />
              </Container>
            </Flex>
          </Link>
        );
      })}
    </Flex>
  );
};

export default AlternatingSwitchbacks;

AlternatingSwitchbacks.defaultProps = {};
