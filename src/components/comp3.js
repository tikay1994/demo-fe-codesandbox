import React from "react";

function comp3(props) {
  return (
    <div className="text-white mx-40 mt-64">
      <div>
        <h1 className="text-4xl">
          Create Static Sites, Full-stack Web Apps, or Components
        </h1>
        <p className="text-xl opacity-50">
          Explore some of the 5,646,743+ sandboxes crafted by our community of
          creators.
        </p>
      </div>
      <div>
        <div className="flex transform transition-all duration-1000 hover:translate-x-full ease-in">
          <img src="https://codesandbox.io/static/10-bdc65e9d4799ce18b7ebcb2803b4cf19.png"></img>
          <img src="https://codesandbox.io/static/2-f85edd5263e80fba8b193a48c53e2a2c.png"></img>
          <img src="https://codesandbox.io/static/7-1176c2cecca6f46b34bd06cceaf62191.png"></img>
        </div>
      </div>
    </div>
  );
}

export default comp3;