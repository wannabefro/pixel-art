import React, { useContext, useState } from 'react';
import injectSheet from 'react-jss';
import Pixel from './Pixel';
import PixelContext from './PixelContext';

const styles = {
  pixelContainer: {
    border: '1px solid black',
  },
};

const PixelContainer = ({ classes }) => {
  const { colour } = useContext(PixelContext);
  const [fillColour, setFillColour] = useState(null);

  return (
    <div className={classes.pixelContainer}>
      <Pixel
        fillColour={fillColour}
        onClick={() => fillColour === colour ? setFillColour(null) : setFillColour(colour)}
      />
    </div>
  );
};

const StyledPixelContainer = injectSheet(styles)(PixelContainer);

export default StyledPixelContainer;
