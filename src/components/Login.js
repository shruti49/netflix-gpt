import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="overflow-hidden relative">
      <Header />
      <div className="w-max bg-cover -z-1">
        <img
          src="Netflix_Background.jpg"
          alt="background-img"
          className="min-h-screen"
        />
      </div>
      <div className="w-full h-full bg-black/50 z-0 absolute top-0"></div>
      <div className="absolute min-w-[450px] h-screen bg-black/75 ml-auto mr-auto left-1/3 bottom-0 top-24 p-16 mb-24 rounded">
        <h1 className="text-white text-[32px] font-medium">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        <form action="" className="flex flex-col my-6">
          {!isSignInForm && (
            <input
              type="text"
              className="placeholder-gray-300 pl-4 py-3 rounded text-white bg-neutral-700 focus:bg-neutral-600 outline-none mb-6"
              placeholder="Name"
            />
          )}

          <input
            type="email"
            className="placeholder-gray-300 pl-4 py-3 rounded text-white bg-neutral-700 focus:bg-neutral-600 outline-none mb-6"
            placeholder="Email"
          />
          <input
            type="password"
            className="placeholder-gray-300 pl-4 py-3 rounded text-white bg-neutral-700 focus:bg-neutral-600 outline-none mb-8"
            placeholder="Password"
          />
          <button className="bg-red-600 text-white p-3 rounded">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
        </form>
        <p className=" text-gray-500/75" onClick={toggleSignInForm}>
          {" "}
          {isSignInForm ? "New to Netflix?" : "Already a user?"}
          <span className="text-white cursor-pointer">
            {"  "}
            {isSignInForm ? "Sign Up Now" : "Sign In"}.
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;

// <div
//   className="w-full h-screen"
//   style={{
//     backgroundImage: `url(Netflix_Background.jpg)`,
//   }}
// >
// </div>
