import React from "react";

import { addFieldGoal, addTouchdown } from "./utils/utils";

const GameButtons = props => {
  return (
    <>
      <div className="homeButtons">
        {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
        <button
          onClick={() => props.setLionsScore(addTouchdown(props.lionsScore))}
          className="homeButtons__touchdown"
        >
          Home Touchdown
        </button>
        <button
          data-testid="home-touchdown"
          onClick={() => props.setLionsScore(addFieldGoal(props.lionsScore))}
          className="homeButtons__fieldGoal"
        >
          Home Field Goal
        </button>
      </div>
      <div className="gameButtons">
        <button
          onClick={() => props.setQuarter(props.quarter + 1)}
          className="gameButtons__changeQuarter"
        >
          Change Quarter
        </button>
      </div>
      <div className="awayButtons">
        <button
          onClick={() => props.setTigersScore(addTouchdown(props.tigersScore))}
          className="awayButtons__touchdown"
        >
          Away Touchdown
        </button>
        <button
          onClick={() => props.setTigersScore(addFieldGoal(props.tigersScore))}
          className="awayButtons__fieldGoal"
        >
          Away Field Goal
        </button>
      </div>
    </>
  );
};

export default GameButtons;
