import { useState } from "react";
import "./TvShows.css";
import SideBar from "../components/sidebar";
import SearchBar from "../components/searchNav";
import TvShowList from "../components/TvShowList";
import Footer from "../components/Footer";
import Header from "../components/Header";
function TvShows() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header /> // Move the Header to the top
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
      <Footer /> // Add the Footer to the bottom
    </>
  );
}

export default TvShows;
