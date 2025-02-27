import { useState } from "react";
import "./TvShows.css";
import SideBar from "../components/sidebar";
import SearchBar from "../components/searchNav";
import TvShowList from "../components/TvShowList";
function TvShows() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="xx">
        <div className="side">
          <SideBar />
        </div>

        <div className="body">
          <SearchBar />
          <div className="TvShows">
            {/* <h1>🎬 TvShow Recommendations</h1> */}
            <TvShowList />
          </div>
        </div>
      </div>
    </>
  );
}

export default TvShows;
