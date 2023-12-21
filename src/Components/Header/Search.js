import React from "react";
import SearchSuggestions from "./SearchSuggestions";
import {
  MIC_ICON_IMAGE_URL,
  SEARCH_ICON_IMAGE_URL,
} from "../../constants/images";
import { useDispatch, useSelector } from "react-redux";
import {
  setSearchTitle,
  turnOffSearchSuggestions,
  turnOnSearchSuggestions,
} from "../../utils/slices/searchSlice";
import { Link } from "react-router-dom";

const Search = () => {
  const dispatch = useDispatch();
  const searchTitle = useSelector((store) => store.search.searchTitle);
  return (
    <div>
      <div className="flex justify-stretch">
        <input
          className="border border-gray-400 rounded-l-full p-2 shadow my-auto w-10/12 pl-5"
          type="text"
          placeholder="Search"
          onFocus={() => dispatch(turnOnSearchSuggestions())}
          onBlur={() =>
            setTimeout(() => dispatch(turnOffSearchSuggestions()), 300)
          }
          value={searchTitle}
          onChange={(e) => {
            dispatch(setSearchTitle(e.target.value));
          }}
        />
        <SearchSuggestions />
        <Link
          to={"/results?search_query=" + searchTitle}
          className="border border-gray-400 border-l-0 bg-slate-200 rounded-r-full p-3 my-auto"
        >
          <img
            className="w-4"
            src={SEARCH_ICON_IMAGE_URL}
            alt="search-button"
          />
        </Link>
        <button className="mx-5 ">
          <img
            className="w-10  bg-slate-200 rounded-full p-2"
            src={MIC_ICON_IMAGE_URL}
            alt="mic-button"
          />
        </button>
      </div>
    </div>
  );
};

export default Search;
