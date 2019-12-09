//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";

import GameButtons from "./GameButtons";

function App() {
  const [lionsScore, setLionsScore] = useState(0);
  const [tigersScore, setTigersScore] = useState(0);
  const [quarter, setQuarter] = useState(1);

  if (quarter > 4) {
    setQuarter(1);
  }

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>
            <div className="home__score">{lionsScore}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{tigersScore}</div>
          </div>
        </div>
        <BottomRow quarter={quarter} />
      </section>
      <section className="buttons">
        <GameButtons
          setLionsScore={setLionsScore}
          setTigersScore={setTigersScore}
          setQuarter={setQuarter}
          lionsScore={lionsScore}
          tigersScore={tigersScore}
          quarter={quarter}
        />
      </section>
    </div>
  );
}

export default App;
