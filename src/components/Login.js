import React, { useRef, useState } from "react";
import Header from "./Header";
import {
  checkValidEmail,
  checkValidPassword,
  checkValidName,
} from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

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


  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, eRef.current.value, pRef.current.value)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log(errorCode, errorMessage);
      });
  };

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, eRef.current.value, pRef.current.value)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        navigate("/browse");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  const handleClick = () => {
    //validate form data
    const validEmailResult = checkValidEmail(eRef.current.value);
    const validPasswordResult = checkValidPassword(pRef.current.value);
    let validNameResult = null;
    if (!isSignInForm) {
      validNameResult = checkValidName(nameRef.current.value);
    }

    setErrorMessage({
      email: validEmailResult,
      password: validPasswordResult,
      name: validNameResult,
    });

    if (
      validEmailResult !== null ||
      validPasswordResult !== null ||
      validNameResult !== null
    ) {
      return;
    }

    if (!isSignInForm) {
      handleSignUp();
    } else {
      handleSignIn();
    }
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
            <div className="flex flex-col mb-6 w-80 relative">
              <input
                ref={nameRef}
                type="text"
                className={`block bg-neutral-700 rounded px-2.5 pb-2.5 pt-5 w-full text-sm text-white appearance-none focus:outline-none focus:border-b-2 border-b-2 focus:border-orange-600 peer ${
                  errorMessage.name
                    ? " border-orange-600"
                    : "border-neutral-700"
                }`}
                placeholder=" "
                onBlur={() => setErrorMessage({ name: "" })}
              />
              <label
                htmlFor="floating_filled"
                className="absolute text-sm text-gray-300 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-gray-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
              >
                Full Name
              </label>
              <p className="text-sm text-orange-600 mt-1 font-medium">
                {errorMessage.name}
              </p>
            </div>
          )}
          <div className="flex flex-col mb-6 w-80 relative">
            <input
              ref={eRef}
              type="email"
              className={`block bg-neutral-700 rounded px-2.5 pb-2.5 pt-5 w-full text-sm text-white appearance-none focus:outline-none focus:border-b-2 border-b-2 focus:border-orange-600 peer ${
                errorMessage.email ? " border-orange-600" : "border-neutral-700"
              }`}
              placeholder=" "
              onBlur={() => setErrorMessage({ email: "" })}
            />
            <label
              htmlFor="floating_filled"
              className="absolute text-sm text-gray-300 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-gray-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
            >
              Email
            </label>
            <p className="text-sm text-orange-600 mt-1 font-medium">
              {errorMessage.email}
            </p>
          </div>
          <div className="flex flex-col mb-6 w-80 relative">
            <input
              ref={pRef}
              id="floating_filled"
              type="password"
              className={`block bg-neutral-700 rounded px-2.5 pb-2.5 pt-5 w-full text-sm text-white appearance-none focus:outline-none focus:border-b-2 border-b-2 focus:border-orange-600 peer ${
                errorMessage.password
                  ? " border-orange-600"
                  : "border-neutral-700"
              }`}
              placeholder=" "
              onBlur={() => setErrorMessage({ password: "" })}
            />
            <label
              htmlFor="floating_filled"
              className="absolute text-sm text-gray-300 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-gray-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
            >
              Password
            </label>
            <p className="text-sm text-orange-600 mt-1 font-medium break-keep">
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
