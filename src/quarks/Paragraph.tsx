import { ComponentType, FC, ReactNode } from 'react';
import styled from 'styled-components';

import { TextProps, text } from 'quarks/interpolations/text';

const ParagraphTemplate = styled.p`
  ${text};
`;

interface ParagraphProps extends TextProps {
  children: ReactNode;
  as?: string | ComponentType<any>;
}

const Paragraph: FC<ParagraphProps> = ({ children, as, ...props }) => (
  <ParagraphTemplate as={as} textColor={{ dark: 'gray-500', light: 'purple-900' }} {...props}>
    {children}
  </ParagraphTemplate>
);

export default Paragraph;
