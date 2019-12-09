export const addFieldGoal = currentScore => {
    return currentScore + 3;
  };
  
  export const addTouchdown = currentScore => {
    return currentScore + 7;
  };
  
  export const reverse = str => {
    return str
      .split("")
      .reverse()
      .join("");
  };
  