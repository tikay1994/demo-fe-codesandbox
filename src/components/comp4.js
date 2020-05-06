import React from "react";
import icon1 from "../pic/pic1.png";
import icon2 from "../pic/pic2.png";
import icon3 from "../pic/pic3.png";
function comp4(props) {
  return (
    <div className="text-white mt-20 mx-40">
      <div className="grid grid-cols-2">
        <div>
          <h2 className="text-4xl">Experiment Easily</h2>
          <h3 className="text-2xl">
            Try things out to see how they work in reality.
          </h3>
          <p>Learn new frameworks and test your understanding.</p>
          <p>Evaluate npm modules to see what works for your project.</p>
          <p>Test out components by creating functional examples.</p>
        </div>
        <div>
          <button className="bg-gray-800 h-64 w-auto rounded ml-48 px-10">
            <div>
              <h2>
                "I often use CodeSandBox to create demos or try out new
                JavaScript features and packages"
              </h2>
            </div>
            <div className="flex">
              <div>img avatar</div>
              <div>
                <p>Name</p>
                <p>Address</p>
              </div>
            </div>
          </button>
        </div>
      </div>
      <div className="flex">
        <img
          src={icon1}
          className="w-64 h-64 ml-5 transform -translate-y-10"
        ></img>
        <img
          src={icon2}
          className="w-64 h-64 ml-5 transform -translate-y-10"
        ></img>
        <img
          src={icon3}
          className="w-64 h-64 ml-5 transform -translate-y-10"
        ></img>
      </div>
    </div>
  );
}

export default comp4;
