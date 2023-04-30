import React, { useContext, useEffect, useState } from "react";
import {db, auth, storage } from "../firebase.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateEmail,
  updatePassword,
  updateProfile,
} from "firebase/auth";
import { addDoc, collection, getDocs, doc, deleteDoc } from "firebase/firestore"
import { ref, uploadBytes, getDownloadURL} from "firebase/storage";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logout() {
    return auth.signOut();
  }

  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email);
  }

  function UpdateEmail(email) {
    return updateEmail(auth.currentUser, email);
  }

  function UpdatePassword(password) {
    return updatePassword(auth.currentUser, password);
  }

  async function uploadUsername(username) {
    return updateProfile(auth.currentUser, {displayName: username})
  }

  async function uploadProfilePic(file) {
    const fileRef = ref(storage, currentUser.uid + '.png');
    const snapshot = await uploadBytes(fileRef, file);
    const photoURL = await getDownloadURL(fileRef)
    return updateProfile(auth.currentUser, {photoURL: photoURL})
  }

  async function createPost(title, postText) {
    const postsCollectionRef = collection(db, "posts")
    await addDoc(postsCollectionRef, {title, postText, author:{name: currentUser.displayName, id: currentUser.uid}})
    
  }

  async function getPosts() {
    const postsCollectionRef = collection(db, "posts")
    const data = await getDocs(postsCollectionRef)
    return data

  }

  async function deletePost(id) {
    const postDoc = doc(db, "posts", id)
    await deleteDoc(postDoc)
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    login,
    signup,
    logout,
    resetPassword,
    UpdateEmail,
    UpdatePassword,
    uploadUsername,
    uploadProfilePic,
    createPost,
    getPosts,
    deletePost
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}