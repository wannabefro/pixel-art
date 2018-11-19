import React, { useState } from 'react';
import injectSheet from 'react-jss';
import PixelGrid from './PixelGrid';
import Toolbar from './Toolbar';
import { Provider } from './PixelContext';
import useKeydown from './useKeydown';

const DEFAULT_DIMENSIONS = { width: 16, height: 16 };
const DEFAULT_COLOUR = '#00F';
const SHIFT_KEY = 16;

const styles = {
  container: {
    display: 'grid',
    'grid-template-rows': '10vh 90vh',
  }
}

const App = ({ classes }) => {
  const [{ width, height }, setDimensions] = useState(DEFAULT_DIMENSIONS);
  const [colour, setColour] = useState(DEFAULT_COLOUR);
  const [forceFill, setForceFill] = useState(null);
  const onClear = () => {
    setForceFill('#fff');
  }

  const onFill = () => {
    setForceFill(colour);
  }
  const undo = useKeydown(SHIFT_KEY);

  return (
    <Provider value={{ colour }}>
      <div
        className={classes.container}
      >
        <Toolbar
          width={width}
          onWidthChange={(e) => setDimensions({ width: e.target.value, height })}

          height={height}
          onHeightChange={(e) => setDimensions({ height: e.target.value, width })}

          onClear={onClear}
          onFill={onFill}

          undo={undo}
        />
        <PixelGrid
          undo={undo}
          width={Number(width)}
          height={Number(height)}
          forceFill={forceFill}
        />
      </div>
    </Provider>
  )
};

const StyledApp = injectSheet(styles)(App);

export default StyledApp;
