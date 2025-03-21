import React, { useState } from "react";
import SideBar from "../components/sidebar";
import SearchBar from "../components/searchNav";

const movies = [
  {
    image: require("../assets/movie1.jpg"),
    title: "Venom 1",
    description: "Short movie description here...",
  },
  {
    image: require("../assets/movie2.jpg"),
    title: "MOVIE 2",
    description: "Short movie description here...",
  },
  {
    image: require("../assets/movie3.jpg"),
    title: "MOVIE 3",
    description: "Short movie description here...",
  },
];

const Home = () => {
  const [index, setIndex] = useState(0);

  const nextMovie = () => {
    setIndex((prevIndex) => (prevIndex + 1) % movies.length);
  };

  const prevMovie = () => {
    setIndex((prevIndex) => (prevIndex - 1) % movies.length);
  };

  return (
    <div className="home-container">
      <SideBar />
      <SearchBar />
      <div className="movie-card w-[90%] h-auto md:h-[500px] object-cover">
        <img
          src={movies[index].image}
          alt={movies[index].title}
          className="movie-image"
        />
        <div className="movie-content">
          <h1>{movies[index].title}</h1>
          <p>{movies[index].description}</p>
          <div className="buttons">
            <button className="watch">▶ Watch This</button>
            <button className="favorite">More info</button>
          </div>
        </div>
        <button className="prev-btn" onClick={prevMovie}>
          ❮
        </button>
        <button className="next-btn" onClick={nextMovie}>
          ❯
        </button>
      </div>
      <div className="relative w-full">
        <div className="absolute mt-5 top-1/2 w-full border-t border-gray-600 "></div>
        <div className="relative inline-block bg-purple-600 text-white ml-20 px-6 py-2 text-lg  rounded-tl-lg rounded-br-lg mt-10 ml-4">
          Movie
        </div>
      </div>
      <div className="mt-5 white">
        <h1>New Release </h1>
      </div>
    </div>
  );
};

export default Home;
