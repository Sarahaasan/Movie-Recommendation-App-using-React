import React, { useState } from 'react';
import styled from 'styled-components';
import BackGround from '../components/BackGround';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged, createUserWithEmailAndPassword } from 'firebase/auth';
import { firebaseAuth } from '../utils/firebase-config';

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({ email: "", password: "" });

  const handleSignIn = async () => {
    try {
      const { email, password } = formValues;
      await createUserWithEmailAndPassword(firebaseAuth, email, password);
    } catch (err) {
      console.log(err);
    }
  };

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) navigate('/');
  });

  return (
    <Container showPassword={showPassword}>
      <BackGround />
      <div className="content">
        <Header login />

        <div className="body flex column a-center j-center">
          <div className="text flex column">
            <h1>Unlimited Movies, TV shows and more</h1>
            <h4>Watch anytime. Cancel anytime.</h4>
            <h6>Ready to watch? Enter your email to create or restart your membership.</h6>
          </div>

          <div className="form">
            <input
              type="email"
              placeholder="Your email address"
              name="email"
              value={formValues.email}
              onChange={(e) =>
                setFormValues({ ...formValues, [e.target.name]: e.target.value })
              }
            />
            {showPassword && (
              <input
                type="password"
                placeholder="Your Password"
                name="password"
                value={formValues.password}
                onChange={(e) =>
                  setFormValues({ ...formValues, [e.target.name]: e.target.value })
                }
              />
            )}
            {!showPassword && (
              <button onClick={() => setShowPassword(true)}>Get Started</button>
            )}
          </div>

          {showPassword && (
            <button onClick={handleSignIn}>Signup</button>
          )}
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  position: relative;

  .content { 
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(36, 36, 36, 0.35);
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-rows: 100vh 80vh;
    color:white;

    .body {
      gap: 1rem;

      .text {
        gap: 1rem;
        text-align: center;
        font-size: 2rem;

        h1 {
          padding: 0 10rem;
        }
      }

      .form {
        display: grid;
        grid-template-columns: ${({ showPassword }) => (showPassword ? '1fr 1fr' : '2fr 1fr')};
        width: 40%;

        input {
          color: black;
          border: 1px solid black;
          padding: 1.5rem;
          font-size: 1.2rem;

          &:focus {
            outline: none;
          }
        }

        button {
          padding: 0.5rem 1rem;
          background-color: #8b44f7;
          border: none;
          cursor: pointer;
          color: white;
          font-weight: bolder;
          font-size: 1.09rem;
        }
      }

      button {
        margin-top: 1rem;
        padding: 0.5rem 1rem;
        background-color: #8b44f7;
        border: none;
        cursor: pointer;
        color: white;
        border-radius: 0.2rem;
        font-weight: bolder;
        font-size: 1.09rem;
      }
    }
  }
`;
