import { useEffect, useState } from 'react';

import { render } from 'datocms-structured-text-to-plain-text';

import type { NextRouter } from 'next/router';
import type { MutableRefObject } from 'react';
import type { StructuredTextGraphQlResponse } from 'react-datocms';
import type { StructuredData } from 'utils/structuredTextParser';

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

export const timeToRead = (structuredText?: StructuredData) => {
  const wordsPerMin = 200;

  const content = render(structuredText as StructuredTextGraphQlResponse);

  return content && Math.ceil(content.split(' ').length / wordsPerMin);
};

export const randomIntFromInterval = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1) + min);

export const stringToKebabCase = (str?: string) =>
  str &&
  str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    ?.join('-')
    .toLowerCase();
