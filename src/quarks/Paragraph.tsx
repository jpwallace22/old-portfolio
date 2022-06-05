import { FC, ReactNode } from 'react';
import styled from 'styled-components';

import { BasicProps } from 'quarks/interpolations/basic';
import { text } from 'quarks/interpolations/text';

const ParagraphTemplate = styled.p`
  ${text};
`;

interface ParagraphProps extends BasicProps {
  children: ReactNode;
}

const Paragraph: FC<ParagraphProps> = ({ children, ...props }) => (
  <ParagraphTemplate textColor={{ dark: 'gray-500', light: 'purple-900' }} {...props}>
    {children}
  </ParagraphTemplate>
);

export default Paragraph;
