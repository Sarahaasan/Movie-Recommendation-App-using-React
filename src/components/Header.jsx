import React from 'react'
import styled from 'styled-components';
import logo from'../assets/Logo.png';
import { GoContainer } from 'react-icons/go';
import { useNavigate } from 'react-router-dom';
export default function Header(props) {
   const navigate = useNavigate();
  return (
    <Container className='flex a-center j-between' >
        <div className="logo">
            <img src={logo} alt='logo' />
        </div>
        <button onClick={()=> navigate(props.login?"/login":"/signup" ) } >
            {props.login? "LogIn": "sign In"}

        </button>




    </Container>
    
    
  )
}
const Container =styled.div`
position: absolute;
  top: 5px;
  left: 10px;

.logo{
img{
height:5rem;
   }
}

button{
padding:.5rem 1rem;
background-color: #8B44F7;
border:none;
cursor:pointer;
color:white;
border-redius:.2rem;
font-weight:bolder;
font-size:1.09rem;

}

`;