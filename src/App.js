import React, { useState } from 'react';
import PixelGrid from './PixelGrid';
import { Provider } from './PixelContext';

const DEFAULT_DIMENSIONS = { width: 16, height: 16 };
const DEFAULT_COLOUR = '#000';

const App = () => {
  const [{ width, height }, setDimensions] = useState(DEFAULT_DIMENSIONS);
  const [colour, setColour] = useState(DEFAULT_COLOUR);

  return (
    <Provider value={{ colour }}>
      <PixelGrid width={width} height={height} />
    </Provider>
  )
};

export default App;
