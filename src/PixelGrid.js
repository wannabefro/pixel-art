import React, { useState, useEffect, useContext } from 'react';
import PixelContext from './PixelContext';
import PixelContainer from './PixelContainer';
import useWindowSize from './useWindowSize';
import { Stage, Layer } from 'react-konva';

const PixelGrid = ({ width, height, forceFill }) => {
  const pixels = Array.from(Array(height).fill(Array.from(Array(width))));
  const [mouseDown, setMouseDown] = useState(false);
  const { windowWidth, windowHeight } = useWindowSize();
  const pixelWidth = windowWidth / width;
  const pixelHeight = windowHeight / height;
  const { colour } = useContext(PixelContext);

  return (
    <Stage
      width={windowWidth}
      height={windowHeight}
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
