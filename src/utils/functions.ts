/* eslint-disable import/prefer-default-export */
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

// eslint-disable-next-line func-style
export function useOnScreen<T extends Element | null>(ref: MutableRefObject<T>, rootMargin = '0px'): boolean {
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
}
