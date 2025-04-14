import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "../utils/firebase-config";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovies, getGenres } from "../store";
import SelectGenre from "../components/SelectGenre";
import Slider from "../components/Slider";

function TVShows() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchTerm, setSearchTerm] = useState(""); // Added search term state
  const movies = useSelector((state) => state.netflix.movies);
  const genres = useSelector((state) => state.netflix.genres);
  const genresLoaded = useSelector((state) => state.netflix.genresLoaded);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!genres.length) dispatch(getGenres());
  }, []);

  useEffect(() => {
    if (genresLoaded) {
      dispatch(fetchMovies({ genres, type: "tv" }));
    }
  }, [genresLoaded]);

  const [user, setUser] = useState(undefined);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, (currentUser) => {
      if (currentUser) setUser(currentUser.uid);
      else navigate("/login");
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    window.onscroll = () => {
      setIsScrolled(window.pageYOffset !== 0);
      return () => (window.onscroll = null);
    };
  }, []);

  // Filter movies based on the search term
  const filteredMovies = movies.filter((movie) =>
    movie.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container>
      <Navbar isScrolled={isScrolled} />
      <div className="data">
        <SelectGenre genres={genres} type="tv" />
        <div className="search-box">
          <input
            type="text"
            placeholder="Search TV Shows..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        {filteredMovies.length ? (
          <Slider movies={filteredMovies} /> // Use filtered movies instead
        ) : (
          <h1 className="not-available">
            No TV Shows available for the selected genre or search term.
          </h1>
        )}
      </div>
    </Container>
  );
}

const Container = styled.div`
  background-color: #000;
  color: white;
  min-height: 100vh;

  .data {
    margin-top: 8rem;
    padding: 2rem;

    .not-available {
      text-align: center;
      margin-top: 4rem;
      font-size: 1.5rem;
      color: #aaa;
    }

    .search-box {
      text-align: center;
      margin-top: 2rem;

      input {
        padding: 10px 20px;
        font-size: 1.1rem;
        width: 300px;
        border-radius: 5px;
        border: 1px solid #aaa;
        background-color: rgba(0, 0, 0, 0.5);
        color: white;

        &:focus {
          outline: none;
          border-color: #f1f1f1;
        }
      }
    }
  }
`;

export default TVShows;
