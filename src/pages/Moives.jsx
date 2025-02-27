import { useState } from "react";
import "./Movies.css";
import SideBar from "../components/sidebar";
import SearchBar from "../components/searchNav";
import MovieList from "../components/movieList";
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
          <div className="Movies">
            {/* <h1>🎬 Movie Recommendations</h1> */}
            <MovieList />
          </div>
        </div>
      </div>
    </>
  );
}

export default Movies;
