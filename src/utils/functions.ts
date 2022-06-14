/* eslint-disable import/prefer-default-export */
import type { NextRouter } from 'next/router';

/**
 * @param router `NextRouter`
 *
 * routes to personal email, but robots cant read it
 */
export const emailObfuscator = (router: NextRouter) => {
  const dot = '.';
  const at = '@';
  router.push(`${['m', 'a', 'i', 'l', 't', 'o'].join('')}:hello${at}justinwallace${dot}dev`);
};
