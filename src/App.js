import React from "react";
import Menu from "./components/menu";
import Comp1 from "./components/comp1";
import Comp2 from "./components/comp2";
import Comp3 from "./components/comp3";
import Comp4 from "./components/comp4";
import Footer from "./components/footer";
function App() {
  return (
    <div className="App bg-black text white">
      <Menu />
      <Comp1 />
      <Comp2 />
      <Comp3 />
      <Comp4 />
      <Footer />
    </div>
  );
}

export default App;
