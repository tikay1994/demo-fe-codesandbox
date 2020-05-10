import React from "react";

function Login(props) {
  //   const { onSubmit } = props;
  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");

  //   function handleEmailChange(e) {
  //     setEmail(e.target.value);
  //   }

  //   function handlePasswordChange(e) {
  //     setPassword(e.target.value);
  //   }

  //   function handleSubmit(e) {
  //     e.preventDefault();
  //     var myHeaders = new Headers();
  //     myHeaders.append("Content-Type", "application/json");

  //     var raw = JSON.stringify({ email, password });

  //     var requestOptions = {
  //       method: "POST",
  //       headers: myHeaders,
  //       body: raw,
  //       redirect: "follow",
  //     };

  //     fetch("http://localhost:3000/auth/login", requestOptions)
  //       .then((response) => response.text())
  //       .then((result) => {
  //         //todo
  //         console.log(result);
  //         if (result) {
  //           setContex.authem = true;
  //         }
  //       })
  //       .catch((error) => console.log("error", error));
  //   }

  return (
    <div className="container mx-auto p-8 flex component-transition">
      <div className="max-w-md w-full mx-auto">
        <h1 className="w-48 mx-auto pt-6 border-b-2 border-indigo-500 text-center text-4xl text-indigo-500 font-bold">
          LOGIN
        </h1>

        <div
          className="rounded-lg overflow-hidden shadow-2xl"
          style={{
            backgroundImage:
              "url(https://lh3.googleusercontent.com/proxy/LE-244xZ-m2FmVzHRbeI4vJNF3BcZUg-ztR2r34i-Vn_mQNzjSypWRI0xTNq3PQ8Pja-aWtKVIN42vUGaOQvbkVKiBA1vBxiLN1CA_--vf4dte7RfMwZZ02vJxAcjQyVTCxKLg)",
          }}
        >
          <div className="p-8 text-center">
            <form method="POST" className="">
              <div className="mb-5">
                <label
                  for="email"
                  className="block mb-2 text-sm font-medium text-white"
                >
                  Username Or Email
                </label>
                <input
                  type="text"
                  name="email"
                  className="block w-full p-3 rounded bg-gray-200 border border-transparent focus:outline-none"
                  placeholder="Username Or Email"
                />
              </div>
              <div className="mb-5">
                <label
                  for="password"
                  className="block mb-2 text-sm font-medium text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  className="block w-full p-3 rounded bg-gray-200 border border-transparent focus:outline-none"
                  placeholder="Password"
                />
              </div>
              <button className="w-full p-3 mt-4 bg-indigo-600 text-white rounded shadow">
                Login
              </button>
            </form>
          </div>
          <div className="flex justify-between p-8 text-sm border-t border-gray-300 bg-gray-200">
            <a href="#" className="font-medium text-indigo-500">
              Register
            </a>
            <a href="#" className="text-gray-600">
              Forgot password?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
