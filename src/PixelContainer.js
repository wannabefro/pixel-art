import React, { useContext, useState } from 'react';
import injectSheet from 'react-jss';
import Pixel from './Pixel';
import PixelContext from './PixelContext';

const styles = {
  pixelContainer: {
    border: '1px solid black',
  },
};

const PixelContainer = ({ classes, mouseDown }) => {
  const { colour } = useContext(PixelContext);
  const [fillColour, setFillColour] = useState(null);
  const fill = () => {
    if (mouseDown) return setFillColour(colour);

    fillColour === colour ? setFillColour(null) : setFillColour(colour);
  }

  return (
    <div className={classes.pixelContainer}>
      <Pixel
        fillColour={fillColour}
        onMouseDown={fill}
        onMouseOver={() => mouseDown && fill()}
      />
    </div>
  );
};

const StyledPixelContainer = injectSheet(styles)(PixelContainer);

export default StyledPixelContainer;
