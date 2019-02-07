import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import App from './App';

configure({ adapter: new Adapter() });

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('should have the <p>Hello React</p>', () => {
    expect(wrapper.contains(<p>Hello React</p>)).toBe(true);
  });
});
