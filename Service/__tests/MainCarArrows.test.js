import React from 'react';
import MainCarArrows from '../client/components/MainCarArrows.jsx';
import { shallow, mount } from 'enzyme';

describe('Unit tests', () => {
  test('left arrow should exist', () => {
    const wrapper = mount(<MainCarArrows
      direction="left"
      clickFunction={()=>{}}
      glyph="&#9664;" />);
    expect(wrapper).toExist();
  });
  test('right arrow should exist', () => {
    const wrapper = mount(<MainCarArrows
      direction="right"
      clickFunction={()=>{}}
      glyph="&#9654;" />);
    expect(wrapper).toExist();
  });
})