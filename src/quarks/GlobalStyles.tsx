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
a {
  text-decoration: none;
  color: inherit;
}
h1, h2, h3, h4, h5, h6 {
  font-family: ${props => props.theme.typography.headingFontFamily};
  font-weight: 900;
}
ul {
  list-style: none;
  padding: 0;
}
.my-masonry-grid {
      display: flex;
      margin-left: -32px;
      width: auto;
    }
    .my-masonry-grid_column {
      padding-left: 32px;
      background-clip: padding-box;
    }
    .my-masonry-grid_column > div {
      margin-bottom: 30px;
    }
`;
