import React from 'react';

const Toolbar = ({ width, onWidthChange, height, onHeightChange}) => (
  <div>
    <input type='number' value={width} onChange={onWidthChange} />
    <input type='number' value={height} onChange={onHeightChange} />
  </div>
);

export default Toolbar;
