import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import GameButtons from './GameButtons';
import expectExport from 'expect';


describe("GameButtons fireoff correctly to adjust scoreboard display on user interaction", () => {


  test('renders correctly', () => { 
    //do snapshot here
    render(<GameButtons />);
  })

  test('setLIonsScore is called on home button clicks', () => {
   
    const setLionsScoreMock = jest.fn();
    const { getByText,findByText } = render(
      <GameButtons setLionsScore={setLionsScoreMock} lionsScore={0} />
    )
    const touchdownButton = getByText(/home touchdown/i)
fireEvent.click(touchdownButton);
//how to test the setLionsScore is being called on ^^this^^ buttonclick
expect(setLionsScoreMock).toHaveBeenCalled()
expect(setLionsScoreMock).toHaveBeenCalledWith(7)
expect(setLionsScoreMock).not.toHaveBeenCalledWith(0)





  })
test('setLionsScore is called and add 3 points for a fieldGoal on home fieldGoal Button CLicks',()=>{

  const setLionsScoreMock = jest.fn();
  const {getByText,findByText,queryByText} =render(
  <GameButtons setLionsScore={setLionsScoreMock} lionsScore={0}/>)
  fireEvent.click(getByText(/home field goal/i))
  expect(setLionsScoreMock).toHaveBeenCalled()
  expect(setLionsScoreMock).toHaveBeenCalledTimes(1)
  expect(setLionsScoreMock).toHaveBeenCalledWith(3)
  expect(setLionsScoreMock).not.toHaveBeenCalledWith(7||0)

})

})














// test('it renders correctly', () => {
//   // do snapshots here if you're not in codesandbox
//   render(<GameButtons />);
// });

// test('setLionsScore is called on home button clicks', () => {
//   const setLionsScoreMock = jest.fn();
//   const { getByText } = render(
//     <GameButtons setLionsScore={setLionsScoreMock} lionsScore={10} />
//   );
//   // const touchdownButton = getByText(/home touchdown/i);
//   fireEvent.click(getByText(/home touchdown/i));
//   // how do we test that "setLionsScore" is being called on that button click?
//   expect(setLionsScoreMock).toHaveBeenCalled();
//   expect(setLionsScoreMock).toHaveBeenCalledTimes(1);
//   expect(setLionsScoreMock).toHaveBeenCalledWith(17);

//   // TODO: write a test for the home field goal button clicks
//   fireEvent.click(getByText(/home field goal/i));
//   expect(setLionsScoreMock).toHaveBeenCalledTimes(2);
//   expect(setLionsScoreMock).toHaveBeenCalledWith(13);
// });
