import { FC } from 'react';

// Quarks
import Container from 'quarks/Container';
import Flex from 'quarks/Flex';
import Heading from 'quarks/Heading';
import Image from 'quarks/Image';
import Paragraph from 'quarks/Paragraph';
import { FlexProps } from 'quarks/interpolations/flex';

type SwitchbackProps = FlexProps & {
  heading?: string;
  image?: {
    url: string;
    alt: string;
  };
  reverse?: boolean;
  bio?: string[];
};

const Switchback: FC<SwitchbackProps> = ({ image, heading, reverse, bio, ...props }) => (
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
  </Flex>
);

export default Switchback;

Switchback.defaultProps = {};
