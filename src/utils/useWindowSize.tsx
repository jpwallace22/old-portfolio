import { useEffect, useState } from 'react';

interface WindowSizePre {
  width: undefined;
  height: undefined;
}
interface WindowSizePost {
  width: number;
  height: number;
}
type IWindowSize = WindowSizePost | WindowSizePre;

const useWindowSize = (): IWindowSize => {
  const [windowSize, setWindowSize] = useState<IWindowSize>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    if (typeof window !== undefined) {
      window.addEventListener('resize', handleResize);
    }

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
};

export default useWindowSize;
