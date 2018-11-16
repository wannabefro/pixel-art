import React, { useState } from 'react';
import injectSheet from 'react-jss';
import PixelGrid from './PixelGrid';
import Toolbar from './Toolbar';
import { Provider } from './PixelContext';

const DEFAULT_DIMENSIONS = { width: 16, height: 16 };
const DEFAULT_COLOUR = '#00F';

const styles = {
  container: {
    display: 'grid',
    'grid-template-rows': '10vh 90vh',
  }
}

const App = ({ classes }) => {
  const [{ width, height }, setDimensions] = useState(DEFAULT_DIMENSIONS);
  const [colour, setColour] = useState(DEFAULT_COLOUR);

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
        />
        <PixelGrid width={width} height={height} />
      </div>
    </Provider>
  )
};

const StyledApp = injectSheet(styles)(App);

export default StyledApp;
