import { useState, useEffect } from 'react';

const useWindowSize = () => {
  const [state, setWindowDimenstions] = useState(
    { windowHeight: window.innerHeight, windowWidth: window.innerWidth },
  );

  useEffect(() => {
    const handler = () => {
      setWindowDimenstions({
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight,
      });
    };
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, [1]);

  return state;
};

export default useWindowSize;
