import React from "react";
import Header from "./Header";

const Login = () => {
  return (
    <div className="overflow-hidden relative">
      <Header />
      <div className="w-max  bg-cover -z-1">
        <img src="Netflix_Background.jpg" alt="background-img" className="min-h-screen" />
      </div>
      <div className="w-full h-full bg-black/50 z-0 absolute top-0"></div>
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
