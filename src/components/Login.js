import React, { useRef, useState } from "react";
import Header from "./Header";
import {
  checkValidEmail,
  checkValidPassword,
  checkValidName,
} from "../utils/validate";

const Login = () => {
  const eRef = useRef(null);
  const pRef = useRef(null);
  const nameRef = useRef(null);

  const [isSignInForm, setIsSignInForm] = useState(true);

  const initialErrorMessage = {
    email: "",
    password: "",
    name: "",
  };

  const [errorMessage, setErrorMessage] = useState(initialErrorMessage);

  const toggleSignInForm = () => {
    setErrorMessage(initialErrorMessage);
    eRef.current.value = "";
    pRef.current.value = "";
    setIsSignInForm(!isSignInForm);
  };

  const validateFormData = () => {
    const validEmailResult = checkValidEmail(eRef.current.value);
    const validPasswordResult = checkValidPassword(pRef.current.value);
    let validNameResult;
    if (!isSignInForm) {
      validNameResult = checkValidName(nameRef.current.value);

      if (
        validEmailResult !== null &&
        validPasswordResult !== null &&
        validNameResult !== null
      ) {
        setErrorMessage({
          email: validEmailResult,
          password: validPasswordResult,
          name: validNameResult,
        });
        return;
      }
    } else {
      if (validEmailResult !== null && validPasswordResult !== null) {
        setErrorMessage({
          email: validEmailResult,
          password: validPasswordResult,
        });
        return;
      }
    }

    if (validEmailResult !== null) {
      setErrorMessage({ email: validEmailResult });
    }
    if (validPasswordResult !== null) {
      setErrorMessage({ password: validPasswordResult });
    }
  };

  const handleClick = () => {
    //validate form data
    validateFormData();
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
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col my-6"
        >
          {!isSignInForm && (
            <div className="flex flex-col mb-6 w-80">
              <input
                ref={nameRef}
                type="text"
                className="placeholder-gray-300 pl-4 py-3 rounded text-white bg-neutral-700 focus:bg-neutral-600 outline-none"
                placeholder="Name"
                onBlur={() => setErrorMessage({ name: "" })}
              />
              <p className="text-sm text-red-600 mt-1 font-medium">
                {errorMessage.name}
              </p>
            </div>
          )}
          <div className="flex flex-col mb-6 w-80">
            <input
              ref={eRef}
              type="email"
              className="placeholder-gray-300 pl-4 py-3 rounded text-white bg-neutral-700 focus:bg-neutral-600 outline-none"
              placeholder="Email"
              onBlur={() => setErrorMessage({ email: "" })}
            />
            <p className="text-sm text-red-600 mt-1 font-medium">
              {errorMessage.email}
            </p>
          </div>
          <div className="flex flex-col mb-8 w-80">
            <input
              ref={pRef}
              type="password"
              className="placeholder-gray-300 pl-4 py-3 rounded text-white bg-neutral-700 focus:bg-neutral-600 outline-none"
              placeholder="Password"
              onBlur={() => setErrorMessage({ password: "" })}
            />
            <p className="text-sm text-red-600 mt-1 font-medium break-keep">
              {errorMessage.password}
            </p>
          </div>

          <button
            className="bg-red-600 text-white p-3 rounded"
            onClick={handleClick}
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
        </form>
        <p className=" text-gray-500/75">
          {" "}
          {isSignInForm ? "New to Netflix?" : "Already a user?"}
          <span
            className="text-white cursor-pointer"
            onClick={toggleSignInForm}
          >
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
