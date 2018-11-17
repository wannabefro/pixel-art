import React from 'react';

const Toolbar = ({
  width,
  onWidthChange,
  height,
  onHeightChange,
  onClear,
  onFill,
}) => (
  <div>
    <input type='number' value={width} onChange={onWidthChange} />
    <input type='number' value={height} onChange={onHeightChange} />
    <button onClick={onClear}>Clear</button>
    <button onClick={onFill}>Fill</button>
  </div>
);

export default Toolbar;
