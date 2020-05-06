import React from "react";

function footer(props) {
  return (
    <div className="border-t text-white mx-40">
      <div className="grid grid-cols-5">
        <ul>
          Product
          <li className="opacity-50">Online IDE</li>
          <li className="opacity-50">Embed</li>
          <li className="opacity-50">CodeSandbox CI</li>
          <li className="opacity-50">Teams</li>
          <li className="opacity-50">What's New</li>
        </ul>
        <ul>
          Explore
          <li className="opacity-50">Featured Sandboxes</li>
          <li className="opacity-50">Search Sandboxes</li>
        </ul>
        <ul>
          Use Cases
          <li className="opacity-50">Prototyping</li>
          <li className="opacity-50">Learning</li>
          <li className="opacity-50">Hiring</li>
          <li className="opacity-50">Onboarding</li>
          <li className="opacity-50">Collaboration</li>
          <li className="opacity-50">Open Source</li>
          <li className="opacity-50">DevRel</li>
        </ul>
        <ul>
          About
          <li className="opacity-50">Company</li>
          <li className="opacity-50">Blog</li>
          <li className="opacity-50">Pricing</li>
          <li className="opacity-50">Careers</li>
          <li className="opacity-50">Legal</li>
        </ul>
        <ul>
          Support
          <li className="opacity-50">Documentation</li>
          <li className="opacity-50">Contact Support</li>
          <li className="opacity-50">Status</li>
        </ul>
      </div>
      <div className="text-center">
        <div className="flex">
          <svg class="h-10 w-10" fill="#fff" viewBox="0 0 32 32">
            <path d="M18 23l3 3 10-10-10-10-3 3 7 7z"></path>
            <path d="M14 9l-3-3-10 10 10 10 3-3-7-7z"></path>
          </svg>
          <svg class="h-10 w-10" fill="#fff" viewBox="0 0 32 32">
            <path d="M18 23l3 3 10-10-10-10-3 3 7 7z"></path>
            <path d="M14 9l-3-3-10 10 10 10 3-3-7-7z"></path>
          </svg>
        </div>
        <div>
          <p>Copyright © 2020 CodeSandbox BV</p>
        </div>
      </div>
    </div>
  );
}

export default footer;
