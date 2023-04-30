import React, { useState } from "react";
import { Nav, Navbar, Container, NavLink, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext.js";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  async function handleLogout() {
    setError("");
    try {
      await logout();
      navigate("/login");
    } catch {
      setError("Failed to log out");
    }
  }

  function SignedIn() {
    return (
      <>
      <NavLink href="/create-post">Create Post</NavLink>
        <NavLink href="/update-profile">{currentUser.displayName || currentUser.email}</NavLink>
        <NavLink onClick={handleLogout}>Log Out</NavLink>
      </>
    );
  }

  function SignedOut() {
    return 
  }

  
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container className="HeaderContainer">
          <Navbar.Brand href="/">Social Handler</Navbar.Brand>
          <Nav>{currentUser ? <SignedIn /> : <SignedOut />}</Nav>
        </Container>
      </Navbar>
      {error && <Alert variant="danger">{error}</Alert>}
    </>
  );
}
