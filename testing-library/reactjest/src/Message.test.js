import React from 'react';
import { render, fireEvent, wait } from '@testing-library/react';

import Message from './Message';

test('Message renders correctly', () => {
  // snapshot test
  render(<Message />);
});

test('it render Success! upon success', async () => {
  // there is no success message first
  // click the button to fire the async operation (use async/await)
  // assert that the success message is now on the DOM
  const { queryByText, findByText, getByText } = render(<Message />);

  const successMessage = queryByText(/success!/i);
  expect(successMessage).toBeNull();

  const button = getByText(/Get message!/i);
  fireEvent.click(button);
  await wait(() => expect(findByText(/success!/i)));
});
