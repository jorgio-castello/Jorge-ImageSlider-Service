import React from 'react';
import MainCarousel from '../client/components/MainCarousel.jsx';
import MainCarArrows from '../client/components/MainCarArrows.jsx';
import { shallow, mount } from 'enzyme';

describe('Unit tests', () => {
  const sampleData = [
    {
      "room_id": 1,
      "host_id": 1,
      "location": "Nasvhille, TN",
      "rating": 4.4,
      "room_type": "Mansion",
      "bed_num": 6,
      "description": "A frat boys dream come true.",
      "price_per_night": 60,
      "img_src": [
        "https://loremflickr.com/cache/resized/65535_49259266533_6deda510e9_320_240_nofilter.jpg",
        "https://loremflickr.com/cache/resized/65535_49259266533_6deda510e9_320_240_nofilter.jpg",
        "https://loremflickr.com/cache/resized/65535_49259266533_6deda510e9_320_240_nofilter.jpg"
      ]
    },
    {
      "room_id": 2,
      "host_id": 1,
      "location": "Nashville, TN",
      "rating": 4.7,
      "room_type": "Towers",
      "bed_num": 24,
      "description": "Another frat boys dream come true.",
      "price_per_night": 25,
      "img_src": [
        "https://loremflickr.com/cache/resized/65535_47722650711_107f705e93_320_240_nofilter.jpg",
        "https://loremflickr.com/cache/resized/65535_47722650711_107f705e93_320_240_nofilter.jpg",
        "https://loremflickr.com/cache/resized/65535_47722650711_107f705e93_320_240_nofilter.jpg"
      ]
    }
  ];

  test('should render app component on screen', () => {
    const wrapper = mount(<MainCarousel data={sampleData}/>);
    expect(wrapper).toExist();
  });
  test('should invoke previousElement when left arrow clicked', () => {
    const wrapper = mount(<MainCarousel data={sampleData}/>);
    const mock = jest.fn();
    wrapper.instance().previousElement = mock;
    wrapper.instance().forceUpdate();
    const leftButton = wrapper.find(MainCarArrows).at(0);
    leftButton.simulate('click');
    expect(mock).toHaveBeenCalled();
  });
  test('should invoke nextElement when right arrow clicked', () => {
    const wrapper = mount(<MainCarousel data={sampleData}/>);
    const mock = jest.fn();
    wrapper.instance().nextElement = mock;
    wrapper.instance().forceUpdate();
    const leftButton = wrapper.find(MainCarArrows).at(1);
    leftButton.simulate('click');
    expect(mock).toHaveBeenCalled();
  });
  // test('should update state whe previousElement is invoked', () => {
  //   const wrapper = mount(<MainCarousel data={sampleData}/>);
  //   const mock = jest.fn();
  //   wrapper.instance().nextElement = mock;
  //   wrapper.instance().forceUpdate();
  //   const leftButton = wrapper.find(MainCarArrows).at(1);
  //   leftButton.simulate('click');
  //   expect(mock).toHaveBeenCalled();
  // });
})