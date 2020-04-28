import React, { useState } from "react";

import CharPicker from "./components/CharPicker";
import Character from "./components/Character";

const App = (props) => {
  // const [state, setState] = useState({
  //   selectedCharacter: 1,
  //   side: "light",
  //   destroyed: false,
  // });

  const [side, setSide] = useState("light");

  const [selectedCharacter, setSelectedCharacter] = useState("1");

  const [destoryed, setDestoryed] = useState(false);

  const sideHandler = (side) => {
    setSide(side);
  };

  const charSelectHandler = (event) => {
    const charId = event.target.value;
    setSelectedCharacter(charId);
  };

  const destructionHandler = () => {
    setDestoryed(true);
  };

  let content = (
    <React.Fragment>
      <CharPicker
        side={side}
        selectedChar={selectedCharacter}
        onCharSelect={charSelectHandler}
      />
      <Character selectedChar={selectedCharacter} />
      <button onClick={sideHandler.bind(this, "light")}>Light Side</button>
      <button onClick={sideHandler.bind(this, "dark")}>Dark Side</button>
      {side === "dark" && (
        <button onClick={destructionHandler}>DESTROY!</button>
      )}
    </React.Fragment>
  );

  if (destoryed) {
    content = <h1>Total destruction!</h1>;
  }
  return content;
};

export default App;
