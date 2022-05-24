import { CSSProp } from 'styled-components';

import { AppTheme } from 'theme/getAppTheme';

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends AppTheme {}
}

declare module 'react' {
  interface DOMAttributes {
    css?: CSSProp<AppTheme>;
  }
}

declare global {
  namespace JSX {
    interface IntrinsicAttributes {
      css?: CSSProp<AppTheme>;
    }
  }
}
