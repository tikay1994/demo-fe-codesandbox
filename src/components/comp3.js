import React from "react";

function comp3(props) {
  const imgPost = [
    {
      src:
        "https://codesandbox.io/static/10-bdc65e9d4799ce18b7ebcb2803b4cf19.png",
    },
    {
      src:
        "https://codesandbox.io/static/2-f85edd5263e80fba8b193a48c53e2a2c.png",
    },
    {
      src:
        "https://codesandbox.io/static/11-1038d312340f09e710212f72d3373e6e.png",
    },
    {
      src:
        "https://codesandbox.io/static/1-e54ff835065f3d4b213148f75bec681e.png",
    },
  ];
  return (
    <div className="text-white mx-5 lg:mx-24 mt-64">
      <div className="component-transition">
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
          {imgPost.map((img, index) => (
            <img
              key={index}
              className="h-64 w-48 lg:h-full lg:w-full"
              src={img.src}
              alt="pic"
            ></img>
          ))}
        </div>
      </div>
    </div>
  );
}

export default comp3;
