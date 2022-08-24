import { FaSearch } from "react-icons/fa";
import { SearchBarWrapper, SearchBarContent } from "./SearchBar.styles";

const SearchBar = () => {
  return (
    <SearchBarWrapper>
      <SearchBarContent>
        <FaSearch style={{ position: "absolute", right: 0, bottom: "20px" }} />
        <input type="search" placeholder="Search" />
        <div className="underline"></div>
      </SearchBarContent>
    </SearchBarWrapper>
  );
};

export default SearchBar;
