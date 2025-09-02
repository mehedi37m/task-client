import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";
import axios from "axios";

// import axios from "axios";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // console.log(user)

  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const updateUserProfile = (name, photo, number) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
      phoneNumber: number,
    });
  };

  const updateProfilePhoto = (photo) => {
    return updateProfile(auth.currentUser, {
      photoURL: photo,
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      const userEmail = currentUser?.email || user?.email;
      const loggedUser = { email: userEmail };
      setUser(currentUser);
      // console.log('current user', currentUser);
      setLoading(false);
      // if user exists then issue a token
      // if (currentUser) {
      //     axios.post('https://parcel-management-server-sigma.vercel.app/jwt', loggedUser, { withCredentials: true })
      //         .then(res => {
      //             console.log('token response', res.data);
      //         })
      // }
      // else {
      //     axios.post('https://parcel-management-server-sigma.vercel.app/logout', loggedUser, {
      //         withCredentials: true
      //     })
      //         .then(res => {
      //             console.log(res.data);
      //         })
      // }
    });
    return () => {
      return unsubscribe();
    };
  }, []);

  const authInfo = {
    signInWithGoogle,
    user,
    loading,
    createUser,
    signIn,
    logOut,
    setUser,
    setLoading,
    updateUserProfile,
    updateProfilePhoto,
  };
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
