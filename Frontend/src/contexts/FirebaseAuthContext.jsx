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
    const id=toast.loading("Registering...")
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

toast.success("User Registered successfully",{id:id});
addUserToDB(uid);
       
      }



    } catch (error) {
      toast.error("Error registering user ",{id:id});
    }
  };

  const loginUserWithEmailAndPassword = async (email, password) => {
    const id=toast.loading("Loging in...")
    try {
      const user = await signInWithEmailAndPassword(
        firebaseAuth,
        email,
        password
      )
        .then((user) => {
          if (user) {
            toast.success("User logined successfully ",{id:id});
          }
        })
        .catch((error) => {
          console.log("Error login user:", error);
        });
    } catch (error) {
      toast.error("Wrong Email or Password",{id:id});
    }
  };
  const resetPassword=async(email)=>{
    const id=toast.loading("Processing...")
    const result=await sendPasswordResetEmail(firebaseAuth,email).then((user)=>{
    
        toast.success("Passwod reset email sent",{id:id})
     
    }).catch((err)=>{
      toast.error("Unexpected error",{id:id});
      console.log("error reseting password",err)
    })
  }
  const logOut = async () => {
    const id=toast.loading("Loging out...")
    await signOut(firebaseAuth)
      .then(() => toast.success("Logout done",{id:id}))
      .catch(() => toast.error("Unexpected error",{id:id}));
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
