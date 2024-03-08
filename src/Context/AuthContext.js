import { useState, createContext, useContext, useEffect } from "react";
import { auth, db } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";

//Note: whenever we have a new user signup, we want it to be stored inside our cloud fireStore.
//We wanna initialize an empty array, and then if we add a new movie, it will be automatically added into
//this empty array, but by default it will be empty array.

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState({}); //user state means whether logged in or logged out

  function signUp(email, password) {

    //creating a new user with email and password
    createUserWithEmailAndPassword(auth, email, password);

    setDoc(doc(db, "users", email), {

      savedMovies: [], //We wanna initialize an empty array, and then if we add a new movie,
      //it will be automatically added into
      //this empty array, but by default it will be empty array.
      // a new empty array will initialize whenever this signup fuction will run, i.e whenever a person will signup

    });
  }

  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  function logOut() {
    return signOut(auth);
  }


  useEffect(() => {
      // check on component mount whether user is logged in or not?
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  });

  return (
    <AuthContext.Provider value={{ signUp, logIn, logOut, user }}>
      {children}
    </AuthContext.Provider>
  );
}

export function UserAuth() {
  return useContext(AuthContext);
}
