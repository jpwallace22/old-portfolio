import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
html {
  scroll-behavior: smooth;
  font-size: 100%;
}
html,
body,
* {
  font-family: ${props => props.theme.typography.fontFamily};
  box-sizing: border-box;
  margin-block-start: 0;
  margin-block-end: 0;
}
h1, h2, h3, h4, h5, h6 {
  font-family: ${props => props.theme.typography.headingFontFamily};
  font-weight: 900;
}
`;
