import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TagList from './TagList';

Enzyme.configure({ adapter: new Adapter() });

describe('Test that TestApp´s child component TagList renders correctly', () => {
  test('TagList full rendering with mount', () => {
    const list = ['a', 'b', 'c'];
    const testFunction = jest.fn();
    const wrapper = mount(<TagList tagsList={list} onDelete={testFunction} />);
    expect(wrapper.find(TagList)).toHaveLength(1);
  });
});
