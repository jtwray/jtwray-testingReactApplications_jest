import React from 'react';

import { render } from '@testing-library/react';

import App from './App';

// to run this test:
// 1. download the codesandbox code using the "Export to Zip" in the explorer
// 2. unzip the file in it's own directory
// 3. change into the directory and run `yarn install` to install dependencies
// 4. start vscode with `code .`
// 5. start a vscode terminal by hitting CTRL-` (or however it's mapped in your env)
// 6. in that terminal start the test watcher by entering `yarn test`
// 7. uncomment out the test and watch the snapshot get created
// test('should match snapshot', () => {
//   expect(render(<App />)).toMatchSnapshot();
// });
{/**setup a snapshot
yarn test -u will update

setup mock in main file Aop
mock the child components you have imported into parent App
in your __app.test.js__

mock them by passing in the path as a sting to jest.mock()

e.g.:  jest.mock("./Components/Dashboard")


in retorspective you should avoid mocking out components
unless specifially required by employer and even then you should speak up about
the need to do this against best practices

so lets transition into mocking out function



*/}


test('itsmocking me',()=>{

  const mock=jest.fn()
  mock('frown')
  mock('Smile')

  expect(mock).toHaveBeenCalled()
  expect(mock).toHaveBeenCalledTimes(2)
  expect(mock).toHaveBeenLastCalledWith('Smile')
})
test('Its mocking me', () => {
  const mock = jest.fn();
  mock('smile');
  expect(mock).toHaveBeenCalled();
  expect(mock).toHaveBeenLastCalledWith('smile');
  mock('frown');
  expect(mock).toHaveBeenLastCalledWith('frown');
  expect(mock).toHaveBeenCalledTimes(2);
});

test('App renders correctly', () => {
  render(<App />);
});


// AAA - Arrange, Act, Assert
test('contains Lions and Tigers scoreboards', () => {
  // Arrange
  const { getByText,queryByText } = render(<App />);
  // Act - getting the node by text
 
  getByText(/lions/i);
  queryByText(/lions/i);
  console.log('queryByText(/lions/i);',queryByText(/lions/i))
  getByText(/tigers/i);
  // Assertion is if ^^^ is truthy
});

test('contains home touchdown button', () => {
  // Arrange
  const { getByTestId } = render(<App />);
  // Act - getting the node by text
  getByTestId(/home-touchdown/i);
  // Assertion is if ^^^ is truthy
});
