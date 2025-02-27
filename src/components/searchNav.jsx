import { VscSearch } from "react-icons/vsc";
export default function SearchBar() {
  return (
    <>
      <div className="nav">
        <div className="search-box">
          <VscSearch className="search-icon" />
          <input
            type="search"
            name="search"
            id="search"
            placeholder="Search for Movies, TV Shows..."
          />
        </div>
      </div>
    </>
  );
}
