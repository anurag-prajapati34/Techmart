import { firebaseApp } from "../utils/FirebaseApp";
import { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

import { toast } from "react-hot-toast";

const firebaseAuth = getAuth(firebaseApp);

const FirebaseAuthContext = createContext();

const FirebaseAuthContextProvider = ({ children }) => {
  const [logedInUser, setLogedInUser] = useState(null);

  const registerUserWithEmailAndPassword = async (email, password) => {
    try {
      const user = await createUserWithEmailAndPassword(
        firebaseAuth,
        email,
        password
      )
        .then(async (usr) => {
          const { uid } = usr.user;
          console.log("Registered user:", uid);
          if (user) {
            toast.success("User registered !");
          }
        })
        .catch((error) => {
          console.log("Error registering user", error);

          toast.error("Invalid input !");
        });
    } catch (error) {
      toast.error("Error registering user !");
    }
  };

  const loginUserWithEmailAndPassword = async (email, password) => {

    try {
      const user = await signInWithEmailAndPassword(
        firebaseAuth,
        email,
        password
      );
      if (user) {
       

        toast.success("Logined Successfully !");
      } else {
        toast.error("Wrong Email or Password");
      }
    } catch (error) {
      toast.error("Wrong Email or Password");
    }
  };
  const logOut = async () => {
    await signOut(firebaseAuth)
      .then(() => toast.success("Logout successfully !"))
      .catch(() => toast.error("Error logOuting user"));
  };

  useEffect(() => {
    const logedInUser = onAuthStateChanged(firebaseAuth, (user) => {
     
      setLogedInUser(user);
    });
  }, []);

  return (
    <FirebaseAuthContext.Provider
      value={{
        registerUserWithEmailAndPassword,
        loginUserWithEmailAndPassword,
        logedInUser,
        logOut,
      }}
    >
      {children}
    </FirebaseAuthContext.Provider>
  );
};
export { FirebaseAuthContext, FirebaseAuthContextProvider };
