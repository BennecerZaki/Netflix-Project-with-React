import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { Form } from "../components";
import { BROWSE, SIGNIN } from "../constants/routes";
import { FooterContainer, HeaderContainer } from "../containers";
import { FirebaseContext } from "../context/firebase";

export default function SignUp() {
  const history = useHistory();

  const { firebase } = useContext(FirebaseContext);

  const [firstName, setFirstName] = useState("");
  const [emailAdress, setEmailAdress] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const isInvalid = firstName === "" || password === "" || emailAdress === "";

  const handleSignIn = (e) => {
    e.preventDefault();

    firebase
      .auth()
      .createUserWithEmailAndPassword(emailAdress, password)
      .then((result) =>
        result.user
          .updateProfile({
            displayName: firstName,
            photoURL: Math.floor(Math.random() * 5) + 1,
          })
          .then(() => {
            history.push(BROWSE);
          })
      )
      .catch((error) => {
        setFirstName("");
        setEmailAdress("");
        setPassword("");
        setError(error.message);
      });
  };

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign Up</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}

          <Form.Base onSubmit={handleSignIn} method="POST">
            <Form.Input
              type="text"
              required
              placeholder="First name"
              value={firstName}
              onChange={({ target }) => setFirstName(target.value)}
            />
            <Form.Input
              type="email"
              required
              placeholder="Email address"
              value={emailAdress}
              onChange={({ target }) => setEmailAdress(target.value)}
            />
            <Form.Input
              placeholder="password"
              value={password}
              required
              autoComplete="off"
              type="password"
              onChange={({ target }) => setPassword(target.value)}
            />
            <Form.Submit disabled={isInvalid} type="submit">
              Sign In
            </Form.Submit>
          </Form.Base>

          <Form.Text>
            Already a user ? <Form.Link to={SIGNIN}>Sign in now!</Form.Link>
          </Form.Text>

          <Form.TextSmall>
            This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.
          </Form.TextSmall>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
}
