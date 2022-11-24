import { MutableRefObject, useEffect, useState } from 'react';

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

export const useOnScreen = <T extends Element | null>(ref: MutableRefObject<T>, rootMargin = '0px'): boolean => {
  const [isIntersecting, setIntersecting] = useState<boolean>(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIntersecting(entry.isIntersecting);
      },
      {
        rootMargin,
      },
    );
    if (!ref) {
      return;
    }
    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (!ref) {
        return;
      }
      observer.unobserve(ref.current as Element);
    };
  }, []);

  return isIntersecting;
};

/**
 * @returns a semi-random 10 char string. Should NOT be used for cases where true randomness is needed
 */
export const getSemiRandomString = () => Math.random().toString(36).slice(2, 12);
