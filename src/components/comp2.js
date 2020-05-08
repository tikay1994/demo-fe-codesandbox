import React from "react";

function comp2(props) {
  return (
    <div className="text-white mx-5 lg:mx-24 my-20 component-transition">
      <div>
        <div>
          <h1 className="text-4xl">Prototype Quickly</h1>
          <p className="text-sm">Test your ideas early and often.</p>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3">
        <div className="hidden lg:block bg-gray-800 bg-opacity-25 col-start-1 col-end-3 mr-10">
          <img
            className=""
            src="https://codesandbox.io/static/started-3a3d363a1d955a0aa4ea6e7ccc908a8a.png"
            alt="pic"
          ></img>
        </div>
        <div>
          <h2 className="text-2xl">Code from anywhere</h2>
          <h3 className="text-xl">On any device</h3>
          <p className="text-sm">You just need a web browser.</p>
          <h3 className="text-xl">No setup</h3>
          <p className="text-sm">Go straight to coding with templates.</p>
          <h3 className="text-xl">VS Code built-in</h3>
          <p className="text-sm">The editor is full-featured, yet familiar.</p>
        </div>
        <div className="text-center md:text-left md:bg-gray-800 h-64 px-12 py-10 lg:transform lg:-translate-y-24 lg:translate-x-64 rounded">
          <button>
            <div>
              <h2>"It fell much more like my local environment"</h2>
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
    </div>
  );
}

export default comp2;
