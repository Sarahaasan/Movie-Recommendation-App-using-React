import React, { useState } from "react";
import styled from "styled-components";
import SideBar from "./componants/sidebar";
import SearchBar from "./componants/searchNav";
import MovieCard from "./componants/card";

export default function Movie() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Container>
        <Side>
          <SideBar />
        </Side>
        <Body>
          <SearchBar />
          <MovieCard />
        </Body>
      </Container>
      <p>ggggggggggg</p>
    </>
  );
}

const Container = styled.div`
  display: flex;
`;

const Side = styled.div`
  max-width: 250px;
  background-image: linear-gradient(to right, #1c1f32, #1c1f32);
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  overflow-y: auto;
  color: #747786;
  padding: 10px;

  &.closed {
    width: 60px;
    overflow: hidden;
  }

  li {
    list-style: none;
    font-size: 22px;
    margin: 27px 0px;
  }

  a {
    text-decoration: none;
    color: #989ca6;
  }

  li:hover,
  h2:hover {
    color: #7b35a7;
    a {
      color: #7b35a7;
    }
  }

  @media (max-width: 768px) {
    width: 60px;
    li {
      font-size: 18px;
      text-align: center;
    }
  }

  @media (min-width: 1024px) {
    width: 250px;
  }
`;

const Body = styled.div`
  width: 100%;
`;

const Nav = styled.div`
  height: 60px;
  background-color: rgba(40, 42, 63, 255);
  display: flex;
  align-items: center;
  padding: 0 20px;
  width: 100vw;
  justify-content: center;
`;

const SearchBox = styled.div`
  position: relative;
  width: 590px;

  input {
    border: 1px solid #474754;
    width: 100%;
    border-radius: 20px;
    outline: none;
    background-color: #282a3f;
    height: 50px;
    padding: 0px 39px;
    color: white;
  }

  .search-icon {
    position: absolute;
    left: 15px;
    top: 50%;
    transform: translateY(-50%);
    color: #989ca6;
    font-size: 20px;
  }

  @media (max-width: 768px) {
    max-width: 90%;
  }

  @media (min-width: 1024px) {
    max-width: 590px;
  }
`;
