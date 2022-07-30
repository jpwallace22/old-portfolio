/* eslint-disable import/prefer-default-export */
import { css } from 'styled-components';

import type { CSSProps } from 'theme/getAppTheme';

/**
 *
 * @param distance how far under you want the underline to be
 * @returns flatten interpolation
 */
export const underlineOnHover = (distance: number, active?: boolean) => css`
  :after {
    background: none repeat scroll 0 0 transparent;
    bottom: ${distance}px;
    content: '';
    display: block;
    border-radius: 5px;
    height: 2px;
    left: ${active ? 0 : '50%'};
    position: absolute;
    background: ${({ theme: { palette } }: CSSProps) =>
      palette.mode === 'dark' ? palette.common.white : palette.common.black};
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: ${active ? '100%' : 0};
  }
  :hover:after {
    width: 100%;
    left: 0;
  }
`;
