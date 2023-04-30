import React, { useRef, useState, useEffect } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext.js";
import { Link, useNavigate } from "react-router-dom";

export default function UpdateProfile() {
const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  const { currentUser, UpdateEmail, UpdatePassword, uploadUsername, uploadProfilePic } = useAuth();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const [photoURL, setPhotoURL] = useState("https://imgs.search.brave.com/Y61c9jRwIkLPF29tFBF212oqdWjSIY6LqfYjMTLjgOI/rs:fit:512:512:1/g:ce/aHR0cDovL2dldGRy/YXdpbmdzLmNvbS9m/cmVlLWljb24tYncv/Z2VuZXJpYy1hdmF0/YXItaWNvbi0zLnBu/Zw")
  const [photo, setPhoto] = useState(null)

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    const promises = [];
    setLoading(true);
    setError("");
    if (emailRef.current.value !== currentUser.email) {
      promises.push(UpdateEmail(emailRef.current.value));
    }
    if (passwordRef.current.value) {
      promises.push(UpdatePassword(passwordRef.current.value));
    }
    if (photo !== currentUser.photoURL && photo !== null) {
        promises.push(uploadProfilePic(photo))
    }
    if (usernameRef.current.value !== currentUser.displayName && usernameRef.current.value !== "") {
      promises.push(uploadUsername(usernameRef.current.value))
    }

    Promise.all(promises)
      .then(() => {
        navigate("/");
      })
      .catch(() => {
        setError("Failed to update account");
      })
      .finally(() => {
        setLoading(false);
      });
  }

  function handleChange(e) {
    var file = e.target.files[0]
    if(file) {
     setPhoto(file)
     setPhotoURL(URL.createObjectURL(file))
    }
 }

  useEffect(() => {
    if (currentUser.photoURL) {
      console.log(currentUser.photoURL)
        setPhotoURL(currentUser.photoURL)
    }
    
}, [currentUser])
  return (
    <>
      <div className="updt">
        <Card>
          <Card.Body>
            <h2 className="text-center mb-4">Update Profile</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>

            <div id="avatarContent">
                <label htmlFor="image">
                <input type="file" onChange={handleChange} name="image" id="image"/>
            <img src={photoURL} alt="Avatar" className="avatar"/>
                
            </label>
            </div>

            <Form.Group id="username">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  ref={usernameRef}
                  placeholder={currentUser.displayName || "Enter a username"}
                />
              </Form.Group>
              <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  ref={emailRef}
                  required
                  defaultValue={currentUser.email}
                />
              </Form.Group>
              <Form.Group id="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  ref={passwordRef}
                  placeholder="Leave blank to keep the same"
                />
              </Form.Group>
              <Form.Group id="password-confirm">
                <Form.Label>Password Confirmation</Form.Label>
                <Form.Control
                  type="password"
                  ref={passwordConfirmRef}
                  placeholder="Leave blank to keep the same"
                />
              </Form.Group>
              <Button disabled={loading} className="w-100 mt-3" type="submit">
                Update
              </Button>
            </Form>
          </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
          <Link to="/">Cancel</Link>
        </div>
      </div>
    </>
  );
}
