// import { SlHome } from "react-icons/sl";
// import { LiaFortAwesome } from "react-icons/lia";
// import { LiaGhostSolid } from "react-icons/lia";
// import { BiAlarmExclamation } from "react-icons/bi";
// import { SlHeart } from "react-icons/sl";
// import { IoAddCircleOutline } from "react-icons/io5";
// import { IoNotificationsOutline } from "react-icons/io5";
// import { IoPlayCircle } from "react-icons/io5"; <IoPlayCircle />
// import { IoStarOutline } from "react-icons/io5";
// import { AiTwotoneSetting } from "react-icons/ai";
// import { BiSmile } from "react-icons/bi";
// import { FaBars } from "react-icons/fa";

// import { useState } from "react";
//  export default function SideBar()
//  {
// const [isOpen,setIsOpen]=useState(true);

//     return(
//       <>
//       <button className="toggle-btn" onClick={() => setIsOpen(!isOpen)}>
//         <FaBars />
//       </button>
//       <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
//   <div className="menue">
//     <h2>Menu</h2>
//     <ul>
//       <li><a href="#"><SlHome /> Home</a></li>
//       <li><a href="#"><LiaFortAwesome /> Movie</a></li>
//       <li><a href="#"><LiaGhostSolid /> TV Show</a></li>
//       <li><a href="#"><BiAlarmExclamation /> Coming Soon</a></li>
//     </ul>
//   </div>

//   <div className="library">
//     <h2>Library</h2>
//     <ul>
//       <li><a href="#"><SlHeart /> Playlists</a></li>
//       <li><a href="#"><IoAddCircleOutline /> Watchlist</a></li>
//       <li><a href="#"><IoNotificationsOutline /> Remind</a></li>
//       <li><a href="#"><IoStarOutline /> Your Rating</a></li>
//     </ul>
//   </div>

//   <div className="general">
//     <h2>General</h2>
//     <ul>
//       <li><a href="#"><AiTwotoneSetting /> Settings</a></li>
//       <li><a href="#"><BiSmile /> Profile</a></li>
//     </ul>
//   </div>
// </div>

//       </>

//     )
//  }
import { SlHome } from "react-icons/sl";
import { LiaFortAwesome, LiaGhostSolid } from "react-icons/lia";
import { BiAlarmExclamation, BiSmile } from "react-icons/bi";
import {
  IoAddCircleOutline,
  IoNotificationsOutline,
  IoStarOutline,
} from "react-icons/io5";
import { AiTwotoneSetting } from "react-icons/ai";
import { SlHeart } from "react-icons/sl";
import { FaBars } from "react-icons/fa";
import { SlUserFollowing } from "react-icons/sl";
import { useState } from "react";

export default function SideBar() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <button className="toggle" onClick={() => setIsOpen(!isOpen)}>
        <FaBars />
      </button>

      <div className={`SideBar ${isOpen ? "open" : "closed"}`}>
        <div className="menu">
          {isOpen && <h2>Menu</h2>}
          <ul>
            <li>
              <a href="#">
                <SlHome /> {isOpen && "Home"}
              </a>
            </li>
            <li>
              <a href="#">
                <LiaFortAwesome /> {isOpen && "Movie"}
              </a>
            </li>
            <li>
              <a href="#">
                <LiaGhostSolid /> {isOpen && "TV Show"}
              </a>
            </li>
            <li>
              <a href="#">
                <BiAlarmExclamation /> {isOpen && "Coming Soon"}
              </a>
            </li>
          </ul>
        </div>

        <div className="library">
          {isOpen && <h2>Library</h2>}
          <ul>
            <li>
              <a href="#">
                <SlHeart /> {isOpen && "Playlists"}
              </a>
            </li>
            <li>
              <a href="#">
                <IoAddCircleOutline /> {isOpen && "Watchlist"}
              </a>
            </li>
            <li>
              <a href="#">
                <IoNotificationsOutline /> {isOpen && "Remind"}
              </a>
            </li>
            <li>
              <a href="#">
                <IoStarOutline /> {isOpen && "Your Rating"}
              </a>
            </li>
          </ul>
        </div>

        <div className="general">
          {isOpen && <h2>General</h2>}
          <ul>
            <li>
              <a href="#">
                <AiTwotoneSetting /> {isOpen && "Settings"}
              </a>
            </li>
            <li>
              <a href="#">
                <SlUserFollowing /> {isOpen && "Profile"}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
