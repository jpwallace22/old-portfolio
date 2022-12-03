import { useEffect } from 'react';

import type { MutableRefObject } from 'react';

const useResizeObserver = <E extends HTMLElement>(
  callback: (observerEntry: ResizeObserverEntry) => void,
  ref: MutableRefObject<E | null>,
) => {
  useEffect(() => {
    const resizeObserver = new ResizeObserver(([observerEntry]) => {
      callback(observerEntry);
    });
    if (ref?.current) {
      const element = ref.current;
      resizeObserver.observe(element);
    }

    return () => resizeObserver.disconnect();
  }, []);
};

export default useResizeObserver;
