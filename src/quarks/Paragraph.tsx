import { FC, ReactNode } from 'react';
import styled from 'styled-components';

import { TextProps, text } from 'quarks/interpolations/text';

const ParagraphTemplate = styled.p`
  ${text};
`;

interface ParagraphProps extends TextProps {
  children: ReactNode;
}

const Paragraph: FC<ParagraphProps> = ({ children, ...props }) => (
  <ParagraphTemplate textColor={{ dark: 'gray-500', light: 'purple-900' }} marginY={16} {...props}>
    {children}
  </ParagraphTemplate>
);

export default Paragraph;
