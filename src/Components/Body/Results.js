import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { showSideBar } from "../../utils/slices/appSlice";
import useSearchResults from "../../utils/useSearchResults";
import ResultCard from "./ResultCard";

const Results = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(showSideBar());
  });
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("search_query");
  const searchResults = useSearchResults(searchQuery);
  console.log(searchResults);
  return (
    <div className="block">
      {searchResults &&
        searchResults.length !== 0 &&
        searchResults.map((searchResult) => <ResultCard {...searchResult} />)}
    </div>
  );
};

export default Results;
