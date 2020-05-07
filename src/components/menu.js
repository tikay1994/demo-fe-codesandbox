import React from "react";
import "../style/dropdown.css";
import "../style/animations.css";
function menu(props) {
  return (
    <div className="border-b py-2 mx-40">
      <nav class="flex items-center justify-between flex-wrap mx-20">
        <div class="flex items-center flex-no-shrink text-white mr-6">
          <button>
            <svg class="h-6 w-6" viewBox="0 0 32 32">
              <path
                fill="#bd081c"
                d="M2.667 8l13.94-8 13.94 8 0.12 15.933-14.060 8.067-13.94-8zM5.451 11.308v6.343l4.46 2.48v4.688l5.296 3.061v-11.029zM27.769 11.308l-9.756 5.543v11.029l5.296-3.061v-4.685l4.46-2.481zM6.845 8.801l9.737 5.525 9.76-5.573-5.161-2.929-4.547 2.593-4.573-2.624z"
              ></path>
            </svg>
          </button>
        </div>
        <div className="flex max-w-sm">
          <h1 class="font-semibold text-xl text-white">CodeSandbox</h1>
        </div>
        <div class="lg:hidden text-white flex">
          <div>Sign in</div>
          <button>
            <svg class="h-6 w-6 ml-2" fill="#fff" viewBox="0 0 32 32">
              <path d="M31.008 27.231l-7.58-6.447c-0.784-0.705-1.622-1.029-2.299-0.998 1.789-2.096 2.87-4.815 2.87-7.787 0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12c2.972 0 5.691-1.081 7.787-2.87-0.031 0.677 0.293 1.515 0.998 2.299l6.447 7.58c1.104 1.226 2.907 1.33 4.007 0.23s0.997-2.903-0.23-4.007zM12 20c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z"></path>
            </svg>
          </button>
        </div>
        <div className="ml-5">
          <button class="hidden lg:block text-base mr-4 text-white ">
            <ul className="group hover:text-teal-500 mt-1 ">
              Features
              <div className="absolute flex text-white bg-gray-800 bg-opacity-50 dropdown mt-2">
                <li className="hidden group-hover hover:text-teal-500 m-5 icon-scale">
                  <svg class="h-10 w-10" fill="#fff" viewBox="0 0 32 32">
                    <path d="M18 23l3 3 10-10-10-10-3 3 7 7z"></path>
                    <path d="M14 9l-3-3-10 10 10 10 3-3-7-7z"></path>
                  </svg>
                  IDE
                </li>
                <li className="hidden group-hover hover:text-teal-500 m-5 icon-scale">
                  <svg class="h-10 w-10" fill="#fff" viewBox="0 0 32 32">
                    <path d="M31.998 24h-24.006v4l-7.992-6 7.992-6v4h24.006zM0 12h23.998v4l8-6-8-6v4h-23.998z"></path>
                  </svg>
                  Embed
                </li>
                <li className="hidden group-hover hover:text-teal-500 m-5 icon-scale">
                  <svg class="h-10 w-10" fill="#fff" viewBox="0 0 20 20">
                    <path d="M15.902 5.6c-2.079 0-4.358 1.158-5.902 2.916-1.545-1.758-3.825-2.916-5.904-2.916-1.98 0-4.096 1.156-4.096 4.4s2.116 4.398 4.096 4.4v0c2.079 0 4.358-1.158 5.903-2.916 1.544 1.758 3.823 2.916 5.902 2.916 1.981 0 4.099-1.156 4.099-4.4s-2.118-4.4-4.098-4.4zM4.096 12.641c-1.512 0-2.296-0.889-2.296-2.641s0.784-2.641 2.296-2.641c1.673 0 3.614 1.086 4.807 2.641-1.193 1.555-3.134 2.641-4.807 2.641zM15.902 12.641c-1.673 0-3.614-1.086-4.807-2.641 1.192-1.555 3.135-2.641 4.807-2.641 1.512 0 2.298 0.889 2.298 2.641s-0.786 2.641-2.298 2.641z"></path>
                  </svg>
                  CI
                </li>
                <li className="hidden group-hover hover:text-teal-500 m-5 icon-scale">
                  <svg class="h-10 w-10" fill="#fff" viewBox="0 0 30 28">
                    <path d="M9.266 14c-1.625 0.047-3.094 0.75-4.141 2h-2.094c-1.563 0-3.031-0.75-3.031-2.484 0-1.266-0.047-5.516 1.937-5.516 0.328 0 1.953 1.328 4.062 1.328 0.719 0 1.406-0.125 2.078-0.359-0.047 0.344-0.078 0.688-0.078 1.031 0 1.422 0.453 2.828 1.266 4zM26 23.953c0 2.531-1.672 4.047-4.172 4.047h-13.656c-2.5 0-4.172-1.516-4.172-4.047 0-3.531 0.828-8.953 5.406-8.953 0.531 0 2.469 2.172 5.594 2.172s5.063-2.172 5.594-2.172c4.578 0 5.406 5.422 5.406 8.953zM10 4c0 2.203-1.797 4-4 4s-4-1.797-4-4 1.797-4 4-4 4 1.797 4 4zM21 10c0 3.313-2.688 6-6 6s-6-2.688-6-6 2.688-6 6-6 6 2.688 6 6zM30 13.516c0 1.734-1.469 2.484-3.031 2.484h-2.094c-1.047-1.25-2.516-1.953-4.141-2 0.812-1.172 1.266-2.578 1.266-4 0-0.344-0.031-0.688-0.078-1.031 0.672 0.234 1.359 0.359 2.078 0.359 2.109 0 3.734-1.328 4.062-1.328 1.984 0 1.937 4.25 1.937 5.516zM28 4c0 2.203-1.797 4-4 4s-4-1.797-4-4 1.797-4 4-4 4 1.797 4 4z"></path>
                  </svg>
                  Teams
                </li>
                <li className="hidden group-hover hover:text-teal-500 m-5 icon-scale">
                  <svg class="h-10 w-10" fill="#fff" viewBox="0 0 32 32">
                    <path d="M22.714 9.238l-1.214-3.238-1.214 3.238-2.286 0.762 2.286 0.762 1.214 3.238 1.214-3.238 2.286-0.762-2.286-0.762zM20.714 21.238l-1.214-3.238-1.214 3.238-2.286 0.762 2.286 0.762 1.214 3.238 1.214-3.238 2.286-0.762-2.286-0.762zM13.459 13.486l-1.959-5.487-1.959 5.487-4.541 1.514 4.541 1.514 1.959 5.486 1.959-5.486 4.541-1.514-4.541-1.514z"></path>
                  </svg>
                  What's New
                </li>
              </div>
            </ul>
          </button>
        </div>
        <div>
          <button class="hidden lg:block text-base mr-4 text-white">
            <ul className="group hover:text-teal-500 mt-1">
              Explore
              <div className="absolute flex text-white bg-gray-800 bg-opacity-50 dropdown mt-2">
                <li className="hidden group-hover hover:text-teal-500 m-5 icon-scale">
                  <svg class="h-10 w-10" fill="#fff" viewBox="0 0 32 32">
                    <path d="M16 23l-9 6 4-10-9-6h10l4-10 4 10h10l-9 6 4 10z"></path>
                  </svg>
                  Featured Sandboxes
                </li>
                <li className="hidden group-hover hover:text-teal-500 m-5 icon-scale">
                  <svg class="h-10 w-10" fill="#fff" viewBox="0 0 32 32">
                    <path d="M17.309 22.016c-0.77 0.616-1.746 0.984-2.809 0.984-2.485 0-4.5-2.015-4.5-4.5s2.015-4.5 4.5-4.5c2.485 0 4.5 2.015 4.5 4.5 0 1.063-0.368 2.039-0.984 2.809l5.348 5.348-0.707 0.707-5.348-5.348zM19.5 3h0.5l6 7v18.009c0 1.093-0.894 1.991-1.997 1.991h-15.005c-1.107 0-1.997-0.899-1.997-2.007v-22.985c0-1.109 0.897-2.007 2.003-2.007h10.497zM19 4h-10.004c-0.55 0-0.996 0.455-0.996 0.995v23.009c0 0.55 0.455 0.995 1 0.995h15c0.552 0 1-0.445 1-0.993v-17.007h-4.002c-1.103 0-1.998-0.887-1.998-2.006v-4.994zM20 4.5v4.491c0 0.557 0.451 1.009 0.997 1.009h3.703l-4.7-5.5zM14.5 22c1.933 0 3.5-1.567 3.5-3.5s-1.567-3.5-3.5-3.5c-1.933 0-3.5 1.567-3.5 3.5s1.567 3.5 3.5 3.5v0z"></path>
                  </svg>
                  Search Sandboses
                </li>
              </div>
            </ul>
          </button>
        </div>
        <div>
          <button class="hidden lg:block text-base mr-4 text-white">
            <ul className="group hover:text-teal-500 mt-1">
              Resources
              <div className="absolute flex text-white bg-gray-800 bg-opacity-50 dropdown mt-2">
                <li className="hidden group-hover hover:text-teal-500 m-5 icon-scale">
                  <svg class="h-10 w-10" fill="#fff" viewBox="0 0 32 32">
                    <path d="M15 25.875v-19.625c0 0-2.688-2.25-6.5-2.25s-6.5 2-6.5 2v19.875c0 0 2.688-1.938 6.5-1.938s6.5 1.938 6.5 1.938zM29 25.875v-19.625c0 0-2.688-2.25-6.5-2.25s-6.5 2-6.5 2v19.875c0 0 2.688-1.938 6.5-1.938s6.5 1.938 6.5 1.938zM31 8h-1v19h-12v1h-5v-1h-12v-19h-1v20h12v1h7.062l-0.062-1h12v-20z"></path>
                  </svg>
                  Documentation
                </li>
                <li className="hidden group-hover hover:text-teal-500 m-5 icon-scale">
                  <svg class="h-10 w-10" fill="#fff" viewBox="0 0 20 20">
                    <path d="M11 9.27v-9.27l6 11-4 6h-6l-4-6 6-11v9.27c-0.602 0.352-1 0.996-1 1.732 0 1.105 0.895 2 2 2s2-0.895 2-2c0-0.736-0.398-1.38-0.991-1.727l-0.009-0.005zM6 18h8v2h-8v-2z"></path>
                  </svg>
                  Blog
                </li>
              </div>
            </ul>
          </button>
        </div>
        <div>
          <button class="hidden lg:block text-base mr-4 text-white">
            <ul className="group hover:text-teal-500 mt-1">
              Support
              <div className="absolute flex text-white bg-gray-800 bg-opacity-50 dropdown mt-2">
                <li className="hidden group-hover hover:text-teal-500 m-5 icon-scale">
                  <svg class="h-10 w-10" fill="#fff" viewBox="0 0 24 24">
                    <path d="M12.516 12.984q0-1.078 1.5-2.391t1.5-2.578q0-1.641-1.195-2.836t-2.836-1.195-2.813 1.195-1.172 2.836h2.016q0-0.797 0.586-1.406t1.383-0.609 1.406 0.609 0.609 1.406q0 0.656-0.469 1.172t-1.031 0.844-1.031 1.102-0.469 1.852h2.016zM12.516 16.5v-2.016h-2.016v2.016h2.016zM11.484 2.016q3.516 0 6.023 2.484t2.508 6q0 3.422-2.203 6.586t-5.813 4.898v-3h-0.516q-3.516 0-6-2.484t-2.484-6 2.484-6 6-2.484z"></path>
                  </svg>
                  Contact Support
                </li>
                <li className="hidden group-hover hover:text-teal-500 m-5 icon-scale">
                  <svg class="h-10 w-10" fill="#fff" viewBox="0 0 32 32">
                    <path d="M6 12h4v8h-4v-8zM22 4v24h4v-24h-4zM14 24h4v-16h-4v16z"></path>
                  </svg>
                  Status
                </li>
              </div>
            </ul>
          </button>
        </div>
        <div>
          <button class="hidden lg:block text-base mr-4 text-white">
            <p className="group hover:text-teal-500 mt-1">Pricing</p>
          </button>
        </div>
        <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div class="w-full block flex-grow hidden lg:flex">
            <button className="hover:text-teal-500">
              <svg class="h-6 w-6 mr-3" viewBox="0 0 32 32">
                <path d="M19 6h5v-6h-5c-3.86 0-7 3.14-7 7v3h-4v6h4v16h6v-16h5l1-6h-6v-3c0-0.542 0.458-1 1-1z"></path>
              </svg>
            </button>
            <button>
              <svg class="h-6 w-6 mr-3" viewBox="0 0 32 32">
                <path d="M16 0c-8.825 0-16 7.175-16 16s7.175 16 16 16 16-7.175 16-16-7.175-16-16-16zM16 29.863c-1.431 0-2.806-0.219-4.106-0.619 0.563-0.919 1.412-2.431 1.725-3.631 0.169-0.65 0.863-3.294 0.863-3.294 0.45 0.863 1.775 1.594 3.175 1.594 4.181 0 7.194-3.844 7.194-8.625 0-4.581-3.738-8.006-8.544-8.006-5.981 0-9.156 4.019-9.156 8.387 0 2.031 1.081 4.563 2.813 5.369 0.262 0.125 0.4 0.069 0.463-0.188 0.044-0.194 0.281-1.131 0.387-1.575 0.031-0.137 0.019-0.262-0.094-0.4-0.575-0.694-1.031-1.975-1.031-3.162 0-3.056 2.313-6.019 6.256-6.019 3.406 0 5.788 2.319 5.788 5.637 0 3.75-1.894 6.35-4.356 6.35-1.363 0-2.381-1.125-2.050-2.506 0.394-1.65 1.15-3.425 1.15-4.613 0-1.063-0.569-1.95-1.756-1.95-1.394 0-2.506 1.438-2.506 3.369 0 1.225 0.412 2.056 0.412 2.056s-1.375 5.806-1.625 6.887c-0.281 1.2-0.169 2.881-0.050 3.975-5.156-2.012-8.813-7.025-8.813-12.9 0-7.656 6.206-13.863 13.862-13.863s13.863 6.206 13.863 13.863c0 7.656-6.206 13.863-13.863 13.863z"></path>
              </svg>
            </button>
            <button>
              <svg class="h-6 w-6 mr-3" viewBox="0 0 32 32">
                <path d="M31.681 9.6c0 0-0.313-2.206-1.275-3.175-1.219-1.275-2.581-1.281-3.206-1.356-4.475-0.325-11.194-0.325-11.194-0.325h-0.012c0 0-6.719 0-11.194 0.325-0.625 0.075-1.987 0.081-3.206 1.356-0.963 0.969-1.269 3.175-1.269 3.175s-0.319 2.588-0.319 5.181v2.425c0 2.587 0.319 5.181 0.319 5.181s0.313 2.206 1.269 3.175c1.219 1.275 2.819 1.231 3.531 1.369 2.563 0.244 10.881 0.319 10.881 0.319s6.725-0.012 11.2-0.331c0.625-0.075 1.988-0.081 3.206-1.356 0.962-0.969 1.275-3.175 1.275-3.175s0.319-2.587 0.319-5.181v-2.425c-0.006-2.588-0.325-5.181-0.325-5.181zM12.694 20.15v-8.994l8.644 4.513-8.644 4.481z"></path>
              </svg>
            </button>
            <button>
              <svg class="h-6 w-6 mr-3" viewBox="0 0 32 32">
                <path d="M31.008 27.231l-7.58-6.447c-0.784-0.705-1.622-1.029-2.299-0.998 1.789-2.096 2.87-4.815 2.87-7.787 0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12c2.972 0 5.691-1.081 7.787-2.87-0.031 0.677 0.293 1.515 0.998 2.299l6.447 7.58c1.104 1.226 2.907 1.33 4.007 0.23s0.997-2.903-0.23-4.007zM12 20c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z"></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default menu;
