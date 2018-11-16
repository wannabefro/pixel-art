import React from 'react';
import injectSheet from 'react-jss';

const styles = {
  pixel: (props) => ({
    background: props.fillColour,
    height: '100%',
  }),
};

const Pixel = ({ classes, onClick }) => (
  <div className={classes.pixel} onClick={onClick} />
);

const StyledPixel = injectSheet(styles)(Pixel);

export default StyledPixel;
