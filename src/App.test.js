import React from 'react';
import renderer from 'react-test-renderer';
import App, { sumFunction } from './App';

test('sumFunction function unit test', () => {
  const value = sumFunction(1, 2);
  expect(value).toBe(3);
});

test('App component snapchot', () => {
  const component = renderer.create(<App />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
