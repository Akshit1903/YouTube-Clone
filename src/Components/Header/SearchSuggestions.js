import React from "react";
import { SEARCH_ICON_IMAGE_URL } from "../../constants/images";
import { useDispatch, useSelector } from "react-redux";
import useSearchSuggestions from "../../utils/useSearchSuggestions";
import { Link } from "react-router-dom";
import { setSearchTitle } from "../../utils/slices/searchSlice";

const SeachSuggestions = () => {
  const showSearchSuggestions = useSelector(
    (state) => state.search.showSearchSuggestions
  );
  const dispatch = useDispatch();
  const searchSuggestions = useSearchSuggestions();
  return (
    showSearchSuggestions &&
    searchSuggestions.length !== 0 &&
    Array.isArray(searchSuggestions) && (
      <button className="p-4 absolute top-14 bg-white w-4/12 border border-gray-100 shadow-lg rounded-lg">
        {searchSuggestions.map((searchSuggestion, index) => {
          return (
            <Link to={"/results?search_query=" + searchSuggestion} key={index}>
              <button
                onClick={() => {
                  dispatch(setSearchTitle(searchSuggestion));
                }}
                className="flex hover:bg-gray-300 w-full p-1 items-center"
              >
                <img
                  className="w-3 h-3"
                  src={SEARCH_ICON_IMAGE_URL}
                  alt="search-btn"
                />
                <p className="pl-3 font-semibold text-start">
                  {searchSuggestion}
                </p>
              </button>
            </Link>
          );
        })}
      </button>
    )
  );
};

export default SeachSuggestions;
