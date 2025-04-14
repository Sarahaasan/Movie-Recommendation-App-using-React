import React, { useState } from 'react';
import styled from 'styled-components';
import Logo from '../assets/Logo.png' ;
import BackGround from '../components/BackGround';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { firebaseAuth } from '../utils/firebase-config';

export default function Login() {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({ email: "", password: "" });

  const handleLogIn = async () => {
    try {
      const { email, password } = formValues;
      await signInWithEmailAndPassword(firebaseAuth, email, password);
    } catch (err) {
      console.log(err);
    }
  };

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) navigate('/');
  });

  return (
    <Container>
      <BackGround />
      <div className="content">
        <div className="logo">
         <img src={Logo} alt="Logo" />
         </div>
        <div className="form-container flex column a-center j-center">
          <div className="form flex column a-center j-center">
            <div className="title">
              <h3>Login</h3>
            </div>
            <div className="container flex column">
              <input
                type="email"
                placeholder="Your email address"
                name="email"
                value={formValues.email}
                onChange={(e) =>
                  setFormValues({ ...formValues, [e.target.name]: e.target.value })
                }
              />
              <input
                type="password"
                placeholder="Your Password"
                name="password"
                value={formValues.password}
                onChange={(e) =>
                  setFormValues({ ...formValues, [e.target.name]: e.target.value })
                }
              />
              <button onClick={handleLogIn}>Login</button>
            </div>
          </div>
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
    grid-template-rows: 15vh 85vh;


    .logo {
  position: absolute;
  top: 1rem;
  left: 2rem;

  img {
    height: 6rem;
    object-fit: contain;
    }
     }

    .form-container {
      gap: 2rem;
      height: 80vh;

      .form {
        padding: 2rem;
        background-color: #000000b0;
        width: 25vw;
        gap: 2rem;
        color: white;

        .container {
          gap: 2rem;

          input {
            padding: 0.5rem 1rem;
            width: 15rem;
            font-size: 1rem;
          }

          button {
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
    }
  }
`;
