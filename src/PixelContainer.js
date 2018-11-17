import React from 'react';
import { Rect } from 'react-konva';

class PixelContainer extends React.Component {
  state = {
    fillColour: null,
  }

  setFillColour = fillColour => {
    this.setState({ fillColour });
  }

  fill = () => {
    const that = this;
    const { mouseDown, colour } = this.props;
    const { fillColour } = this.state;

    if (mouseDown) return this.setFillColour(colour);

    fillColour === colour ? this.setFillColour(null) : this.setFillColour(colour);
  }

  render() {
    const { fillColour } = this.state;
    const { x, y, width, height, mouseDown } = this.props;

    return (
      <Rect
        fill={fillColour}
        x={x}
        y={y}
        width={width}
        height={height}
        stroke='black'
        onMouseDown={this.fill}
        onMouseOver={() => mouseDown && this.fill()}
      />
    );
  }
}

export default PixelContainer;
