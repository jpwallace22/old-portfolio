import type { CSSProp } from 'styled-components';
import type { AppTheme } from 'theme/getAppTheme';

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends AppTheme {}
}

declare module 'react' {
  interface DOMAttributes {
    css?: CSSProp<AppTheme> | false;
  }
}

declare global {
  namespace JSX {
    interface IntrinsicAttributes {
      css?: CSSProp<AppTheme> | false;
    }
  }
}
