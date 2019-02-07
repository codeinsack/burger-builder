import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import BuildControl from './BuildControl';

configure({ adapter: new Adapter() });

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<BuildControl />);
  });

  it('should have the <p>Hello React</p>', () => {
    expect(wrapper.contains(<p>Hello React</p>)).toBe(true);
  });
});
