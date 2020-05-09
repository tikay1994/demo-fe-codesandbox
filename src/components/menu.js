import React, { useState } from "react";
import "../style/dropdown.css";
import "../style/animations.css";
function Menu(props) {
  const [menuShow, setMenuShow] = useState(false);
  function handleMenuShow(e) {
    setMenuShow(true);
  }
  function handleCancleTopMenu(e) {
    setMenuShow(false);
  }
  const [displayMenu, setDisplayMenu] = useState(false);
  function handleClickMenu(e) {
    setDisplayMenu(true);
  }

  function onCloseMenu(e) {
    setDisplayMenu(false);
  }

  function handleCancleMenu(e) {
    if (e.keyCode === 27) setDisplayMenu(false);
  }

  return (
    <div>
      <div className="mx-5 lg:mx-24">
        <nav class="flex items-center justify-between flex-wrap border-b ">
          <div className="flex py-2 ">
            <div class="flex items-center text-white mr-2">
              <button>
                <svg class="h-6 w-6" viewBox="0 0 32 32">
                  <path
                    fill="#fff"
                    d="M2.667 8l13.94-8 13.94 8 0.12 15.933-14.060 8.067-13.94-8zM5.451 11.308v6.343l4.46 2.48v4.688l5.296 3.061v-11.029zM27.769 11.308l-9.756 5.543v11.029l5.296-3.061v-4.685l4.46-2.481zM6.845 8.801l9.737 5.525 9.76-5.573-5.161-2.929-4.547 2.593-4.573-2.624z"
                  ></path>
                </svg>
              </button>
            </div>
            <div className="flex max-w-sm">
              <h1 class="font-semibold text-xs mt-1 text-white">CodeSandbox</h1>
            </div>
          </div>
          <div>
            <div class="md:hidden text-white flex text-xl">
              <a href="#">Sign in</a>
              <button onClick={handleClickMenu} onKeyDown={handleCancleMenu}>
                <svg class="h-6 w-6 ml-2" fill="#fff" viewBox="0 0 24 24">
                  <path d="M3 13h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1zM3 7h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1zM3 19h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1z"></path>
                </svg>
              </button>
            </div>
          </div>
          <div className="hidden md:flex">
            <div
              className="ml-5 group text-white hover:opacity-100 opacity-50"
              onMouseEnter={handleMenuShow}
              onMouseLeave={handleCancleTopMenu}
            >
              <button class="text-xs mr-4 text-white h-10  mx-5">
                <div>Features</div>
              </button>
              <div className="group-hover hidden">
                <div className="absolute flex">
                  <div className="m-6 text-center">
                    <svg
                      class="h-10 w-10 icon-scale hover:scale-125 transform"
                      fill="#fff"
                      viewBox="0 0 32 32"
                    >
                      <path d="M18 23l3 3 10-10-10-10-3 3 7 7z"></path>
                      <path d="M14 9l-3-3-10 10 10 10 3-3-7-7z"></path>
                    </svg>
                    <p className="text-white">IDE</p>
                  </div>
                  <div className="m-6 text-center">
                    <svg
                      class="mx-1 h-10 w-10 icon-scale hover:scale-125 transform"
                      fill="#fff"
                      viewBox="0 0 32 32"
                    >
                      <path d="M31.998 24h-24.006v4l-7.992-6 7.992-6v4h24.006zM0 12h23.998v4l8-6-8-6v4h-23.998z"></path>
                    </svg>
                    <p>Embed</p>
                  </div>
                  <div className="m-6 text-center">
                    <svg
                      class="h-10 w-10 icon-scale hover:scale-125 transform"
                      fill="#fff"
                      viewBox="0 0 20 20"
                    >
                      <path d="M15.902 5.6c-2.079 0-4.358 1.158-5.902 2.916-1.545-1.758-3.825-2.916-5.904-2.916-1.98 0-4.096 1.156-4.096 4.4s2.116 4.398 4.096 4.4v0c2.079 0 4.358-1.158 5.903-2.916 1.544 1.758 3.823 2.916 5.902 2.916 1.981 0 4.099-1.156 4.099-4.4s-2.118-4.4-4.098-4.4zM4.096 12.641c-1.512 0-2.296-0.889-2.296-2.641s0.784-2.641 2.296-2.641c1.673 0 3.614 1.086 4.807 2.641-1.193 1.555-3.134 2.641-4.807 2.641zM15.902 12.641c-1.673 0-3.614-1.086-4.807-2.641 1.192-1.555 3.135-2.641 4.807-2.641 1.512 0 2.298 0.889 2.298 2.641s-0.786 2.641-2.298 2.641z"></path>
                    </svg>
                    <p>CI</p>
                  </div>
                  <div className="m-6 text-center">
                    <svg
                      class="h-10 w-10 icon-scale hover:scale-125 transform"
                      fill="#fff"
                      viewBox="0 0 30 28"
                    >
                      <path d="M9.266 14c-1.625 0.047-3.094 0.75-4.141 2h-2.094c-1.563 0-3.031-0.75-3.031-2.484 0-1.266-0.047-5.516 1.937-5.516 0.328 0 1.953 1.328 4.062 1.328 0.719 0 1.406-0.125 2.078-0.359-0.047 0.344-0.078 0.688-0.078 1.031 0 1.422 0.453 2.828 1.266 4zM26 23.953c0 2.531-1.672 4.047-4.172 4.047h-13.656c-2.5 0-4.172-1.516-4.172-4.047 0-3.531 0.828-8.953 5.406-8.953 0.531 0 2.469 2.172 5.594 2.172s5.063-2.172 5.594-2.172c4.578 0 5.406 5.422 5.406 8.953zM10 4c0 2.203-1.797 4-4 4s-4-1.797-4-4 1.797-4 4-4 4 1.797 4 4zM21 10c0 3.313-2.688 6-6 6s-6-2.688-6-6 2.688-6 6-6 6 2.688 6 6zM30 13.516c0 1.734-1.469 2.484-3.031 2.484h-2.094c-1.047-1.25-2.516-1.953-4.141-2 0.812-1.172 1.266-2.578 1.266-4 0-0.344-0.031-0.688-0.078-1.031 0.672 0.234 1.359 0.359 2.078 0.359 2.109 0 3.734-1.328 4.062-1.328 1.984 0 1.937 4.25 1.937 5.516zM28 4c0 2.203-1.797 4-4 4s-4-1.797-4-4 1.797-4 4-4 4 1.797 4 4z"></path>
                    </svg>
                    <p>Teams</p>
                  </div>
                  <div className="m-6 text-center">
                    <svg
                      class="mx-4 h-10 w-10 icon-scale hover:scale-125 transform"
                      fill="#fff"
                      viewBox="0 0 32 32"
                    >
                      <path d="M22.714 9.238l-1.214-3.238-1.214 3.238-2.286 0.762 2.286 0.762 1.214 3.238 1.214-3.238 2.286-0.762-2.286-0.762zM20.714 21.238l-1.214-3.238-1.214 3.238-2.286 0.762 2.286 0.762 1.214 3.238 1.214-3.238 2.286-0.762-2.286-0.762zM13.459 13.486l-1.959-5.487-1.959 5.487-4.541 1.514 4.541 1.514 1.959 5.486 1.959-5.486 4.541-1.514-4.541-1.514z"></path>
                    </svg>
                    <p>What's New</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="ml-5 group text-white hover:opacity-100 opacity-50"
              onMouseEnter={handleMenuShow}
              onMouseLeave={handleCancleTopMenu}
            >
              <button class="text-xs mr-4 text-white h-10 mx-5">
                <div>Explore</div>
              </button>
              <div className="group-hover hidden">
                <div className=" absolute flex">
                  <div className="m-6 text-center">
                    <svg
                      class="mx-12 h-10 w-10 icon-scale hover:scale-125 transform"
                      fill="#fff"
                      viewBox="0 0 32 32"
                    >
                      <path d="M16 23l-9 6 4-10-9-6h10l4-10 4 10h10l-9 6 4 10z"></path>
                    </svg>
                    Featured Sandboxes
                  </div>
                  <div className="m-6 text-center">
                    <svg
                      class="mx-12 h-10 w-10 icon-scale hover:scale-125 transform"
                      fill="#fff"
                      viewBox="0 0 32 32"
                    >
                      <path d="M17.309 22.016c-0.77 0.616-1.746 0.984-2.809 0.984-2.485 0-4.5-2.015-4.5-4.5s2.015-4.5 4.5-4.5c2.485 0 4.5 2.015 4.5 4.5 0 1.063-0.368 2.039-0.984 2.809l5.348 5.348-0.707 0.707-5.348-5.348zM19.5 3h0.5l6 7v18.009c0 1.093-0.894 1.991-1.997 1.991h-15.005c-1.107 0-1.997-0.899-1.997-2.007v-22.985c0-1.109 0.897-2.007 2.003-2.007h10.497zM19 4h-10.004c-0.55 0-0.996 0.455-0.996 0.995v23.009c0 0.55 0.455 0.995 1 0.995h15c0.552 0 1-0.445 1-0.993v-17.007h-4.002c-1.103 0-1.998-0.887-1.998-2.006v-4.994zM20 4.5v4.491c0 0.557 0.451 1.009 0.997 1.009h3.703l-4.7-5.5zM14.5 22c1.933 0 3.5-1.567 3.5-3.5s-1.567-3.5-3.5-3.5c-1.933 0-3.5 1.567-3.5 3.5s1.567 3.5 3.5 3.5v0z"></path>
                    </svg>
                    Search Sandboses
                  </div>
                </div>
              </div>
            </div>
            <div
              className="ml-5 group text-white hover:opacity-100 opacity-50"
              onMouseEnter={handleMenuShow}
              onMouseLeave={handleCancleTopMenu}
            >
              <button class="text-xs mr-4 text-white h-10 mx-5">
                <div>Resources</div>
              </button>
              <div className="group-hover hidden">
                <div className=" absolute flex">
                  <div className="m-6 text-center">
                    <svg
                      class="mx-8 h-10 w-10 icon-scale hover:scale-125 transform"
                      fill="#fff"
                      viewBox="0 0 32 32"
                    >
                      <path d="M15 25.875v-19.625c0 0-2.688-2.25-6.5-2.25s-6.5 2-6.5 2v19.875c0 0 2.688-1.938 6.5-1.938s6.5 1.938 6.5 1.938zM29 25.875v-19.625c0 0-2.688-2.25-6.5-2.25s-6.5 2-6.5 2v19.875c0 0 2.688-1.938 6.5-1.938s6.5 1.938 6.5 1.938zM31 8h-1v19h-12v1h-5v-1h-12v-19h-1v20h12v1h7.062l-0.062-1h12v-20z"></path>
                    </svg>
                    Documentation
                  </div>
                  <div className="m-6 text-center">
                    <svg
                      class="h-10 w-10 icon-scale hover:scale-125 transform"
                      fill="#fff"
                      viewBox="0 0 20 20"
                    >
                      <path d="M11 9.27v-9.27l6 11-4 6h-6l-4-6 6-11v9.27c-0.602 0.352-1 0.996-1 1.732 0 1.105 0.895 2 2 2s2-0.895 2-2c0-0.736-0.398-1.38-0.991-1.727l-0.009-0.005zM6 18h8v2h-8v-2z"></path>
                    </svg>
                    Blog
                  </div>
                </div>
              </div>
            </div>
            <div
              className="ml-5 group text-white hover:opacity-100 opacity-50"
              onMouseEnter={handleMenuShow}
              onMouseLeave={handleCancleTopMenu}
            >
              <button class="text-xs mr-4 text-white h-10 mx-5">
                <div>Support</div>
              </button>
              <div className="group-hover hidden">
                <div className=" absolute flex">
                  <div className="m-6 text-center">
                    <svg
                      class="mx-8 h-10 w-10 icon-scale hover:scale-125 transform"
                      fill="#fff"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12.516 12.984q0-1.078 1.5-2.391t1.5-2.578q0-1.641-1.195-2.836t-2.836-1.195-2.813 1.195-1.172 2.836h2.016q0-0.797 0.586-1.406t1.383-0.609 1.406 0.609 0.609 1.406q0 0.656-0.469 1.172t-1.031 0.844-1.031 1.102-0.469 1.852h2.016zM12.516 16.5v-2.016h-2.016v2.016h2.016zM11.484 2.016q3.516 0 6.023 2.484t2.508 6q0 3.422-2.203 6.586t-5.813 4.898v-3h-0.516q-3.516 0-6-2.484t-2.484-6 2.484-6 6-2.484z"></path>
                    </svg>
                    Contact Support
                  </div>
                  <div className="m-6 text-center">
                    <svg
                      class="h-10 w-10 icon-scale hover:scale-125 transform"
                      fill="#fff"
                      viewBox="0 0 32 32"
                    >
                      <path d="M6 12h4v8h-4v-8zM22 4v24h4v-24h-4zM14 24h4v-16h-4v16z"></path>
                    </svg>
                    Status
                  </div>
                </div>
              </div>
            </div>
            <div>
              <button class="text-xs mr-4 text-white h-10 hover:opacity-100 opacity-50 mx-5">
                <div>Pricing</div>
              </button>
            </div>
          </div>
          <div className="hidden md:flex">
            <div class="flex items-center text-white">
              <button className="bg-indigo-600 text-xs transition-all duration-300 transform hover:scale-110 py-1 px-2 rounded">
                Create Sandbox
              </button>
            </div>
            <div className="hidden lg:flex max-w-sm ml-2">
              <button>
                <svg class="h-6 w-6" viewBox="0 0 32 32">
                  <path
                    fill="#00b0d8"
                    d="M16 0.053c-1.283 0.001-2.323 1.041-2.323 2.324 0 1.027 0.667 1.899 1.591 2.206l0.016 0.005-0.841 3.439h-11.168c-1.809 0-3.275 1.466-3.275 3.275v0 17.372c0 1.809 1.466 3.275 3.275 3.275v0h25.451c1.808 0 3.275-1.467 3.275-3.275v-17.372c0-1.808-1.467-3.275-3.275-3.275h-11.204l-0.821-3.433c0.949-0.307 1.624-1.183 1.624-2.216 0-1.283-1.040-2.324-2.324-2.324v0zM5.244 10.508h21.515c1.468 0 2.659 1.191 2.659 2.659v13.489c0 1.468-1.19 2.659-2.659 2.659v0h-21.515c-1.468 0-2.659-1.19-2.659-2.659v0-13.489c0-1.468 1.191-2.659 2.659-2.659zM9.583 13.591c-3.369 0-6.1 2.731-6.1 6.1s2.731 6.1 6.1 6.1v0c3.369 0 6.1-2.731 6.1-6.1s-2.731-6.1-6.1-6.1v0zM22.573 13.591c-3.369 0-6.1 2.731-6.1 6.1s2.731 6.1 6.1 6.1v0c3.369 0 6.1-2.731 6.1-6.1s-2.731-6.1-6.1-6.1v0zM9.583 15.017c0.023-0 0.051-0.001 0.079-0.001 2.582 0 4.675 2.093 4.675 4.675s-2.093 4.675-4.675 4.675c-0.028 0-0.055-0-0.083-0.001l0.004 0c-2.548-0.044-4.596-2.12-4.596-4.674s2.048-4.63 4.592-4.674l0.004-0zM22.573 15.017c0.023-0 0.051-0.001 0.079-0.001 2.582 0 4.675 2.093 4.675 4.675s-2.093 4.675-4.675 4.675c-0.028 0-0.055-0-0.083-0.001l0.004 0c-2.548-0.044-4.596-2.12-4.596-4.674s2.048-4.63 4.592-4.674l0.004-0zM9.583 17.235c-1.357 0-2.457 1.1-2.457 2.457s1.1 2.457 2.457 2.457v0c1.357 0 2.457-1.1 2.457-2.457s-1.1-2.457-2.457-2.457v0zM22.573 17.235c-1.357 0-2.457 1.1-2.457 2.457s1.1 2.457 2.457 2.457v0c1.357 0 2.457-1.1 2.457-2.457s-1.1-2.457-2.457-2.457v0zM13.337 25.901v2.879h0.941v-2.879zM14.773 25.901v2.879h0.94v-2.879zM16.208 25.901v2.879h0.941v-2.879zM17.644 25.901v2.879h0.941v-2.879zM19.080 25.941v2.8c0.638-0.156 1.104-0.723 1.105-1.399v-0.001c0-0.68-0.472-1.249-1.105-1.4zM12.843 25.979c-0.571 0.199-0.974 0.733-0.975 1.361v0.001c0 0.632 0.408 1.168 0.975 1.361z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </nav>
      </div>
      <div
        onMouseEnter={handleMenuShow}
        onMouseLeave={handleCancleTopMenu}
        className={
          menuShow
            ? "block bg-gray-800 bg-opacity-50 h-24 duration-500"
            : "h-0 duration-1000"
        }
      ></div>
      <div
        className={
          (displayMenu ? "block" : "hidden ") +
          "inset-0 cursor-default h-full w-full"
        }
        onKeyDown={handleCancleMenu}
      >
        <div className="relative w-full h-full bg-gray-900 text-white">
          <button onClick={onCloseMenu}>
            <svg class="h-6 w-6 m-3" fill="#fff" viewBox="0 0 20 20">
              <path d="M10 8.586l-7.071-7.071-1.414 1.414 7.071 7.071-7.071 7.071 1.414 1.414 7.071-7.071 7.071 7.071 1.414-1.414-7.071-7.071 7.071-7.071-1.414-1.414-7.071 7.071z"></path>
            </svg>
          </button>
          <div>
            <p className="ml-6">Features</p>
            <div className="m-6 flex item-center hover:bg-gray-800 transition duration-300 rounded">
              <svg
                class="h-10 w-10 icon-scale hover:scale-125 transform"
                fill="#fff"
                viewBox="0 0 32 32"
              >
                <path d="M18 23l3 3 10-10-10-10-3 3 7 7z"></path>
                <path d="M14 9l-3-3-10 10 10 10 3-3-7-7z"></path>
              </svg>
              <p className="mt-2 ml-4">IDE</p>
            </div>
            <div className="m-6 flex item-center hover:bg-gray-800 transition duration-300 rounded">
              <svg
                class="h-10 w-10 icon-scale hover:scale-125 transform"
                fill="#fff"
                viewBox="0 0 32 32"
              >
                <path d="M31.998 24h-24.006v4l-7.992-6 7.992-6v4h24.006zM0 12h23.998v4l8-6-8-6v4h-23.998z"></path>
              </svg>
              <p className="mt-2 ml-4">Embed</p>
            </div>
            <div className="m-6 flex item-center hover:bg-gray-800 transition duration-300 rounded">
              <svg
                class="h-10 w-10 icon-scale hover:scale-125 transform"
                fill="#fff"
                viewBox="0 0 20 20"
              >
                <path d="M15.902 5.6c-2.079 0-4.358 1.158-5.902 2.916-1.545-1.758-3.825-2.916-5.904-2.916-1.98 0-4.096 1.156-4.096 4.4s2.116 4.398 4.096 4.4v0c2.079 0 4.358-1.158 5.903-2.916 1.544 1.758 3.823 2.916 5.902 2.916 1.981 0 4.099-1.156 4.099-4.4s-2.118-4.4-4.098-4.4zM4.096 12.641c-1.512 0-2.296-0.889-2.296-2.641s0.784-2.641 2.296-2.641c1.673 0 3.614 1.086 4.807 2.641-1.193 1.555-3.134 2.641-4.807 2.641zM15.902 12.641c-1.673 0-3.614-1.086-4.807-2.641 1.192-1.555 3.135-2.641 4.807-2.641 1.512 0 2.298 0.889 2.298 2.641s-0.786 2.641-2.298 2.641z"></path>
              </svg>
              <p className="mt-2 ml-4">CI</p>
            </div>
            <div className="m-6 flex item-center hover:bg-gray-800 transition duration-300 rounded">
              <svg
                class="h-10 w-10 icon-scale hover:scale-125 transform"
                fill="#fff"
                viewBox="0 0 30 28"
              >
                <path d="M9.266 14c-1.625 0.047-3.094 0.75-4.141 2h-2.094c-1.563 0-3.031-0.75-3.031-2.484 0-1.266-0.047-5.516 1.937-5.516 0.328 0 1.953 1.328 4.062 1.328 0.719 0 1.406-0.125 2.078-0.359-0.047 0.344-0.078 0.688-0.078 1.031 0 1.422 0.453 2.828 1.266 4zM26 23.953c0 2.531-1.672 4.047-4.172 4.047h-13.656c-2.5 0-4.172-1.516-4.172-4.047 0-3.531 0.828-8.953 5.406-8.953 0.531 0 2.469 2.172 5.594 2.172s5.063-2.172 5.594-2.172c4.578 0 5.406 5.422 5.406 8.953zM10 4c0 2.203-1.797 4-4 4s-4-1.797-4-4 1.797-4 4-4 4 1.797 4 4zM21 10c0 3.313-2.688 6-6 6s-6-2.688-6-6 2.688-6 6-6 6 2.688 6 6zM30 13.516c0 1.734-1.469 2.484-3.031 2.484h-2.094c-1.047-1.25-2.516-1.953-4.141-2 0.812-1.172 1.266-2.578 1.266-4 0-0.344-0.031-0.688-0.078-1.031 0.672 0.234 1.359 0.359 2.078 0.359 2.109 0 3.734-1.328 4.062-1.328 1.984 0 1.937 4.25 1.937 5.516zM28 4c0 2.203-1.797 4-4 4s-4-1.797-4-4 1.797-4 4-4 4 1.797 4 4z"></path>
              </svg>
              <p className="mt-2 ml-4">Teams</p>
            </div>
            <div>
              <div className="m-6 flex item-center hover:bg-gray-800 transition duration-300 rounded">
                <svg
                  class="h-10 w-10 icon-scale hover:scale-125 transform"
                  fill="#fff"
                  viewBox="0 0 32 32"
                >
                  <path d="M22.714 9.238l-1.214-3.238-1.214 3.238-2.286 0.762 2.286 0.762 1.214 3.238 1.214-3.238 2.286-0.762-2.286-0.762zM20.714 21.238l-1.214-3.238-1.214 3.238-2.286 0.762 2.286 0.762 1.214 3.238 1.214-3.238 2.286-0.762-2.286-0.762zM13.459 13.486l-1.959-5.487-1.959 5.487-4.541 1.514 4.541 1.514 1.959 5.486 1.959-5.486 4.541-1.514-4.541-1.514z"></path>
                </svg>
                <p className="mt-2 ml-4">What's New</p>
              </div>
            </div>
            <p className="ml-6">Explore</p>
            <div className="m-6 flex item-center hover:bg-gray-800 transition duration-300 rounded">
              <svg
                class="h-10 w-10 icon-scale hover:scale-125 transform"
                fill="#fff"
                viewBox="0 0 32 32"
              >
                <path d="M16 23l-9 6 4-10-9-6h10l4-10 4 10h10l-9 6 4 10z"></path>
              </svg>
              <p className="mt-2 ml-4">Featured Sandboxes</p>
            </div>
            <div className="m-6 flex item-center hover:bg-gray-800 transition duration-300 rounded">
              <svg
                class="h-10 w-10 icon-scale hover:scale-125 transform"
                fill="#fff"
                viewBox="0 0 32 32"
              >
                <path d="M17.309 22.016c-0.77 0.616-1.746 0.984-2.809 0.984-2.485 0-4.5-2.015-4.5-4.5s2.015-4.5 4.5-4.5c2.485 0 4.5 2.015 4.5 4.5 0 1.063-0.368 2.039-0.984 2.809l5.348 5.348-0.707 0.707-5.348-5.348zM19.5 3h0.5l6 7v18.009c0 1.093-0.894 1.991-1.997 1.991h-15.005c-1.107 0-1.997-0.899-1.997-2.007v-22.985c0-1.109 0.897-2.007 2.003-2.007h10.497zM19 4h-10.004c-0.55 0-0.996 0.455-0.996 0.995v23.009c0 0.55 0.455 0.995 1 0.995h15c0.552 0 1-0.445 1-0.993v-17.007h-4.002c-1.103 0-1.998-0.887-1.998-2.006v-4.994zM20 4.5v4.491c0 0.557 0.451 1.009 0.997 1.009h3.703l-4.7-5.5zM14.5 22c1.933 0 3.5-1.567 3.5-3.5s-1.567-3.5-3.5-3.5c-1.933 0-3.5 1.567-3.5 3.5s1.567 3.5 3.5 3.5v0z"></path>
              </svg>
              <p className="mt-2 ml-4">Search Sandboses</p>
            </div>
          </div>
          <div>
            <p className="ml-6">Resources</p>
            <div className="m-6 flex item-center hover:bg-gray-800 transition duration-300 rounded">
              <svg
                class="h-10 w-10 icon-scale hover:scale-125 transform"
                fill="#fff"
                viewBox="0 0 32 32"
              >
                <path d="M15 25.875v-19.625c0 0-2.688-2.25-6.5-2.25s-6.5 2-6.5 2v19.875c0 0 2.688-1.938 6.5-1.938s6.5 1.938 6.5 1.938zM29 25.875v-19.625c0 0-2.688-2.25-6.5-2.25s-6.5 2-6.5 2v19.875c0 0 2.688-1.938 6.5-1.938s6.5 1.938 6.5 1.938zM31 8h-1v19h-12v1h-5v-1h-12v-19h-1v20h12v1h7.062l-0.062-1h12v-20z"></path>
              </svg>
              <p className="mt-2 ml-4">Documentation</p>
            </div>
            <div className="m-6 flex item-center hover:bg-gray-800 transition duration-300 rounded">
              <svg
                class="h-10 w-10 icon-scale hover:scale-125 transform"
                fill="#fff"
                viewBox="0 0 20 20"
              >
                <path d="M11 9.27v-9.27l6 11-4 6h-6l-4-6 6-11v9.27c-0.602 0.352-1 0.996-1 1.732 0 1.105 0.895 2 2 2s2-0.895 2-2c0-0.736-0.398-1.38-0.991-1.727l-0.009-0.005zM6 18h8v2h-8v-2z"></path>
              </svg>
              <p className="mt-2 ml-4">Blog</p>
            </div>
          </div>
          <div>
            <p className="ml-6">Support</p>
            <div className="m-6 flex item-center hover:bg-gray-800 transition duration-300 rounded">
              <svg
                class="h-10 w-10 icon-scale hover:scale-125 transform"
                fill="#fff"
                viewBox="0 0 24 24"
              >
                <path d="M12.516 12.984q0-1.078 1.5-2.391t1.5-2.578q0-1.641-1.195-2.836t-2.836-1.195-2.813 1.195-1.172 2.836h2.016q0-0.797 0.586-1.406t1.383-0.609 1.406 0.609 0.609 1.406q0 0.656-0.469 1.172t-1.031 0.844-1.031 1.102-0.469 1.852h2.016zM12.516 16.5v-2.016h-2.016v2.016h2.016zM11.484 2.016q3.516 0 6.023 2.484t2.508 6q0 3.422-2.203 6.586t-5.813 4.898v-3h-0.516q-3.516 0-6-2.484t-2.484-6 2.484-6 6-2.484z"></path>
              </svg>
              <p className="mt-2 ml-4">Contact Support</p>
            </div>
            <div className="m-6 flex item-center hover:bg-gray-800 transition duration-300 rounded">
              <svg
                class="h-10 w-10 icon-scale hover:scale-125 transform"
                fill="#fff"
                viewBox="0 0 32 32"
              >
                <path d="M6 12h4v8h-4v-8zM22 4v24h4v-24h-4zM14 24h4v-16h-4v16z"></path>
              </svg>
              <p className="mt-2 ml-4">Status</p>
            </div>
          </div>
          <div>
            <p className="ml-6">Pricing</p>
            <div className="m-6 flex item-center hover:bg-gray-800 transition duration-300 rounded">
              <svg
                class="h-10 w-10 icon-scale hover:scale-125 transform"
                fill="#fff"
                viewBox="0 0 20 20"
              >
                <path d="M10 20c-5.523 0-10-4.477-10-10s4.477-10 10-10v0c5.523 0 10 4.477 10 10s-4.477 10-10 10v0zM11 15h1c1.657 0 3-1.343 3-3s-1.343-3-3-3v0h-4.010c-0.552 0-1-0.448-1-1s0.448-1 1-1v0h6.010v-2h-3v-2h-2v2h-1c-1.657 0-3 1.343-3 3s1.343 3 3 3v0h4c0.552 0 1 0.448 1 1s-0.448 1-1 1v0h-6v2h3v2h2v-2z"></path>
              </svg>
              <p className="mt-2 ml-4">Pricing</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
