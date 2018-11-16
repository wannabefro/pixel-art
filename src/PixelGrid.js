import React from 'react';
import PixelContainer from './PixelContainer';
import injectSheet from 'react-jss';

const styles = {
  pixelGrid: (props) => ({
    display: 'grid',
    'grid-template-rows': `repeat(${props.height}, ${100 / props.height}vh)`,
    'grid-template-columns': `repeat(${props.width}, 1fr)`,
  }),
}

const PixelGrid = ({ classes, width, height}) => {
  const pixels = Array.from(Array(width * height));

  return (
    <div className={classes.pixelGrid}>
      {pixels.map((el, i) => <PixelContainer key={i} />)}
    </div>
  )
};

const StyledPixelGrid = injectSheet(styles)(PixelGrid);

export default StyledPixelGrid;
