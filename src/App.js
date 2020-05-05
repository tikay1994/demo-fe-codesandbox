import React from "react";
import Menu from "./components/menu";
import Comp1 from "./components/comp1";
import Comp2 from "./components/comp2";
function App() {
  return (
    <div className="App bg-black text white">
      <Menu />
      <Comp1 />
      <Comp2 />
    </div>
  );
}

export default App;
