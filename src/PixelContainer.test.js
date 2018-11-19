import React from 'react';
import { shallow } from 'enzyme';
import PixelContainer from './PixelContainer';
jest.mock('react-konva', () => ({
  __esModule: true,
  Rect: () => 'rect',
}));



describe('PixelContainer', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <PixelContainer
        x={0}
        y={0}
        width={20}
        height={20}
        mouseDown={false}
        undo={false}
        colour='#fff'
        forceFill='#000'
      />,
    );
  });

  describe('changing the colour', () => {
    it('changes the fill prop', () => {
      const rect = wrapper.find('Rect');
      rect.simulate('mouseDown');
      wrapper.update();

      expect(wrapper.find('Rect').props().fill).toEqual('#fff');
    });
  });
});
