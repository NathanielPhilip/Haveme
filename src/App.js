import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import ProtectedRoute from "./components/pages/ProtectedRoute";
import { collection, onSnapshot, query, getDocs } from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import { addUsers } from "./reducers/contactReducer";
import { setUsers } from "./reducers/authReducer";
import { db } from "./components/firebase/config";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./components/firebase/config";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [contact, setContact] = useState([]);

  const users = useSelector((state) => state.auth.users);



  const dispatch = useDispatch();
  useEffect(() => {
    const newUsers = async () => {
      const q = query(collection(db, "contacts"));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const newUsersArr = [];
        querySnapshot.forEach((doc) => {
          newUsersArr.push(doc.data());
        });
        dispatch(addUsers(newUsersArr));
      });
    };

    newUsers();
  }, []);

  useEffect(() => {
    const authUsers = async () => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          dispatch(setUsers(user));
        } else {
          dispatch(setUsers(null));
        }
        console.log(user);
      });
    };

    authUsers();
  }, []);
  return (
   
    <BrowserRouter>
      <Routes>
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

