import { useState, useEffect } from 'react';

const useKeydown = (keyCode) => {
  const [state, setState] = useState(false);

  useEffect(() => {
    const downHandler = (e) => {
      if (e.keyCode !== keyCode) return;
      setState(true);
    };

    const upHandler = (e) => {
      if (e.keyCode !== keyCode) return;
      setState(false);
    };

    window.addEventListener('keydown', downHandler);
    window.addEventListener('keyup', upHandler);
    return () => {
      window.removeEventListener('keydown', downHandler);
      window.removeEventListener('keyup', upHandler);
    }
  }, [1]);

  return state;
};

export default useKeydown;
