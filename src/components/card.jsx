import { VscCopilot } from "react-icons/vsc";
import { VscDebugContinue } from "react-icons/vsc";
import { VscDiffAdded } from "react-icons/vsc";
import { BiAlarmAdd } from "react-icons/bi";
import { BiShareAlt } from "react-icons/bi";
import { SlHeart } from "react-icons/sl";
export default function MovieCard({
  title,
  poster,
  genre,
  language,
  duration,
  year,
  ratings,
}) {
  return (
    <>
      <main>
        <div className="card-data">
          <div className="poster">
            <img src="public/3421332.jpg" alt={title} className="card-image" />
          </div>
          <div className="movie-details">
            <div className="intro">
              <p className="title">{title}</p>
              <p className="year">{year}</p>
            </div>
            <div className="rating">
              <div className="e1">
                <span> 🟡 IMDb </span>
                <span> ⭐ {ratings.rottenTomatoes} </span>
              </div>
              <div className="e2">
                <span> 🍅 </span>
                <span>{ratings.audienceScore}</span>
              </div>
              <div className="e3">
                <span> 🍿</span>
                <span>{ratings.rottenTomatoes}</span>
              </div>
            </div>
            <div className="more-info">
              <p>Genre:{genre}</p>
              <p>Languagre:{language}</p>
              <p>Duration:{duration}</p>
            </div>
            {/* </div> */}
            <div className="buttons">
              <button className="info-btn">
                <VscCopilot /> <a href="# ">More Info</a>
              </button>
              <button className="watch-btn">
                {" "}
                <VscDebugContinue /> <a href="#">Watch Now </a>
              </button>
            </div>
          </div>
        </div>
        <div className="card-icons">
          <VscDiffAdded className="add" />
          <BiAlarmAdd className="alarm" />
          <SlHeart className="heart" />
          <BiShareAlt className="share" />
        </div>
      </main>
    </>
  );
}
