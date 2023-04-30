import React from "react";
import Signup from "./Signup.js";
import { Container } from "react-bootstrap";
import { AuthProvider } from "../contexts/AuthContext.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard.js";
import Login from "./Login.js";
import PrivateRoute from "./PrivateRoute.js";
import ForgotPassword from "./ForgotPassword.js";
import UpdateProfile from "./UpdateProfile.js";
import Header from "../headers/Header.js";
import CreatePost from "./CreatePost.js"

function App() {
  return (
    <>
      <Container className="appContainer">
        <Router>
          <AuthProvider>
            <Header />
            <div className="routes">
              <Routes>
                <Route exact path="/" element={<PrivateRoute />}>
                  <Route exact path="/" element={<Dashboard />} />
                </Route>
                <Route exact path="/create-post" element={<PrivateRoute />}>
                  <Route exact path="/create-post" element={<CreatePost />} />
                </Route>
                <Route path="/update-profile" element={<PrivateRoute />}>
                  <Route path="/update-profile" element={<UpdateProfile />} />
                </Route>
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
              </Routes>
            </div>
          </AuthProvider>
        </Router>
      </Container>
    </>
  );
}

export default App;
