import React from 'react'
import {render, fireEvent, wait,act} from '@testing-library/react'

import Message from './Message'


test('Message renders correctly',()=>{

    render(<Message />)
})




test('it renders Success! upon successs',async()=>{
    //rule out errant success message presetn beofre first test
    //click button to fires test using async/await
    //assert success meassage is now on the DOM
const {queryByText, getByText, findByText}= render(<Message />)
const successMessage = queryByText(/Success!/i)
expect(successMessage).toBeNull()


const button = getByText(/Get message!/i); 
    /* fire events that update state */
    
    await( fireEvent.click(button));

  /* assert on the output */
  
//anything below await call is like a .then() it will wait for the await line to return before continuing

expect(getByText(/Success!/i))
})




















// import React from 'react';
// import { render, fireEvent, wait } from '@testing-library/react';

// import Message from './Message';

// test('Message renders correctly', () => {
//   // snapshot test
//   render(<Message />);
// });

// test('it render Success! upon success', async () => {
//   // there is no success message first
//   // click the button to fire the async operation (use async/await)
//   // assert that the success message is now on the DOM
//   const { queryByText, findByText, getByText } = render(<Message />);

//   const successMessage = queryByText(/success!/i);
//   expect(successMessage).toBeNull();

//   const button = getByText(/Get message!/i);
//   fireEvent.click(button);
//   await wait(() => expect(findByText(/success!/i)));
// });
