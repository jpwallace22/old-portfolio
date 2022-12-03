import type { AppTheme } from 'theme/getAppTheme';

import type { CSSProp } from 'styled-components';

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
