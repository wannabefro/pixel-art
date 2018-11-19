import React, { useState, useContext } from 'react';
import PixelContext from './PixelContext';
import PixelContainer from './PixelContainer';
import useWindowSize from './useWindowSize';
import { Stage, Layer } from 'react-konva';

const PixelGrid = ({ width, height, forceFill, undo }) => {
  const pixels = Array.from(Array(height).fill(Array.from(Array(width))));
  const [mouseDown, setMouseDown] = useState(false);
  const { windowWidth, windowHeight } = useWindowSize();
  const { colour } = useContext(PixelContext);

  const pixelWidth = (windowWidth) / width;
  const pixelHeight = (windowHeight * 0.9) / height;

  return (
    <Stage
      width={windowWidth}
      height={windowHeight * 0.9}
      onMouseDown={() => setMouseDown(true)}
      onMouseUp={() => setMouseDown(false)}
    >
      <Layer>
        {pixels.map((row, i) => (
          row.map((col, j) => (
            <PixelContainer
              key={`${i}:${j}`}
              colour={colour}
              forceFill={forceFill}
              mouseDown={mouseDown}
              undo={undo}
              width={pixelWidth}
              height={pixelHeight}
              x={j * pixelWidth}
              y={i * pixelHeight}
            />
          )
          )
        )
        ).flat()}
      </Layer>
    </Stage>
  )
};

export default PixelGrid;
