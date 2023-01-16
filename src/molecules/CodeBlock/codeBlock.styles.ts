import styled from 'styled-components';

export const StyledCode = styled.code`
  white-space: pre;
  overflow-x: auto;
  display: block;
  width: 100%;
  @media screen and (max-width: 600px) {
    font-size: 16px !important;
  }
`;

export const StyledPre = styled.pre`
  display: block;
  max-width: 850px;
  white-space: pre;
  overflow-x: auto;
`;
