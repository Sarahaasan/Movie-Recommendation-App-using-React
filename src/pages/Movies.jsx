import { useState } from "react";
import "./Movies.css";
import SideBar from "../components/sidebar";
import SearchBar from "../components/searchNav";
import MovieList from "../components/movieList";
import Header from "../components/Header";
import Footer from "../components/Footer";
function Movies() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="xx">
        <div className="side">
          <SideBar />
        </div>

        <div className="body">
          <SearchBar />
          <Header />
          <div className="Movies">
            {/* <h1>🎬 Movie Recommendations</h1> */}
            <MovieList />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Movies;
