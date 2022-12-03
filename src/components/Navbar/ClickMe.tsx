import React, { useEffect, useState } from 'react';

import { Container, Text } from 'quarks';
import { BsArrowUp } from 'react-icons/bs';

const ClickMe = () => {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    document.addEventListener('scroll', () => setHeight(document.documentElement.scrollTop));

    return () => {
      document.removeEventListener('scroll', () => setHeight(document.documentElement.scrollTop));
    };
  }, []);

  return (
    <Container left="0" right="0" marginX="auto" position="absolute" height="5px" width="100%" zIndex={-1}>
      <Text
        as="div"
        textColor={{ dark: 'gray-900', light: 'purple-600' }}
        position="absolute"
        top="50px"
        right="30px"
        zIndex={2}
        opacity={1 - height * 0.001 * 2}
        display="none"
        lg={{ display: 'flex' }}
        css={`
          align-items: flex-end;
        `}
      >
        <Text>Hit the lights!</Text>
        <Container
          css={`
            animation: bounce 3s ease-out infinite forwards;
            @keyframes bounce {
              0% {
                transform: translate(0, 0);
              }
              50% {
                transform: translate(0, 0);
              }
              62% {
                transform: translate(0, -10px);
              }
              75% {
                transform: translate(0, 0);
              }
              87% {
                transform: translate(0, -10px);
              }
              100% {
                transform: translate(0, 0);
              }
            }
          `}
        >
          <BsArrowUp size={32} />
        </Container>
      </Text>
    </Container>
  );
};

export default ClickMe;
