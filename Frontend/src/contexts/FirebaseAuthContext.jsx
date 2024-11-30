import { firebaseApp } from "../utils/FirebaseApp";
import { createContext, useContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  sendPasswordResetEmail,
  updateProfile
} from "firebase/auth";
import { addUserToDB } from "../utils/addUserToDB";
import { toast } from "react-hot-toast";

const firebaseAuth = getAuth(firebaseApp);

const FirebaseAuthContext = createContext();

const FirebaseAuthContextProvider = ({ children }) => {
  const [logedInUser, setLogedInUser] = useState(null);
  const SERVER_URL = import.meta.env.VITE_SERVER_URL;
  const registerUserWithEmailAndPassword = async (email, password,name) => {
    try {
      const user = await createUserWithEmailAndPassword(
        firebaseAuth,
        email,
        password
      );

      if (user) {
        const { uid } = user.user;
const currentUserIs=firebaseAuth.currentUser;
const updatedUser=updateProfile(currentUserIs,{displayName:name})

toast.success("User successfully Registered  !");
addUserToDB(uid);
       
      }



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
      )
        .then((user) => {
          if (user) {
            toast.success("User logined successfully !");
          }
        })
        .catch((error) => {
          console.log("Error login user:", error);
        });
    } catch (error) {
      toast.error("Wrong Email or Password");
    }
  };
  const resetPassword=async(email)=>{
console.log("email to resent password:",email)
    const result=await sendPasswordResetEmail(firebaseAuth,email).then((user)=>{
    
        toast.success("Passwod reset email sent")
     
    }).catch((err)=>{
      toast.error("Unexpected error");
      console.log("error reseting password",err)
    })
  }
  const logOut = async () => {
    await signOut(firebaseAuth)
      .then(() => toast.success("UserLogout successfully !"))
      .catch(() => toast.error("Unexpected error"));
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
        resetPassword
      }}
    >
      {children}
    </FirebaseAuthContext.Provider>
  );
};
export { FirebaseAuthContext, FirebaseAuthContextProvider };
