import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_VIDEOS_API } from "../constants/apis";

const useSearchResults = (searchQuery) => {
  const [searchResults, setSearchResults] = useState([]);
  useEffect(() => {
    const fetchSearchResults = async () => {
      const data = await fetch(YOUTUBE_SEARCH_VIDEOS_API + searchQuery);
      const json = await data.json();
      setSearchResults(json.items);
    };
    fetchSearchResults();
  }, [searchQuery]);
  console.log(searchResults);
  return searchResults;
};

export default useSearchResults;
