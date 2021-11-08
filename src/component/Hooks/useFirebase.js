import firebaseAuthinit from "../Login/Firebase/firebase.init";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
  getIdToken,
} from "firebase/auth";
import { useEffect, useState } from "react";
firebaseAuthinit();

const useFirebase = () => {
  const [isLoading, setIsloading] = useState(true);
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [admin, setAdmin] = useState(false);
  const [token, setToken] = useState("");

  // auth
  const auth = getAuth();
  // google provider
  const googleProvider = new GoogleAuthProvider();

  // SignIn with google
  const googleSign = (location, history) => {
    setIsloading(true);
    const locationis = location?.state?.from || "/";
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        handleUser(user.displayName, user.email, "PUT");
        console.log(user);
        history.replace(locationis);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setIsloading(false);
      });
  };

  //register handle
  const signUpHandle = (email, password, name) => {
    setIsloading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((user) => {
        const newUser = { email, displayName: name };
        setUser(newUser);
        handleUser(name, email, "POST");
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .catch((error) => {
            console.log(error.message);
          })
          .finally(() => {});
        console.log(user);
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setIsloading(false);
      });
  };

  // getAdmin
  useEffect(() => {
    fetch(`http://localhost:5000/users/${user.email}`)
      .then((res) => res.json())
      .then((result) => {
        setAdmin(result.admin);
      });
  }, [user.email]);

  // post user
  const handleUser = (name, email, method) => {
    const user = { name, email };
    fetch("http://localhost:5000/users", {
      method: method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      })
      .catch((errro) => {
        setError(error.message);
      });
  };

  // handle login
  const logIn = (email, password, history, location) => {
    setIsloading(true);
    const locationis = location?.state?.from || "/home";
    console.log(locationis);
    signInWithEmailAndPassword(auth, email, password)
      .then((user) => {
        console.log(user);
        setError("");
        history.push(locationis);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setIsloading(false);
      });
  };

  // handle logOut
  const logOut = () => {
    setIsloading(true);
    signOut(auth)
      .then(() => {
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setIsloading(false);
      });
  };

  // On authState change [its good ]
  useEffect(() => {
    const unsubscrip = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        getIdToken(user).then((tokenId) => {
          setToken(tokenId);
        });
      } else {
        setUser({});
      }
      setIsloading(false);
    });
    return () => unsubscrip;
  }, []);

  return {
    signUpHandle,
    logOut,
    logIn,
    user,
    isLoading,
    error,
    setError,
    googleSign,
    admin,
    token,
  };
};
export default useFirebase;
