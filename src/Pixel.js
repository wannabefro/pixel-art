import React from 'react';
import injectSheet from 'react-jss';

const styles = {
  pixel: (props) => ({
    background: props.fillColour,
    height: '100%',
  }),
};

const Pixel = ({ classes, onMouseOver, onMouseDown }) => (
  <div
    className={classes.pixel}
    onMouseOver={onMouseOver}
    onMouseDown={onMouseDown}
  />
);

const StyledPixel = injectSheet(styles)(Pixel);

export default StyledPixel;
