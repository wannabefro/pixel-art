import React, { useState } from 'react';
import PixelContainer from './PixelContainer';
import injectSheet from 'react-jss';

const styles = {
  pixelGrid: (props) => ({
    display: 'grid',
    'grid-template-rows': `repeat(${props.height}, ${90 / props.height}vh)`,
    'grid-template-columns': `repeat(${props.width}, 1fr)`,
  }),
}

const PixelGrid = ({ classes, width, height}) => {
  const pixels = Array.from(Array(width * height));
  const [mouseDown, setMouseDown] = useState(false);

  return (
    <div
      className={classes.pixelGrid}
      onMouseDown={() => setMouseDown(true)}
      onMouseUp={() => setMouseDown(false)}
    >
      {pixels.map((el, i) => <PixelContainer mouseDown={mouseDown} key={i} />)}
    </div>
  )
};

const StyledPixelGrid = injectSheet(styles)(PixelGrid);

export default StyledPixelGrid;
