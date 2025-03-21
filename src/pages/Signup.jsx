import React, { useState } from "react";
import styled from "styled-components";
import BackgroundImage from "../components/BackgroundImage";
import Switch from "react-switch";
import { Link } from "react-router-dom";

export default function Signup() {
  const [checked, setChecked] = useState(false);

  return (
    <Container>
      <BackgroundImage />
      <SignupForm>
        <WelcomeSection>
          <h2>Join Us!</h2>
          <p className="label">
            Create an account and start your journey today!
          </p>
        </WelcomeSection>
        <FormCard>
          <div className="form">
            <label className="label" htmlFor="full-name">
              Full Name
            </label>
            <input type="text" id="full-name" placeholder="Your full name" />

            <label className="label" htmlFor="email">
              Email
            </label>
            <input type="email" id="email" placeholder="Your email address" />

            <label className="label" htmlFor="password">
              Password
            </label>
            <input type="password" id="password" placeholder="Your password" />

            <label className="label" htmlFor="confirm-password">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirm-password"
              placeholder="Confirm your password"
            />

            <div className="remember-me">
              <Switch
                onChange={setChecked}
                checked={checked}
                onColor="#8B44F7"
                offColor="#C4C4C4"
                uncheckedIcon={false}
                checkedIcon={false}
                height={24}
                width={48}
                handleDiameter={20}
              />
              <label htmlFor="terms">
                I agree to the <a href="#">Terms & Conditions</a>
              </label>
            </div>

            <button>SIGN UP</button>
            <p className="sign-up">
              Already have an account? <Link to="/login">Log in</Link>
            </p>
          </div>
        </FormCard>
      </SignupForm>
    </Container>
  );
}

const Container = styled.div`
  display: flex;s
  width: 100vw;
  height: 100vh;
`;

const SignupForm = styled.div`
  width: 80%;
  height: 100vh;
  background: #1a032a;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const WelcomeSection = styled.div`
  text-align: center;
  margin-bottom: 90px;

  h2 {
    font-size: 5rem;
    margin-bottom: 10px;
    color: #ffffff;
  }

  .label {
    font-size: 1.5rem;
    color: #c4c4c4;
  }
`;

const FormCard = styled.div`
  background: #2b1a3c;
  padding: 60px;
  border-radius: 30px;
  text-align: center;
  width: 90%;
  color: #ffffff;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);

  .label {
    font-size: 1.4rem;
    text-align: left;
    margin-bottom: 5px;
  }

  .sub-label {
    font-size: 1rem;
    text-align: left;
    margin-bottom: 20px;
    color: #c4c4c4;
  }

  .form {
    display: flex;
    flex-direction: column;
  }

  label {
    text-align: left;
    margin-bottom: 5px;
    font-size: 0.9rem;
    color: #c4c4c4;
  }

  input {
    font-size: 1.1rem;
    background: rgba(33, 37, 50, 0.7);
    border: 1px solid #3b0f50;
    padding: 18px 16px;
    margin: 8px 0;
    color: #ffffff;
    border-radius: 8px;
  }

  button {
    font-size: 1.1rem;
    background: linear-gradient(to bottom, #8b44f7, #6a34c7);
    padding: 18px;
    border: none;
    color: #ffffff;
    cursor: pointer;
    border-radius: 8px;
    margin-top: 15px;
    text-transform: uppercase;
    font-weight: bold;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  a {
    color: #8b44f7;
    text-decoration: none;
  }

  .remember-me {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 16px;
    margin-top: 10px;
    color: #c4c4c4;
  }

  .sign-up {
    margin-top: 20px;
    font-size: 1.1rem;
  }

  label[for="terms"] {
    text-align: left;
  }

  @media (max-width: 480px) {
    width: 95%;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;
