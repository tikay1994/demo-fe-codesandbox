import React from "react";

function Product(props) {
  return (
    <div className="grid grid-cols-4">
      <div className="row-start-1 row-end-3 bg-gray-800">
        <div>
          <button className="flex p-3">
            <svg class="h-10 w-10 m-5" viewBox="0 0 32 32">
              <path
                fill="#fff"
                d="M2.667 8l13.94-8 13.94 8 0.12 15.933-14.060 8.067-13.94-8zM5.451 11.308v6.343l4.46 2.48v4.688l5.296 3.061v-11.029zM27.769 11.308l-9.756 5.543v11.029l5.296-3.061v-4.685l4.46-2.481zM6.845 8.801l9.737 5.525 9.76-5.573-5.161-2.929-4.547 2.593-4.573-2.624z"
              ></path>
            </svg>
            <p className="text-2xl mt-4">| Product</p>
          </button>
        </div>
        <div className="text-center">
          <input
            type="text"
            placeholder="Search product ..."
            className="border-2 p-3 text-black"
          ></input>
        </div>
        <div className="text-center">
          <button className="bg-indigo-600 transition-all duration-300 transform hover:scale-110 p-2 rounded mt-5">
            Add to Cart
          </button>
        </div>
      </div>
      <div className="col-start-2 col-end-5 bg-gray-500">
        <div className="flex justify-between p-12">
          <div className="">Cart(0)</div>
          <div>IMG</div>
        </div>
      </div>
      <div className="col-start-2 col-end-5">
        <div className="grid grid-cols-3 text-center text-white">
          <div className="bg-gray-700 m-4 rounded">
            <div className="flex justify-center p-4">
              <img src="https://picsum.photos/200/300" />
            </div>
            <div className="flex justify-between p-4">
              <div className="p-2">Product Name</div>
              <div>
                <button className="bg-indigo-500 p-2 rounded">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
          <div className="bg-gray-700 m-4 rounded">
            <div className="flex justify-center p-4">
              <img src="https://picsum.photos/200/300" />
            </div>
            <div className="flex justify-between p-4">
              <div className="p-2">Product Name</div>
              <div>
                <button className="bg-indigo-500 p-2 rounded">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
          <div className="bg-gray-700 m-4 rounded">
            <div className="flex justify-center p-4">
              <img src="https://picsum.photos/200/300" />
            </div>
            <div className="flex justify-between p-4">
              <div className="p-2">Product Name</div>
              <div>
                <button className="bg-indigo-500 p-2 rounded">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
          <div className="bg-gray-700 m-4 rounded">
            <div className="flex justify-center p-4">
              <img src="https://picsum.photos/200/300" />
            </div>
            <div className="flex justify-between p-4">
              <div className="p-2">Product Name</div>
              <div>
                <button className="bg-indigo-500 p-2 rounded">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
          <div className="bg-gray-700 m-4 rounded">
            <div className="flex justify-center p-4">
              <img src="https://picsum.photos/200/300" />
            </div>
            <div className="flex justify-between p-4">
              <div className="p-2">Product Name</div>
              <div>
                <button className="bg-indigo-500 p-2 rounded">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
          <div className="bg-gray-700 m-4 rounded">
            <div className="flex justify-center p-4">
              <img src="https://picsum.photos/200/300" />
            </div>
            <div className="flex justify-between p-4">
              <div className="p-2">Product Name</div>
              <div>
                <button className="bg-indigo-500 p-2 rounded">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
