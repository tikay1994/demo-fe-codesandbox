import React from "react";

function footer(props) {
  const listMenuFooter = [
    {
      Name: "Product",
      ListChildren: [
        { name: "Online IDE" },
        { name: "Embed" },
        { name: "CodeSandbox CI" },
        { name: "Teams" },
        { name: "What's New" },
      ],
    },
    {
      Name: "Explore",
      ListChildren: [
        { name: "Featured Sandboxes" },
        { name: "Search Sandboxes" },
      ],
    },
    {
      Name: "Use Cases",
      ListChildren: [
        { name: "Prototyping" },
        { name: "Learning" },
        { name: "Hiring" },
        { name: "Onboarding" },
        { name: "Collaboration" },
        { name: "Open Source" },
        { name: "DevRel" },
      ],
    },
    {
      Name: "About",
      ListChildren: [
        { name: "Company" },
        { name: "Blog" },
        { name: "Pricing" },
        { name: "Careers" },
        { name: "Legal" },
      ],
    },
    {
      Name: "Support",
      ListChildren: [
        { name: "Documentation" },
        { name: "Contact Support" },
        { name: "Status" },
      ],
    },
  ];

  const iconContact = [
    {
      img:
        "M12 2c6.625 0 12 5.375 12 12 0 5.297-3.437 9.797-8.203 11.391-0.609 0.109-0.828-0.266-0.828-0.578 0-0.391 0.016-1.687 0.016-3.297 0-1.125-0.375-1.844-0.812-2.219 2.672-0.297 5.484-1.313 5.484-5.922 0-1.313-0.469-2.375-1.234-3.219 0.125-0.313 0.531-1.531-0.125-3.187-1-0.313-3.297 1.234-3.297 1.234-0.953-0.266-1.984-0.406-3-0.406s-2.047 0.141-3 0.406c0 0-2.297-1.547-3.297-1.234-0.656 1.656-0.25 2.875-0.125 3.187-0.766 0.844-1.234 1.906-1.234 3.219 0 4.594 2.797 5.625 5.469 5.922-0.344 0.313-0.656 0.844-0.766 1.609-0.688 0.313-2.438 0.844-3.484-1-0.656-1.141-1.844-1.234-1.844-1.234-1.172-0.016-0.078 0.734-0.078 0.734 0.781 0.359 1.328 1.75 1.328 1.75 0.703 2.141 4.047 1.422 4.047 1.422 0 1 0.016 1.937 0.016 2.234 0 0.313-0.219 0.688-0.828 0.578-4.766-1.594-8.203-6.094-8.203-11.391 0-6.625 5.375-12 12-12zM4.547 19.234c0.031-0.063-0.016-0.141-0.109-0.187-0.094-0.031-0.172-0.016-0.203 0.031-0.031 0.063 0.016 0.141 0.109 0.187 0.078 0.047 0.172 0.031 0.203-0.031zM5.031 19.766c0.063-0.047 0.047-0.156-0.031-0.25-0.078-0.078-0.187-0.109-0.25-0.047-0.063 0.047-0.047 0.156 0.031 0.25 0.078 0.078 0.187 0.109 0.25 0.047zM5.5 20.469c0.078-0.063 0.078-0.187 0-0.297-0.063-0.109-0.187-0.156-0.266-0.094-0.078 0.047-0.078 0.172 0 0.281s0.203 0.156 0.266 0.109zM6.156 21.125c0.063-0.063 0.031-0.203-0.063-0.297-0.109-0.109-0.25-0.125-0.313-0.047-0.078 0.063-0.047 0.203 0.063 0.297 0.109 0.109 0.25 0.125 0.313 0.047zM7.047 21.516c0.031-0.094-0.063-0.203-0.203-0.25-0.125-0.031-0.266 0.016-0.297 0.109s0.063 0.203 0.203 0.234c0.125 0.047 0.266 0 0.297-0.094zM8.031 21.594c0-0.109-0.125-0.187-0.266-0.172-0.141 0-0.25 0.078-0.25 0.172 0 0.109 0.109 0.187 0.266 0.172 0.141 0 0.25-0.078 0.25-0.172zM8.937 21.438c-0.016-0.094-0.141-0.156-0.281-0.141-0.141 0.031-0.234 0.125-0.219 0.234 0.016 0.094 0.141 0.156 0.281 0.125s0.234-0.125 0.219-0.219z",
    },
    {
      img:
        "M31.939 6.092c-1.18 0.519-2.44 0.872-3.767 1.033 1.352-0.815 2.392-2.099 2.884-3.631-1.268 0.74-2.673 1.279-4.169 1.579-1.195-1.279-2.897-2.079-4.788-2.079-3.623 0-6.56 2.937-6.56 6.556 0 0.52 0.060 1.020 0.169 1.499-5.453-0.257-10.287-2.876-13.521-6.835-0.569 0.963-0.888 2.081-0.888 3.3 0 2.28 1.16 4.284 2.917 5.461-1.076-0.035-2.088-0.331-2.971-0.821v0.081c0 3.18 2.257 5.832 5.261 6.436-0.551 0.148-1.132 0.228-1.728 0.228-0.419 0-0.82-0.040-1.221-0.115 0.841 2.604 3.26 4.503 6.139 4.556-2.24 1.759-5.079 2.807-8.136 2.807-0.52 0-1.039-0.031-1.56-0.089 2.919 1.859 6.357 2.945 10.076 2.945 12.072 0 18.665-9.995 18.665-18.648 0-0.279 0-0.56-0.020-0.84 1.281-0.919 2.4-2.080 3.28-3.397z",
    },
  ];

  return (
    <div className="border-t text-white mx-5 lg:mx-24">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {listMenuFooter.map((title, index) => (
          <ul key={index} className="text-2xl">
            {title.Name}
            {title.ListChildren.map((name, index) => (
              <li key={index} className="opacity-50 hover:opacity-100 text-sm">
                {name.name}
              </li>
            ))}
          </ul>
        ))}
      </div>
      <div className="text-center">
        <div className="flex justify-center">
          {iconContact.map((icon, index) => (
            <svg
              key={index}
              class="h-5 w-5 m-2 opacity-50 hover:opacity-100"
              fill="#fff"
              viewBox="0 0 32 32"
            >
              <path d={icon.img}></path>
            </svg>
          ))}
        </div>
        <div className="opacity-50 text-sm">
          <p>Copyright © 2020 CodeSandbox BV</p>
        </div>
      </div>
    </div>
  );
}

export default footer;
