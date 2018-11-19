import React from 'react';
import { Rect } from 'react-konva';

class PixelContainer extends React.Component {
  state = {
    fillColour: null,
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.forceFill !== prevProps.forceFill) {
      this.setState({ fillColour: this.props.forceFill });
    }
  }

  setFillColour = () => {
    const { undo } = this.props;
    const { colour } = this.props;
    const newColour = undo ? null : colour;
    this.setState({ fillColour: newColour });
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
        onMouseDown={this.setFillColour}
        onMouseOver={() => mouseDown && this.setFillColour()}
      />
    );
  }
}

export default PixelContainer;
