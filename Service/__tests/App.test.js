import React from 'react';
import App from '../client/components/App.jsx';
import {shallow, mount} from 'enzyme';
import axios from 'axios';

describe('Unit tests', () => {
  jest.mock('axios', () => {
    const data = [
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

    return {
      get: jest.fn(() => Promise.resolve(data))
    }
  });

  test('should render app component on screen', () => {
    const wrapper = mount(<App />);
    expect(wrapper).toExist();
  });
  test('should invoke getRoomsData on componentDidMount', () => {
    const wrapper = mount(<App />);
    const mock = jest.fn();
    wrapper.instance().getRoomsData = mock;
    wrapper.instance().forceUpdate();
    wrapper.instance().componentDidMount();
    expect(mock).toHaveBeenCalled();
  });

})