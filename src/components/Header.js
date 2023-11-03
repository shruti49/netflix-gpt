import React, { useState, useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../redux/UserSlice";
import { LOGO } from "../utils/constants";

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = auth.currentUser;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    //unsubscribe from onauthstatechanged when my component unmounts
    return () => unsubscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };
  return (
    <div className="absolute w-full bg-gradient-to-b from-black/60 flex justify-between items-center px-6">
      <img src={LOGO} alt="logo-img" className="w-52 text-red-600" />
      {user && (
        <div className="flex items-center">
          <p className="mr-2">{user.displayName}</p>
          <div className="" onClick={() => setShowDropdown(!showDropdown)}>
            <img
              src={user.photoURL}
              alt="avatar-img"
              className="w-10 h-10 mr-6 rounded"
            />
          </div>
        </div>
      )}
      {showDropdown && (
        <div className="bg-white w-40 h-14 absolute right-12 top-16 p-4">
          <p
            className="text-black cursor-pointer text-sm"
            onClick={handleSignOut}
          >
            Sign Out Of Netflix
          </p>
        </div>
      )}
    </div>
  );
};

export default Header;
