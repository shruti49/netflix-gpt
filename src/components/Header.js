import React, { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };
  return (
    <div className="absolute w-full bg-gradient-to-b from-black/60 flex justify-between items-center px-6">
      <img
        src="Netflix_Logo_PMS.png"
        alt="logo-img"
        className="w-52 text-red-600"
      />
      <div className="" onClick={() => setShowDropdown(!showDropdown)}>
        <img
          src="Netflix_Avatar.png"
          alt="avatar-img"
          className="w-10 h-10 mr-6"
        />
      </div>
      {showDropdown && (
        <div className="bg-white w-40 h-14 absolute right-12 top-16 p-4">
          <p className="text-black cursor-pointer" onClick={handleSignOut}>
            Sign Out
          </p>
        </div>
      )}
    </div>
  );
};

export default Header;
