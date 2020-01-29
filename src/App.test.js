import React from 'react';
import renderer from 'react-test-renderer';
import App, { sumIt } from './App';

test('App snapchot', () => {
  const component = renderer.create(<App />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('sumIt test', () => {
  const value = sumIt(1, 2);
  expect(value).toBe(3);
});
