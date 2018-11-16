import React from 'react';

const PixelContext = React.createContext();

export const Consumer = PixelContext.Consumer;
export const Provider = PixelContext.Provider;

export default PixelContext;
