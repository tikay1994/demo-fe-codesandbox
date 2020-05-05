import React from "react";

function comp2(props) {
  return (
    <div className="container text-white mx-40 my-20">
      <div>
        <div>
          <h1 className="text-4xl">Prototype Quickly</h1>
          <p className="text-sm">Test your ideas early and often.</p>
        </div>
      </div>
      <div className="grid grid-cols-2">
        <div>imgfsdfsfsfsfsdfsdfsdfsdfsdfsdfsdf</div>
        <div>
          <h2 className="text-2xl">Code from anywhere</h2>
          <h3 className="text-xl">On any device</h3>
          <p className="text-sm">You just need a web browser.</p>
          <h3 className="text-xl">No setup</h3>
          <p className="text-sm">Go straight to coding with templates.</p>
          <h3 className="text-xl">VS Code built-in</h3>
          <p className="text-sm">The editor is full-featured, yet familiar.</p>
        </div>
      </div>
      <div>
        <button className="bg-gray-800 bg-opacity-50 h-64 w-auto px-20 py-10">
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
  );
}

export default comp2;
